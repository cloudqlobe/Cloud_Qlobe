import React from 'react';
import {
  PhoneCall,
  Mic,
  UserPlus,
  MessageCircle,
  Settings,
  Wifi,
  Headphones,
  Users,
} from 'lucide-react';

const Daileranimation = () => {
  return (
    <div className="h-[700px] bg-[#0a2463] text-white px-6 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side Content - Bordered Container */}
        <div className="flex-1">
          <div className="border-2 border-yellow-400 rounded-xl p-8 space-y-8 bg-transparent">
            {/* Heading & Subheading */}
            <div>
              <h1 className="text-5xl font-default text-white leading-tight">
                Smart dialing made simple
              </h1>
              <p className="mt-4 text-gray-300 text-lg max-w-lg">
                Automate your outbound calls, connect faster, and keep customers engaged
                with <span className="text-yellow-400 font-semibold">AI-driven dialers</span>.
              </p>
            </div>

            {/* Icons in Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <PhoneCall className="w-7 h-7 text-yellow-400" />
                </div>
                <span>Predictive & Power Dialing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <Headphones className="w-7 h-7 text-yellow-400" />
                </div>
                <span>Live Call Monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-yellow-400" />
                </div>
                <span>CRM Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <Mic className="w-7 h-7 text-yellow-400" />
                </div>
                <span>Voice Broadcasting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form - Yellow Theme */}
        <div className="flex-1 bg-transparent border-2 border-yellow-400 text-white rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-default text-white mb-6">Request a Demo</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-2 px-3 border border-yellow-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 px-3 border border-yellow-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-2 px-3 border border-yellow-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#0a2463] py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Feature Tabs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <PhoneCall size={26} />, title: 'Auto Dialer', desc: 'Automate call flows with maximum efficiency.' },
          { icon: <Mic size={26} />, title: 'Voice Broadcast', desc: 'Deliver pre-recorded messages at scale.' },
          { icon: <UserPlus size={26} />, title: 'Lead Upload', desc: 'Bulk upload leads into campaigns.' },
          { icon: <MessageCircle size={26} />, title: 'SMS Followups', desc: 'Send SMS after missed calls.' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0a2463] border border-yellow-400 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex justify-center mb-3 text-yellow-400">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daileranimation;
