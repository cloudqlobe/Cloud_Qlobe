import {
  Mail,
  Phone,
  Shield,
  Cloud,
  CheckCircle,
  Zap,
  MessageCircle,
  ThumbsUp,
  Facebook,
  Instagram,
  Linkedin,
  Users,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-4 sm:px-6 md:px-8 py-10 space-y-16">

      {/* Top Section: Contact + Map */}
      <div className="border border-blue-700 squared-2xl p-4 sm:p-6 flex flex-col lg:flex-row gap-10">

        {/* Left: Contact Info */}
        <div className="flex-1 border border-white squared-xl p-4 sm:p-6 bg-white text-black space-y-6 max-w-full lg:max-w-xl">
          <h2 className="text-xl font-bold text-[#0a2463]">
            Contact Information
          </h2>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: '+44 741836587', icon: FaWhatsapp },
              { label: '+44 7418365876', icon: FaWhatsapp },
              { label: 'sales@cloudqlobe.com', icon: Mail },
              { label: 'carriers@cloudqlobe.com', icon: Mail },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <item.icon
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  readOnly
                  value={item.label}
                  className="pl-10 pr-4 py-2 w-full rounded-md bg-transparent border border-gray-300 text-black text-sm"
                />
              </div>
            ))}
          </div>

          {/* Alert */}
          <div className="bg-yellow-400 text-black px-4 py-3 rounded-md text-sm shadow-md">
            ⚠️ Please confirm your email to get connected with our support team.
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              { icon: Users, bg: 'bg-green-600', url: '#' },
              { icon: Linkedin, bg: 'bg-blue-700', url: 'https://www.linkedin.com/company/cloud-qlobe/' },
              { icon: Facebook, bg: 'bg-blue-600', url: 'https://www.facebook.com/cloudqlobe' },
              { icon: Instagram, bg: 'bg-gradient-to-tr from-pink-500 to-yellow-500', url: 'https://www.instagram.com/cloudqlobe/?hl=en' },
            ].map(({ icon: Icon, bg, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full ${bg} text-white hover:scale-110 transition`}
              >
                <Icon size={20} />   {/* ✅ PascalCase */}
              </a>
            ))}

          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 border border-white squared-xl overflow-hidden min-h-[280px] sm:min-h-[350px] shadow-md">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=hong%20kong&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Mail size={28} className="text-orange-400" />, title: 'Email Support', desc: '24/7 email assistance for all queries.' },
          { icon: <Phone size={28} className="text-orange-400" />, title: 'Direct Call', desc: 'Instant call-back by our team.' },
          { icon: <Shield size={28} className="text-orange-400" />, title: 'Secure Systems', desc: 'Data and comms are encrypted.' },
          { icon: <Cloud size={28} className="text-orange-400" />, title: 'Cloud Access', desc: 'Easy cloud-based integration.' },
          { icon: <CheckCircle size={28} className="text-orange-400" />, title: 'Account Verified', desc: 'All users go through quick checks.' },
          { icon: <Zap size={28} className="text-orange-400" />, title: 'Quick Setup', desc: 'Fast integration with your tools.' },
          { icon: <MessageCircle size={28} className="text-orange-400" />, title: 'Live Chat', desc: 'Real-time support available.' },
          { icon: <ThumbsUp size={28} className="text-orange-400" />, title: 'Trusted Service', desc: 'Proven client satisfaction globally.' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border border-orange-400 squared-xl p-6 text-center bg-[#0a2463] shadow-md"
          >
            <div className="flex justify-center mb-3">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-200">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
