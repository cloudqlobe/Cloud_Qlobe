import React from 'react';
import {
  Phone,
  Mail,
  User,
  Globe,
  Shield,
  Server,
  MessageCircle,
  Mic,
} from 'lucide-react';

const Didanimation = () => {
  const tabsDataSet1 = [
    {
      icon: <Globe size={28} />,
      title: 'Global Numbers',
      desc: 'Access numbers across 100+ countries.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Secure Routing',
      desc: 'All calls encrypted with high-level security.',
    },
    {
      icon: <Server size={28} />,
      title: 'Cloud Integration',
      desc: 'Seamless API integration and call management.',
    },
    {
      icon: <Mic size={28} />,
      title: 'Voice Quality',
      desc: 'HD voice with low latency routing.',
    },
  ];

  const tabsDataSet2 = [
    {
      icon: <MessageCircle size={28} />,
      title: '24/7 Support',
      desc: 'Dedicated technical assistance anytime.',
    },
    {
      icon: <Phone size={28} />,
      title: 'Flexible Plans',
      desc: 'Customizable pricing for all business sizes.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Global Coverage',
      desc: 'Establish presence in multiple regions.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Data Protection',
      desc: 'Strict privacy and compliance standards.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a2463] text-white p-10 space-y-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - New Pattern */}
        <div className="flex-1 space-y-6 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400">
          <h1 className="text-4xl font-default leading-snug text-yellow-400">
            Empower Your Business with DID Solutions
          </h1>
          <p className="text-lg text-gray-300">
            Connect globally with ease — local numbers, crystal-clear calls, and 
            secure connections at your fingertips.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
              <strong className="block text-yellow-400">100+ Countries</strong>
              Numbers worldwide to enhance your reach.
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
              <strong className="block text-yellow-400">99.99% Uptime</strong>
              Reliable infrastructure for your calls.
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
              <strong className="block text-yellow-400">HD Audio</strong>
              Clear and seamless communication.
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
              <strong className="block text-yellow-400">Secure</strong>
              Enterprise-grade encryption built in.
            </div>
          </div>
        </div>

        {/* Right Side Register Form */}
        <div className="flex-1 bg-transparent border-2 border-yellow-400 text-white rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Register for DID Access</h2>
          <form className="space-y-4">
            <div className="flex items-center border border-yellow-400 rounded-md overflow-hidden bg-transparent">
              <User className="mx-3 text-yellow-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-yellow-400 rounded-md overflow-hidden bg-transparent">
              <Mail className="mx-3 text-yellow-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-yellow-400 rounded-md overflow-hidden bg-transparent">
              <Phone className="mx-3 text-yellow-400" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#0a2463] py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* First Bottom Tabs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tabsDataSet1.map((item, idx) => (
          <div
            key={idx}
            className="bg-transparent border-2 border-yellow-400 rounded-xl p-6 text-center shadow-lg hover:bg-yellow-400 hover:text-[#0a2463] transition"
          >
            <div className="flex justify-center mb-3 text-yellow-400">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Bottom Tabs Section */}
      
    </div>
  );
};

export default Didanimation;
