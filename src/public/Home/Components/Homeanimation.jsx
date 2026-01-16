import { useState, useContext } from 'react';
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
import { dummyPlaceholders } from './DummyTranslateData/Homeanimation';
import { LanguageContext } from '../../../context/LanguageContext';

const Homeanimation = () => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({ name: '', email: '', number: '' });
  const placeholders = dummyPlaceholders[language];

  const tabs = [
    { id: 'tab1', label: 'VoIP' },
    { id: 'tab2', label: 'PBX' },
    { id: 'tab3', label: 'SIP Trunking' },
    { id: 'tab4', label: 'Cloud Routing' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1': return 'Experience seamless internet-based calling with VoIP technology.';
      case 'tab2': return 'Manage your business communications with powerful cloud PBX systems.';
      case 'tab3': return 'Connect your existing infrastructure with our SIP trunking service.';
      case 'tab4': return 'Route calls globally with our intelligent cloud routing system.';
      default: return '';
    }
  };

  const featuresTop = [
    { icon: <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'HD Calling' },
    { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Global Reach' },
    { icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Interconnects' },
    { icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Chat Support' },
  ];

  const featuresBottom = [
    { icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Cloud Infra' },
    { icon: <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Voice AI' },
    { icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'WiFi Calling' },
    { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />, label: 'Secure Routes' },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
    setFormData({ name: '', email: '', number: '' });
  };

  return (
    <section className="bg-[#0a2463] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mt-[-30px] sm:mt-[-40px] md:mt-[-50px]">
        {/* Left Content */}
        <div className="w-full">
          <h1 className="sr-only">Empowering Global Communication</h1>
          <div aria-hidden="true" className="text-2xl sm:text-3xl md:text-4xl font-default mb-4 sm:mb-5 md:mb-6 leading-tight text-center md:text-left">
            Empowering <span className="text-orange-400">Global Communication</span>
          </div>

          <div className="text-orange-300 text-sm sm:text-base bg-white bg-opacity-10 p-3 sm:p-4 square border border-yellow-400 mb-4 sm:mb-5 md:mb-6 text-center md:text-left">
            {renderTabContent()}
          </div>

          {/* Tabs */}
          <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center md:justify-start">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              const base = "py-2 border squared-full text-xs sm:text-sm transition";
              const width = isActive 
                ? "w-24 sm:w-28 md:w-32 lg:w-40" 
                : "w-20 sm:w-24 md:w-28";
              const activeStyles = isActive
                ? "border-orange-400 text-yellow-400 bg-white bg-opacity-10"
                : "border-orange-300 text-white hover:bg-orange-400 hover:text-white";

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${base} ${width} ${activeStyles}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Signup Form */}
        <div className="flex justify-center md:justify-end w-full mt-6 md:mt-0">
          <form onSubmit={handleSubmit} className="bg-transparent text-black squared-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 mb-3 sm:mb-4 border squared focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 mb-3 sm:mb-4 border squared focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder={placeholders.number}
              value={formData.number}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border squared focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 sm:py-3 squared hover:bg-orange-600 transition text-sm sm:text-base font-medium"
            >
              Get a Connect
            </button>
          </form>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="mt-10 sm:mt-12 md:mt-16 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
        {featuresTop.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white/10 border border-yellow-400 squared-lg p-3 sm:p-4 text-xs sm:text-sm text-center shadow hover:bg-white/20 transition">
            {item.icon}
            <span className="mt-2">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {featuresBottom.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white/10 border border-yellow-400 squared-lg p-3 sm:p-4 text-xs sm:text-sm text-center shadow hover:bg-white/20 transition">
            {item.icon}
            <span className="mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homeanimation;