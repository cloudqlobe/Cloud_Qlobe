import React from "react";

const CloudQlobeGlobal = ({ onGetStartedClick, onLearnMoreClick }) => {
  const topFlags = [
    { name: "USA", flagUrl: "https://flagcdn.com/w160/us.png" },
    { name: "UK", flagUrl: "https://flagcdn.com/w160/gb.png" },
    { name: "China", flagUrl: "https://flagcdn.com/w160/cn.png" },
    { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png" },
    { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png" },
  ];

  const bottomFlags = [
    { name: "Australia", flagUrl: "https://flagcdn.com/w160/au.png" },
    { name: "Spain", flagUrl: "https://flagcdn.com/w160/es.png" },
    { name: "Canada", flagUrl: "https://flagcdn.com/w160/ca.png" },
    { name: "Italy", flagUrl: "https://flagcdn.com/w160/it.png" },
    { name: "Japan", flagUrl: "https://flagcdn.com/w160/jp.png" },
  ];

  return (
    <div className="min-h-[500px] lg:h-[764px] relative overflow-hidden bg-white">
      {/* INLINE RESPONSIVE STYLES */}
      <style>{`
        /* Desktop flag hiding rules */
        @media (max-width: 1340px) {
          .hide-1340 { display: none; }
        }

        @media (max-width: 1240px) {
          .hide-1240 { display: none; }
        }

        @media (max-width: 1100px) {
          .hide-right {
            display: none;
          }

          /* FORCE LEFT SIDE TO w-full */
          .left-full {
            width: 100% !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            align-items: center;
            text-align: center;
            padding: 2rem 1.5rem;
          }

          .left-full h1 {
            text-align: center;
          }

          .left-full p {
            text-align: center;
            max-width: 100%;
          }

          .left-buttons {
            justify-content: center;
          }
        }

        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .left-full {
            padding: 1.5rem 1rem;
          }

          .left-full h1 {
            font-size: 1.5rem;
            line-height: 1.3;
          }

          .left-full p {
            font-size: 0.875rem;
          }

          .left-buttons {
            flex-direction: column;
            width: 100%;
          }

          .left-buttons button {
            width: 100%;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1100px) {
          .left-full h1 {
            font-size: 2rem;
          }

          .left-full p {
            font-size: 0.9375rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

<div className="flex h-full lg:min-w-[1100px] relative z-10 mt-[124px] lg:mt-0">
        {/* LEFT CONTENT - Fully Responsive */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:ml-[80px] lg:mt-[-40px] left-full">
          <h1 className="text-4xl font-Default text-gray-600 mb-6 leading-snug">
            Next-Gen CC{" "}
            <span className="text-blue-500">Routing Solutions</span>
          </h1>

          <p className="text-gray-700 text-[15px] leading-relaxed mb-8 max-w-[520px] text-justify">
            CloudQlobe's CC Routes provide seamless global connectivity with clear voice quality and reliable performance. Built for high volumes, they ensure cost efficiency, flexibility, and scalability, helping businesses connect smarter and faster across international destinations.
          </p>

          <div className="flex gap-4 left-buttons">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={onGetStartedClick}
            >
              Get Started
            </button>

            <button
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400"
              onClick={onLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Desktop Only (No Changes) */}
        <div className="w-1/2 relative flex items-center justify-center mt-[-70px] hide-right">
          <div className="relative w-[500px] h-[500px] flex flex-col items-center justify-center">

            {/* TOP FLAGS */}
            <div className="flex space-x-12 z-10 mb-16 -mt-8 ml-[-100px]">
              {topFlags.map((country, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer
                    ${index === 4 ? "hide-1340" : ""}
                    ${index >= 3 ? "hide-1240" : ""}
                  `}
                >
                  <div className="w-[100px] h-[60px] overflow-hidden border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300 bg-white">
                    <img
                      src={country.flagUrl}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  
                  {/* Green pulse indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Border animation */}
                  <div className="absolute inset-0 border border-blue-400/40 rounded-lg animate-pulse opacity-60"></div>
                </div>
              ))}
            </div>

            {/* BOTTOM FLAGS */}
            <div className="flex space-x-12 z-10 ml-[-100px]">
              {bottomFlags.map((country, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer
                    ${index === 4 ? "hide-1340" : ""}
                    ${index >= 3 ? "hide-1240" : ""}
                  `}
                >
                  <div className="w-[100px] h-[60px] overflow-hidden border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300 bg-white">
                    <img
                      src={country.flagUrl}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  
                  {/* Green pulse indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Border animation */}
                  <div className="absolute inset-0 border border-blue-400/40 rounded-lg animate-pulse opacity-60"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudQlobeGlobal;