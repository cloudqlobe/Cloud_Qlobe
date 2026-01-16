import React from "react";
import {
  Users,
  TrendingUp,
  Share2,
  Zap,
  Globe,
  Headphones,
  ShieldCheck,
  PhoneCall,
  Network,
  Wifi,
} from "lucide-react";

export default function TechDashboard() {
  const [currentFeature, setCurrentFeature] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const quickSetup = [
    {
      title: "Free Tech Consultancy",
      icon: Globe,
      colors: "from-blue-500 to-cyan-500",
      description: "Get expert advice on implementing our solutions",
    },
    {
      title: "Dedicated Account Manager",
      icon: Users,
      colors: "from-purple-500 to-pink-500",
      description: "Personal support throughout your journey",
    },
    {
      title: "Quick Account Setup",
      icon: Zap,
      colors: "from-amber-500 to-orange-500",
      description: "Get started in minutes with our streamlined process",
    },
    {
      title: "Free Credit for Testing",
      icon: TrendingUp,
      colors: "from-green-500 to-emerald-500",
      description: "Try our platform risk-free with complimentary credits",
    },
    {
      title: "24/7 Support",
      icon: Headphones,
      colors: "from-indigo-500 to-violet-500",
      description: "Round-the-clock assistance whenever you need it",
    },
    {
      title: "Customer Client Portal",
      icon: ShieldCheck,
      colors: "from-pink-500 to-rose-500",
      description: "Access all your resources in one secure location",
    },
  ];

  const statsData = [
    { percentage: 85, label: "Global VoIP Coverage", icon: PhoneCall },
    { percentage: 78, label: "HD Voice Connectivity", icon: Network },
    { percentage: 92, label: "Uptime Across Routes", icon: Wifi },
  ];

  // 🔄 Auto-switch 3 main boxes every 3 seconds on mobile
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 🔄 Auto-slide bottom feature text
React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentFeature((prev) => (prev + 1) % quickSetup.length);
  }, 3000);
  return () => clearInterval(interval);
}, [quickSetup.length]);

  return (
    <div className="min-h-[600px] bg-[#0a2463] p-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af20_1px,transparent_1px),linear-gradient(to_bottom,#1e40af20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-48 -right-48 blur-3xl animate-pulse-slow" />
        <div
          className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full top-1/3 -left-64 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full -bottom-48 right-1/4 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-8xl mx-auto relative z-10 mt-[-20px]">
        {/* ✅ Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch mb-12">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>

        {/* ✅ Mobile Fade Slider */}
        <div className="lg:hidden relative h-[410px] mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              {renderBox(i)}
            </div>
          ))}
        </div>

        {/* 🌟 Bottom Animated Features */}
        <div className="rounded-xl p-6 bg-[#0a2463]/40 backdrop-blur-md shadow-2xl border-2 border-white/30 relative overflow-hidden mt-10 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          </div>

          <div className="relative z-10">
            <div className="relative h-[40px] overflow-hidden ">
              {quickSetup.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === currentFeature;
                const isPrev = index === (currentFeature - 1 + quickSetup.length) % quickSetup.length;
                const isNext = index === (currentFeature + 1) % quickSetup.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive
                      ? "translate-x-0 opacity-100 scale-100"
                      : isPrev
                        ? "-translate-x-full opacity-0 scale-95"
                        : isNext
                          ? "translate-x-full opacity-0 scale-95"
                          : "translate-x-full opacity-0 scale-90"
                      }`}
                  >
                    <div className="flex items-center gap-6 h-full relative">
                      <div className="flex-shrink-0">
                        <div className={`p-1.5 sm:p-3 bg-gradient-to-br ${feature.colors} border-2 border-white/30 rounded-lg shadow-md`}>
                          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-0.5">
                        <h3 className="text-[11px] sm:text-lg font-semibold text-white leading-tight tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-[9px] sm:text-xs text-gray-300 font-normal leading-relaxed">
                          {feature.description}
                        </p>
                      </div>


                      <div className="hidden sm:flex gap-1.5 sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#facc15"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 drop-shadow-md"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z" />
                          </svg>
                        ))}
                      </div>


                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 🔧 Animations */}
      <style>{`
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-zoom {
          animation: zoom 2.5s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

  // ✅ Helper for rendering each main box
  function renderBox(index) {
    if (index === 0) {
      return (
        <div className="rounded-xl p-4 bg-[#0a2463]/40 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col justify-between hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div>
            <div className="flex items-center mb-4 ">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg ">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-lg font-default text-white ml-3">
                Quick Setup
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {quickSetup.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#0a2463]/60 to-blue-900/30 rounded-xl p-3 text-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg group border border-white/10"
                  >
                    <div
                      className={`p-3 bg-gradient-to-br ${item.colors} rounded-full inline-flex items-center justify-center mb-2 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <p className="text-gray-200 text-[11px] font-normal leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (index === 1) {
      return (
        <div className="rounded-xl p-6 bg-[#0a2463]/40 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col justify-between hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div>
            <div className="flex items-center mb-6 ">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-lg">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-default text-white ml-3">
                Portal Features
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 p-5 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl">
                <h3 className="text-white font-semibold text-lg mb-1">
                  Customized Client Portal
                </h3>
                <p className="text-purple-50 text-sm font-normal">
                  Access your personalized dashboard
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-300/20 p-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group shadow-md hover:shadow-xl">
                  <TrendingUp className="w-7 h-7 text-blue-400 mb-1 group-hover:text-white group-hover:scale-110 transition-all" />
                  <p className="text-gray-200 text-sm font-normal group-hover:text-white transition-colors">
                    Real-time Analytics
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-300/20 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group shadow-md hover:shadow-xl">
                  <Users className="w-7 h-7 text-pink-400 mb-1 group-hover:text-white group-hover:scale-110 transition-all" />
                  <p className="text-gray-200 text-sm font-normal group-hover:text-white transition-colors">
                    Team Management
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 p-5 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl">
                <p className="text-white text-4xl font-semibold mb-1">99.9%</p>
                <p className="text-blue-50 font-normal text-sm">
                  Uptime Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (index === 2) {
      return (
        <div className="rounded-xl p-6 bg-[#0a2463]/40 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col hover:shadow-pink-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center mb-6  w-full">
            <div className="p-2 bg-gradient-to-br from-red-500 to-red-500 rounded-lg ">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-default text-white ml-3">
              VoIP Performance
            </h2>
          </div>

          <div className="space-y-6 flex-grow">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              const colors = [
                {
                  gradient: "from-emerald-400 to-green-500",
                  circleStart: "#34d399",
                  circleEnd: "#10b981",
                },
                {
                  gradient: "from-red-400 to-red-500",
                  circleStart: "#ef1616",
                  circleEnd: "#d40606",
                },
                {
                  gradient: "from-amber-400 to-yellow-500",
                  circleStart: "#fbbf24",
                  circleEnd: "#eab308",
                },
              ];
              const color = colors[index];
              return (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#1e3a8a"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="176"
                        strokeDashoffset={`176 - (176 * stat.percentage) / 100`}
                        className="transition-all duration-1000"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor={color.circleStart}
                          />
                          <stop
                            offset="100%"
                            stopColor={color.circleEnd}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-300 text-xs font-semibold">
                        {stat.percentage}%
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex-grow bg-gradient-to-r ${color.gradient} rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-white animate-zoom" />
                        <p className="text-white text-2xl font-semibold">
                          {stat.percentage}%
                        </p>
                      </div>
                      <p className="text-white text-xs font-normal">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
