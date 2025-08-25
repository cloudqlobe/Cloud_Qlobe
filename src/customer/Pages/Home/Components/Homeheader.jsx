import React from 'react';
import {
  BarChart3,
  MessageSquare,
  Settings,
  ImagePlus,
  Presentation,
  PhoneCall,
} from 'lucide-react';
import { FaGlobe } from "react-icons/fa6";
import { MdWifiCalling2 } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";

const Homeheader = () => {
  return (
    <section className="bg-white py-24 px-6 mt-[200px] ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="mt-[-150px]">
          <h1 className="text-4xl md:text-5xl font-default leading-snug text-gray-500 ml-[-40px] mb-6">
            The mastery of <span className="text-blue-500 font-default">Telecom</span>
          </h1>
        <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 ml-[-40px] max-w-[520px]">
  Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
  and secure SIP routing. With intelligent telecom solutions, we ensure consistent
  call quality, data efficiency, and scalable infrastructure across all regions.
</p>

          <div className="flex flex-wrap gap-4 ml-[-40px]">
            <button className="bg-blue-500 text-white px-6 py-3 squared-sm hover:bg-blue-600 transition font-medium shadow-md">
              Get Started
            </button>
            <button className="border border-gray-400 text-black px-6 py-3 rounded-sm hover:bg-gray-100 transition font-medium shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Diamond Infographic */}
        <div className="relative w-[320px] h-[320px] mx-auto mt-[-50px]">
          {/* Center Diamond */}
         <div className="absolute left-[120px] top-[110px] w-[200px] h-[200px] bg-white text-center flex flex-col gap-2 items-center justify-center text-sm font-semibold text-red-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-md z-20">
            < SiPaloaltosoftware className="-rotate-45 text-orange-300 w-[100px] h-[100px]" />
            
          </div>

          {/* Diamond Icons */}
          <div className="absolute left-[160px] top-[-30px] w-[80px] h-[110px] bg-gray-300 flex items-center justify-center rotate-45 shadow-md z-10" />

          <div className="absolute left-[-50px] top-[-45px] w-[200px] h-[110px] bg-[#1cae96] flex items-center justify-center rotate-45 shadow-md z-10">
            <MdOutlineMessage className="-rotate-45  ml-[-60px] text-green-100 w-[50px] h-[50px]" />
          </div>

          <div className="absolute left-[-173px] top-[118px] w-[142px] h-[110px] bg-blue-500 flex items-center justify-center rotate-45 shadow-md z-10">
            <MdWifiCalling2  className="-rotate-45 text-blue-200 w-[50px] h-[50px]" />
          </div>

          <div className="absolute left-[-58px] top-[55px] w-[100px] h-[110px] bg-gray-300 flex items-center justify-center rotate-45 shadow-md z-10" />

          <div className="absolute left-[-30px] top-[150px] w-[120px] h-[150px] bg-red-500 flex items-center justify-center rotate-45 shadow-md z-10">
            <BiSupport  className="-rotate-45 text-red-100 w-[50px] h-[50px]" />
          </div>

          <div className="absolute left-[130px] top-[160px] w-[150px] h-[100px] bg-purple-500 flex items-center justify-center rotate-45 shadow-md z-10">
            <GrSettingsOption className="-rotate-45 ml-[40px] text-purple-100 w-[50px] h-[50px]" />
          </div>

          <div className="absolute left-[80px] top-[190px] w-[100px] h-[100px] bg-gray-300 flex items-center justify-center rotate-45 shadow-md z-0" />

          <div className="absolute left-[220px] top-[-10px] w-[230px] h-[230px] bg-[#f5c617] flex items-center justify-center rotate-45 shadow-lg shadow-yellow-300/50 z-0">
            <FaGlobe  className="-rotate-45 text-yellow-100 w-[100px] h-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeheader;
