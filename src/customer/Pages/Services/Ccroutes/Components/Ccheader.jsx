import React from 'react';

const CloudQlobeGlobal = () => {
  const topFlags = [
    { name: 'USA', flagUrl: 'https://flagcdn.com/w160/us.png', color: 'from-red-500 to-blue-600' },
    { name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w160/gb.png', color: 'from-red-600 to-blue-700' },
    { name: 'China', flagUrl: 'https://flagcdn.com/w160/cn.png', color: 'from-red-500 to-yellow-500' },
    { name: 'France', flagUrl: 'https://flagcdn.com/w160/fr.png', color: 'from-blue-600 to-red-500' },
    { name: 'Germany', flagUrl: 'https://flagcdn.com/w160/de.png', color: 'from-black to-red-500' },
  ];

  const bottomFlags = [
    { name: 'Australia', flagUrl: 'https://flagcdn.com/w160/au.png', color: 'from-blue-600 to-red-600' },
    { name: 'Spain', flagUrl: 'https://flagcdn.com/w160/es.png', color: 'from-red-600 to-yellow-500' },
    { name: 'Canada', flagUrl: 'https://flagcdn.com/w160/ca.png', color: 'from-red-500 to-white' },
    { name: 'Italy', flagUrl: 'https://flagcdn.com/w160/it.png', color: 'from-green-600 to-red-500' },
    { name: 'Japan', flagUrl: 'https://flagcdn.com/w160/jp.png', color: 'from-white to-red-500' },
  ];

  return (
    <div
      className="h-[764px] relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1000'><filter id='dots'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.1'/></feComponentTransfer></filter><rect width='2000' height='1000' fill='white'/><image href='https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg' width='2000' height='1000' style='filter:url(%23dots); opacity:0.2' /></svg>")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-full relative z-10 min-w-[1100px]">
        {/* Left Side - Content */}
        <div className="w-1/2 flex flex-col justify-center z-10 ml-[80px] mt-[-40px]">
          <h1 className="text-5xl font-Default text-gray-800 mb-6 leading-snug">
            The mastery of <span className="text-blue-500">Telecom</span>
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-[520px]">
            Cloudqlobe enables businesses to connect worldwide using reliable VoIP
            platforms and secure SIP routing. With intelligent telecom solutions,
            we ensure consistent call quality, data efficiency, and scalable
            infrastructure across all regions.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 squared-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 squared-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Global Map with Real Flags */}
        <div className="w-1/2 relative flex flex-col items-center justify-center p-4 mt-[-70px]">
          <div className="relative w-[500px] h-[500px] flex flex-col items-center justify-center">
            {/* Top Row Flags */}
            <div className="flex space-x-12 z-10 mb-16 -mt-8 ml-[-100px]">
              {topFlags.map((country, index) => (
                <div key={`top-${index}`} className="relative group cursor-pointer">
                  <div className="w-[100px] h-[60px] overflow-hidden border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25 bg-white">
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${country.color} flex items-center justify-center text-white font-bold text-sm">${country.name.slice(0, 3).toUpperCase()}</div>`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 border border-blue-400/40 rounded-lg animate-pulse opacity-60"></div>
                </div>
              ))}
            </div>

            {/* Bottom Row Flags */}
            <div className="flex space-x-12 z-10 ml-[-100px]">
              {bottomFlags.map((country, index) => (
                <div key={`bottom-${index}`} className="relative group cursor-pointer">
                  <div className="w-[100px] h-[60px] overflow-hidden border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25 bg-white">
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${country.color} flex items-center justify-center text-white font-bold text-sm">${country.name.slice(0, 3).toUpperCase()}</div>`;
                      }}
                    />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
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
