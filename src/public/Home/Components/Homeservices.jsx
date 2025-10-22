import React from "react";
import {
  Users,
  TrendingUp,
  FileText,
  Share2,
  Zap,
  Globe,
  Headphones,
  ShieldCheck,
  MapPin,
  Mic,
  Car,
} from "lucide-react";

export default function TechDashboard() {
  const [currentFeature, setCurrentFeature] = React.useState(0);

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % quickSetup.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { percentage: 30, label: "Lorem Ispum Suspendisse", icon: MapPin },
    { percentage: 29, label: "In Car Voice Experience", icon: Mic },
    { percentage: 29, label: "In Car Experience", icon: Car },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2463] via-[#1e3a8a] to-[#0f172a] p-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af15_1px,transparent_1px),linear-gradient(to_bottom,#1e40af15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 -top-48 -right-48 blur-3xl animate-zoom"></div>
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-15 top-1/3 -left-64 blur-3xl animate-zoom"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-15 -bottom-48 right-1/4 blur-3xl animate-zoom"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-10 bottom-20 left-1/4 blur-3xl animate-zoom"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="absolute top-20 left-20 animate-zoom">
          <Globe className="w-12 h-12 text-cyan-400/30" />
        </div>
        <div className="absolute top-40 right-32 animate-zoom">
          <Zap className="w-16 h-16 text-amber-400/30" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-zoom">
          <Users className="w-14 h-14 text-emerald-400/30" />
        </div>
        <div className="absolute top-1/3 right-20 animate-zoom">
          <ShieldCheck className="w-12 h-12 text-violet-400/30" />
        </div>
      </div>

      {/* Added margin-top to move content down */}
      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch mb-12">
          {/* LEFT COLUMN */}
          <div className="rounded-none p-4 bg-white/5 shadow-2xl border border-white/10 flex flex-col justify-between backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
            <div>
              <div className="flex items-center mb-4 pb-2 border-b border-white/20">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg animate-zoom">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-white ml-3">
                  Quick Setup
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickSetup.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 rounded-xl p-3 text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group backdrop-blur-sm"
                    >
                      <div
                        className={`p-3 bg-gradient-to-br ${item.colors} rounded-full inline-flex items-center justify-center mb-2 animate-zoom`}>
                        <Icon className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                      <p className="text-gray-100 text-[11px] font-medium leading-tight group-hover:text-white transition-colors">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="rounded-none p-6 bg-white/5 shadow-2xl border border-white/10 flex flex-col justify-between backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300">
            <div>
              <div className="flex items-center mb-6 pb-3 border-b border-white/20">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg animate-zoom">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white ml-3">
                  Portal Features
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 p-5 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                  <h3 className="text-white font-bold text-lg mb-1">
                    Customized Client Portal
                  </h3>
                  <p className="text-purple-50 text-sm">
                    Access your personalized dashboard
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 border border-blue-400/40 p-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group shadow-sm hover:shadow-lg">
                    <TrendingUp className="w-7 h-7 text-blue-300 mb-1 group-hover:text-white group-hover:scale-110 transition-all" />
                    <p className="text-white text-sm font-semibold group-hover:text-white transition-colors">
                      Real-time Analytics
                    </p>
                  </div>
                  <div className="bg-white/10 border border-purple-400/40 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group shadow-sm hover:shadow-lg">
                    <Users className="w-7 h-7 text-purple-300 mb-1 group-hover:text-white group-hover:scale-110 transition-all" />
                    <p className="text-white text-sm font-semibold group-hover:text-white transition-colors">
                      Team Management
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-5 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                  <p className="text-white text-4xl font-bold mb-1">99.9%</p>
                  <p className="text-blue-50 font-medium text-sm">
                    Uptime Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="squared-2xl p-6 bg-white/5 shadow-2xl border border-white/10 flex flex-col backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300">
            <div className="flex items-center mb-6 pb-4 border-b border-white/20 w-full">
              <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg animate-zoom">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white ml-3">
                Client Stats
              </h2>
            </div>

            <div className="space-y-6 flex-grow">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                const colors = [
                  {
                    gradient: "from-emerald-400 to-green-500",
                    textColor: "text-emerald-900",
                    circleStart: "#34d399",
                    circleEnd: "#10b981",
                  },
                  {
                    gradient: "from-blue-400 to-cyan-500",
                    textColor: "text-blue-900",
                    circleStart: "#60a5fa",
                    circleEnd: "#06b6d4",
                  },
                  {
                    gradient: "from-amber-400 to-yellow-500",
                    textColor: "text-amber-900",
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
                          stroke="#374151"
                          strokeWidth="6"
                          fill="none"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke={`url(#gradient-circle-${index})`}
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray="176"
                          strokeDashoffset={
                            176 - (176 * stat.percentage) / 100
                          }
                          className="transition-all duration-1000"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id={`gradient-circle-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={color.circleStart} />
                            <stop offset="100%" stopColor={color.circleEnd} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-xs font-bold">
                          {stat.percentage}%
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex-grow bg-gradient-to-r ${color.gradient} rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
                    >
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-20 animate-zoom">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5 text-white animate-zoom" />
                          <p className="text-white text-2xl font-bold">
                            {stat.percentage}%
                          </p>
                        </div>
                        <p
                          className={`${color.textColor} text-xs font-medium`}
                        >
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Sliding Feature Section */}
        <div className="rounded-none p-6 bg-gradient-to-br from-[#0a2463]/90 via-[#1e3a8a]/70 to-[#0f172a]/90 shadow-2xl border-2 border-cyan-400/30 backdrop-blur-2xl relative overflow-hidden mt-12">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/15 to-purple-500/10"></div>
          </div>

          <div className="relative z-10">
            <div className="relative h-16 overflow-hidden border-t border-b border-white/10 bg-black/20">
              {quickSetup.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === currentFeature;
                const isPrev =
                  index === (currentFeature - 1 + quickSetup.length) % quickSetup.length;
                const isNext = index === (currentFeature + 1) % quickSetup.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "translate-x-0 opacity-100 scale-100"
                        : isPrev
                        ? "-translate-x-full opacity-0 scale-95"
                        : isNext
                        ? "translate-x-full opacity-0 scale-95"
                        : "translate-x-full opacity-0 scale-90"
                    }`}
                  >
                    <div className="flex items-center gap-6 h-full p-4 relative">
                      <div className="relative flex-shrink-0">
                        <div
                          className={`relative p-3 bg-gradient-to-br ${feature.colors} shadow-2xl border-2 border-white/20 animate-zoom`}
                        >
                          <Icon className="w-10 h-10 text-white drop-shadow-xl" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-0.5">
                        <h3 className="text-lg font-bold text-white leading-tight tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-blue-200/90 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* ⭐ Stars on the right side */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 opacity-90">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 opacity-75">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 opacity-75">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 opacity-75">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.27 0 9.423l8.332-1.268z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        .animate-zoom {
          animation: zoom 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}