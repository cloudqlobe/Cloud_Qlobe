import React from 'react';
import {
  PhoneCall,
  ShieldCheck,
  Wifi,
  Server,
  Globe,
  Cloud,
} from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      {/* Outer Container with Border */}
      <div className="w-full max-w-7xl bg-white shadow-lg border border-orange-300 p-0 md:p-1 flex flex-col md:flex-row overflow-hidden rounded-none">
        
        {/* Left Side Features */}
        <div className="w-full md:w-1/2 p-8 bg-white mt-[40px]">
          
          <div className="grid grid-cols-1 gap-8">
            {leftFeatures.map(({ icon: Icon, title, desc, color }, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className={`w-14 h-14 flex items-center justify-center ${color} shadow-lg rounded-none`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 bg-gray-200 p-8  border-orange-300 rounded-none">
          <h2 className="text-2xl font-default text-center mb-6 text-orange-500">
            Open Your Trade Account
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="text"
              placeholder="Contact Person Name"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="text"
              placeholder="Company Website"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <input
              type="text"
              placeholder="IP Address"
              className="border border-orange-400 p-3 rounded-none w-full"
            />
            <select className="border border-orange-400 p-3 rounded-none w-full">
              <option value="">-- Service Request --</option>
              <option>VoIP Services</option>
              <option>Carriers</option>
              <option>Quality Monitoring</option>
              <option>Routing</option>
              <option>SMS/OTT</option>
            </select>
            <textarea
              placeholder="Description"
              rows="3"
              className="border border-orange-400 p-3 rounded-none w-full col-span-2"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-none font-semibold hover:bg-orange-600 col-span-2"
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
