import React from 'react';
import {
  Globe,
  Users,
  Zap,
  Shield,
  Phone,
  TrendingUp,
  Calendar,
  Briefcase,
} from 'lucide-react';

const TelecomHeroSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-gray-100 flex items-center h-[864px] mt-[-100px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Side Content */}
          <div className="mt-[50px] ml-[85px]">
            <h1 className="text-5xl md:text-4xl font-default leading-snug text-gray-500 ml-[-40px] mb-6">
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

          {/* Right Side Infographic */}
          <div className="lg:w-1/2 relative - ml-[280px] mt-[60px]">
            <div className="relative w-[460px] h-[460px] mx-auto">

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44">
                <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                    <h3 className="text-gray-800 font-bold text-sm text-center mb-1">8 FACTORS</h3>
                    <h4 className="text-gray-800 font-bold text-xs text-center mb-2">INFOGRAPHIC</h4>
                    <h4 className="text-gray-800 font-bold text-xs text-center">TEMPLATE</h4>
                  </div>
                </div>
              </div>

              {/* Icon Circles - Independent */}
              <div className="absolute circle-top-left" style={{ top: '50px', left: '16px' }}>
                <CircleIcon icon={<Phone className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-top-center" style={{ top: '-6px', left: '50%', transform: 'translateX(-50%)' }}>
                <CircleIcon icon={<Zap className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-top-right" style={{ top: '48px', right: '16px' }}>
                <CircleIcon icon={<Shield className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-middle-left" style={{ top: '50%', left: '-10px', transform: 'translateY(-50%)' }}>
                <CircleIcon icon={<Users className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-middle-right" style={{ top: '50%', right: '-10px', transform: 'translateY(-50%)' }}>
                <CircleIcon icon={<TrendingUp className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-bottom-left" style={{ bottom: '48px', left: '16px' }}>
                <CircleIcon icon={<Globe className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-bottom-center" style={{ bottom: '-6px', left: '50%', transform: 'translateX(-50%)' }}>
                <CircleIcon icon={<Calendar className="w-7 h-7 text-gray-700" />} />
              </div>

              <div className="absolute circle-bottom-right" style={{ bottom: '48px', right: '16px' }}>
                <CircleIcon icon={<Briefcase className="w-7 h-7 text-gray-700" />} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CircleIcon = ({ icon }) => (
  <div className="w-28 h-28 bg-yellow-400 rounded-full flex items-center justify-center">
    <div className="w-20 h-20 bg-gray-200 rounded-full shadow-lg flex items-center justify-center mt-[-30px] ml-[-20px]">
      {icon}
    </div>
  </div>
);

export default TelecomHeroSection;