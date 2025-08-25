import React from 'react';

const Chatrobot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-48 h-48 animate-float">
        {/* Robot body */}
        <div className="absolute inset-0 bg-blue-200 rounded-full shadow-md flex items-center justify-center">
          {/* Face */}
          <div className="w-32 h-16 bg-black rounded-full flex items-center justify-evenly px-3">
            {/* Eyes */}
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-blink"></div>
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-blink"></div>
          </div>

          {/* Antenna */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-4 bg-blue-300" />
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full" />

          {/* Hands */}
          <div className="absolute bottom-6 left-7 w-8 h-8 bg-blue-100 rounded-full z-10 shadow" />
          <div className="absolute bottom-6 right-7 w-8 h-8 bg-blue-100 rounded-full z-10 shadow" />

          {/* Phone */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-14 bg-slate-800 rounded-md z-20 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
          </div>
        </div>

        {/* Shadow underneath */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-28 h-4 bg-blue-100 rounded-full blur-sm opacity-80 animate-pulse"></div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Chatrobot;
