import { useState, useEffect } from "react";
import axios from "axios";
import { translateCountry } from "../../../../utils/countryTranslator";

const useRateTranslations = (
  selectedLang,
  filteredRates,
  activeTab,
  currentPage,
  getFilteredCountries,
  itemsPerPage
) => {
  const [countryMap, setCountryMap] = useState({});
  const [country, setCountry] = useState([]);
  const [displayRates, setDisplayRates] = useState([]);
  const [translating, setTranslating] = useState(true);

  const API_URL = "http://127.0.0.1:5008/translate/rate_table";

  // 🔹 Update country list
useEffect(() => {
  const countries = getFilteredCountries();
  setCountry([...countries]);
}, [activeTab, filteredRates, getFilteredCountries]);

  // 🔹 Clear displayRates if no rates
  useEffect(() => {
    if (!filteredRates?.length) {
      setDisplayRates([]);
    }
  }, [activeTab, filteredRates]);

  // 🔹 Translate quality descriptions using backend
  useEffect(() => {
    let active = true;

    const translateTable = async () => {
      if (!filteredRates?.length) {
        if (active) setDisplayRates([]);
        return;
      }

      if (selectedLang === "en") {
        if (active) setDisplayRates(filteredRates);
        if (active) setTranslating(false);
        return;
      }

      setTranslating(true);

      try {
const visibleRates = filteredRates.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

// 🧩 Replace short forms (case-insensitive)
const expandShortTerms = (text) => {
  if (!text) return text;
  let t = text;

  // Replace full words only to avoid accidental substring changes
  t = t.replace(/\bCC\b/gi, "Call Center");
  t = t.replace(/\bIVR\b/gi, "Interactive Voice Response");
  t = t.replace(/\bEU\b/gi, "European Union");
  t = t.replace(/\bMobile\b/gi, "Mobile Network");
  return t.trim();
};

// 🧩 Normalize + expand all rate descriptions
const visibleWithExpanded = visibleRates.map((r) => ({
  ...r,
  qualityDescription: expandShortTerms(r.qualityDescription),
}));

// Extract descriptions for translation
const descriptions = visibleWithExpanded
  .filter((r) => r.qualityDescription)
  .map((r) => r.qualityDescription);

if (descriptions.length === 0) {
  if (active) setDisplayRates(filteredRates);
  return;
}

        // 🔹 Send to backend for translation
        const { data } = await axios.post(API_URL, {
          lang: selectedLang,
          descriptions,
        });

        const translatedTexts = data.translated || [];

        // 🔹 Merge translations into visible rates
        const translatedRates = visibleRates.map((r, i) => ({
          ...r,
          qualityDescription:
            translatedTexts[i] || r.qualityDescription,
        }));

        const updatedAll = [...filteredRates];
        const startIndex = (currentPage - 1) * itemsPerPage;
        updatedAll.splice(startIndex, translatedRates.length, ...translatedRates);

        if (active) setDisplayRates(updatedAll);
      } catch (err) {
        console.error("Translation API error:", err);
      } finally {
        if (active) setTranslating(false);
      }
    };

    translateTable();
    return () => (active = false);
  }, [selectedLang, currentPage, filteredRates, itemsPerPage]);

  // 🔹 Country translation
  useEffect(() => {
    if (!country?.length) return;

    const translatedList = country.map((c) =>
      translateCountry(c, selectedLang)
    );

    const map = Object.fromEntries(country.map((c, i) => [c, translatedList[i]]));
    setCountryMap(map);
  }, [selectedLang, country]);

  return {
    countryMap,
    displayRates,
    translating,
  };
};

export default useRateTranslations;
