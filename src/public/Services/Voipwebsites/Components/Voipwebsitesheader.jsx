import {
  DollarSign,
  Settings,
  Lightbulb,
  PieChart,
  BarChart3
} from "lucide-react";

const Voipwebsiteheader = ({ onGetStartedClick, onLearnMoreClick }) => {
  return (
    <div className="h-[764px] bg-white flex items-center justify-center px-4 py-8">
      {/* Main Container */}
<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side Content */}
<div className="mt-[80px] text-center lg:text-left">
  <h1 className="text-3xl sm:text-4xl lg:text-4xl font-default leading-snug text-gray-500 mb-6">
    Next-Gen{' '}
    <span className="text-blue-500 font-default">
      Voip Website solutions
    </span>
  </h1>

  <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 max-w-[520px] mx-auto lg:mx-0">
    CloudQlobe provides custom VoIP website solutions for seamless online
    communication. Our platforms offer reliability, performance, and scalability,
    helping businesses connect with clients efficiently. With advanced features
    and intuitive design, we ensure secure and future-ready VoIP websites to
    support your growth.
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
<div className="hidden lg:flex relative items-center justify-center mt-[100px]">

          {/* Timeline Items */}
          <div className="space-y-6">

            {/* First Option - Red */}
            <div className="flex items-center mt-[-130px] ml-[140px]">
              <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-full p-4 shadow-lg w-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <DollarSign className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="text-sm font-bold mb-1">Custom Voip Websites</h3>
                    <h4 className="text-xs font-semibold mb-1 opacity-90">Tailored for your telecom business</h4>
                    <p className="text-xs opacity-85 leading-tight">


                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Option - Yellow */}
            <div className="flex items-center ml-[200px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-4 shadow-lg w-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Settings className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="text-sm font-bold mb-1">Integrated Features</h3>
                    <h4 className="text-xs font-semibold mb-1 opacity-90">Billing & CRM Ready</h4>
                    <p className="text-xs opacity-85 leading-tight">


                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Option - Green */}
            <div className="flex items-center ml-[300px]">
              <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full p-4 shadow-lg w-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Lightbulb className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="text-sm font-bold mb-1">Secure Hosting</h3>
                    <h4 className="text-xs font-semibold mb-1 opacity-90">Reliable & Scalable</h4>
                    <p className="text-xs opacity-85 leading-tight">



                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Option - Blue */}
            <div className="flex items-center ml-[200px]">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-full p-4 shadow-lg w-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <PieChart className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="text-sm font-bold mb-1">Real-Time Data</h3>
                    <h4 className="text-xs font-semibold mb-1 opacity-90">Analytics & Reports</h4>
                    <p className="text-xs opacity-85 leading-tight">

                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth Option - Purple */}
            <div className="flex items-center ml-[140px]">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-full p-4 shadow-lg w-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <BarChart3 className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="text-sm font-bold mb-1">Sip & Api Integration</h3>
                    <h4 className="text-xs font-semibold mb-1 opacity-90">Advanced Features</h4>
                    <p className="text-xs opacity-85 leading-tight">

                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Voipwebsiteheader;