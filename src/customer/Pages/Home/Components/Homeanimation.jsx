import React, { useState } from 'react';
import {
  PhoneCall,
  Globe,
  Share2,
  MessageCircle,
  Cloud,
  Mic,
  Wifi,
  Shield,
} from 'lucide-react';

const Homeanimation = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const tabs = [
    { id: 'tab1', label: 'VoIP' },
    { id: 'tab2', label: 'PBX' },
    { id: 'tab3', label: 'SIP Trunking' },
    { id: 'tab4', label: 'Cloud Routing' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return 'Experience seamless internet-based calling with VoIP technology.';
      case 'tab2':
        return 'Manage your business communications with powerful cloud PBX systems.';
      case 'tab3':
        return 'Connect your existing infrastructure with our SIP trunking service.';
      case 'tab4':
        return 'Route calls globally with our intelligent cloud routing system.';
      default:
        return '';
    }
  };

  const featuresTop = [
    { icon: <PhoneCall className="w-6 h-6 text-orange-400" />, label: 'HD Calling' },
    { icon: <Globe className="w-6 h-6 text-orange-400" />, label: 'Global Reach' },
    { icon: <Share2 className="w-6 h-6 text-orange-400" />, label: 'Interconnects' },
    { icon: <MessageCircle className="w-6 h-6 text-orange-400" />, label: 'Chat Support' },
  ];

  const featuresBottom = [
    { icon: <Cloud className="w-6 h-6 text-orange-400" />, label: 'Cloud Infra' },
    { icon: <Mic className="w-6 h-6 text-orange-400" />, label: 'Voice AI' },
    { icon: <Wifi className="w-6 h-6 text-orange-400" />, label: 'WiFi Calling' },
    { icon: <Shield className="w-6 h-6 text-orange-400" />, label: 'Secure Routes' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    alert("Registration submitted!");
    setFormData({ name: '', email: '', number: '' });
  };

  return (
    <section className="bg-[#0a2463] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-[-50px]">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-4xl font-default mb-6 leading-tight">
            Empowering <span className="text-orange-400">Global Communication</span>
          </h1>
         
          {/* Tab Content Box */}
          <div className="text-orange-300 text-base bg-white bg-opacity-10 p-4 square border border-yellow-400 mb-6">
            {renderTabContent()}
          </div>

          {/* Tab Buttons */}
         <div className="mt-4 flex flex-wrap gap-10">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`py-2 border squared-full text-sm transition ${
        activeTab === tab.id
          ? 'w-40 border-orange-400 text-yellow-400 bg-white bg-opacity-10'
          : 'w-28 border-orange-300 text-white hover:bg-orange-400 hover:text-white'
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
</div>


        {/* Signup Bubble (Right Side) */}
        <div className="flex justify-center ml-[180px]">
          <form
            onSubmit={handleSubmit}
            className="bg-transparent text-black squared-xl shadow-lg p-8 w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#0a2463]">
              Register Now
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 border squared focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 border squared focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-6 border squared focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 squared hover:bg-orange-600 transition"
            >
              Get a Connect
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Feature Boxes - Top Row */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {featuresTop.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 border border-yellow-400 squared-lg p-4 text-sm text-center shadow"
          >
            {item.icon}
            <span className="mt-2">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Feature Boxes - Bottom Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuresBottom.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 border border-yellow-400 squared-lg p-4 text-sm text-center shadow"
          >
            {item.icon}
            <span className="mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homeanimation;
