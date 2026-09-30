const BASE = "https://generativelanguage.googleapis.com/v1beta";

const KEY = (customKey) => 
  customKey || 
  process.env.GEMINI_API_KEY || 
  process.env.VITE_GEMINI_API_KEY || 
  'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

const PREFERRED_ORDER = [
  process.env.GEMINI_MODEL,
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-flash-latest",
].filter(Boolean);

let cache = { at: 0, models: null };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function availableModels(apiKey) {
  const key = KEY(apiKey);
  if (cache.models && Date.now() - cache.at < 10 * 60_000) return cache.models;
  const r = await fetch(`${BASE}/models?pageSize=200`, {
    headers: { "x-goog-api-key": key },
  });
  const d = await r.json();
  if (!r.ok) throw { errors: [{ status: r.status, message: d.error?.message || "Failed to list models" }] };
  const names = (d.models || [])
    .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
    .map((m) => m.name.replace("models/", ""));
  cache = { at: Date.now(), models: names };
  return names;
}

export async function modelChain(apiKey) {
  let avail = [];
  try {
    avail = await availableModels(apiKey);
  } catch (err) {
    console.warn("availableModels error, falling back to preferred list:", err);
  }

  if (!avail.length) {
    return [...new Set(PREFERRED_ORDER)];
  }

  const skip = /image|tts|live|audio|embed|robotics|computer/i;
  const orderedPreferred = PREFERRED_ORDER.filter((n) => avail.includes(n));
  const otherFlash = avail.filter(
    (n) => /flash/i.test(n) && !skip.test(n) && !PREFERRED_ORDER.includes(n)
  );

  const chain = [...new Set([...orderedPreferred, ...otherFlash])];
  return chain.length ? chain : [...new Set(PREFERRED_ORDER)];
}

export async function callGemini(body, timeoutMs = 9000, customApiKey = null) {
  const apiKey = KEY(customApiKey);
  if (!apiKey) {
    const err = { model: "none", status: 401, message: "Missing GEMINI_API_KEY" };
    throw { errors: [err] };
  }

  const chain = await modelChain(customApiKey);
  const errors = [];

  const payload = { ...body };
  if (typeof payload.systemInstruction === "string") {
    payload.systemInstruction = { parts: [{ text: payload.systemInstruction }] };
  }

  for (let pass = 0; pass < 2; pass++) {
    for (const model of chain) {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), timeoutMs);
      try {
        const r = await fetch(`${BASE}/models/${model}:generateContent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify(payload),
          signal: ctl.signal,
        });

        const d = await r.json();
        if (r.ok) {
          return { data: d, model };
        }

        const msg = d.error?.message || `HTTP ${r.status}`;
        errors.push({ model, status: r.status, message: msg });

        // Stops immediately on 401/403
        if ([401, 403].includes(r.status) || /API key/i.test(msg)) {
          throw { errors };
        }
        // Moves to the next model on any 404, 429, 500, 503, etc.
      } catch (e) {
        if (e.errors) throw e;
        errors.push({ model, status: 504, message: "Timeout or network error" });
      } finally {
        clearTimeout(timer);
      }
    }

    // pauses 1.2s and runs the chain a second time
    if (pass === 0) {
      await sleep(1200);
    }
  }

  throw { errors };
}

export function friendly(errors) {
  if (!errors || !Array.isArray(errors) || errors.length === 0) {
    return { code: "BUSY", message: "Google AI is busy right now. Tap Retry in a few seconds." };
  }
  const statuses = errors.map((e) => e.status);
  if (statuses.some((s) => s === 401 || s === 403)) {
    return { code: "KEY", message: "API key problem. Check GEMINI_API_KEY in Vercel and redeploy." };
  }
  if (statuses.length > 0 && statuses.every((s) => s === 404)) {
    return { code: "MODEL", message: "No working model found for this key." };
  }
  if (statuses.includes(429)) {
    return { code: "LIMIT", message: "Free-tier limit reached. Wait a minute and retry." };
  }
  return { code: "BUSY", message: "Google AI is busy right now. Tap Retry in a few seconds." };
}

export { PREFERRED_ORDER as PREFERRED, BASE };
