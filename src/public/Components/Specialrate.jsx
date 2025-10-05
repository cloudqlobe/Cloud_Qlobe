import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SiWebmoney } from 'react-icons/si';

const Specialrate = () => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filterTrigger, setFilterTrigger] = useState(false);

  const rateData = [
    { country: '', quality: '     ', profile: '', rate: '', billing: '' },
    { country: 'UK', quality: 'Mob local correct display, fix international random display', profile: 'IVR', rate: '$0.007', billing: '6/6' },
    { country: 'Canada', quality: 'Mob local correct display, fix international random display', profile: 'Outbound', rate: '$0.006', billing: '1/1' },
    { country: 'India', quality: 'Mob local correct display, fix international random display', profile: 'Outbound', rate: '$0.003', billing: '1/1' },
    { country: 'Japan', quality: 'Mob local correct display, fix international random display', profile: 'IVR', rate: '$0.009', billing: '6/6' },
    { country: 'Germany', quality: 'Mob local correct display, fix international random display', profile: 'Outbound', rate: '$0.006', billing: '1/1' },
  ];

  const countryOptions = [...new Set(rateData.map((item) => item.country))];
  const filteredData = filterTrigger && selectedCountry
    ? rateData.filter((row) => row.country === selectedCountry)
    : rateData;

  return (
    <>
      {/* Right edge open button */}
     {/* Floating Side Tab Arrow */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-orange-300 text-orange-600 px-1 py-8 rounded-l-xl cursor-pointer shadow-md hover:bg-orange-500 transition-all "
        >
          <div className="text-sm font-bold rotate-180 transform"></div>
        </div>
      )}

      {/* Slide-in Panel */}
      {open && (
        <div className="fixed top-10 right-0 h-[330px] w-[95vw] md:w-[1000px] bg-white shadow-2xl z-50 transition-transform duration-500 animate-slide-in mt-[100px] border border-gray-300 overflow-hidden rounded-l-xl">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-3 bg-white relative">
            <div className="flex items-center space-x-2">
              <SiWebmoney className="w-8 h-8 text-gray-500" />
              <h2 className="text-2xl font-default text-gray-500">
                Special <span className='text-orange-400'>Rates</span>
              </h2>
            </div>

            {/* Filter Dropdown */}
            <div className="absolute left-1/3 ml-[150px] flex items-center gap-2">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-[230px] h-[42px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">All Countries</option>
                {countryOptions.map((country, idx) => (
                  <option key={idx} value={country}>{country}</option>
                ))}
              </select>

              <button
                onClick={() => setFilterTrigger(!filterTrigger)}
                className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.447.894l-4 2.5A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
              </button>
            </div>

            {/* Arrows + Close */}
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-lg flex items-center justify-center">
                &lt;
              </button>
              <button className="w-8 h-8 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-lg flex items-center justify-center">
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
                {filteredData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <td className="p-2 text-left">{row.country}</td>
                    <td className="p-2 text-center">{row.quality}</td>
                    <td className="p-2 text-center">{row.profile}</td>
                    <td className="p-2 text-center">{row.rate}</td>
                    <td className="p-2 text-center">{row.billing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes shine {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.8); }
          100% { filter: brightness(1); }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Specialrate;
