import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter, Check, X } from "lucide-react";
import axiosInstance from "../../../../utils/axiosinstance";
import CustomerAuthContext from "../../../../context/customer/CustomerAuthContext";

const Ratepages = () => {
    const { customerDetails } = useContext(CustomerAuthContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("cc");
  const [qualityFilter, setQualityFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedRates, setSelectedRates] = useState({});
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
console.log("selectedSection",selectedSection);

  const [rates, setRates] = useState([]);
  const [clirates, setCliRates] = useState([]);
  const [specialRates, setSpecialRates] = useState([]);
  const [filteredRates, setFilteredRates] = useState([]);
  const [displayRates, setDisplayRates] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const CCResponse = await axiosInstance.get("api/admin/ccrates");
        const CLIResponse = await axiosInstance.get("api/admin/clirates");

        if (CCResponse.status !== 200 || CLIResponse.status !== 200) {
          throw new Error("Failed to fetch rates");
        }

        const ccratesData = CCResponse.data.ccrates || [];
        const cliratesData = CLIResponse.data.clirates || [];

        const specialRatesData = ccratesData.filter((rate) => rate.specialRate === 1);

        setRates(ccratesData);
        setCliRates(cliratesData);
        setSpecialRates(specialRatesData);
        setFilteredRates(ccratesData);
        setDisplayRates(ccratesData);

        const uniqueCountries = Array.from(new Set(ccratesData.map((rate) => rate.country)));
        setCountryOptions(["All", ...uniqueCountries]);
      } catch (err) {
        console.error("Error fetching rates:", err);
        setError("Error fetching rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  useEffect(() => {
    let currentData = [];
    if (activeTab === "cc") {
      currentData = rates;
    } else if (activeTab === "cli") {
      currentData = clirates;
    } else if (activeTab === "special") {
      currentData = specialRates;
    }

    const uniqueCountries = Array.from(new Set(currentData.map((rate) => rate.country)));
    setCountryOptions(["All", ...uniqueCountries]);

    let updatedRates = [...currentData];

    if (selectedCountry !== "All") {
      updatedRates = updatedRates.filter((rate) => rate.country === selectedCountry);
    }

    if (qualityFilter) {
      updatedRates = updatedRates.filter((rate) =>
        rate.qualityDescription?.toLowerCase().includes(qualityFilter.toLowerCase())
      );
    }

    setFilteredRates(updatedRates);
    setCurrentPage(1);
  }, [activeTab, selectedCountry, qualityFilter, rates, clirates, specialRates]);

  useEffect(() => {
    if (showSelectedOnly && selectedSection) {
      setDisplayRates(filteredRates.filter(rate => selectedRates[selectedSection]?.includes(rate._id)));
    } else {
      setDisplayRates(filteredRates);
    }
  }, [showSelectedOnly, filteredRates, selectedRates, selectedSection]);

  const totalPages = Math.ceil(displayRates.length / itemsPerPage);
  const paginatedRates = displayRates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRateSelection = (rateId) => {
    if (!selectedSection) {
      setSelectedSection(activeTab);
    }
    
    const currentSectionRates = selectedRates[selectedSection] || [];
    
    if (currentSectionRates.includes(rateId)) {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: currentSectionRates.filter(id => id !== rateId)
      });
    } else {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: [...currentSectionRates, rateId]
      });
    }
  };

  const handleSelectAll = () => {
    if (!selectedSection) {
      setSelectedSection(activeTab);
    }
    
    const currentSectionRates = selectedRates[selectedSection] || [];
    
    if (currentSectionRates.length === paginatedRates.length) {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: []
      });
    } else {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: paginatedRates.map(rate => rate._id)
      });
    }
  };

  const handleSubmitRates = async () => {
    // Check authentication before submitting
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) {
        setError("Please login to view rates");
        setLoading(false);
        return;
      }

    if (!selectedSection || !customerDetails.id) {
      alert("User information not available. Please try logging in again.");
      return;
    }
    
    try {
      const selectedRateIds = selectedRates[selectedSection] || [];
      
      if (selectedRateIds.length === 0) {
        alert("Please select at least one rate to submit");
        return;
      }

      for (const rateId of selectedRateIds) {
        await axiosInstance.put(`api/myrate/${customerDetails.id}`, {
          rate: selectedSection.toUpperCase(),
          rateId: rateId,
          testStatus: "Pending",
          addedTime: Date.now().toString(),
        });
      }
      
      alert("Rate(s) added Successfully");
      
      // Reset selection
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: []
      });
      setSelectionMode(false);
      setShowSelectedOnly(false);
      setSelectedSection(null);
      
    } catch (error) {
      console.error("Error adding selected rates to My Rates:", error);
      
      if (error.response?.status === 401) {
        alert("Your session has expired. Please login again.");
        localStorage.removeItem("authtoken");
        localStorage.removeItem("userData");
        navigate("/login");
      } else {
        alert("Error submitting rates. Please try again.");
      }
    }
  };

  const handleTabChange = (tab) => {
    if (selectionMode && selectedSection && selectedSection !== tab) {
      alert("You can only select rates from one section at a time. Please submit or cancel your current selection first.");
      return;
    }
    setActiveTab(tab);
  };

  const handleCancelSelection = () => {
    setSelectionMode(false);
    setShowSelectedOnly(false);
    if (selectedSection) {
      setSelectedRates({
        ...selectedRates,
        [selectedSection]: []
      });
    }
    setSelectedSection(null);
  };

  const getSelectedCount = () => {
    if (!selectedSection) return 0;
    return selectedRates[selectedSection]?.length || 0;
  };

  const renderPagination = () => (
    <div className="flex justify-center mt-4">
      <button
        className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        <ChevronLeft size={16} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i + 1 ? "bg-[#0a2463] text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );

  const renderTable = () => {
    if (activeTab === "cli") {
      return (
        <table className="min-w-full bg-white border rounded">
          <thead className="bg-blue-800 text-white">
            <tr>
              {selectionMode && (
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={getSelectedCount() === paginatedRates.length && paginatedRates.length > 0}
                    onChange={handleSelectAll}
                    disabled={selectedSection && selectedSection !== activeTab}
                  />
                </th>
              )}
              <th className="px-4 py-3 text-left">Country Code</th>
              <th className="px-4 py-3 text-left">Country Name</th>
              <th className="px-4 py-3 text-left">Quality</th>
              <th className="px-4 py-3 text-left">Rate</th>
              <th className="px-4 py-3 text-left">Billing Cycle</th>
              <th className="px-4 py-3 text-left">ASR</th>
              <th className="px-4 py-3 text-left">ACD</th>
              <th className="px-4 py-3 text-left">RTP</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRates.length === 0 ? (
              <tr>
                <td colSpan={selectionMode ? 11 : 10} className="text-center py-4">
                  No results found.
                </td>
              </tr>
            ) : (
              paginatedRates.map((rate) => (
                <tr key={rate._id} className="border-b">
                  {selectionMode && (
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedRates[selectedSection]?.includes(rate._id) || false}
                        onChange={() => handleRateSelection(rate._id)}
                        disabled={selectedSection && selectedSection !== activeTab}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2">{rate.countryCode}</td>
                  <td className="px-4 py-2">{rate.country}</td>
                  <td className="px-4 py-2">{rate.qualityDescription}</td>
                  <td className="px-4 py-2">{rate.rate}</td>
                  <td className="px-4 py-2">{rate.billingCycle}</td>
                  <td className="px-4 py-2">{rate.asr}</td>
                  <td className="px-4 py-2">{rate.acd}</td>
                  <td className="px-4 py-2">{rate.rtp}</td>
                  <td
                    className={`px-4 py-2 ${
                      rate.status?.toLowerCase() === "active"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }`}
                  >
                    {rate.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      );
    } else {
      return (
        <table className="min-w-full bg-white border rounded">
          <thead className="bg-blue-800 text-white">
            <tr>
              {selectionMode && (
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={getSelectedCount() === paginatedRates.length && paginatedRates.length > 0}
                    onChange={handleSelectAll}
                    disabled={selectedSection && selectedSection !== activeTab}
                  />
                </th>
              )}
              <th className="px-4 py-3 text-left">Country Code</th>
              <th className="px-4 py-3 text-left">Country Name</th>
              <th className="px-4 py-3 text-left">Quality</th>
              <th className="px-4 py-3 text-left">Profile</th>
              <th className="px-4 py-3 text-left">Rate</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRates.length === 0 ? (
              <tr>
                <td colSpan={selectionMode ? 8 : 7} className="text-center py-4">
                  No results found.
                </td>
              </tr>
            ) : (
              paginatedRates.map((rate) => (
                <tr key={rate._id} className="border-b">
                  {selectionMode && (
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedRates[selectedSection]?.includes(rate._id) || false}
                        onChange={() => handleRateSelection(rate._id)}
                        disabled={selectedSection && selectedSection !== activeTab}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2">{rate.countryCode}</td>
                  <td className="px-4 py-2">{rate.country}</td>
                  <td className="px-4 py-2">{rate.qualityDescription}</td>
                  <td className="px-4 py-2">{rate.profile || "-"}</td>
                  <td className="px-4 py-2">{rate.rate}</td>
                  <td
                    className={`px-4 py-2 ${
                      rate.status?.toLowerCase() === "active"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }`}
                  >
                    {rate.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="p-6">
      <title>Rates Page</title>

      {/* Action buttons */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Rate Management</h2>
        <div className="flex space-x-2">
          {!selectionMode ? (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
              onClick={() => {
                // Check authentication before entering selection mode
                const authToken = sessionStorage.getItem("authToken");
                if (!authToken) {
                  alert("Please login to select rates");
                  navigate("/login");
                  return;
                }
                setSelectionMode(true);
                setSelectedSection(activeTab);
              }}
            >
              <Check size={16} className="mr-2" />
              Select Rates
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded flex items-center"
                onClick={() => setShowSelectedOnly(!showSelectedOnly)}
                disabled={getSelectedCount() === 0}
              >
                <Filter size={16} className="mr-2" />
                {showSelectedOnly ? "Show All" : "Show Selected"}
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
                onClick={handleSubmitRates}
                disabled={getSelectedCount() === 0}
              >
                Submit My Rates
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded flex items-center"
                onClick={handleCancelSelection}
              >
                <X size={16} className="mr-2" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "cc" ? "bg-[#0a2463] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("cc")}
          >
            CC Routes
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "cli" ? "bg-[#0a2463] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("cli")}
          >
            CLI Routes
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "special" ? "bg-[#0a2463] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("special")}
          >
            Special Rates
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 items-center">
          <select
            className="pl-4 pr-4 py-2 border rounded"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            className="pl-4 pr-4 py-2 border rounded"
            value={qualityFilter}
            onChange={(e) => setQualityFilter(e.target.value)}
          >
            <option value="">All Qualities</option>
            <option value="Premium">Premium</option>
            <option value="Standard">Standard</option>
          </select>
        </div>
      </div>

      {/* Selection info */}
      {selectionMode && (
        <div className="mb-4 p-3 bg-blue-100 rounded">
          <p className="text-blue-800">
            {selectedSection && `Selecting from ${selectedSection.toUpperCase()} section. `}
            {getSelectedCount()} rate(s) selected.{" "}
            {showSelectedOnly ? "Showing only selected rates." : "Showing all rates."}
          </p>
          {selectedSection && (
            <p className="text-blue-600 text-sm mt-1">
              You can only select rates from one section at a time.
            </p>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          renderTable()
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default Ratepages;