// utils/countryTranslator.js
import countries from "i18n-iso-countries";

// Import languages you want to support
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";
import frLocale from "i18n-iso-countries/langs/fr.json";
import deLocale from "i18n-iso-countries/langs/de.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import ptLocale from "i18n-iso-countries/langs/pt.json";
import ruLocale from "i18n-iso-countries/langs/ru.json";
import zhLocale from "i18n-iso-countries/langs/zh.json";
import jaLocale from "i18n-iso-countries/langs/ja.json";
import arLocale from "i18n-iso-countries/langs/ar.json";
import trLocale from "i18n-iso-countries/langs/tr.json";
import koLocale from "i18n-iso-countries/langs/ko.json";

// Register all locales
countries.registerLocale(enLocale);
countries.registerLocale(esLocale);
countries.registerLocale(frLocale);
countries.registerLocale(deLocale);
countries.registerLocale(itLocale);
countries.registerLocale(ptLocale);
countries.registerLocale(ruLocale);
countries.registerLocale(zhLocale);
countries.registerLocale(jaLocale);
countries.registerLocale(arLocale);
countries.registerLocale(trLocale);
countries.registerLocale(koLocale);

/**
 * Translate country name dynamically
 * @param {string} countryName - name returned by API
 * @param {string} lang - language code (en, es, fr, etc.)
 * @returns {string} translated country name or fallback
 */

// Example mapping for tricky countries
const countryNameMap = {
  "United States": "US",
  "Russia": "RU",
  "Turkey": "TR",
  "China": "CN",
};

export const translateCountry = (countryName, lang = "en") => {
  if (!countryName) return "";

  // If language is English, return the original country name
  if (lang === "en") return countryName;

  // Normalize Chinese
  const normalizedLang = lang.startsWith("zh") ? "zh" : lang;

  // Map tricky names to alpha-2 codes
  const countryCode = countryNameMap[countryName]
    ? countryNameMap[countryName]
    : Object.keys(countries.getAlpha2Codes()).find(
        (code) =>
          countries.getName(code, "en")?.toLowerCase() === countryName.toLowerCase()
      );

  if (!countryCode) return countryName;

  return countries.getName(countryCode, normalizedLang) || countryName;
};




