import React from 'react';
import { Users, PhoneCall, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-pink-600" />,
    value: '500+',
    label: 'Happy Clients',
    description: 'Worldwide telecom partners connected through our VoIP services.',
  },
  {
    id: 2,
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    value: '2M+',
    label: 'Monthly Calls',
    description: 'High-volume, low-latency global voice calls every month.',
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8 text-cyan-600" />,
    value: '50+',
    label: 'Countries',
    description: 'Serving companies across 50+ countries with cloud communication.',
  },
];

const countriesSet1 = [
  { name: 'USA', code: 'us' },
  { name: 'UK', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'UAE', code: 'ae' },
  { name: 'Canada', code: 'ca' },
];

const countriesSet2 = [
  { name: 'France', code: 'fr' },
  { name: 'Australia', code: 'au' },
  { name: 'Italy', code: 'it' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Spain', code: 'es' },
];

const HomeAchievement = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 shadow-md border border-gray-400 hover:scale-105 transition duration-300 rounded-lg"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-5xl font-default text-blue-500">
                {stat.value}
              </h2>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Country Flags Set 1 */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center mb-12">
          {countriesSet1.map((country, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow-lg border border-gray-300 hover:scale-110 transition duration-300 rounded-lg"
            >
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={country.name}
                className="w-20 h-14 rounded shadow-md mb-2"
              />
              <p className="text-sm font-medium text-gray-900 text-center">{country.name}</p>
            </div>
          ))}
        </div>

        {/* Country Flags Set 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {countriesSet2.map((country, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow-lg border border-gray-300 hover:scale-110 transition duration-300 rounded-lg"
            >
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={country.name}
                className="w-20 h-14 rounded shadow-md mb-2"
              />
              <p className="text-sm font-medium text-gray-900 text-center">{country.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeAchievement;