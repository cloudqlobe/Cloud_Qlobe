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
      label: 'NCLI Routes',
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
      desc: 'Best of CLI & NCLI in one solution.',
    },
  ];

  const tabDetails = {
    tab1: 'Get premium CLI Routes with crystal-clear voice quality across global destinations.',
    tab2: 'Explore cost-effective NCLI Routes for large-scale wholesale traffic.',
    tab3: 'Experience reliable, traditional TDM voice routing with global interconnects.',
    tab4: 'Combine the best of CLI and NCLI with our hybrid route optimization.',
  };

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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Section - New Design */}
        <div className="space-y-8">
          {/* Heading */}
          

          {/* Tab Navigation */}
          <div className="grid sm:grid-cols-2 gap-4 mt-[80px] ml-[-40px]">
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

          {/* Tab Content Box */}
          

          {/* Extra Small Features */}
          
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-orange-400 rounded-xl p-8 shadow-lg ml-[200px] mt-[40px]">
          <h2 className="text-2xl font-bold text-center mb-6">Partner with Us</h2>
          <form onSubmit={handleSubmit}>
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
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Features Set 1 */}
{/* Bottom Features Set 1 */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[1350px] mx-auto mt-[40px] ml-[56px]">
  {[Server, PhoneForwarded, Globe2, Settings].map((Icon, i) => (
    <div
      key={i}
      className="flex flex-col items-center bg-white/10 border border-orange-400 px-6 py-4 rounded-lg text-center shadow hover:bg-orange-500/10 transition min-w-[180px]"
    >
      <div className="w-12 h-12 bg-orange-500/20 flex items-center justify-center rounded-full mb-2">
        <Icon className="text-orange-300 w-6 h-6" />
      </div>
      <p className="text-sm font-medium text-orange-200">
        {['Carrier Access', 'Call Routing', 'Global Interop', 'Advanced Settings'][i]}
      </p>
    </div>
  ))}
</div>

{/* Bottom Features Set 2 */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[1350px] mx-auto mt-[40px] ml-[56px]">
  {[Cloud, Shield, Zap, Users].map((Icon, i) => (
    <div
      key={i}
      className="flex flex-col items-center bg-white/10 border border-orange-400 px-6 py-4 rounded-lg text-center shadow hover:bg-orange-500/10 transition min-w-[180px]"
    >
      <div className="w-12 h-12 bg-orange-500/20 flex items-center justify-center rounded-full mb-2">
        <Icon className="text-orange-300 w-6 h-6" />
      </div>
      <p className="text-sm font-medium text-orange-200">
        {['Cloud Routing', 'Secure Network', 'Fast Delivery', 'Global Clients'][i]}
      </p>
    </div>
  ))}
</div>


    </section>
  );
};

export default Ccanimation;
