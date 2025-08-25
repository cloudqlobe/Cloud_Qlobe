import React from 'react';
import {
  Phone,
  Network,
  Settings,
  Globe,
  Wifi,
  User,
  Mail,
  PhoneCall,
  Server,
  Shield,
  MessageSquare,
  MonitorSmartphone,
  Headphones,
  Cloud,
  Mic,
} from 'lucide-react';

const Voipanimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-8 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Content - New Modern VoIP Style */}
        <div className="flex-1 flex flex-col justify-center p-8 rounded-2xl bg-gradient-to-b from-orange-400/10 to-transparent border border-orange-400">
          <h1 className="text-4xl font-default leading-snug text-orange-400 mb-4">
            Smarter Communication with VoIP
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Connect your team and customers with high-quality, low-cost, and secure VoIP solutions.
            Scale effortlessly while enjoying crystal-clear audio and powerful integrations.
          </p>

          {/* Icon Feature Row */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3 bg-orange-400/10 p-4 rounded-lg border border-orange-400">
              <Network className="text-orange-400" size={24} />
              <span>SIP Trunking</span>
            </div>
            <div className="flex items-center gap-3 bg-orange-400/10 p-4 rounded-lg border border-orange-400">
              <Cloud className="text-orange-400" size={24} />
              <span>Cloud PBX</span>
            </div>
            <div className="flex items-center gap-3 bg-orange-400/10 p-4 rounded-lg border border-orange-400">
              <Shield className="text-orange-400" size={24} />
              <span>Secure Calls</span>
            </div>
            <div className="flex items-center gap-3 bg-orange-400/10 p-4 rounded-lg border border-orange-400">
              <Headphones className="text-orange-400" size={24} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Side Transparent Form */}
        <div className="flex-1 bg-transparent border-2 border-orange-400 text-white rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-default text-orange-400 mb-6">Request a VoIP Demo</h2>
          <form className="space-y-4">
            <div className="flex items-center border border-orange-400 rounded-md overflow-hidden bg-transparent">
              <User className="mx-3 text-orange-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-orange-400 rounded-md overflow-hidden bg-transparent">
              <Mail className="mx-3 text-orange-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-orange-400 rounded-md overflow-hidden bg-transparent">
              <PhoneCall className="mx-3 text-orange-400" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-2 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-[#0a2463] py-2 rounded-md font-semibold hover:bg-orange-500 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* First Feature Tab Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Network size={28} />,
            title: 'SIP Trunking',
            desc: 'Robust VoIP trunking with seamless call routing.',
          },
          {
            icon: <Settings size={28} />,
            title: 'PBX Systems',
            desc: 'Cloud-based and on-premises PBX setups.',
          },
          {
            icon: <Globe size={28} />,
            title: 'Global Numbers',
            desc: 'Local & international VoIP number support.',
          },
          {
            icon: <Wifi size={28} />,
            title: 'HD Voice',
            desc: 'Low-latency, high-quality voice over IP.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0a2463] border border-orange-400 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex justify-center mb-3 text-orange-400">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Feature Tab Row */}
      
    </div>
  );
};

export default Voipanimation;
