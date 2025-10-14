import React, { useState } from "react";
import { X, MessageSquare, Sparkles } from "lucide-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-1 right-0 z-50">
            {/* Animated Bot Button */}
            <div className="chat-button" onClick={toggleChatbot}>
                <svg viewBox="0 0 200 200" className="bot-icon">
                    <circle className="bot-head" cx="100" cy="100" r="50" fill="#4A90E2" />
                    <circle className="bot-eye left" cx="80" cy="90" r="10" fill="white" />
                    <circle className="bot-eye right" cx="120" cy="90" r="10" fill="white" />
                    <circle className="bot-pupil" cx="80" cy="90" r="5" fill="#333" />
                    <circle className="bot-pupil" cx="120" cy="90" r="5" fill="#333" />
                    <path className="bot-smile" d="M75 110 Q100 130 125 110" stroke="white" strokeWidth="5" fill="none" />
                    <line className="antenna" x1="100" y1="50" x2="100" y2="30" stroke="#333" strokeWidth="4" />
                    <circle className="antenna-tip" cx="100" cy="25" r="5" fill="#333" />
                </svg>
            </div>

            {/* Chat Interface */}
            {isOpen && (
                <div className="relative w-80 md:w-96 h-[500px] group">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg opacity-50" />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000" />

                    {/* Main chat container */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-xl flex flex-col h-full border border-blue-100">
                        {/* Header */}
                        <div className="bg-[#323F3F] text-white p-3 rounded-t-lg flex justify-between items-center">
                            <div className="flex items-center gap-3 animate-fade-in">
                                <MessageSquare className="h-5 w-5 text-orange-300" />
                                <h3 className="font-semibold">AI Chat Assistant</h3>
                                <Sparkles className="h-4 w-4 animate-pulse text-yellow-300" />
                            </div>
                            <button
                                onClick={toggleChatbot}
                                className="hover:bg-white/20 p-1.5 rounded-full transition-colors duration-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Chatbase iframe */}
                        <iframe
                            src="https://www.chatbase.co/chatbot-iframe/2p6f7Zoika_B-u66-kqr4"// replace with your Chatbase bot ID
                            width="100%"
                            style={{ height: "100%", minHeight: "450px", border: "none", flex: 1 }}
                            frameBorder="0"
                            title="Chatbase Chatbot"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Animations and styles */}
            <div data-no-translate>
            <style jsx>{`
        .chat-button {
          width: 120px;
          height: 120px;
          cursor: pointer;
          transform-origin: center;
          animation: float 2s ease-in-out infinite;
          margin-bottom: 4em;
        }

        .bot-icon {
          width: 100%;
          height: 100%;
        }

        .bot-head {
          animation: pulse 2s ease-in-out infinite;
        }

        .bot-eye {
          animation: blink 4s infinite;
        }

        .antenna-tip {
          animation: glow 1.5s ease-in-out infinite;
        }

        .bot-smile {
          animation: smile 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes blink {
          0%, 96%, 100% { transform: scaleY(1); }
          98% { transform: scaleY(0.1); }
        }

        @keyframes glow {
          0%, 100% { fill: #fff; }
          50% { fill: #FFD700; }
        }

        @keyframes smile {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
      </div>
        </div>
    );
};

export default Chatbot;
