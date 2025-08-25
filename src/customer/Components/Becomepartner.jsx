import React, { useState, useEffect, useRef } from 'react';
import { Phone, Globe, TrendingUp, Shield, Zap, Star, Users, Server, ArrowRight } from 'lucide-react';

const TradePartner3DSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const [time, setTime] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 15,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 15
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0a0f2e] via-[#1a237e] to-[#000051] w-full py-8 px-6 md:px-16 relative overflow-hidden mt-[-100px] "
      onMouseMove={handleMouseMove}
    >
      
      {/* Enhanced 3D Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `perspective(800px) rotateX(25deg) translateZ(-200px) translateY(${Math.sin(time) * 10}px)`
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + Math.sin(time + i) * 20}%`,
              transform: `translateY(${Math.cos(time * 0.5 + i) * 30}px)`,
              animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE - CONTENT */}
        <div className="text-white space-y-4 mt-[-100px] ml-[-10px]">
          {/* Achievements Section */}
       


          <div className="space-y-8">
            <div className="flex items-center gap-4 ">
              
            </div>
            
            <h1 className="text-3xl md:text-4xl font-normal leading-tight text-transparent bg-clip-text bg-white ml-[-30px]">
              Get Your <span className='text-yellow-500'>VoIP Trade Account</span>
            </h1>

            
            <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl font-light text-justify ml-[-30px]">
              Access premium CC routes, CLI routes, and wholesale termination. Join our exclusive VoIP trading network with guaranteed ASR/ACD rates and instant settlements.
            </p>
            
           <div className="grid grid-cols-2 gap-6 text-sm text-blue-200/90 ml-[-30px]">
  {[
    { color: 'yellow', text: 'Premium CC Routes' },
    { color: 'yellow', text: 'CLI Routes Available' },
    { color: 'yellow', text: 'Instant Settlements' },
    { color: 'yellow', text: '24/7 NOC Support' }
  ].map((item, i) => (
    <div key={i} className="flex items-center gap-3">
      <div className={`w-3 h-3 bg-${item.color}-400 rounded-full animate-pulse shadow-lg`}></div>
      <span>{item.text}</span>
    </div>
  ))}
</div>

<div className="flex flex-col sm:flex-row gap-6 ml-[-30px] mt-6">
  <button className="text-white border border-yellow-300 px-8 py-4 rounded-none font-semibold hover:text-yellow-500 transition-all duration-300">
    Open Trade Account
  </button>
  <button className="text-white border border-white px-8 py-4 rounded-none font-semibold hover:text-orange-400 hover:border-orange-400 transition-all duration-300">
    View Rate Sheets
  </button>
</div>
</div>


          {/* Country Flags Section */}
          <div className="pt-8 ">
           


  


  <div className="flex items-center gap-8 ml-[-30px]">
  <div className=" flex items-center gap-8">
    {/* USA */}
    <img src="https://flagcdn.com/us.svg" alt="USA" className="w-[80px] h-[80px] rounded-sm" />

    {/* Canada */}
    <img src="https://flagcdn.com/ca.svg" alt="Canada" className="w-[80px] h-[80px] rounded-sm" />

    {/* UK */}
    <img src="https://flagcdn.com/gb.svg" alt="UK" className="w-[80px] h-[80px] rounded-sm" />

    {/* Germany */}
    <img src="https://flagcdn.com/de.svg" alt="Germany" className="w-[80px] h-[80px] rounded-sm" />

    {/* Australia */}
    <img src="https://flagcdn.com/au.svg" alt="Australia" className="w-[80px] h-[80px] rounded-sm" />

    {/* Spain */}
   
  </div>
</div>




          </div>

        </div>
        
        {/* RIGHT SIDE - ELEGANT 3D VISUALIZATION */}
        <div className="relative h-[600px] perspective-1000">
          
          {/* Main 3D Container */}
          <div 
            className="absolute inset-0 transition-transform duration-500 ease-out preserve-3d"
            style={{
              transform: `rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`
            }}
          >
            
            {/* Central VoIP Hub - More Elegant */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-xl transform group-hover:scale-110 transition-all duration-700">
                  <Phone className="text-white w-14 h-14 drop-shadow-lg" />
                </div>
                
                {/* Elegant Rotating Rings */}
                <div className="absolute inset-0 w-32 h-32 border-2 border-yellow-400/30 rounded-3xl animate-spin opacity-60" style={{ animationDuration: '12s' }}></div>
                <div className="absolute -inset-4 w-40 h-40 border border-orange-300/20 rounded-3xl animate-spin opacity-40" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                
                {/* Premium Label */}
              <div className="absolute -bottom-[-250px] w-[150px] h-[30px] left-1/2 transform -translate-x-1/2 
  bg-transparent text-white hover:text-yellow-400 text-sm px-6 py-2 
  rounded-full font-bold backdrop-blur-md 
  border border-yellow-400 flex items-center justify-center text-center transition-colors duration-300">
  VoIP HUB
</div>


              </div>
            </div>

            {/* Service Nodes - More Spaced and Elegant */}
            
            {/* CC Routes - Top Left */}
            <div className="absolute top-16 left-8 transform-gpu translate-z-30 ml-[-30px] mt-[-30px]">
              <div 
                className="group relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl hover:shadow-emerald-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('cc')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(30px) translateY(${Math.sin(time + 1) * 5}px)`
                }}
              >
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <TrendingUp className="text-white w-10 h-10 drop-shadow-lg" />
                </div>
                {hoveredNode === 'cc' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-emerald-400/30">
                    <div className="font-bold">Premium CC Routes</div>
                    <div className="text-emerald-400 text-xs">ASR: 65%+ | ACD: 180s+</div>
                  </div>
                )}
              </div>
            </div>

            {/* CLI Routes - Top Right - Moved more to the right */}
            <div className="absolute top-16 transform-gpu translate-z-25 ml-[580px]">
              <div 
                className="group relative w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl hover:shadow-blue-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('cli')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(25px) translateY(${Math.sin(time + 2) * 8}px)`
                }}
              >
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Shield className="text-white w-10 h-10 drop-shadow-lg" />
                </div>
                {hoveredNode === 'cli' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-blue-400/30">
                    <div className="font-bold">CLI Routes</div>
                    <div className="text-blue-400 text-xs">Verified Numbers</div>
                  </div>
                )}
              </div>
            </div>

            {/* Wholesale - Middle Left */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 transform-gpu translate-z-20 ml-[-100px]">
              <div 
                className="group relative w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-2xl hover:shadow-purple-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('wholesale')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(20px) translateY(${Math.sin(time + 3) * 6}px)`
                }}
              >
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Server className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
                {hoveredNode === 'wholesale' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-purple-400/30">
                    <div className="font-bold">Wholesale</div>
                    <div className="text-purple-400 text-xs">Bulk Termination</div>
                  </div>
                )}
              </div>
            </div>

            {/* DID Numbers - Middle Right */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 transform-gpu translate-z-15">
              <div 
                className="group relative w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full shadow-2xl hover:shadow-pink-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('did')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(15px) translateY(${Math.sin(time + 4) * 7}px)`
                }}
              >
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Globe className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
                {hoveredNode === 'did' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-pink-400/30">
                    <div className="font-bold">DID Numbers</div>
                    <div className="text-pink-400 text-xs">Global Coverage</div>
                  </div>
                )}
              </div>
            </div>

            {/* SMS Routes - Bottom Left */}
            <div className="absolute bottom-16 left-12 transform-gpu translate-z-18">
              <div 
                className="group relative w-18 h-18 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl shadow-2xl hover:shadow-indigo-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('sms')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(18px) translateY(${Math.sin(time + 5) * 4}px)`
                }}
              >
              
                {hoveredNode === 'sms' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-indigo-400/30">
                   
                  </div>
                )}
              </div>
            </div>

            {/* SIP Trunking - Bottom Right */}
            <div className="absolute bottom-16 right-2 transform-gpu translate-z-22">
              <div 
                className="group relative w-18 h-18 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-400/50 transition-all duration-700 hover:scale-110 cursor-pointer border border-white/20 backdrop-blur-sm"
                onMouseEnter={() => setHoveredNode('sip')}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: `translateZ(22px) translateY(${Math.sin(time + 6) * 6}px)`
                }}
              >
               
                {hoveredNode === 'sip' && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap z-50 backdrop-blur-md border border-cyan-400/30">
                   
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Premium Metrics Cards - More Spaced */}
          <div className="absolute top-8 right-8 space-y-4">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-400">55%</div>
                <div className="text-sm text-blue-200/80">Average ASR</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200/80">FAS Free Routes</div>
              </div>
            </div>
          </div>

          {/* Elegant Setup Process */}
          <div className="absolute left-8 top-1/4 space-y-6">
            {[
              { label: 'Account Setup', color: 'blue', step: 1 },
              { label: 'Route Testing', color: 'purple', step: 2 },
              { label: 'Go Live', color: 'yellow', step: 3 },
              { label: 'Start Trading', color: 'green', step: 4 }
            ].map((step, i) => (
              <div key={i} className="group relative">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div 
                      className={`w-12 h-12 rounded-2xl shadow-2xl flex items-center justify-center font-bold text-white transition-all duration-500 group-hover:scale-110 ${
                        step.color === 'yellow' 
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                          : step.color === 'green'
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                          : step.color === 'purple'
                          ? 'bg-gradient-to-br from-purple-400 to-purple-600'
                          : 'bg-gradient-to-br from-blue-400 to-blue-600'
                      }`}
                      style={{
                        transform: `translateY(${Math.sin(time + i) * 2}px)`
                      }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl text-white px-6 py-3 rounded-2xl text-sm font-semibold border border-white/20 transition-all duration-300 group-hover:scale-105">
                    {step.label}
                  </div>
                </div>
                
                {/* Elegant Connection Line */}
                {i < 3 && (
                  <div className="absolute left-6 top-14 w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent opacity-60"></div>
                )}
              </div>
            ))}
          </div>

          {/* Premium CTA Button */}
          <div className="absolute bottom-8 right-16">
            <div className="group cursor-pointer">
              <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-yellow-400/50">
                <ArrowRight className="text-black w-8 h-8 mb-1" />
                <div className="text-black text-sm font-bold">TRADE</div>
              </div>
              <div className="absolute inset-0 w-28 h-28 border-2 border-yellow-400/40 rounded-3xl animate-ping opacity-30"></div>
            </div>
          </div>

          {/* Elegant Connection Beams */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-t from-transparent via-yellow-400/60 to-transparent opacity-40"
                style={{
                  height: `${60 + i * 10}px`,
                  left: `${30 + (i * 10)}%`,
                  top: `${20 + Math.sin(time + i) * 15}%`,
                  transform: `rotate(${i * 30}deg)`,
                  animation: `beam ${3 + i * 0.3}s ease-in-out infinite alternate`
                }}
              />
            ))}
          </div>

        </div>
       
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes beam {
          0% { opacity: 0.2; transform: scaleY(0.8); }
          100% { opacity: 0.6; transform: scaleY(1.3); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .translate-z-40 { transform: translateZ(40px); }
        .translate-z-30 { transform: translateZ(30px); }
        .translate-z-25 { transform: translateZ(25px); }
        .translate-z-22 { transform: translateZ(22px); }
        .translate-z-20 { transform: translateZ(20px); }
        .translate-z-18 { transform: translateZ(18px); }
        .translate-z-15 { transform: translateZ(15px); }
      `}</style>
    </section>
  );
};

export default TradePartner3DSection;