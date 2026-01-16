import {
  PhoneCall,
  Globe,
  MessageCircle,
  Server,
  Shield,
  Settings,
} from "lucide-react";

const FaqBubbles = ({ onGetStartedClick, onLearnMoreClick }) => {
  return (
    <div className="bg-white min-h-[864px] flex items-center justify-center sm:px-6 md:px-12 py-12 px-4 mt-[-100px]">
      <div className="max-w-7xl w-full flex flex-col min-[1171px]:flex-row min-[1171px]:justify-between items-center min-[1171px]:items-start pt-[50px]">

        <div className="flex flex-col items-center md:items-start justify-center ">
          <h1 className="text-4xl md:text-4xl leading-snug text-gray-500 mb-6">
            Need Clarity? <span className="text-blue-500 font-default">We’ve Got It</span>
          </h1>
          <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 max-w-[520px]">
            This FAQ section is designed to provide clarity on CloudQlobe’s offerings. Here you’ll find straightforward answers to common questions about our telecom solutions, communication platforms, and global connectivity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
              Read More
            </button>
          </div>

        </div>


        {/* Right: Dual Circle with Icons on Sides */}
        <div className="hidden min-[1171px]:flex relative w-[300px] h-[300px] items-center justify-center mr-[60px]">
          {/* Outer Bordered Circle */}
          <div className="absolute w-[300px] h-[300px] rounded-full border-[10px] border-gray-400"></div>

          {/* Inner Solid Orange Circle with ? */}
          <div className="w-[250px] h-[250px] rounded-full bg-gray-400 flex items-center justify-center z-10 shadow-lg">
            <span className="text-white text-[220px] font-bold">?</span>
          </div>
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
