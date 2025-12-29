import { Globe, Users, Zap, Shield, Phone } from 'lucide-react';

const TelecomHeroSection = ({ onGetStartedClick, onLearnMoreClick }) => {

  return (
    <div className="min-h-[764px] py-4 bg-gradient-to-br from-white to-white flex items-center">

      <div className="container mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12
  mt-[100px] sm:mt-[120px] md:mt-[150px] lg:mt-0">
          {/* Left Side Content */}
<div className="lg:w-1/2 flex flex-col justify-center z-10 ml-0 lg:ml-[45px] text-center lg:text-left">
  <h1 className="text-3xl lg:text-4xl font-default text-gray-800 mb-6 leading-snug">
    Smart Dialer <span className="text-blue-500">Solutions for Businesses</span>
  </h1>

  <p className="text-gray-700 text-[15px] text-justify leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">
    CloudQlobe Dialer Solutions enable businesses to streamline outbound and inbound calls with efficiency and precision. Our platform ensures high call quality, intelligent routing, and real-time monitoring, helping teams maximize productivity and maintain seamless customer communication.
  </p>

  <div className="flex gap-4 justify-center lg:justify-start">
    <button
      onClick={onGetStartedClick}
      className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Get Started
    </button>

    <button
      onClick={onLearnMoreClick}
      className="border-2 border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-50 transition-all duration-300 hover:border-gray-400"
    >
      Learn More
    </button>
  </div>
</div>


          {/* Right Side Infographic */}
          <div className="lg:w-1/2 relative mt-[-40px]">
            <div className="space-y-8">

{/* Top Row - Circular Numbers */}
<div className="hidden lg:flex justify-center gap-6">

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    01
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-blue-600 text-sm">Automation</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">Smart auto-dialing for faster outreach</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    02
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-purple-600 text-sm">Efficiency</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">Boost call center productivity</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    03
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-bold text-orange-600 text-sm">Control</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-[80px]">Advanced call monitoring tools</p>
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
                        <h4 className="font-bold text-sm">Predictive Dialing</h4>
                        <p className="text-xs opacity-90">AI-driven predictive dialers that minimize wait times and maximize agent talk time.</p>
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
                        <h4 className="font-bold text-sm">Hosted Solutions</h4>
                        <p className="text-xs opacity-90">Cloud-based dialers with zero hardware dependency, ideal for remote call centers.</p>
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
                        <h4 className="font-bold text-sm">Real-Time Analytics</h4>
                        <p className="text-xs opacity-90">Track live agent performance, call quality, and campaign results instantly.</p>
                      </div>
                      <Globe className="w-6 h-6 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Mixed Layout */}
<div className="hidden lg:flex justify-end gap-8">
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