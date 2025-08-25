import React from "react";
import {
  PhoneCall,
  Globe,
  MessageCircle,
  Server,
  Shield,
  Settings,
} from "lucide-react";

const iconClass = "w-5 h-5 text-white";

const FaqBubbles = () => {
  return (
    <div className="bg-white min-h-[864px] flex items-center justify-center px-4 mt-[-100px]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="mt-[50px] ml-[-65px]">
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


        {/* Right: Dual Circle with Icons on Sides */}
        {/* Right: Dual Circle with Icons on Sides */}
        <div className="relative w-[300px] h-[300px] mx-auto mt-[60px] ml-[250px] flex items-center justify-center  ">



          {/* Outer Bordered Circle */}
          <div className="absolute w-[300px] h-[300px] rounded-full border-[10px] border-gray-400"></div>

          {/* Inner Solid Orange Circle with ? */}
          <div className="w-[250px] h-[250px] rounded-full bg-gray-400 flex items-center justify-center z-10 shadow-lg">
            <span className="text-white text-[220px] font-bold">?</span>
          </div>

          {/* Left Side Icons */}
          {/* Left Side Icons */}
          {/* Left Side Icons */}
          <div className="absolute left-[10px] top-[-60px]">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute left-[-78px] bottom-[190px]">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 mt-[70px]">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
              <Server className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute left-[15px] top-1/2 -translate-y-1/2 mt-[185px]">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
              <Server className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="absolute right-[10px] top-[-60px]">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute right-[-80px] bottom-[190px]">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-md">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 mt-[70px]">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 mt-[187px]">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default FaqBubbles;
