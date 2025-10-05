import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Map of country names to ISO 2-letter country codes (for flag URLs)
const flagMap = {
  Australia: 'au',
  China: 'cn',
  France: 'fr',
  // Add more as needed
};

const countryRates = [
  {
    country: 'Australia',
    status: 'Active',
    outbound: '0.015 USD',
    ivr: '0.015 USD',
    trend: 'up',
  },
  {
    country: 'China',
    status: 'Active',
    outbound: '1.6 USD',
    ivr: '1.6 USD',
    trend: 'up',
  },
  {
    country: 'France',
    status: 'Active',
    outbound: '0.012 USD',
    ivr: '0.012 USD',
    trend: 'up',
  },
  {
    country: 'Australia',
    status: 'Active',
    outbound: '0.023 USD',
    ivr: 'N/A USD',
    trend: 'down',
  },
  {
    country: 'Australia',
    status: 'Active',
    outbound: '0.015 USD',
    ivr: '0.015 USD',
    trend: 'up',
  },
];

const Homescroller = () => {
  return (
    <section className="w-full bg-[#0a2463] py-16 overflow-hidden border-t-2 border-b-2 border-orange-500">
      {/* Heading */}
      <h2 className="text-center text-4xl font-defau text-white mb-10">
        Explore the <span className="text-yellow-500">live with us</span>
      </h2>

      {/* Scrolling Cards */}
      <div className="flex gap-6 px-6 animate-scroll whitespace-nowrap">
        {[...countryRates, ...countryRates].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] h-[150px] bg-white text-black px-5 py-4 shadow-lg mt-[-10px] squared-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-base flex items-center gap-2">
                {/* Flag image */}
                <img
                  src={`https://flagcdn.com/w40/${flagMap[item.country]}.png`}
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
                {item.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-orange-400" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

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
