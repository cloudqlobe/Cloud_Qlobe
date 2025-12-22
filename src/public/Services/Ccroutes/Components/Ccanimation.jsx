import React, { useState } from 'react';
import {
  Server,
  PhoneCall,
  Settings,
  ShieldCheck,
  MessageSquare,
  Network,
  UserCheck,
  Globe,
} from 'lucide-react';

const Ccanimation = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    requirement: '',
  });

  const tabs = [
    { id: 'tab1', label: 'CC Routes', icon: <PhoneCall className="w-5 h-5" /> },
    { id: 'tab2', label: 'CLI Routes', icon: <Network className="w-5 h-5" /> },
    { id: 'tab3', label: 'Wholesale Voice', icon: <Server className="w-5 h-5" /> },
    { id: 'tab4', label: 'Retail VoIP', icon: <Settings className="w-5 h-5" /> },
  ];

  const tabContent = {
    tab1: 'High-quality CLI routes for crystal-clear international voice termination.',
    tab2: 'Affordable non-CLI routes tailored for cost-effective voice traffic.',
    tab3: 'Carrier-grade wholesale solutions for global voice coverage.',
    tab4: 'Reliable retail VoIP services for enterprises and startups.',
  };

  const features = [
    { icon: <Server />, label: 'Direct Interconnects' },
    { icon: <PhoneCall />, label: 'Voice Quality' },
    { icon: <Settings />, label: 'Custom Routing' },
    { icon: <ShieldCheck />, label: 'Secure Routing' },
    { icon: <MessageSquare />, label: 'Support Team' },
    { icon: <Network />, label: '24/7 NOC' },
    { icon: <UserCheck />, label: 'KYC Enabled' },
    { icon: <Globe />, label: 'Global Reach' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request submitted!');
    setFormData({ company: '', contact: '', requirement: '' });
  };

  return (
    <section className="bg-[#0a2463] text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-4 sm:mt-8 lg:mt-[20px] lg:ml-[120px]">
        {/* Left Content */}
        <div className='lg:ml-[-60px]'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-default mb-4">
            Cloud Qlobe <span className='text-orange-500'>CC Routes Solutions</span>
          </h2>
          <p className="mb-6 text-base sm:text-lg text-white-300">
            Choose the right route for your voice business. Flexible, scalable, and supported by experts.
          </p>

          {/* New Vertical Card Tabs */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 p-3 sm:p-4 rounded-lg cursor-pointer transition-all border 
                  ${activeTab === tab.id
                    ? 'border-orange-400 bg-orange-500/20'
                    : 'border-orange-300 hover:bg-orange-400/10'}`}
              >
                {tab.icon}
                <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
              </div>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="bg-white/10 border border-orange-400 p-4 rounded text-orange-200 mb-4">
            {tabContent[activeTab]}
          </div>
        </div>

        {/* Right Transparent Registration */}
        <div className="flex justify-center items-center lg:ml-[200px] lg:mt-[-40px]">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Request Routes</h3>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-transparent text-white placeholder-white/60 border border-white/30 rounded focus:outline-none"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number or Email"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-transparent text-white placeholder-white/60 border border-white/30 rounded focus:outline-none"
              required
            />
            <textarea
              name="requirement"
              placeholder="Route Requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-6 bg-transparent text-white placeholder-white/60 border border-white/30 rounded focus:outline-none resize-none"
              rows={3}
              required
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-12 sm:mt-16 max-w-9xl mx-auto grid grid-cols-2 md:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 lg:mt-[30px] lg:ml-[59px] lg:w-[1340px]">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 text-center p-4 sm:p-6 border border-orange-400 flex flex-col items-center shadow hover:bg-orange-500 transition"
          >
            <div className="text-orange-300 mb-2">{item.icon}</div>
            <p className="text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ccanimation;