import React from 'react';
import {
  PhoneCall,
  ShieldCheck,
  Wifi,
  Server,
  Cloud,
} from 'lucide-react';

// Dummy placeholders for demonstration
const placeholders = {
  en: {
    companyName: 'Company Name',
    country: 'Country',
    contactPerson: 'Contact Person',
    email: 'Email Address',
    phoneNumber: 'Phone Number',
    website: 'Website',
    ipAddress: 'IP Address',
    description: 'Description',
  },
};

const leftFeatures = [
  {
    icon: PhoneCall,
    title: 'Crystal Clear Calls',
    desc: 'High-quality CLI & Non-CLI voice routes worldwide.',
    color: 'bg-blue-500',
  },
  {
    icon: Wifi,
    title: 'Reliable Interconnection',
    desc: 'Always-on VoIP connectivity with 99.99% uptime.',
    color: 'bg-green-500',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Routing',
    desc: 'Encrypted channels with advanced route protection.',
    color: 'bg-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Powered',
    desc: 'Real-time analytics & monitoring tools.',
    color: 'bg-purple-500',
  },
  {
    icon: Server,
    title: 'Smart Infrastructure',
    desc: 'Load-balanced architecture across global zones.',
    color: 'bg-orange-500',
  },
];

const Register = () => {
  const t = placeholders.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted!');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 lg:py-12">
      {/* Outer Container */}
      <div className="w-full max-w-7xl bg-white shadow-lg border border-orange-300 flex flex-col md:flex-row overflow-hidden">

        {/* Left Side Features - Hidden on Mobile */}
        <div className="hidden md:flex md:w-1/2 lg:w-1/2 p-6 lg:p-8 bg-white flex-col gap-6 lg:gap-8">
          {leftFeatures.map(({ icon: Icon, title, desc, color }, idx) => (
            <div key={idx} className="flex items-start gap-4 lg:gap-5">
              <div
                className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center ${color} shadow-lg flex-shrink-0`}
              >
                <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-slate-800 mb-1">
                  {title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 lg:w-1/2 bg-gray-200 p-4 sm:p-6 md:p-6 lg:p-8 border-orange-300">
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-default text-center mb-4 sm:mb-5 md:mb-6 text-orange-500">
            Open Your Trade Account
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          >
            <input
              type="text"
              placeholder={t.companyName}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder={t.country}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder={t.contactPerson}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder={t.email}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder={t.phoneNumber}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder={t.website}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder={t.ipAddress}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />

            <select className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base bg-white">
              <option value="">-- Service Request --</option>
              <option>VoIP Services</option>
              <option>Carriers</option>
              <option>Quality Monitoring</option>
              <option>Routing</option>
              <option>SMS/OTT</option>
            </select>

            <textarea
              placeholder={t.description}
              rows={3}
              className="border border-orange-400 p-3 sm:p-3.5 md:p-4 w-full col-span-1 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base resize-none"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white py-2.5 sm:py-3 px-6 font-semibold hover:bg-orange-600 transition col-span-1 md:col-span-2 text-sm sm:text-base cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
