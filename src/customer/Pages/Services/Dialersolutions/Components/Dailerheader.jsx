import React from 'react';
import { Globe, Users, Zap, Shield, Phone, TrendingUp } from 'lucide-react';

const TelecomHeroSection = () => {
  const infographicItems = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      description: "Connect worldwide with reliable VoIP platforms across all regions and markets",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      gearColor: "bg-green-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Focus", 
      description: "Dedicated support and personalized telecom solutions for every business need",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      gearColor: "bg-blue-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure SIP",
      description: "Enterprise-grade security with encrypted routing and protected data transmission",
      color: "bg-gradient-to-br from-purple-400 to-purple-600", 
      gearColor: "bg-purple-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "High Performance",
      description: "Lightning-fast call processing with optimized network infrastructure worldwide",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      gearColor: "bg-orange-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Quality",
      description: "Crystal clear voice transmission with advanced codec technology and routing",
      color: "bg-gradient-to-br from-red-400 to-red-600",
      gearColor: "bg-red-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalability",
      description: "Grow your business with flexible infrastructure that adapts to your needs",
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      gearColor: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-[764px] py-4 bg-gradient-to-br from-white to-white flex items-center">

      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 flex flex-col justify-center z-10 ml-[45px] mt-[-50px]">
            <h1 className="text-4xl lg:text-5xl font-default text-gray-800 mb-6 leading-snug">
              The mastery of <span className="text-blue-500">Telecom</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-[520px]">
              Cloudqlobe enables businesses to connect worldwide using reliable VoIP
              platforms and secure SIP routing. With intelligent telecom solutions,
              we ensure consistent call quality, data efficiency, and scalable
              infrastructure across all regions.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 squared-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 squared-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Infographic */}
          <div className="lg:w-1/2 relative mt-[-50px]">
            <div className="space-y-8">
              
              {/* Top Row - Circular Numbers */}
              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    01
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-blue-600 text-sm">INFODATA</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">Global VoIP connectivity solutions</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    02
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-purple-600 text-sm">INFODATA</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">Secure SIP routing infrastructure</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    03
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-orange-600 text-sm">INFODATA</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">High-quality call processing</p>
                  </div>
                </div>
              </div>

              {/* Middle Row - Horizontal Bars */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    01
                  </div>
                  <div className="flex-1 ml-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-4 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm">INFODATA</h4>
                        <p className="text-xs opacity-90">Enterprise telecom solutions with advanced routing capabilities</p>
                      </div>
                      <Shield className="w-6 h-6 text-white opacity-80" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    02
                  </div>
                  <div className="flex-1 ml-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full px-6 py-4 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm">INFODATA</h4>
                        <p className="text-xs opacity-90">Scalable infrastructure for growing business communication needs</p>
                      </div>
                      <Users className="w-6 h-6 text-white opacity-80" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    03
                  </div>
                  <div className="flex-1 ml-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full px-6 py-4 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm">INFODATA</h4>
                        <p className="text-xs opacity-90">Real-time analytics and monitoring for optimal performance</p>
                      </div>
                      <Globe className="w-6 h-6 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Mixed Layout */}
              <div className="flex justify-end gap-8">
                {/* Circular Icons */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - Speech Bubble Style */}
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomHeroSection;