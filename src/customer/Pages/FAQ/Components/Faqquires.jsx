import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Server,
  ShieldCheck,
  MessageCircle,
  Link2,
  Lightbulb,
  Search,
  Crown,
  Home,
} from 'lucide-react';

const faqData = [
  {
    question: 'What services does Cloudqlobe provide?',
    answer: 'Cloudqlobe offers VoIP solutions, SIP routing, and global telecom infrastructure for scalable business communication.',
  },
  {
    question: 'How secure is your SIP routing?',
    answer: 'Our SIP routing is protected with end-to-end encryption, firewalls, and 24/7 monitoring to ensure maximum security.',
  },
  {
    question: 'Can I integrate Cloudqlobe with my CRM?',
    answer: 'Yes, we support integrations with major CRM platforms including Salesforce, HubSpot, and Zoho.',
  },
  {
    question: 'Do you offer 24/7 customer support?',
    answer: 'Absolutely! Our support team is available around the clock through live chat, email, and phone.',
  },
];

const visualBlocks = [
  { icon: Lightbulb, text: 'VoIP Solutions', color: 'from-green-400 to-green-600' },
  { icon: Server, text: 'SIP Routing', color: 'from-emerald-400 to-emerald-600' },
  { icon: ShieldCheck, text: 'Secure Lines', color: 'from-yellow-400 to-yellow-600' },
  { icon: Link2, text: 'CRM Integration', color: 'from-orange-400 to-orange-600' },
  { icon: PhoneCall, text: '24/7 Support', color: 'from-red-400 to-red-600' },
];

const Faqquires = () => {
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12 tracking-wide">Frequently Asked Questions</h2>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12">
        {/* Left: Visual Info Blocks */}
        <div className="w-full lg:w-1/3 space-y-8">
          {visualBlocks.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-center justify-between border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform hover:scale-105`}
              >
                <div
                  className={`flex items-center gap-4 px-5 py-3 text-white w-full bg-gradient-to-r ${item.color}`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-semibold text-base">{item.text}</span>
                </div>
                <div
                  className={`w-0 h-0 border-t-[28px] border-b-[28px] border-l-[28px] border-t-transparent border-b-transparent border-l-gray-200`}
                />
              </div>
            );
          })}
        </div>

        {/* Right: Search + FAQs */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Search Box */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* FAQs */}
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl border border-gray-200 shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center font-medium text-lg hover:bg-gray-50"
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 text-sm border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center">No matching questions found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqquires;
