import React from 'react';
import {
  Zap,
  CreditCard,
  DollarSign,
  Wallet,
  HelpCircle,
  Timer,
} from 'lucide-react';
import chatbotImage from '../../../../assets/51934.jpg';

const leftItems = [
  {
    icon: <Zap className="w-12 h-12 text-orange-500" />,
    label: 'Quick Setup',
    desc: 'Live in just 10 minutes.',
    color: 'border-orange-500',
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-500" />,
    label: 'Payment Options',
    desc: 'Multiple ways to pay.',
    color: 'border-blue-500',
  },
  {
    icon: <DollarSign className="w-12 h-12 text-green-500" />,
    label: 'Free $2 Credit',
    desc: 'Instant credit on sign-up.',
    color: 'border-green-500',
  },
];

const rightItems = [
  {
    icon: <Wallet className="w-12 h-12 text-purple-500" />,
    label: 'No Balance Limit',
    desc: 'No cap on recharge.',
    color: 'border-purple-500',
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-red-500" />,
    label: '24/7 Helpdesk',
    desc: 'Support always available.',
    color: 'border-red-500',
  },
  {
    icon: <Timer className="w-12 h-12 text-teal-500" />,
    label: 'Quick Live',
    desc: 'Rapid deployment.',
    color: 'border-teal-500',
  },
];

const Homeservices = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-default text-gray-800 mt-[-20px]">
          Explore the  <span className="text-orange-500">Business oppurtunity with us </span>
        </h2>
        
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-end space-y-10 mr-[100px]">
          {leftItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-right">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <div className={`w-24 h-24 border-2 ${item.color} flex items-center justify-center bg-white shadow`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={chatbotImage}
            alt="AI Assistant"
            className="w-[450px] h-[420px] object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start space-y-10 ml-[100px]">
          {rightItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-left">
              <div className={`w-24 h-24 border-2 ${item.color} flex items-center justify-center bg-white shadow`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
