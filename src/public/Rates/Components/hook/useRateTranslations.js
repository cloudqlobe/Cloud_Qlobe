import { useState, useEffect } from "react";
import axios from "axios";

const useRateTranslations = (
  selectedLang,
  filteredRates,
  activeTab,
  currentPage,
  getFilteredCountries,
  itemsPerPage
) => {
  const [translatedCountries, setTranslatedCountries] = useState([]);
  const [countryMap, setCountryMap] = useState({});
  const [country, setCountry] = useState([]);
  const [displayRates, setDisplayRates] = useState([]);
  const [translating, setTranslating] = useState(false);

  // ✅ Update country list when tab or filter changes
  useEffect(() => {
    const countries = getFilteredCountries();
    setCountry([...countries]);
  }, [activeTab, filteredRates]);

  // ✅ Clear displayRates immediately when filteredRates is empty or tab changes
  useEffect(() => {
    if (!filteredRates?.length) {
      setDisplayRates([]); // clear instantly
    }
  }, [activeTab, filteredRates]);

  // 🔹 Translate table rows
  useEffect(() => {
    const translateTable = async () => {
      if (!filteredRates?.length) {
        setDisplayRates([]); // still ensure cleared
        return;
      }

      if (selectedLang === "en") {
        setDisplayRates(filteredRates);
        return;
      }

      try {
        setTranslating(true);

        const visibleRates = filteredRates.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

        const textsToTranslate = visibleRates.map(
          (r) =>
            `${r.country} | ${r.qualityDescription || ""} | ${r.profile || ""}`
        );

        const rowResponse = await axios.post("http://localhost:5008/translate", {
          page: "rate_table",
          lang: selectedLang,
          texts: textsToTranslate,
        });

        const translatedTexts = rowResponse.data.translatedTexts;
        const translatedRates = visibleRates.map((r, i) => {
          const parts = translatedTexts[i]?.split(/\s*\|\s*/) || [];
          return {
            ...r,
            country: parts[0] || r.country,
            qualityDescription: parts[1] || r.qualityDescription,
            profile: parts[2] || r.profile,
            status: parts[3] || r.status,
          };
        });

        const updatedAll = [...filteredRates];
        const startIndex = (currentPage - 1) * itemsPerPage;
        updatedAll.splice(startIndex, translatedRates.length, ...translatedRates);
        setDisplayRates(updatedAll);
      } catch (err) {
        console.error("Table translation error:", err);
      } finally {
        setTranslating(false);
      }
    };

    translateTable();
  }, [selectedLang, currentPage, filteredRates]);

  // 🔹 Translate Country Dropdown
  useEffect(() => {
    if (!country?.length) return;

    const translateCountries = async () => {
      try {
        setTranslating(true);

        if (selectedLang === "en") {
          setTranslatedCountries(country);
          setCountryMap(Object.fromEntries(country.map((c) => [c, c])));
          return;
        }

        const response = await axios.post("http://localhost:5008/translate", {
          page: "rate_table",
          lang: selectedLang,
          texts: country,
        });

        const translatedList = response.data.translatedTexts || country;
        const map = Object.fromEntries(country.map((c, i) => [c, translatedList[i]]));

        setTranslatedCountries(translatedList);
        setCountryMap(map);
      } catch (err) {
        console.error("❌ Country translation error:", err);
      } finally {
        setTranslating(false);
      }
    };

    translateCountries();
  }, [selectedLang, country]);

  return {
    translatedCountries,
    countryMap,
    displayRates,
    translating,
  };
};

export default useRateTranslations;
