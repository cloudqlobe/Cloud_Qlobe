import React from "react";
import {
  Lock,
  Shield,
  Key,
  FileCheck,
  LockKeyhole,
  ShieldCheck,
  Network,
  KeyRound
} from "lucide-react";

const SecurityPanelLayout = ({ onLoginClick }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[400px] lg:h-[500px] bg-white rounded-2xl overflow-hidden mt-12 sm:mt-16 lg:mt-[100px] mx-4 sm:mx-6 lg:mx-0">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 flex flex-col">
        {/* Icon Row - Responsive Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6 mt-8 sm:mt-12 lg:mt-[80px]">
          {[
            { icon: ShieldCheck, gradient: "from-blue-400 to-blue-600" },
            { icon: Network, gradient: "from-purple-400 to-purple-600" },
            { icon: LockKeyhole, gradient: "from-green-400 to-green-600" },
            { icon: KeyRound, gradient: "from-orange-400 to-orange-600" }
          ].map(({ icon: Icon, gradient }, idx) => (
            <div key={idx} className="group cursor-pointer flex justify-center">
              <div
                className={`bg-gradient-to-br ${gradient} flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
              >
                <Icon size={28} className="text-white sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
              </div>
            </div>
          ))}
        </div>

        {/* Lock & Login Buttons - Responsive Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-6 sm:mt-8 lg:-mt-[-50px] lg:ml-[-40px]">
          {/* Lock Tab */}
          <div className="flex justify-center">
            <button className="flex items-center justify-center gap-3 text-gray-500 px-6 sm:px-8 lg:px-10 py-3">
              <Lock size={40} className="sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
            </button>
          </div>

          {/* Login Button */}
          <div className="lg:mt-[20px] lg:ml-[-20px] w-full sm:w-auto">
            <button
              onClick={onLoginClick}
              className="flex items-center justify-center gap-3 border border-orange-500 text-orange-500 px-12 sm:px-16 lg:px-24 py-3 rounded-lg hover:bg-orange-50 transition font-medium shadow-sm w-full sm:w-auto"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Responsive */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center relative overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-0 py-8 lg:py-0">
        {/* Background Pattern - Hidden on small screens for performance */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-4 border-orange-500 border-opacity-10 rounded-lg transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-12 h-12 lg:w-16 lg:h-16 border-4 border-red-500 border-opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-10 h-10 lg:w-12 lg:h-12 border-4 border-yellow-500 border-opacity-10 rounded-lg transform -rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 lg:w-14 lg:h-14 border-4 border-teal-500 border-opacity-10 rounded-full"></div>
        </div>

        {/* Animated Circles - Responsive Sizes */}
        <div
          className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-gray-200 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border border-blue-200 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gray-100 animate-pulse"></div>

        {/* Central Security Elements - Responsive */}
        <div className="relative z-10 text-center px-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-3xl shadow-2xl mb-4 sm:mb-6 animate-pulse border border-orange-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl inline-block shadow-lg">
              <Lock size={40} className="text-white sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
            </div>
          </div>

          {/* Security Icons Row - Responsive */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
            {/* Orange */}
            <div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-2 sm:p-3 rounded-xl animate-bounce shadow-lg border border-orange-200"
              style={{ animationDelay: "0s" }}
            >
              <Shield size={20} className="text-orange-600 sm:w-6 sm:h-6" />
            </div>
            {/* Green */}
            <div
              className="bg-gradient-to-br from-green-50 to-green-100 p-2 sm:p-3 rounded-xl animate-bounce shadow-lg border border-green-200"
              style={{ animationDelay: "0.2s" }}
            >
              <Key size={20} className="text-green-600 sm:w-6 sm:h-6" />
            </div>
            {/* Blue */}
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-3 rounded-xl animate-bounce shadow-lg border border-blue-200"
              style={{ animationDelay: "0.4s" }}
            >
              <FileCheck size={20} className="text-blue-600 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        {/* Floating Security Indicators - Hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute top-20 right-20 bg-green-500 w-3 h-3 lg:w-4 lg:h-4 rounded-full animate-ping"></div>
        <div className="hidden sm:block absolute bottom-32 left-16 bg-green-400 w-2 h-2 lg:w-3 lg:h-3 rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute top-1/2 right-12 bg-blue-400 w-2 h-2 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default SecurityPanelLayout;