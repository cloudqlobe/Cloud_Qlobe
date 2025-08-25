import React from "react";
import {
  Clock,
  Cpu,
  ClipboardList,
  Lightbulb,
  Code,
  Flag,
} from "lucide-react";

const TelecomMasteryLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-12 py-8 bg-white h-[814px] gap-8 lg:gap-16 mt-[-50px] ">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-center z-10 ml-[30px]">
        <h1 className="text-4xl lg:text-5xl font-Default text-gray-800 mb-6 leading-snug">
          The mastery of <span className="text-blue-500">Telecom</span>
        </h1>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-[520px]">
          Cloudqlobe enables businesses to connect worldwide using reliable VoIP
          platforms and secure SIP routing. With intelligent telecom solutions,
          we ensure consistent call quality, data efficiency, and scalable
          infrastructure across all regions.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Infographic */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center relative max-h-[700px] mt-[30px] ml-[300px]">
        {/* Dotted Lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 450">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="6" height="6">
              <circle cx="3" cy="3" r="1" fill="#94a3b8" opacity="0.5" />
            </pattern>
          </defs>
          <path d="M 80 90 Q 120 150 200 190" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <path d="M 200 90 L 200 190" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <path d="M 320 90 Q 280 150 200 190" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <path d="M 200 240 Q 120 280 80 320" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <path d="M 200 240 L 200 320" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <path d="M 200 240 Q 280 280 320 320" stroke="url(#dots)" strokeWidth="2" fill="none" />
          <circle cx="200" cy="170" r="3" fill="#3b82f6" />
          <circle cx="80" cy="170" r="2" fill="#f59e0b" />
          <circle cx="320" cy="170" r="2" fill="#06b6d4" />
          <circle cx="200" cy="260" r="3" fill="#3b82f6" />
          <circle cx="80" cy="260" r="2" fill="#06b6d4" />
          <circle cx="320" cy="260" r="2" fill="#6366f1" />
        </svg>

        {/* Top Row */}
        <div className="flex justify-between w-full max-w-[420px] mb-12 z-10 relative">
          {/* Time Management */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-blue-400 text-white rounded-xl shadow-lg p-4 pt-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2">Time Management</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-blue-100 border-4 border-white z-10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Processing Power */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-orange-400 text-white rounded-xl shadow-lg p-4 pt-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2">Processing Power</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-orange-100 border-4 border-white z-10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          {/* Task Management */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-teal-400 text-white rounded-xl shadow-lg p-4 pt-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2">Task Management</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-teal-100 border-4 border-white z-10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>

        {/* Center Node */}
        <div className="bg-white px-8 py-6 rounded-full shadow-xl border-4 border-gray-200 text-center z-20 mb-12 transform hover:scale-110 transition-all duration-300">
          <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">
            Infographic
          </p>
          <p className="text-xs text-gray-500 mt-1">Business Concept</p>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between w-full max-w-[420px] z-10 relative">
          {/* Innovation */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-cyan-400 text-white rounded-xl shadow-lg p-4 pb-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2">Creative technology .</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-cyan-100 border-4 border-white z-10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-cyan-600" />
            </div>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-blue-500 text-white rounded-xl shadow-lg p-4 pb-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2"> Software solutions.</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-blue-100 border-4 border-white z-10 flex items-center justify-center">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Goal Achievement */}
          <div className="flex flex-col items-center w-1/3 px-2 relative">
            <div className="bg-indigo-500 text-white rounded-xl shadow-lg p-4 pb-12 text-center w-[130px] h-[110px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-sm font-bold mb-2">Strategic milestone.</h4>
              <p className="text-xs opacity-90 leading-tight"></p>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-xl bg-indigo-100 border-4 border-white z-10 flex items-center justify-center">
              <Flag className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomMasteryLayout;
