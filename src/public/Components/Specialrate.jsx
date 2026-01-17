import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axiosInstance from '../../utils/axiosinstance';

const Specialrate = () => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterTrigger, setFilterTrigger] = useState(false);
  const [rateData, setRateData] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(rateData);

  // pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  useEffect(() => {
    const fetchSpecialRates = async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get("api/admin/ccrates");

        const filtered = res.data.ccrates.filter(
          rate => rate.specialRate === 1
        );

        setRateData(filtered);   // 👈 UI data
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialRates();
  }, []);

  const countryOptions = [...new Set(rateData.map((item) => item.country))];
  const filteredData =
    filterTrigger && selectedCountry
      ? rateData.filter((row) => row.country === selectedCountry)
      : rateData;

  // Pagination logic
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
          className="fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-orange-400 text-white px-2 py-8 md:px-1 md:py-8 rounded-l-xl cursor-pointer shadow-lg hover:bg-orange-500 transition-all flex items-center justify-center"
        >
          <span className="text-xs font-semibold transform -rotate-90 md:rotate-0 whitespace-nowrap">RATES</span>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 md:inset-auto md:top-10 md:right-0 md:h-[400px] md:w-[900px] lg:w-[1000px] bg-white shadow-2xl z-50 transition-transform duration-500 animate-slide-in md:mt-[100px] border border-gray-300 overflow-hidden md:rounded-l-xl m-4 md:m-0 rounded-xl">
          {/* Header */}
          <div className="flex flex-col gap-3 px-4 py-4 bg-gradient-to-r from-orange-50 to-blue-50 border-b border-gray-200">
            {/* Title Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">$</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                  Special <span className="text-orange-500">Rates</span>
                </h2>
              </div>

              <X
                onClick={() => setOpen(false)}
                className="w-6 h-6 text-gray-500 cursor-pointer hover:text-red-500 transition-colors"
              />
            </div>

            {/* Filter Row */}
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setPage(1);
                }}
                className="flex-1 sm:flex-none sm:w-[200px] md:w-[250px] h-10 px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
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
                className="h-10 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold shadow-sm"
              >
                {filterTrigger ? 'Clear Filter' : 'Apply Filter'}
              </button>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2 sm:ml-auto">
                <span className="text-xs text-gray-600 font-medium">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={handlePrev}
                  disabled={page === 1}
                  className={`w-8 h-8 rounded-lg text-white flex items-center justify-center text-sm font-bold transition-all ${page === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 shadow-sm"
                    }`}
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  disabled={page === totalPages}
                  className={`w-8 h-8 rounded-lg text-white flex items-center justify-center text-sm font-bold transition-all ${page === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 shadow-sm"
                    }`}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="overflow-auto" style={{ height: 'calc(100% - 140px)' }}>
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading rates...</p>
                </div>
              </div>
            ) : (
              <>
                {/* Mobile Card View */}
                <div className="md:hidden p-4 space-y-3">
                  {paginatedData.map((row, index) => (
                    <div
                      key={row._id || index}
                      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-gray-800 text-base">{row.country}</h3>
                          <p className="text-xs text-gray-500 mt-1">{row.qualityDescription}</p>
                        </div>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                          ${row.rate}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500 text-xs">Profile:</span>
                          <p className="font-medium text-gray-700">{row.profile}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">Billing:</span>
                          <p className="font-medium text-gray-700">{row.billingCycle}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {paginatedData.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <p>No rates found</p>
                    </div>
                  )}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block px-5 py-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-blue-500 text-white sticky top-0">
                      <tr>
                        <th className="p-3 text-left font-semibold">Country Name</th>
                        <th className="p-3 text-center font-semibold">Quality Description</th>
                        <th className="p-3 text-center font-semibold">Profile</th>
                        <th className="p-3 text-center font-semibold">Special Rate</th>
                        <th className="p-3 text-center font-semibold">Billing Cycle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((row, index) => (
                        <tr
                          key={row._id || index}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                        >
                          <td className="p-3 text-left font-medium">{row.country}</td>
                          <td className="p-3 text-center">{row.qualityDescription}</td>
                          <td className="p-3 text-center">{row.profile}</td>
                          <td className="p-3 text-center font-semibold text-orange-600">{row.rate}</td>
                          <td className="p-3 text-center">{row.billingCycle}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {paginatedData.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <p>No rates found</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
        @media (max-width: 768px) {
          .animate-slide-in {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Specialrate;