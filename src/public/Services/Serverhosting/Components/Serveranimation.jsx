import React from 'react';
import {
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  Monitor,
  Settings,
  Globe,
  Database,
} from 'lucide-react';

const Serveranimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-6 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side Content - New Open Design */}
        <div className="flex-1 flex flex-col justify-center p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-400 shadow-lg space-y-6">
          <h1 className="text-4xl font-default leading-snug text-white">
            Next-gen server hosting <span className='text-yellow-400'>You can rely on</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Experience ultra-fast infrastructure, rock-solid security, and global reach —
            optimized for performance-hungry applications and mission-critical workloads.
          </p>

          {/* Large Visual Feature Row */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-4">
              <Server className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-white">Dedicated Hosting</h3>
                <p className="text-gray-400 text-sm">Exclusive resources with full control.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-[60px]">
              <Cloud className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-white">Cloud Solutions</h3>
                <p className="text-gray-400 text-sm">Scale seamlessly with demand.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-white">DDoS Protection</h3>
                <p className="text-gray-400 text-sm">Advanced traffic filtering 24/7.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-[90px]">
              <Cpu className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-white">High Performance</h3>
                <p className="text-gray-400 text-sm">Latest-gen CPUs & NVMe SSDs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 bg-transparent border-2 border-yellow-400 text-white rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-default text-white mb-6">Get a Hosting Plan</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
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
              Request Plan
            </button>
          </form>
        </div>
      </div>

      {/* Feature Tabs - Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Server size={28} />, title: 'Dedicated Hosting', desc: 'Full resources, no sharing.' },
          { icon: <Cloud size={28} />, title: 'Cloud Servers', desc: 'Scale anytime, anywhere.' },
          { icon: <ShieldCheck size={28} />, title: 'DDoS Protection', desc: 'Real-time traffic filtering.' },
          { icon: <Cpu size={28} />, title: 'High Performance', desc: 'Fast SSD + modern CPUs.' },
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

      {/* Feature Tabs - Row 2 */}
     
    </div>
  );
};

export default Serveranimation;
