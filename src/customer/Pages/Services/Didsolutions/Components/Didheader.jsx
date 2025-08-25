import React from 'react';
import { Globe, Users, Zap, Shield } from 'lucide-react';

const TelecomHeroSection = () => {
  return (
    <div className="py-16 bg-white flex items-center h-[764px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Side Content */}
          <div className="lg:w-1/2 flex flex-col justify-center z-10 mt-[-50px] ml-[50px]">
            <h1 className="text-4xl lg:text-5xl font-default text-gray-800 mb-6 leading-snug">
              The mastery of <span className="text-blue-500">Telecom</span>
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-[520px]">
              Cloudqlobe enables businesses to connect worldwide using reliable VoIP
              platforms and secure SIP routing. With intelligent telecom solutions,
              we ensure consistent call quality, data efficiency, and scalable
              infrastructure across all regions.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 squared-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 squared-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Timeline Infographic */}
          <div className="lg:w-1/2 relative space-y-1.5 ml-[50px] mt-[-40px]">

            {/* Item 1 */}
            <div className="flex items-center relative">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                <Globe className="w-5 h-5" />
              </div>
              <div className="ml-4 bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-4 text-white shadow-lg flex-1 max-w-[200px] relative">
                <h3 className="font-bold text-sm mb-2">Global Reach</h3>
                <p className="text-xs leading-relaxed opacity-90">
                  Connect worldwide with reliable VoIP platforms across all regions and markets
                </p>
                <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-current"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="h-8 w-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-end pr-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg">01</div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center relative ml-[-30px]">
              <div className="flex-1 flex items-center justify-center">
                <div className="h-8 w-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-start pl-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg">02</div>
                </div>
              </div>
              <div className="mr-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 text-white shadow-lg flex-1 max-w-[200px] relative ml-[-50px]">
                <h3 className="font-bold text-sm mb-2">Customer Focus</h3>
                <p className="text-xs leading-relaxed opacity-90">
                  Dedicated support and personalized telecom solutions for every business need
                </p>
                <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-current"></div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                <Users className="w-5 h-5" />
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center relative">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                <Shield className="w-5 h-5" />
              </div>
              <div className="ml-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-4 text-white shadow-lg flex-1 max-w-[200px] relative">
                <h3 className="font-bold text-sm mb-2">Secure SIP</h3>
                <p className="text-xs leading-relaxed opacity-90">
                  Enterprise-grade security with encrypted routing and protected data transmission
                </p>
                <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-current"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="h-8 w-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-end pr-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg">03</div>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center relative">
              <div className="flex-1 flex items-center justify-center">
                <div className="h-8 w-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-start pl-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg">04</div>
                </div>
              </div>
              <div className="mr-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-4 text-white shadow-lg flex-1 max-w-[200px] relative">
                <h3 className="font-bold text-sm mb-2">High Performance</h3>
                <p className="text-xs leading-relaxed opacity-90">
                  Lightning-fast call processing with optimized network infrastructure worldwide
                </p>
                <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-current"></div>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                <Zap className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomHeroSection;
