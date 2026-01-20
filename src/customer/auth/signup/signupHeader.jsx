import {
  Shield,
  Smartphone,
  Wifi,
  Cloud,
  CreditCard,
  MapPin,
  Mail,
  CheckCircle,
  Layers,
  Globe,
  Lock,
  Server,
} from "lucide-react";
import { toast } from "react-toastify";

const AnimatedHeader = ({ onRegisterClick, selectedType  }) => {

const handleCustomerRegister = () => {
  toast.success("Customer Registration Page");
  onRegisterClick("customer"); // 🔥 pass type
};

const handleCarrierRegister = () => {
  toast.info("Carrier Registration Page");
  onRegisterClick("carrier"); // 🔥 pass type
};

  const activeClass =
    "bg-yellow-500 text-white border-yellow-500 shadow-lg scale-105";

  const inactiveClass =
    "bg-white text-gray-500 border-gray-400 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-500";


  const flags = [
    "https://flagcdn.com/w40/us.png",
    "https://flagcdn.com/w40/gb.png",
    "https://flagcdn.com/w40/ca.png",
    "https://flagcdn.com/w40/au.png",
    "https://flagcdn.com/w40/de.png",
    "https://flagcdn.com/w40/fr.png",
  ];

  // Background icons array
  const bgIcons = [
    <Globe className="w-12 h-12 text-orange-300/20" />,
    <Lock className="w-10 h-10 text-blue-300/20" />,
    <Server className="w-14 h-14 text-purple-300/20" />,
    <Smartphone className="w-12 h-12 text-green-300/20" />,
    <Cloud className="w-14 h-14 text-pink-300/20" />,
    <Wifi className="w-10 h-10 text-teal-300/20" />,
    <CreditCard className="w-12 h-12 text-gray-300/20" />,
  ];

  return (
    <div className="relative min-h-[580px] lg:h-[580px] bg-white overflow-hidden">

      {/* Background scattered icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgIcons.map((icon, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container px-6 py-12 relative z-10">
        {/* Two-column layout */}
<div className="
  flex flex-col md:flex-row 
  items-center justify-between 
  min-h-[70vh] gap-12 
  pt-[123px] 
  lg:pt-0 
  lg:ml-[80px]
">
          {/* Left Content */}
          <div
            className="flex-1 space-y-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-default text-orange-600">
                Next-Gen <span className="text-blue-600">Registration</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Experience the future of secure account creation with our
                advanced platform
              </p>

              {/* Flags row */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                {flags.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-[3px] border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={src}
                      alt="country flag"
                      className="w-10 h-6 object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
      <button
        onClick={handleCustomerRegister}
        className={`
          px-6 py-2 rounded-lg border font-medium transition-all duration-300
          ${selectedType === "customer" ? activeClass : inactiveClass}
        `}
      >
        Register As Customer
      </button>

      {/* Carrier */}
      <button
        onClick={handleCarrierRegister}
        className={`
          ml-6 px-6 py-2 rounded-lg border font-medium transition-all duration-300
          ${selectedType === "carrier" ? activeClass : inactiveClass}
        `}
      >
        Register As Carrier
      </button>



          </div>

          {/* Right Animation */}
          <div className="flex-1 hidden md:flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Outer Ring */}
              <div className="absolute inset-0 animate-orbit-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Inner Ring */}
              <div className="absolute inset-16 animate-orbit-reverse">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Orbit Lines */}
              <div className="absolute inset-8 border border-gray-300 rounded-full animate-pulse"></div>
              <div
                className="absolute inset-12 border border-gray-200 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes orbit-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.6);
          }
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-orbit-slow {
          animation: orbit-slow 15s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 12s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fade-up 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeader;
