import React from 'react';
import { Rocket, ShieldCheck, Users, Globe } from 'lucide-react';

const Aboutheader = () => {
  return (
    <section className="bg-white py-40 px-6 md:px-20 h-[764px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side: Content */}
        <div className='mt-[20px]'>
          <h1 className="text-4xl font-default text-black mb-6 ml-[-40px]">Explore with <span className='text-blue-500'>Cloud Qlobe</span></h1>
           <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 ml-[-40px] max-w-[520px]">
  Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
  and secure SIP routing. With intelligent telecom solutions, we ensure consistent
  call quality, data efficiency, and scalable infrastructure across all regions.
</p>
          <div className="flex space-x-4 ml-[-40px]">
            <button className="bg-blue-500 text-white px-6 py-2 squared hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 squared hover:bg-orange-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Infographics */}
        <div className="grid grid-cols-2 gap-6 mt-[10px]">
          {/* Card 1 */}
          <div className="bg-orange-100 p-6 rounded-lg text-center shadow hover:shadow-md transition">
            <Globe className="mx-auto text-orange-500 w-[50px] h-[50px] mb-3" />
            <h4 className="text-lg font-semibold text-orange-800">Global Coverage</h4>
            <p className="text-sm text-orange-900 mt-1">Presence in 20+ countries</p>
          </div>

          {/* Card 2 */}
          <div className="bg-teal-100 p-6 rounded-lg text-center shadow hover:shadow-md transition">
            <Users className="mx-auto text-teal-500 w-[50px] h-[50px] mb-3" />
            <h4 className="text-lg font-semibold text-teal-800">Client Base</h4>
            <p className="text-sm text-teal-900 mt-1">Over 15,000 users onboarded</p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-100 p-6 rounded-lg text-center shadow hover:shadow-md transition">
            <Rocket className="mx-auto text-purple-500 w-[50px] h-[50px] mb-3" />
            <h4 className="text-lg font-semibold text-purple-800">Fast Performance</h4>
            <p className="text-sm text-purple-900 mt-1">Optimized for high speed</p>
          </div>

          {/* Card 4 */}
          <div className="bg-indigo-100 p-6 rounded-lg text-center shadow hover:shadow-md transition">
            <ShieldCheck className="mx-auto text-indigo-500 w-[50px] h-[50px] mb-3" />
            <h4 className="text-lg font-semibold text-indigo-800">Secure by Design</h4>
            <p className="text-sm text-indigo-900 mt-1">Built-in data protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutheader;
