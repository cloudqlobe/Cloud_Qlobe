import { useState, useEffect } from "react";
import { rateQualityDummyTranslations } from "../DummyTranslateData/rateQualityDescription";
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

  // 🔹 Update country list when tab/filter changes
  useEffect(() => {
    const countries = getFilteredCountries();
    setCountry([...countries]);
  }, [activeTab, filteredRates]);

  // 🔹 Clear displayRates if no rates
  useEffect(() => {
    if (!filteredRates?.length) {
      setDisplayRates([]);
    }
  }, [activeTab, filteredRates]);

  // 🔹 Translate rate quality description
  useEffect(() => {
    let active = true;

    const translateTable = async () => {
      if (!filteredRates?.length) {
        if (active) setDisplayRates([]);
        return;
      }

      if (selectedLang === "en") {
        if (active) setDisplayRates(filteredRates);
        return;
      }

      setTranslating(true);

      try {
        const visibleRates = filteredRates.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

        const translatedRates = visibleRates.map((r) => {
          if (!r.qualityDescription) return r;

          // normalize spaces
          const key = r.qualityDescription.trim().replace(/\s+/g, " ");
          const translation = rateQualityDummyTranslations[key];

          if (!translation) console.warn("Missing translation for:", key);

          const translatedText = translation?.[selectedLang] || r.qualityDescription;

          return {
            ...r,
            qualityDescription: translatedText,
          };
        });

        // merge translated rates into full filteredRates array
        const updatedAll = [...filteredRates];
        const startIndex = (currentPage - 1) * itemsPerPage;
        updatedAll.splice(startIndex, translatedRates.length, ...translatedRates);

        if (active) setDisplayRates(updatedAll);
      } catch (err) {
        console.error("Dummy translation error:", err);
      } finally {
        if (active) setTranslating(false);
      }
    };

    translateTable();

    return () => {
      active = false;
    };
  }, [selectedLang, currentPage, filteredRates]);

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
