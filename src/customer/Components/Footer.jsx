import React, { useState } from 'react';
import logo1 from "../../assets/Square_Organic_Beauty_Cleanser_Logo__1_-removebg-preview.png";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Send, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Logo + About Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="lg:max-w-2xl space-y-6">
              <div className="group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    {/* Animated rings around logo */}
                    <div className="absolute inset-0 w-14 h-14 rounded-xl">
                      <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl animate-pulse"></div>
                      <div className="absolute inset-1 border-2 border-orange-400/40 rounded-xl animate-pulse delay-300"></div>
                      <div className="absolute inset-2 border border-blue-300/20 rounded-xl animate-pulse delay-600"></div>
                    </div>
                    {/* Logo container */}
                    <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                      <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                    <img 
                      src={logo1}
                      alt="Cloudqlobe Logo" 
                      className="w-8 h-8 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 rounded" 
                    />
                  </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      <span className="text-orange-400">CLOUD</span>
                      <span className="text-blue-400">QLOBE</span>
                    </h2>
                    <p className="text-sm text-gray-400">Global Telecom Solutions</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Delivering cutting-edge telecom solutions with global reach and enterprise-grade performance. 
                Connecting businesses worldwide with reliable, scalable communication infrastructure.
              </p>
              
              {/* Social Media with Enhanced Design */}
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
                  { Icon: Twitter, color: 'hover:bg-blue-400', label: 'Twitter' },
                  { Icon: Instagram, color: 'hover:bg-pink-600', label: 'Instagram' },
                  { Icon: Mail, color: 'hover:bg-red-600', label: 'Email' }
                ].map(({ Icon, color, label }, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25`}
                    aria-label={label}
                  >
                    <Icon size={20} className="transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="lg:max-w-md w-full">
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-2xl p-8 border border-white/10 overflow-hidden">
                {/* Animated background rings */}
                <div className="absolute top-2 right-2 w-16 h-16 border border-purple-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute bottom-2 left-2 w-12 h-12 border border-cyan-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-yellow-400/20 rounded-full animate-ping"></div>
                
                <h3 className="relative text-2xl font-bold mb-4 text-white z-10">
                  SUBSCRIBE
                </h3>
                <p className="relative text-gray-300 mb-6 text-sm leading-relaxed z-10">
                  Join our newsletter to stay up to date on features and releases.
                </p>
                
                <div className="relative space-y-4 z-10">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <button 
                    onClick={handleSubscribe}
                    className="w-full group relative bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-500 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    <span className="flex items-center justify-center">
                      Subscribe
                      <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <p className="text-xs text-gray-400 leading-relaxed">
                    By subscribing you agree with our Privacy Policy and provide consent to receive updates from our company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Sections in One Line */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Services */}
          <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
            {/* Animated background rings */}
            <div className="absolute top-2 right-2 w-16 h-16 border border-blue-400/20 rounded-full animate-spin group-hover:border-blue-400/40 transition-colors duration-500" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-2 left-2 w-12 h-12 border border-orange-400/20 rounded-full animate-spin group-hover:border-orange-400/40 transition-colors duration-500" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-purple-400/20 rounded-full animate-ping group-hover:border-purple-400/40 transition-colors duration-500"></div>
            
            <h3 className="relative text-2xl font-bold mb-8 text-white flex items-center z-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-4"></div>
              SERVICES
            </h3>
            <ul className="relative space-y-4 z-10">
              {[
                'CC Routes', 
                'CLI Routes', 
                'VoIP Websites', 
                'Dialer Solutions', 
                'DID Numbers', 
                'Server Hosting'
              ].map((service, i) => (
                <li key={i}>
                  <a 
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="group/link flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    <ArrowRight size={16} className="mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-orange-400" />
                    <span className="group-hover/link:font-medium transition-all duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
            {/* Animated background rings */}
            <div className="absolute top-1 right-1 w-20 h-20 border border-purple-400/20 rounded-full animate-spin group-hover:border-purple-400/40 transition-colors duration-500" style={{animationDuration: '25s'}}></div>
            <div className="absolute bottom-1 left-1 w-16 h-16 border border-pink-400/20 rounded-full animate-spin group-hover:border-pink-400/40 transition-colors duration-500" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-2/3 right-1/3 w-8 h-8 border border-cyan-400/30 rounded-full animate-pulse group-hover:border-cyan-400/50 transition-colors duration-500"></div>
            <div className="absolute top-1/4 left-1/2 w-12 h-12 border border-yellow-400/20 rounded-full animate-ping group-hover:border-yellow-400/40 transition-colors duration-500"></div>
            
            <h3 className="relative text-2xl font-bold mb-8 text-white flex items-center z-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-4"></div>
              WE THE CQ
            </h3>
            
            <div className="relative space-y-4 z-10">
              {['Homepage', 'About Us', 'Insights', 'Case Study', 'Contact Us'].map((link, i) => (
                <a 
                  key={i}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="group/link flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <ArrowRight size={16} className="mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-blue-400" />
                  <span className="group-hover/link:font-medium transition-all duration-300">{link}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
            {/* Animated background rings */}
            <div className="absolute top-3 left-3 w-14 h-14 border border-green-400/20 rounded-full animate-pulse group-hover:border-green-400/40 transition-colors duration-500"></div>
            <div className="absolute bottom-3 right-3 w-10 h-10 border border-blue-400/20 rounded-full animate-spin group-hover:border-blue-400/40 transition-colors duration-500" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-orange-400/30 rounded-full animate-bounce group-hover:border-orange-400/50 transition-colors duration-500"></div>
            
            <h3 className="relative text-2xl font-bold mb-8 text-white flex items-center z-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-4"></div>
              CONTACT
            </h3>
            <div className="relative space-y-6 z-10">
              <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-lg transition-colors duration-300">
                <Mail size={20} className="text-blue-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:support@cloudqlobe.com" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
                    support@cloudqlobe.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-lg transition-colors duration-300">
                <Phone size={20} className="text-green-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+18001234567" className="text-white hover:text-green-400 transition-colors duration-300 font-medium">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-lg transition-colors duration-300">
                <MapPin size={20} className="text-orange-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white font-medium">Global Telecom Hub, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px"></div>
          
          {/* Social Links and Copyright */}
          <div className="pt-12 grid lg:grid-cols-3 gap-8 items-center">
            {/* Email Links */}
            <div className="lg:col-span-1">
              <div className="flex flex-col space-y-3 text-center lg:text-left">
                <a 
                  href="mailto:carriers@cloud.com" 
                  className="group flex items-center justify-center lg:justify-start text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm font-medium"
                >
                  CARRIERS@CLOUD.COM
                  <ExternalLink size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:sales@cloudqlobe.com" 
                  className="group flex items-center justify-center lg:justify-start text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
                >
                  SALES@CLOUDQLOBE.COM
                  <ExternalLink size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            {/* Copyright - Center */}
            <div className="lg:col-span-1 text-center">
              <div className="text-gray-300 text-sm">
                © {new Date().getFullYear()} 
                <span className="font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mx-2">
                  Cloudqlobe
                </span> 
                All rights reserved.
              </div>
            </div>
            
            {/* Legal Links - Right */}
            <div className="lg:col-span-1">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-end space-y-3 lg:space-y-0 lg:space-x-6 text-center lg:text-right">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;