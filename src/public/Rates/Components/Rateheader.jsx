
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter, Check, X } from "lucide-react";
import axiosInstance from "../../../utils/axiosinstance";
import CustomerAuthContext from "../../../context/customer/CustomerAuthContext";
import RateTable from "./RateTable";
import useRateTranslations from "./hook/useRateTranslations";
import { allTextTranslations, uiText } from "./DummyTranslateData/uiText";
import { statusTranslations } from "./DummyTranslateData/tableheaderdummydata";
import { LanguageContext } from "../../../context/LanguageContext";

const Ratepages = () => {
  const { customerDetails } = useContext(CustomerAuthContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = useState();
  const [activeTab, setActiveTab] = useState("cc");
  const [qualityFilter, setQualityFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [translateSelectedCountry, setTranslateSelectedCountry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedRates, setSelectedRates] = useState({});
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const [rates, setRates] = useState([]);
  const [clirates, setCliRates] = useState([]);
  const [specialRates, setSpecialRates] = useState([]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [displayRates, setDisplayRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // dummytranslatedata
  const texts = uiText[selectedLang || "en"];
  const status = statusTranslations[selectedLang || "en"];

  const itemsPerPage = 10;

useEffect(() => {
  if (language && language !== selectedLang) {
    setSelectedLang(language);
  }
}, [language, selectedLang]);

  // --- fetch rates from backend ---
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const [CCResponse, CLIResponse] = await Promise.all([
          axiosInstance.get("api/admin/ccrates"),
          axiosInstance.get("api/admin/clirates"),
        ]);

        if (CCResponse.status !== 200 || CLIResponse.status !== 200)
          throw new Error("Failed to fetch rates");

        const ccratesData = CCResponse.data.ccrates || [];
        const cliratesData = CLIResponse.data.clirates || [];
        const specialRatesData = ccratesData.filter((rate) => rate.specialRate === 1);

        setRates(ccratesData);
        setCliRates(cliratesData);
        setSpecialRates(specialRatesData);
        setFilteredRates(ccratesData);
        setDisplayRates(ccratesData);
      } catch (err) {
        console.error("Error fetching rates:", err);
        setError("Error fetching rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  // --- helper: get filtered country list ---
  const getFilteredCountries = useCallback(() => {
    let currentData = [];
    if (activeTab === "cc") currentData = rates;
    else if (activeTab === "cli") currentData = clirates;
    else if (activeTab === "special") currentData = specialRates;

    currentData = currentData.filter(
      (rate) => rate.status?.toLowerCase() !== "archive"
    );

    return Array.from(new Set(currentData.map((rate) => rate.country))).sort();
  }, [activeTab, rates, clirates, specialRates]);

  // --- use translation hook ---
  const {
    countryMap,
    displayRates: translatedDisplayRates,
    translating,
  } = useRateTranslations(
    selectedLang,
    filteredRates,
    activeTab,
    currentPage,
    getFilteredCountries,
    itemsPerPage
  );

  const handleCountrySelect = (original, translated, allTranslated) => {
    if (translated === allTranslated) {
      setSelectedCountry("All");
      setTranslateSelectedCountry(allTranslated);
      setDisplayRates(filteredRates);
      return;
    }

    setSelectedCountry(original);
    setTranslateSelectedCountry(translated);

    const filtered = filteredRates.filter((r) => r.country === original);
    setDisplayRates(filtered);
  };

  // --- filter rates by tab, country, and quality ---
  useEffect(() => {
    setFilteredRates([]);
    let currentData = [];
    if (activeTab === "cc") currentData = rates;
    else if (activeTab === "cli") currentData = clirates;
    else if (activeTab === "special") currentData = specialRates;

    // Apply status filter
    let updatedRates = [...currentData];

    if (qualityFilter && qualityFilter !== "all") {
      updatedRates = updatedRates.filter(
        (rate) => rate.status?.toLowerCase() === qualityFilter
      );
    } else {
      updatedRates = updatedRates.filter(
        (rate) => rate.status?.toLowerCase() !== "archive"
      );
    }

    // Apply country filter
    if (selectedCountry !== "All") {
      updatedRates = updatedRates.filter(
        (rate) => rate.country === selectedCountry
      );
    }

    setFilteredRates(updatedRates);
    setCurrentPage(1);
  }, [activeTab, selectedCountry, qualityFilter, rates, clirates, specialRates]);

  // --- show selected only ---
  useEffect(() => {
    if (showSelectedOnly && selectedSection) {
      setDisplayRates(
        filteredRates.filter((rate) =>
          selectedRates[selectedSection]?.includes(rate._id)
        )
      );
    } else {
      setDisplayRates(filteredRates);
    }
  }, [showSelectedOnly, filteredRates, selectedRates, selectedSection]);

  // --- pagination ---
  const totalPages = Math.ceil(displayRates.length / itemsPerPage);
  const paginatedRates = (translating ? [] : translatedDisplayRates).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- selection functions ---
  const handleRateSelection = (rateId) => {
    if (!selectedSection) setSelectedSection(activeTab);

    const currentSectionRates = selectedRates[selectedSection] || [];
    if (currentSectionRates.includes(rateId)) {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: currentSectionRates.filter((id) => id !== rateId),
      });
    } else {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: [...currentSectionRates, rateId],
      });
    }
  };

  const handleSelectAll = () => {
    if (!selectedSection) setSelectedSection(activeTab);

    const currentSectionRates = selectedRates[selectedSection] || [];

    if (currentSectionRates.length === paginatedRates.length) {
      setSelectedRates({ ...selectedRates, [selectedSection]: [] });
    } else {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: paginatedRates.map((rate) => rate._id),
      });
    }
  };

  const handleSubmitRates = async () => {
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) {
      setError("Please login to view rates");
      return;
    }

    if (!selectedSection || !customerDetails.id) {
      alert("User info unavailable. Please re-login.");
      return;
    }

    try {
      const selectedRateIds = selectedRates[selectedSection] || [];
      if (selectedRateIds.length === 0) {
        alert("Please select at least one rate");
        return;
      }

      for (const rateId of selectedRateIds) {
        await axiosInstance.put(`api/myrate/${customerDetails.id}`, {
          rate: selectedSection.toUpperCase(),
          rateId,
        });
      }

      alert("Rate(s) added successfully");
      setSelectedRates({ ...selectedRates, [selectedSection]: [] });
      setSelectionMode(false);
      setShowSelectedOnly(false);
      setSelectedSection(null);
    } catch (error) {
      console.error("Error submitting rates:", error);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        navigate("/customer/login");
      } else {
        alert("Error submitting rates.");
      }
    }
  };

  const handleCancelSelection = () => {
    setSelectionMode(false);
    setShowSelectedOnly(false);
    if (selectedSection) {
      setSelectedRates({ ...selectedRates, [selectedSection]: [] });
    }
    setSelectedSection(null);
  };

  const getSelectedCount = () =>
    selectedSection ? selectedRates[selectedSection]?.length || 0 : 0;

  const handleTabChange = (tab) => {
    if (selectionMode && selectedSection && selectedSection !== tab) {
      alert(
        "You can only select rates from one section at a time. Submit or cancel current selection first."
      );
      return;
    }
    setActiveTab(tab);
  };

  const renderPagination = () => {
    const visiblePages = 7;
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, totalPages);

    return (
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          <ChevronLeft size={16} />
        </button>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
          (page) => (
            <button
              key={page}
              className={`px-3 py-1 mx-1 rounded ${currentPage === page
                ? "bg-[#0a2463] text-white"
                : "bg-gray-200 text-gray-700"
                }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  const CountryDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const isCountryActive = (country) => {
      let currentData = [];
      if (activeTab === "cc") currentData = rates;
      else if (activeTab === "cli") currentData = clirates;
      else if (activeTab === "special") currentData = specialRates;

      return currentData.some(
        (rate) =>
          rate.country === country && rate.status?.toLowerCase() === "active"
      );
    };

    const allTranslated = allTextTranslations[selectedLang] || allTextTranslations.en;
    const options = [allTranslated, ...Object.values(countryMap)];


    return (
      <div className="relative w-full">
        <div
          className="border rounded px-3 py-2 flex items-center justify-between cursor-pointer bg-white"
          style={{ height: "41px" }}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex items-center">
            {selectedCountry === "All" ? (
              <span>{allTextTranslations[selectedLang] || allTextTranslations.en} Countries</span>
            ) : (
              <>
                <div
                  className="w-2 h-2 rounded-full mr-2"
                  style={{
                    backgroundColor: isCountryActive(selectedCountry)
                      ? "#10B981"
                      : "#EF4444",
                  }}
                />
                {translateSelectedCountry}
              </>
            )}
          </div>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showDropdown ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
            {options.map((translated) => {
              // Find the original country by translated name
              const original = Object.keys(countryMap).find(
                (key) => countryMap[key] === translated
              );

              return (
                <div
                  key={translated}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => {
                    handleCountrySelect(original, translated, allTranslated);
                    setShowDropdown(false);
                  }}
                >
                  {translated !== "All" && (
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{
                        backgroundColor: isCountryActive(original || translated)
                          ? "#10B981"
                          : "#EF4444",
                      }}
                    />
                  )}
                  {translated}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div data-no-translate className="p-6">
      <title>Rates Page</title>

      {/* Action buttons */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{texts.rateManagement}</h2>
        <div className="flex space-x-2">
          {!selectionMode ? (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
              onClick={() => {
                const authToken = sessionStorage.getItem("authToken");
                if (!authToken) {
                  alert("Please login to select rates");
                  navigate("/customer/login");
                  return;
                }
                setSelectionMode(true);
                setSelectedSection(activeTab);
              }}
            >
              <Check size={16} className="mr-2" />
              {texts.selectRates}
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded flex items-center"
                onClick={() => setShowSelectedOnly(!showSelectedOnly)}
                disabled={getSelectedCount() === 0}
              >
                <Filter size={16} className="mr-2" />
                {showSelectedOnly ? texts.showAll : texts.showSelected}
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
                onClick={handleSubmitRates}
                disabled={getSelectedCount() === 0}
              >
                {texts.submitMyRates}
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded flex items-center"
                onClick={handleCancelSelection}
              >
                <X size={16} className="mr-2" />
                {texts.cancel}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-4">
          {["cc", "cli", "special"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${activeTab === tab
                ? "bg-[#0a2463] text-white"
                : "bg-gray-200 text-gray-700"
                }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab === "cc"
                ? texts.ccRoutes
                : tab === "cli"
                  ? texts.cliRoutes
                  : texts.specialRates}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex space-x-4 items-center">
          <div className="w-60">
            <CountryDropdown />
          </div>
          <select
            className="pl-4 pr-4 py-2 border rounded"
            value={qualityFilter}
            onChange={(e) => setQualityFilter(e.target.value)}
          >
            {Object.entries(status).map(([key, translated]) => (
              <option key={key} value={key.toLowerCase()}>
                {translated}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* Selection info */}
      {selectionMode && (
        <div className="mb-4 p-3 bg-blue-100 rounded">
          <p className="text-blue-800">
            {selectedSection &&
              `Selecting from ${selectedSection.toUpperCase()} section. `}
            {getSelectedCount()} rate(s) selected.{" "}
            {showSelectedOnly
              ? "Showing only selected rates."
              : "Showing all rates."}
          </p>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : translating ? (
          <div className="text-center py-6 text-blue-600 font-medium"> Translating table, please wait... </div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <RateTable
            paginatedRates={paginatedRates}
            activeTab={activeTab}
            selectionMode={selectionMode}
            selectedRates={selectedRates}
            selectedSection={selectedSection}
            handleRateSelection={handleRateSelection}
            handleSelectAll={handleSelectAll}
            getSelectedCount={getSelectedCount}
            selectedLanguage={selectedLang}
          />
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default Ratepages;
