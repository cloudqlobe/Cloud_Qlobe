import React, { useEffect, useState } from "react";
import { Globe, Wifi, Shield, Zap, Cloud, Star, Diamond, Hexagon, Triangle, Server, Database, Lock, Smartphone, Users, Rocket, Heart, Sparkles } from "lucide-react";
import CustomerRegisterFlow from "./forms/customerForm";
import VendorRegisterForm from "./forms/carrierForm";

const ModernRegisterFlow = ({ FormType }) => {
    const [registrationType, setRegistrationType] = useState(FormType || "customer");

    // 🔥 Sync when parent changes (button click above)
    useEffect(() => {
        if (FormType) {
            setRegistrationType(FormType);
        }
    }, [FormType]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-900 to-slate-900 relative overflow-hidden">

            {/* Enhanced Modern Background with Animated Icons */}
            <div data-no-translate className="absolute inset-0">
                {/* Dynamic gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10" style={{ animation: "pulse 4s infinite" }}></div>

                {/* Large animated orbs */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-bl from-pink-500/20 to-rose-600/30 rounded-full blur-2xl"
                    style={{ animation: "float 6s ease-in-out infinite" }}
                ></div>
                <div
                    className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-tr from-emerald-500/25 to-teal-600/25 rounded-full blur-2xl"
                    style={{ animation: "float 8s ease-in-out infinite reverse" }}
                ></div>

                {/* Floating animated icons - Tech themed */}
                <div className="absolute top-16 left-10 text-blue-400/60 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
                    <Cloud className="w-8 h-8" />
                </div>
                <div className="absolute top-32 right-20 text-purple-400/50" style={{ animation: "spin 8s linear infinite" }}>
                    <Server className="w-6 h-6" />
                </div>
                <div className="absolute top-40 left-1/4 text-emerald-400/60 animate-pulse" style={{ animationDelay: "1s" }}>
                    <Shield className="w-7 h-7" />
                </div>
                <div className="absolute top-24 right-1/3 text-pink-400/50 animate-bounce" style={{ animationDelay: "2s", animationDuration: "4s" }}>
                    <Wifi className="w-6 h-6" />
                </div>
                <div className="absolute top-60 left-16 text-cyan-400/60" style={{ animation: "pulse 3s infinite" }}>
                    <Database className="w-8 h-8" />
                </div>
                <div className="absolute top-80 right-32 text-orange-400/50 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}>
                    <Lock className="w-6 h-6" />
                </div>
                <div className="absolute top-96 left-1/3 text-indigo-400/60" style={{ animation: "spin 12s linear infinite reverse" }}>
                    <Zap className="w-7 h-7" />
                </div>

                {/* Middle section icons */}
                <div className="absolute top-1/2 left-8 text-rose-400/50 animate-pulse" style={{ animationDelay: "0.5s" }}>
                    <Smartphone className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 right-12 text-teal-400/60 animate-bounce" style={{ animationDelay: "3s", animationDuration: "5s" }}>
                    <Users className="w-8 h-8" />
                </div>
                <div className="absolute top-1/3 left-1/2 text-yellow-400/50" style={{ animation: "ping 4s infinite" }}>
                    <Star className="w-6 h-6" />
                </div>
                <div className="absolute top-2/3 right-1/4 text-purple-400/60" style={{ animation: "pulse 2.5s infinite" }}>
                    <Rocket className="w-7 h-7" />
                </div>

                {/* Bottom section icons */}
                <div className="absolute bottom-32 left-20 text-blue-400/50 animate-bounce" style={{ animationDelay: "2.5s", animationDuration: "4s" }}>
                    <Heart className="w-6 h-6" />
                </div>
                <div className="absolute bottom-40 right-16 text-emerald-400/60" style={{ animation: "spin 10s linear infinite" }}>
                    <Diamond className="w-8 h-8" />
                </div>
                <div className="absolute bottom-24 left-1/3 text-pink-400/50 animate-pulse" style={{ animationDelay: "1s" }}>
                    <Sparkles className="w-7 h-7" />
                </div>
                <div className="absolute bottom-16 right-1/3 text-cyan-400/60 animate-bounce" style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}>
                    <Globe className="w-6 h-6" />
                </div>

                {/* Geometric shapes with modern styling */}
                <div className="absolute top-1/4 right-1/5 w-20 h-20 border-2 border-blue-400/30 rounded-full" style={{ animation: "ping 5s infinite" }}></div>
                <div className="absolute top-3/4 left-1/5 w-16 h-16 border-2 border-purple-400/40 rounded-lg rotate-45" style={{ animation: "spin 15s linear infinite" }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/5 left-2/3 w-24 h-24 border border-emerald-400/30" style={{ animation: "bounce 6s infinite", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>

                {/* Hexagon shapes */}
                <div className="absolute top-1/3 left-1/6 text-indigo-400/40" style={{ animation: "float 7s ease-in-out infinite" }}>
                    <Hexagon className="w-10 h-10" />
                </div>
                <div className="absolute bottom-1/4 right-1/6 text-teal-400/50" style={{ animation: "float 9s ease-in-out infinite reverse" }}>
                    <Hexagon className="w-8 h-8" />
                </div>

                {/* Triangular elements */}
                <div className="absolute top-2/5 right-2/5 text-orange-400/40 animate-pulse">
                    <Triangle className="w-6 h-6" />
                </div>
                <div className="absolute bottom-2/5 left-2/5 text-violet-400/50" style={{ animation: "spin 20s linear infinite" }}>
                    <Triangle className="w-8 h-8" />
                </div>

                {/* Circular elements with gradients */}
                <div className="absolute top-1/6 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/6 left-1/4 w-4 h-4 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full" style={{ animation: "bounce 4s infinite" }}></div>
                <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/5 right-1/5 w-5 h-5 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full" style={{ animation: "ping 3s infinite" }}></div>

                {/* Additional scattered elements */}
                <div className="absolute top-12 left-1/2 w-3 h-3 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
                <div className="absolute bottom-12 right-1/2 w-2 h-2 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }}></div>
                <div className="absolute top-3/5 left-12 w-4 h-4 bg-emerald-400/50 rounded-full" style={{ animation: "ping 6s infinite" }}></div>
                <div className="absolute bottom-3/5 right-8 w-3 h-3 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: "0.7s" }}></div>
            </div>


            <div className="relative z-10 flex flex-col items-center pb-4">
                {/* <p
                    onClick={() =>
                        setRegistrationType(prev =>
                            prev === "carrier" ? "customer" : "carrier"
                        )
                    }
                    className="text-white cursor-pointer hover:text-yellow-500 underline text-right mr-10 mt-5"
                >
                    {registrationType === "carrier"
                        ? "Switch to Customer Registration"
                        : "Switch to Carrier Registration"}
                </p> */}

                <div className="flex items-center gap-3 mt-10 mb-4">
                    <Globe className="w-8 h-8 text-blue-600 animate-spin" style={{ animationDuration: "3s" }} />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-default text-yellow-500 text-center">
                        Explore the Journey with CloudQlobe
                    </h1>
                    <Globe className="w-8 h-8 text-emerald-600 animate-spin" style={{ animationDuration: "3s", animationDirection: "reverse" }} />
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center">
                    Your Gateway to Global Connectivity & Innovation
                </p>

                {/* Enhanced Flag Design */}
                <div className="relative">

                    {/* Decorative elements around flags */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                </div>
            </div>
            {/* Custom animations */}
            <div data-no-translate>
                <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
            </div>
            {/* Header Section with Enhanced Design */}



            {registrationType === "customer" ? (
                <CustomerRegisterFlow />
            ) : (
                <VendorRegisterForm />
            )}

        </div>
    );
};

export default ModernRegisterFlow;