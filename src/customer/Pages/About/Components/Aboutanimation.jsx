import React from 'react';
import { UserPlus, Globe, ShieldCheck, Zap, TrendingUp, Link2, Settings, MessageCircle } from 'lucide-react';

const Aboutanimation = () => {
  return (
    <div className="bg-[#0a2463] text-white font-sans">
      {/* Top Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ml-[80px]">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in mt-[-100px] ml-[-60px]">
            <h1 className="text-4xl md:text-4xl font-default leading-tight">
              Welcome to <span className="text-yellow-400">CloudQlobe</span>
            </h1>
            <p className="text-white text-[15px] leading-relaxed text-justify mb-8">
              CloudQlobe connects businesses worldwide with reliable VoIP solutions, 
              secure SIP routing, and high-quality telecom infrastructure — 
              ensuring crystal-clear calls and global scalability.
            </p>
            <button className="border border-yellow-200 hover:bg-yellow-600 text-yellow-400 px-6 py-3 rounded transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Register Form - Smaller & More Transparent */}
         <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg animate-slide-up  ml-[220px] mt-[-40px]">

            <h2 className="text-xl font-bold mb-4 text-white">Partner Registration</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full bg-transparent text-white border border-white/30 px-4 py-2 rounded focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent text-white border border-white/30 px-4 py-2 rounded focus:outline-none" />
              <input type="text" placeholder="Company Name" className="w-full bg-transparent text-white border border-white/30 px-4 py-2 rounded focus:outline-none" />
              <select className="w-full bg-transparent text-white border border-white/30 px-4 py-2 rounded">
                <option className="text-black">Select Partnership Type</option>
                <option className="text-black">Wholesale</option>
                <option className="text-black">Retail</option>
                <option className="text-black">Enterprise</option>
              </select>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Feature Grid */}
      <section className="py-12 px-4 md:px-16 mt-[-80px] ml-[-75px]">
  <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-6 max-w-7xl mx-auto">
    {[
      { icon: UserPlus, title: 'Easy Onboarding', desc: 'Quick sign-up process.' },
      { icon: Globe, title: 'Global Reach', desc: 'Worldwide connectivity.' },
      { icon: ShieldCheck, title: 'Secure Platform', desc: 'Strong fraud protection.' },
      { icon: Zap, title: 'High Performance', desc: 'HD voice quality.' },
      { icon: TrendingUp, title: 'Profit Growth', desc: 'Competitive margins.' },
      { icon: Link2, title: 'Strong Connectivity', desc: 'Reliable infrastructure.' },
      { icon: Settings, title: 'Flexible APIs', desc: 'Custom integrations.' },
      { icon: MessageCircle, title: '24/7 Support', desc: 'Always here for you.' },
    ].map((item, index) => (
      <div
        key={index}
        className="w-[320px] border-2 border-yellow-400 bg-white/10 backdrop-blur-lg p-4 squared-xl shadow-[0_4px_20px_rgba(255,255,255,0.1)] text-center group hover:scale-[1.03] transition-transform duration-300"
      >
        <div className="flex justify-center mb-3">
          <item.icon className="h-8 w-8 text-yellow-300" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-white/70">{item.desc}</p>
      </div>
    ))}
  </div>
</section>




      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Aboutanimation;
