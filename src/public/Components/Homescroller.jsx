import React, { useContext, useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import axiosInstance from "../../utils/axiosinstance";
import { LanguageContext } from "../../context/LanguageContext";
import { ivrTranslations, outboundTranslations, statusTranslations } from "./DummyTranslateData/Homescroller";
import { translateCountry } from "../../utils/countryTranslator";

// ✅ Utility to convert country name → flag code (based on common mappings)
const getCountryCode = (countryName) => {
  const mapping = {
    "France": "fr",
    "Spain": "es",
    "New Zealand": "nz",
    "Hong Kong": "hk",
    "Malaysia": "my",
    "Australia": "au",
    "Canada": "ca",
    "Austria": "at",
    "United Arab Emirates": "ae",
    "Turkey": "tr",
    "Singapore": "sg",
    "United Kingdom": "gb",
    "Brazil": "br",
    "China": "cn",
    "Japan": "jp",
    "Germany": "de",
    "Russia": "ru",
    "United States": "us",
    "Indonesia": "id",
    "Philippines": "ph",

    // aliases / safety
    "UAE": "ae",
    "UK": "gb",
    "USA": "us",
  };

  return (
    mapping[countryName] ||
    countryName?.slice(0, 2).toLowerCase() ||
    "un"
  );
};

const countryFlagBands = {
  "France": ["#0055A4", "#FFFFFF", "#EF4135"],          // blue white red
  "Spain": ["#AA151B", "#F1BF00", "#AA151B"],           // red yellow red
  "New Zealand": ["#00247D", "#FFFFFF", "#CC142B"],  // blue white red
  "Hong Kong": ["#DE2910", "#FFFFFF", "#DE2910"],     // red white red
  "Malaysia": ["#010066", "#FFFFFF", "#CC0001"],        // blue white red
  "Australia": ["#012169", "#FFFFFF", "#012169"],       // blue white red
  "Canada": ["#D52B1E", "#FFFFFF", "#D52B1E"],          // red white red
  "Austria": ["#ED2939", "#FFFFFF", "#ED2939"],         // red white red
  "United Arab Emirates": ["#00732F", "#FFFFFF", "#000000"],
  "Turkey": ["#E30A17", "#FFFFFF", "#E30A17"],          // red white red
  "Singapore": ["#EF3340", "#FFFFFF", "#EF3340"],       // red white red
  "United Kingdom": ["#012169", "#C8102E", "#012169"],
  "Brazil": ["#009739", "#FFDF00", "#002776"],          // green yellow blue
  "China": ["#DE2910", "#FFDE00", "#DE2910"],            // red yellow red
  "Japan": ["#FFFFFF", "#BC002D", "#FFFFFF"],
  "Germany": ["#000000", "#DD0000", "#FFCE00"],         // black red yellow
  "Russia": ["#FFFFFF", "#0039A6", "#D52B1E"],          // white blue red
  "United States": ["#B22234", "#FFFFFF", "#3C3B6E"],
  "Indonesia": ["#CE1126", "#FFFFFF", "#CE1126"],      // red white red
  "Philippines": ["#0038A8", "#FFFFFF", "#CE1126"],    // blue white red
};


const getFlagBands = (country) =>
  countryFlagBands[country] || ["#E5E7EB", "#E5E7EB", "#E5E7EB"];


const Homescroller = () => {
  const { language } = useContext(LanguageContext);
  const t = outboundTranslations[language];
  const ivr = ivrTranslations[language];
  const Translatestatus = statusTranslations[language]

  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/admin/ccrates");

        const allRates = response.data.ccrates;

        // ✅ Show only addToTicker === 1
        const filteredRates = allRates.filter((item) => item.addToTicker === 1);
        
        // ✅ Map backend data into display format
        const groupedByCountry = {};

        filteredRates.forEach((item) => {
          const country = item.country;

          if (!groupedByCountry[country]) {
            groupedByCountry[country] = {
              country: item.country,
              flagCode: getCountryCode(item.country),
              status: item.status || "Active",
              outbound: "N/A",
              ivr: "N/A",
              trend: "up",
            };
          }

          // OUTBOUND
          if (item.profile.toLowerCase().includes("outbound")) {
            groupedByCountry[country].outbound = item.rate
              ? `${item.rate} USD`
              : "N/A";
          }

          // IVR
          if (item.profile.toLowerCase().includes("ivr")) {
            groupedByCountry[country].ivr = item.rate
              ? `${item.rate} USD`
              : "N/A";
          }

          // Trend (optional – based on any available rate)
          if (item.rate) {
            groupedByCountry[country].trend =
              Number(item.rate) > 0.02 ? "up" : "down";
          }
        });

        const formattedRates = Object.values(groupedByCountry);
        setRates(formattedRates);


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
    <section className="w-full bg-[#0a2463] py-16 overflow-hidden border-t-2 border-b-2 border-[#0a2463]">
      {/* Heading */}
      <h2 className="text-center text-4xl font-defau text-white mb-10">
        Explore the <span className="text-yellow-500">live with us</span>
      </h2>

      {loading ? (
        <p data-no-translate className="text-center text-white">Loading rates...</p>
      ) : rates.length === 0 ? (
        <p data-no-translate className="text-center text-white">No ticker rates available.</p>
      ) : (
        <div data-no-translate className="flex gap-6 px-6 animate-scroll whitespace-nowrap">
          {[...rates, ...rates].map((item, idx) => (
            <div
              key={idx}
              className="relative min-w-[250px] h-[150px] bg-white text-black px-5 py-4 shadow-lg mt-[-10px]"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w40/${getCountryCode(item.country)}.png`}
                    alt={`${translateCountry(item.country, language)} flag`}
                    className="w-5 h-4 object-cover"
                  />
                  {translateCountry(item.country, language)}
                </h3>
                <span
                  className={`${item.status?.toLowerCase() === "active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                    } text-xs px-2 py-0.5`}
                >
                  {item.status?.toLowerCase() === "active"
                    ? Translatestatus.active
                    : Translatestatus.inactive}
                </span>

              </div>

              <div className="text-sm text-gray-700 flex justify-between items-center mt-4">
                <span>{t}</span>
                <span className="flex items-center gap-1">
                  {item.outbound}
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </span>
              </div>

              <div className="text-sm text-gray-700 flex justify-between items-center mt-3">
                <span>{ivr}</span>
                <span className="flex items-center gap-1">
                  {item.ivr}
                  {item.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-orange-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-orange-400" />
                  )}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 flex">
                {getFlagBands(item.country).map((color, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Animation Style */}
      <div data-no-translate>
        <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Homescroller;
