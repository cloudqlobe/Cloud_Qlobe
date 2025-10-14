import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { SiWebmoney } from "react-icons/si";
import axiosInstance from "../../utils/axiosinstance"

const Specialrate = () => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterTrigger, setFilterTrigger] = useState(false);
  const [rateData, setRateData] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/admin/ccrates");

        // ✅ Only special rates
        const specialRates = response.data.ccrates.filter(
          (item) => item.specialRate === 1
        );

        setRateData(specialRates);
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const countryOptions = [...new Set(rateData.map((item) => item.country))];
  const filteredData =
    filterTrigger && selectedCountry
      ? rateData.filter((row) => row.country === selectedCountry)
      : rateData;

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <>
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-orange-300 text-orange-600 px-1 py-8 rounded-l-xl cursor-pointer shadow-md hover:bg-orange-500 transition-all "
        />
      )}

      {open && (
        <div className="fixed top-10 right-0 h-[330px] w-[95vw] md:w-[1000px] bg-white shadow-2xl z-50 transition-transform duration-500 animate-slide-in mt-[100px] border border-gray-300 overflow-hidden rounded-l-xl">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-3 bg-white relative">
            <div className="flex items-center space-x-2">
              <SiWebmoney className="w-8 h-8 text-gray-500" />
              <h2 className="text-2xl font-default text-gray-500">
                Special <span className="text-orange-400">Rates</span>
              </h2>
            </div>

            {/* Filter Dropdown */}
            <div className="absolute left-1/3 ml-[150px] flex items-center gap-2">
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setPage(1); // reset page when filter changes
                }}
                className="w-[230px] h-[42px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">All Countries</option>
                {countryOptions.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setFilterTrigger(!filterTrigger);
                  setPage(1);
                }}
                className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Filter
              </button>
            </div>

            {/* Arrows + Close */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`w-8 h-8 rounded text-white flex items-center justify-center ${page === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                  }`}
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={`w-8 h-8 rounded text-white flex items-center justify-center ${page === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                  }`}
              >
                &gt;
              </button>
              <X
                onClick={() => setOpen(false)}
                className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="px-5 py-2 overflow-auto h-[350px]">
            {loading ? (
              <p className="text-center py-10">Loading rates...</p>
            ) : (
              <table className="min-w-full text-xs text-default">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-2 text-left font-normal">Country Name</th>
                    <th className="p-2 text-center font-normal">Quality analysis Description</th>
                    <th className="p-2 text-center font-normal">Profile</th>
                    <th className="p-2 text-center font-normal">Special Rate</th>
                    <th className="p-2 text-center font-normal">Billing Cycle</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row, index) => (
                    <tr
                      key={row._id || index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="p-2 text-left">{row.country}</td>
                      <td className="p-2 text-center">{row.qualityDescription}</td>
                      <td className="p-2 text-center">{row.profile}</td>
                      <td className="p-2 text-center">{row.rate}</td>
                      <td className="p-2 text-center">{row.billingCycle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Page Info */}
          <div className="px-6 py-2 flex justify-end text-sm text-gray-500">
            Page {page} of {totalPages}
          </div>
        </div>
      )}
      <div data-no-translate >
        <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
      </div>
    </>
  );
};

export default Specialrate;
