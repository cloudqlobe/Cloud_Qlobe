import React from 'react';
import { Users, PhoneCall, Globe } from 'lucide-react';

const stats = [
  { id: 1, icon: <Users className="w-8 h-8 text-pink-400" />, value: '500+', label: 'Happy Clients', description: 'Worldwide telecom partners connected through our VoIP services.' },
  { id: 2, icon: <PhoneCall className="w-8 h-8 text-blue-400" />, value: '250+', label: 'Interconnections', description: 'Reliable, high-volume global interconnections.' },
  { id: 3, icon: <Globe className="w-8 h-8 text-cyan-400" />, value: '50+', label: 'Countries', description: 'Serving companies across 50+ countries with cloud communication.' },
];

const countries = [
  { name: 'USA', code: 'us' },
  { name: 'UK', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'UAE', code: 'ae' },
  { name: 'Canada', code: 'ca' },
  { name: 'France', code: 'fr' },
  { name: 'Australia', code: 'au' },
  { name: 'Italy', code: 'it' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Spain', code: 'es' },
];

// Function to split countries into pairs for mobile
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const HomeAchievement = () => {
  const mobileChunks = chunkArray(countries, 2);

  return (
    <section className="bg-[#0a2463] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 text-center">
          {stats.map(stat => (
            <div key={stat.id} className="bg-white/10 p-6 border border-orange-400 rounded-none shadow-lg hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300">{stat.value}</h2>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Countries Section */}
        <h3 className="text-2xl font-bold text-white text-center mb-6">Our Major Destinations Route</h3>

        {/* Mobile view: 2 per row */}
        <div className="flex flex-col gap-4 sm:hidden">
          {mobileChunks.map((pair, idx) => (
            <div key={idx} className="flex justify-center gap-4">
              {pair.map((country, i) => (
                <div key={i} className="w-1/2 bg-gradient-to-br from-pink-500/30 via-blue-500/20 to-cyan-400/20 p-3 rounded-none shadow-lg border border-white/10 flex flex-col items-center hover:scale-105 transition duration-300">
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name}
                    className="w-20 h-14 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-white text-center">{country.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Tablet & Desktop: original layout unchanged */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {countries.map((country, i) => (
            <div key={i} className="bg-gradient-to-br from-pink-500/30 via-blue-500/20 to-cyan-400/20 p-4 rounded-none shadow-xl border border-white/10 flex flex-col items-center hover:scale-110 transition duration-300">
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={country.name}
                className="w-20 h-14 object-cover mb-2"
              />
              <p className="text-sm font-medium text-white text-center">{country.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Animations */}
      <div data-no-translate>
        <style>{`
          @keyframes blink {
            0%,100% {opacity:1; transform:scale(1);}
            50% {opacity:0.9; transform:scale(1.05);}
          }
          .animate-blink {animation: blink 3s ease-in-out infinite;}
        `}</style>
      </div>
    </section>
  );
};

export default HomeAchievement;