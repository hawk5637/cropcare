import { translations } from './translations.js';

export { translations };

export const SUPPORTED_LOCALES = [
  { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', native: 'हिंदी' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳', native: 'தமிழ்' },
  { code: 'fr', name: 'French', flag: '🇫🇷', native: 'Français' }
];

/**
 * Strict Translation Function:
 * Resolves a dot-separated key (e.g. 'roles.farmer.title') for a given language.
 * Throws an explicit error if the key is missing in the target locale (strict rule: no silent English fallback).
 */
export function t(key, lang = 'en', params = {}) {
  const localeDict = translations[lang];
  if (!localeDict) {
    throw new Error(`[i18n Error] Unsupported locale: "${lang}". Supported: en, hi, ta, fr.`);
  }

  const parts = key.split('.');
  let current = localeDict;

  for (const part of parts) {
    if (current === undefined || current === null || typeof current !== 'object' || !(part in current)) {
      throw new Error(`[i18n Error] Missing translation key: "${key}" for locale "${lang}". All UI strings must be localized.`);
    }
    current = current[part];
  }

  if (typeof current !== 'string') {
    throw new Error(`[i18n Error] Translation key: "${key}" does not resolve to a string in locale "${lang}".`);
  }

  // Interpolate {paramName}
  let result = current;
  for (const [pKey, pVal] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
  }

  return result;
}

/**
 * Validates that all keys in English exist in Hindi, Tamil, and French.
 */
export function validateAllTranslations() {
  function getKeys(obj, prefix = '') {
    let keys = [];
    for (const [k, v] of Object.entries(obj)) {
      const full = prefix ? `${prefix}.${k}` : k;
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        keys = keys.concat(getKeys(v, full));
      } else {
        keys.push(full);
      }
    }
    return keys;
  }

  const enKeys = getKeys(translations.en);
  const otherLocales = ['hi', 'ta', 'fr'];
  const missingByLocale = {};

  for (const loc of otherLocales) {
    const locDict = translations[loc];
    if (!locDict) {
      throw new Error(`Locale "${loc}" dictionary is completely missing!`);
    }
    const missing = [];
    for (const k of enKeys) {
      const parts = k.split('.');
      let cur = locDict;
      let ok = true;
      for (const p of parts) {
        if (!cur || typeof cur !== 'object' || !(p in cur)) {
          ok = false;
          break;
        }
        cur = cur[p];
      }
      if (!ok) missing.push(k);
    }
    if (missing.length > 0) {
      missingByLocale[loc] = missing;
    }
  }

  if (Object.keys(missingByLocale).length > 0) {
    const report = JSON.stringify(missingByLocale, null, 2);
    throw new Error(`[i18n Validation Failed] Missing translation keys in locales:\n${report}`);
  }

  return true;
}

// Run validation immediately on module load so build/import will fail if any key is missing
validateAllTranslations();
