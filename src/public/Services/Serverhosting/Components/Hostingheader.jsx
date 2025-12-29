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

const Hostingheader = ({ onGetStartedClick, onLearnMoreClick }) => {
  return (
    <div className="py-16 bg-white  flex items-center h-[864px] mt-[-100px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left Side Content */}
          <div className="mt-[50px] ml-0 lg:ml-[40px] text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-default text-gray-800 mb-6 leading-snug max-w-[600px]">
              Advanced{' '}
              <span className="text-blue-500 font-default">
                Hosting solutions
              </span>
            </h1>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0 text-justify">
              CloudQlobe provides secure and scalable cloud hosting solutions for businesses
              of all sizes. Our platform ensures high performance, reliable uptime, and
              optimized resources. With advanced security and global infrastructure, we
              deliver seamless access and uninterrupted connectivity.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={onGetStartedClick}
                className="bg-blue-500 text-white px-6 py-3 squared-sm hover:bg-blue-600 transition font-medium shadow-md"
              >
                Get Started
              </button>

              <button
                onClick={onLearnMoreClick}
                className="border border-gray-400 text-black px-6 py-3 rounded-sm hover:bg-gray-100 transition font-medium shadow-sm"
              >
                Learn More
              </button>
            </div>
          </div>


          {/* Right Side Infographic */}
          <div className="hidden lg:block lg:w-1/2 relative mt-[60px]">
            <div className="relative w-[460px] h-[460px] mx-auto">

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44">
                <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                    <h3 className="text-gray-800 font-bold text-sm text-center mb-1">Next-Gen </h3>
                    <h4 className="text-gray-800 font-bold text-xs text-center mb-2">Server Hosting</h4>
                    <h4 className="text-gray-800 font-bold text-xs text-center">Solutions</h4>
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

export default Hostingheader;