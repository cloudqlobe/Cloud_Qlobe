import { useState, useEffect } from 'react';
import logo1 from "../../assets/Square_Organic_Beauty_Cleanser_Logo__1_-removebg-preview.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  const renderBox = (title) => {
    if (title === "SERVICES") {
      return (
        <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
          <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 border border-blue-400/20 rounded-full animate-spin group-hover:border-blue-400/40 transition-colors duration-500" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 border border-orange-400/20 rounded-full animate-spin group-hover:border-orange-400/40 transition-colors duration-500" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 border border-purple-400/20 rounded-full animate-ping group-hover:border-purple-400/40 transition-colors duration-500"></div>

          <h3 className="relative text-xl sm:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-white flex items-center z-10">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-3 sm:mr-4"></div>
            SERVICES
          </h3>
          <ul className="relative space-y-3 sm:space-y-4 z-10">
            {[
              { name: 'CC Routes', url: '/services/cc-routes' },
              { name: 'CLI Routes', url: '/services/cli-voice' },
              { name: 'VoIP Websites', url: '/services/voip-websites' },
              { name: 'Dialer Solutions', url: '/services/dialer-solutions' },
              { name: 'DID Numbers', url: '/services/did-solutions' },
              { name: 'Server Hosting', url: '/services/server-hosting' }
            ].map(({ name, url }, i) => (
              <li key={i}>
                <a
                  href={url}
                  className="group/link flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 sm:hover:translate-x-3 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg hover:bg-white/5 text-sm sm:text-base"
                >
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-orange-400" />
                  <span className="group-hover/link:font-medium transition-all duration-300">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (title === "WE THE CQ") {
      return (
        <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
          <div className="absolute top-1 right-1 w-16 h-16 sm:w-20 sm:h-20 border border-purple-400/20 rounded-full animate-spin group-hover:border-purple-400/40 transition-colors duration-500" style={{ animationDuration: '25s' }}></div>
          <div className="absolute bottom-1 left-1 w-12 h-12 sm:w-16 sm:h-16 border border-pink-400/20 rounded-full animate-spin group-hover:border-pink-400/40 transition-colors duration-500" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 sm:w-8 sm:h-8 border border-cyan-400/30 rounded-full animate-pulse group-hover:border-cyan-400/50 transition-colors duration-500"></div>
          <div className="absolute top-1/4 left-1/2 w-10 h-10 sm:w-12 sm:h-12 border border-yellow-400/20 rounded-full animate-ping group-hover:border-yellow-400/40 transition-colors duration-500"></div>

          <h3 className="relative text-xl sm:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-white flex items-center z-10">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-3 sm:mr-4"></div>
            WE THE CQ
          </h3>

          <div className="relative space-y-3 sm:space-y-4 z-10">
            {[
              { name: 'Home', url: '/' },
              { name: 'About Us', url: '/about' },
              { name: 'Rate', url: '/rates' },
              { name: 'FAQ', url: '/faq' },
              { name: 'Contact Us', url: '/contact' }
            ].map(({ name, url }, i) => (
              <a
                key={i}
                href={url}
                className="group/link flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 sm:hover:translate-x-3 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg hover:bg-white/5 text-sm sm:text-base"
              >
                <ArrowRight size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-blue-400" />
                <span className="group-hover/link:font-medium transition-all duration-300">{name}</span>
              </a>
            ))}
          </div>
        </div>
      );
    }

    if (title === "CONTACT") {
      return (
        <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 h-full overflow-hidden group hover:bg-white/10 transition-all duration-500">
          <div className="absolute top-3 left-3 w-12 h-12 sm:w-14 sm:h-14 border border-green-400/20 rounded-full animate-pulse group-hover:border-green-400/40 transition-colors duration-500"></div>
          <div className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 border border-blue-400/20 rounded-full animate-spin group-hover:border-blue-400/40 transition-colors duration-500" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 sm:w-6 sm:h-6 border border-orange-400/30 rounded-full animate-bounce group-hover:border-orange-400/50 transition-colors duration-500"></div>

          <h3 className="relative text-xl sm:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-white flex items-center z-10">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mr-3 sm:mr-4"></div>
            CONTACT
          </h3>
          <div className="relative space-y-4 sm:space-y-5 md:space-y-6 z-10">
            <div className="flex items-start space-x-3 sm:space-x-4 group/contact hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-colors duration-300">
              <Mail size={18} className="sm:w-5 sm:h-5 text-blue-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:support@cloudqlobe.com" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm sm:text-base break-all">
                  support@cloudqlobe.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 group/contact hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-colors duration-300">
              <Phone size={18} className="sm:w-5 sm:h-5 text-green-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Phone</p>
                <a href="tel:+447418365876" className="text-white hover:text-green-400 transition-colors duration-300 font-medium text-sm sm:text-base">
                  +44 7418 365876
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 group/contact hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-colors duration-300">
              <MapPin size={18} className="sm:w-5 sm:h-5 text-orange-400 mt-1 group-hover/contact:scale-110 transition-transform duration-300 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Location</p>
                <p className="text-white font-medium text-sm sm:text-base">Tsuen Wan Bay in Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
        {/* LOGO + ABOUT SECTION */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="lg:max-w-2xl space-y-4 sm:space-y-5 md:space-y-6 w-full">
              <div className="flex items-center space-x-3 mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-white/10">
                    <img
                      src={logo1}
                      alt="Cloudqlobe Logo"
                      className="w-8 h-8 object-contain drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      <span className="text-orange-400">CLOUD</span>
                      <span className="text-blue-400">QLOBE</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                      Global Telecom Solutions
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                Delivering cutting-edge telecom solutions with global reach and
                enterprise-grade performance. Connecting businesses worldwide
                with reliable, scalable communication infrastructure.
              </p>

              {/* SOCIAL MEDIA */}
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  { Icon: Facebook, color: "hover:bg-blue-600", label: "Facebook", url: "https://www.facebook.com/cloudqlobe" },
                  { Icon: Twitter, color: "hover:bg-blue-400", label: "Twitter", url: "https://twitter.com/" },
                  { Icon: Instagram, color: "hover:bg-pink-600", label: "Instagram", url: "https://www.instagram.com/cloudqlobe/" },
                  { Icon: Mail, color: "hover:bg-red-600", label: "Email", url: "mailto:yourmail@example.com" },
                ].map(({ Icon, color, label, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2.5 sm:p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={label}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* SUBSCRIBE */}
            <div className="lg:max-w-md w-full">
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 overflow-hidden">
                <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 border border-yellow-400/20 rounded-full animate-ping"></div>

                <h3 className="relative text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white z-10">
                  SUBSCRIBE
                </h3>
                <p className="relative text-gray-300 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm leading-relaxed z-10">
                  Join our newsletter to stay up to date on features and releases.
                </p>

                <div className="relative space-y-3 sm:space-y-4 z-10">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/15 text-sm sm:text-base"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <button
                    onClick={handleSubscribe}
                    className="w-full group relative bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-500 hover:to-orange-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-sm sm:text-base"
                  >
                    <span className="flex items-center justify-center">
                      Subscribe
                      <Send size={14} className="sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
                    By subscribing you agree with our Privacy Policy and provide consent to receive updates from our company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES / QUICK LINKS / CONTACT */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 mb-12 md:mb-14 lg:mb-16">
            {renderBox("SERVICES")}
            {renderBox("WE THE CQ")}
            {renderBox("CONTACT")}
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden relative h-[440px] sm:h-[460px] mb-12 sm:mb-14">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                {renderBox(i === 0 ? "SERVICES" : i === 1 ? "WE THE CQ" : "CONTACT")}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px"></div>

          <div className="pt-8 sm:pt-10 md:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center text-center sm:text-left">
            <div className="space-y-1 sm:space-y-2">
              <a href="mailto:carriers@cloud.com" className="text-gray-400 hover:text-orange-400 text-xs sm:text-sm block">
                CARRIERS@CLOUD.COM
              </a>
              <a href="mailto:sales@cloudqlobe.com" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm block">
                SALES@CLOUDQLOBE.COM
              </a>
            </div>

            <div className="text-gray-300 text-xs sm:text-sm order-last sm:order-none">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Cloudqlobe
              </span>{" "}
              All rights reserved.
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;