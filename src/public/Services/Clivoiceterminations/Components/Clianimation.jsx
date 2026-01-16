import React, { useState } from 'react';
import {
  Server,
  PhoneForwarded,
  Globe2,
  Settings,
  PhoneCall,
  Network,
  PhoneIncoming,
  Shuffle,
  Cloud,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

const Ccanimation = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const tabs = [
    {
      id: 'tab1',
      label: 'CLI Routes',
      icon: <PhoneCall className="w-6 h-6 text-orange-400" />,
      desc: 'Crystal-clear premium voice routing.',
    },
    {
      id: 'tab2',
      label: 'CC-CLI Routes',
      icon: <Network className="w-6 h-6 text-orange-400" />,
      desc: 'Cost-effective large-scale routing.',
    },
    {
      id: 'tab3',
      label: 'TDM Routes',
      icon: <PhoneIncoming className="w-6 h-6 text-orange-400" />,
      desc: 'Reliable traditional voice routing.',
    },
    {
      id: 'tab4',
      label: 'Hybrid Routes',
      icon: <Shuffle className="w-6 h-6 text-orange-400" />,
      desc: 'Best of CLI & CC-CLI in one solution.',
    },
  ];
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted!');
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <section className="bg-[#0a2463] px-6 py-8 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Section */}
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-[80px] lg:ml-[-40px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-start p-4 rounded-lg border transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-500/20 border-orange-400 shadow-lg'
                    : 'border-white/20 hover:bg-orange-500/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/20 p-2 rounded-full">
                    {tab.icon}
                  </div>
                  <span className="font-semibold">{tab.label}</span>
                </div>
                <p className="text-xs text-white/70 mt-2">{tab.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 bg-white/10 backdrop-blur-md border border-orange-400 rounded-xl p-6 lg:p-8 shadow-lg lg:ml-[200px] lg:mt-[40px]">
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-6">Partner with Us</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 bg-transparent border border-orange-400 rounded text-white placeholder-orange-200 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 bg-transparent border border-orange-400 rounded text-white placeholder-orange-200 focus:outline-none"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-2 bg-transparent border border-orange-400 rounded text-white placeholder-orange-200 focus:outline-none"
              required
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Features Set 1 */}
      <div className="mt-8 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-full lg:w-[1350px] mx-auto lg:ml-[56px] px-4 lg:px-0">
        {[Server, PhoneForwarded, Globe2, Settings].map((Icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 border border-orange-400 px-3 lg:px-6 py-3 lg:py-4 rounded-lg text-center shadow hover:bg-orange-500/10 transition min-w-0"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-500/20 flex items-center justify-center rounded-full mb-2">
              <Icon className="text-orange-300 w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <p className="text-xs lg:text-sm font-medium text-orange-200">
              {['Carrier Access', 'Call Routing', 'Global Interop', 'Advanced Settings'][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Features Set 2 */}
      <div className="mt-4 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-full lg:w-[1350px] mx-auto lg:ml-[56px] px-4 lg:px-0">
        {[Cloud, Shield, Zap, Users].map((Icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 border border-orange-400 px-3 lg:px-6 py-3 lg:py-4 rounded-lg text-center shadow hover:bg-orange-500/10 transition min-w-0"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-500/20 flex items-center justify-center rounded-full mb-2">
              <Icon className="text-orange-300 w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <p className="text-xs lg:text-sm font-medium text-orange-200">
              {['Cloud Routing', 'Secure Network', 'Fast Delivery', 'Global Clients'][i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ccanimation;