import React from "react";
import { GiCombinationLock } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { MdVpnLock } from "react-icons/md";
import {
  Lock,
  Home,
  User,
  Settings,
  Info,
  Shield,
  Key,
  FileCheck
} from "lucide-react";

const SecurityPanelLayout = () => {
  return (
    <div className="flex h-[500px] bg-white rounded-2xl overflow-hidden mt-[100px]">
      {/* Left Panel */}
      <div className="w-1/2 bg-white p-8 flex flex-col">
        {/* Icon Row */}
        <div className="flex justify-around mb-6 mt-[80px]">
          {[
            { icon: MdOutlineSecurity , gradient: "from-blue-400 to-blue-600" },
            { icon: SiSecurityscorecard , gradient: "from-purple-400 to-purple-600" },
            { icon: SiHiveBlockchain , gradient: "from-green-400 to-green-600" },
            { icon: MdVpnLock , gradient: "from-orange-400 to-orange-600" }
          ].map(({ icon: Icon, gradient }, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${gradient} flex items-center justify-center w-20 h-20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
              >
                <Icon size={35} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lock & Login Buttons */}
        <div className="flex justify-center gap-2 -mt-[-50px] ml-[-40px]">
          {/* Lock Tab */}
          <div>
            <button className="flex items-center justify-center gap-3 text-gray-500 px-10 py-3">
              <GiCombinationLock size={60} />
            </button>
          </div>

          {/* Login Button */}
          <div className="mt-[20px] ml-[-20px]">
            <button className="flex items-center justify-center gap-3 border border-orange-500 text-orange-500 px-24 py-3 rounded-lg hover:bg-orange-50 transition font-medium shadow-sm">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 bg-white flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
       <div className="absolute inset-0">
  <div className="absolute top-10 left-10 w-20 h-20 border-4 border-orange-500 border-opacity-10 rounded-lg transform rotate-12"></div>
  <div className="absolute top-32 right-20 w-16 h-16 border-4 border-red-500 border-opacity-10 rounded-full"></div>
  <div className="absolute bottom-20 left-20 w-12 h-12 border-4 border-yellow-500 border-opacity-10 rounded-lg transform -rotate-45"></div>
  <div className="absolute bottom-40 right-10 w-14 h-14 border-4 border-teal-500 border-opacity-10 rounded-full"></div>
</div>


        {/* Animated Circles */}
        <div
          className="absolute w-80 h-80 rounded-full border border-gray-200 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute w-60 h-60 rounded-full border border-blue-200 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
        <div className="absolute w-40 h-40 rounded-full bg-gray-100 animate-pulse"></div>

        {/* Central Security Elements */}
        <div className="relative z-10 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-2xl mb-6 animate-pulse border border-orange-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl inline-block shadow-lg">
              <Lock size={60} className="text-white" />
            </div>
          </div>

          {/* Security Icons Row */}
          <div className="flex justify-center space-x-6 mb-6">
            {/* Orange */}
            <div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl animate-bounce shadow-lg border border-orange-200"
              style={{ animationDelay: "0s" }}
            >
              <Shield size={24} className="text-orange-600" />
            </div>
            {/* Green */}
            <div
              className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-xl animate-bounce shadow-lg border border-green-200"
              style={{ animationDelay: "0.2s" }}
            >
              <Key size={24} className="text-green-600" />
            </div>
            {/* Blue */}
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl animate-bounce shadow-lg border border-blue-200"
              style={{ animationDelay: "0.4s" }}
            >
              <FileCheck size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Floating Security Indicators */}
        <div className="absolute top-20 right-20 bg-green-500 w-4 h-4 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-16 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-12 bg-blue-400 w-2 h-2 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default SecurityPanelLayout;