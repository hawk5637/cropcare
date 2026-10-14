// Botanical Specimen Image Quality Pre-Flight Checker
// Performs client-side sharpness (Laplacian variance) and luminance/exposure analysis on HTMLCanvas
// Warns the farmer before sending the request to the Pl@ntNet API.

export async function checkImageQuality(imageSource) {
  return new Promise((resolve) => {
    if (!imageSource) {
      return resolve({
        isValid: true,
        variance: 100,
        avgLuminance: 128,
        isBlurry: false,
        isTooDark: false,
        isTooBright: false,
        warnings: []
      });
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        // Normalize resolution for fast, consistent Laplacian analysis (max 320px width)
        const maxDim = 320;
        let width = img.naturalWidth || img.width || 320;
        let height = img.naturalHeight || img.height || 240;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(width, 10);
        canvas.height = Math.max(height, 10);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return resolve({ isValid: true, variance: 100, avgLuminance: 128, warnings: [] });
        }

        ctx.drawImage(img, 0, 0, width, height);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        const totalPixels = width * height;

        // 1. Grayscale luminance conversion (ITU-R BT.601 standard)
        let sumLuminance = 0;
        const gray = new Float32Array(totalPixels);

        for (let i = 0; i < totalPixels; i++) {
          const r = data[i * 4];
          const g = data[i * 4 + 1];
          const b = data[i * 4 + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          gray[i] = lum;
          sumLuminance += lum;
        }

        const avgLuminance = sumLuminance / (totalPixels || 1);

        // 2. Discrete 3x3 Laplacian Convolution for Edge Variance
        // Laplacian Kernel:
        //  [ 0,  1,  0 ]
        //  [ 1, -4,  1 ]
        //  [ 0,  1,  0 ]
        let laplacianSum = 0;
        let laplacianSqSum = 0;
        let edgePixels = 0;

        for (let y = 1; y < height - 1; y++) {
          const rowOffset = y * width;
          for (let x = 1; x < width - 1; x++) {
            const idx = rowOffset + x;
            const lapVal =
              gray[idx - width] +
              gray[idx + width] +
              gray[idx - 1] +
              gray[idx + 1] -
              4 * gray[idx];

            laplacianSum += lapVal;
            laplacianSqSum += lapVal * lapVal;
            edgePixels++;
          }
        }

        const count = edgePixels || 1;
        const meanLaplacian = laplacianSum / count;
        const variance = (laplacianSqSum / count) - (meanLaplacian * meanLaplacian);

        // Quality Thresholds
        // Laplacian variance < 45 indicates a blurry or out-of-focus image
        const isBlurry = variance < 45;
        // Average luminance < 38 indicates underexposed/dark image
        const isTooDark = avgLuminance < 38;
        // Average luminance > 225 indicates washed-out / extreme glare image
        const isTooBright = avgLuminance > 225;

        const warnings = [];
        if (isBlurry) {
          warnings.push('Photo appears blurry or out of focus. Hold camera steady and focus on leaf veins/margins for higher accuracy.');
        }
        if (isTooDark) {
          warnings.push('Photo is too dark or in deep shadow. Move to daylight or illuminate the specimen.');
        }
        if (isTooBright) {
          warnings.push('Photo is washed out / overexposed. Avoid direct flash glare on the leaf surface.');
        }

        resolve({
          isValid: warnings.length === 0,
          variance: Math.round(variance),
          avgLuminance: Math.round(avgLuminance),
          isBlurry,
          isTooDark,
          isTooBright,
          warnings
        });
      } catch (err) {
        console.warn('[imageQuality] Quality check skipped:', err);
        resolve({ isValid: true, variance: 100, avgLuminance: 128, warnings: [] });
      }
    };

    img.onerror = () => {
      resolve({ isValid: true, variance: 100, avgLuminance: 128, warnings: [] });
    };

    img.src = typeof imageSource === 'string' ? imageSource : URL.createObjectURL(imageSource);
  });
}
