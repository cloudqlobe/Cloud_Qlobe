import React, { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import axiosInstance from "../../utils/axiosinstance"; // adjust path

// Map of country names to ISO 2-letter codes (for flag URLs)
const flagMap = {
  Australia: "au",
  China: "cn",
  France: "fr",
  India: "in",
  USA: "us",
  UK: "gb",
  // Add more countries if needed
};

const Homescroller = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/admin/ccrates");

        // ✅ Filter only specialRate=1
        const Rates = response.data.ccrates

        // ✅ Map backend data into card format
        const formattedRates = Rates.map((item) => ({
          country: item.country,
          status: item.status || "Active",
          outbound:
            item.profile.toLowerCase().includes("outbound") && item.rate
              ? `${item.rate} USD`
              : "N/A",
          ivr:
            item.profile.toLowerCase().includes("ivr") && item.rate
              ? `${item.rate} USD`
              : "N/A",
          trend: Number(item.rate) > 0.02 ? "up" : "down", // simple dummy logic
        }));

        setRates(formattedRates);
      } catch (err) {
        console.error("Error fetching rates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <section className="w-full bg-[#0a2463] py-16 overflow-hidden border-t-2 border-b-2 border-orange-500">
      {/* Heading */}
      <h2 className="text-center text-4xl font-defau text-white mb-10">
        Explore the <span className="text-yellow-500">live with us</span>
      </h2>

      {loading ? (
        <p className="text-center text-white">Loading rates...</p>
      ) : (
        <div className="flex gap-6 px-6 animate-scroll whitespace-nowrap">
          {[...rates, ...rates].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] h-[150px] bg-white text-black px-5 py-4 shadow-lg mt-[-10px]"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-base flex items-center gap-2">
                  {/* Flag image */}
                  <img
                    src={`https://flagcdn.com/w40/${
                      flagMap[item.country] || "un"
                    }.png`}
                    alt={`${item.country} flag`}
                    className="w-5 h-4 rounded-sm object-cover"
                  />
                  {item.country}
                </h3>
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 uppercase">
                  {item.status}
                </span>
              </div>

              <div className="text-sm text-gray-700 flex justify-between items-center mt-4">
                <span>Outbound</span>
                <span className="flex items-center gap-1">
                  {item.outbound}
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </span>
              </div>

              <div className="text-sm text-gray-700 flex justify-between items-center mt-3">
                <span>IVR</span>
                <span className="flex items-center gap-1">
                  {item.ivr}
                  {item.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-orange-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-orange-400" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Homescroller;
