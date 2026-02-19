  import { useState, useRef, useEffect, useContext } from "react";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import { RiDatabase2Fill } from "react-icons/ri";
  import { GiSurroundedEye } from "react-icons/gi";
  import { GiGroundbreaker } from "react-icons/gi";
  import { FaLayerGroup } from "react-icons/fa";
  import { SiSimilarweb } from "react-icons/si";
  import { GiFlowerTwirl } from "react-icons/gi";
  import { ArrowRight, Languages } from "lucide-react";
  import logo1 from "../../assets/Square_Organic_Beauty_Cleanser_Logo__1_-removebg-preview.png";
  import logo from "../../assets/logo1-removebg-preview.png";
  import axiosInstance from "../../utils/axiosinstance";
  import usePageTranslator from "../../usePageTranslator";
  import { serviceTranslations, navbarTranslations, languageOptions } from "./DummyTranslateData/NavbarServiceTranslationsData";
  import Ratepages from "../Rates/Components/Rateheader";
  import { LanguageContext } from "../../context/LanguageContext";

  const Navbar = () => {

    const authToken = sessionStorage.getItem("authToken");
    const role = sessionStorage.getItem("role");

    const hasAuthToken = !!authToken;
    const hasRoleOnly = !!role && !authToken;

    // Desktop dropdown (services menu on desktop)
    const [showDropdown, setShowDropdown] = useState(false);

    // Mobile sidebar (separate state)
    const [showSidebar, setShowSidebar] = useState(false);

    // Mobile services sub-menu inside sidebar
    const [showServices, setShowServices] = useState(false);

    const { language, setLanguage } = useContext(LanguageContext);

    usePageTranslator(language);
    Ratepages(language)

    const location = useLocation();
    const currentPath = location.pathname;

    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const languageRef = useRef(null);

    // Close desktop dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setShowDropdown(false);
        }
        if (languageRef.current && !languageRef.current.contains(e.target)) {
          // language menu handled separately
          // keep it in its own state below if needed
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close language menu when clicking outside (languageRef + its open state)
    const [langOpen, setLangOpen] = useState(false);
    useEffect(() => {
      const handleClickOutsideLang = (e) => {
        if (languageRef.current && !languageRef.current.contains(e.target)) {
          setLangOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutsideLang);
      return () => document.removeEventListener("mousedown", handleClickOutsideLang);
    }, []);

    const t = serviceTranslations[language] || serviceTranslations.en;
    const nav = navbarTranslations[language] || navbarTranslations.en;

    const dropdownItems = [
      { label: t.ccRoutes, icon: <GiFlowerTwirl size={30} />, path: "/services/cc-routes" },
      { label: t.cliVoice, icon: <FaLayerGroup size={30} />, path: "/services/cli-voice" },
      { label: t.didSolutions, icon: <GiSurroundedEye size={30} />, path: "/services/did-solutions" },
      { label: t.voipWebsites, icon: <GiGroundbreaker size={30} />, path: "/services/voip-websites" },
      { label: t.serverHosting, icon: <RiDatabase2Fill size={30} />, path: "/services/server-hosting" },
      { label: t.dialerSolutions, icon: <SiSimilarweb size={30} />, path: "/services/dialer-solutions" },
    ];

    const dropdownOffsets = {
      en: 173, es: 195, fr: 156, de: 183, tr: 156, it: 160, ar: 150,
      ja: 212, ko: 201, "zh-CN": 156, ru: 177, pt: 198,
    };

    const handleLogout = async () => {
      try {
        await axiosInstance.post('api/logout', {}, { withCredentials: true });
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('role')
        navigate('/customer/login');
      } catch (error) {
        console.log(error);
      }
    };

    // Mobile: when a link is clicked, close sidebar and collapse services
    const handleMobileLinkClick = () => {
      setShowSidebar(false);
      setShowServices(false);
    };

    return (
      <div data-no-translate className="fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-[20px] md:ml-[50px] flex items-center gap-2">
            <img src={logo} alt="Cloudqlobe Logo" className="h-14 md:h-16 w-auto" />
          </div>

          {/* Desktop Center Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-10 text-gray-600 font-medium items-center ml-[80px]">
            <Link to="/" className="hover:text-blue-500 transition">{nav.home}</Link>
            <Link to="/about" className="hover:text-blue-500 transition">{nav.about}</Link>

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-blue-500 transition"
              >
                {nav.services}
              </button>

              {showDropdown && (
                <div
                  className="absolute top-full transform -translate-x-1/2 mt-2 w-[1515px] bg-white text-black squared-xl z-50 shadow-2xl border border-gray-200 overflow-hidden"
                  onMouseLeave={() => setShowDropdown(false)}
                  data-no-translate
                  style={{ left: `${dropdownOffsets[language] || 166}px` }}
                >
                  {/* --- desktop dropdown content (unchanged) --- */}
                  <div className="flex relative">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full -translate-x-16 -translate-y-16 animate-bounce" style={{ animationDuration: '6s' }} />
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-full translate-x-12 translate-y-12 animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }} />
                      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    </div>

                    <div className="flex-1 bg-white rounded-l-xl relative z-10 p-4">
                      <div className="w-full h-full border-2 border-gray-200 squared-xl p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {dropdownItems.map((item, idx) => (
                            <div key={idx} className={`squared-lg p-2 border-2 rounded-xl transition-all duration-300 ${currentPath === item.path ? "border-[#5885AF]" : "border-gray-200"}`}>
                              <Link to={item.path} className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-102 hover:shadow-lg">
                                <div className="w-16 h-16 border-2 rounded-xl flex items-center justify-center shadow-sm">
                                  <div className="text-[#5885AF] group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110">{item.icon}</div>
                                </div>
                                <span className="text-sm font-default text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{item.label}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 animate-pulse opacity-60" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
                    </div>

                    <div className="w-96 h-78 bg-[#0a2463] squared-r-xl relative z-10 overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-r-xl">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-4 left-8 w-8 h-8 border-2 border-cyan-400 opacity-30 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
                          <div className="absolute top-12 right-12 w-6 h-6 border-2 border-blue-400 opacity-40 transform rotate-12 animate-pulse" />
                          <div className="absolute bottom-16 left-6 w-10 h-10 border border-purple-400 opacity-25 transform -rotate-12 animate-bounce" style={{ animationDuration: '4s' }} />
                          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 280">
                            <path d="M50,40 Q150,80 250,40 T350,80" stroke="url(#gradient1)" strokeWidth="2" fill="none" className="animate-pulse">
                              <animate attributeName="stroke-dasharray" values="0,1000;100,900;0,1000" dur="8s" repeatCount="indefinite" />
                            </path>
                            <path d="M100,120 L200,80 L300,160 L350,120" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" opacity="0.6">
                              <animate attributeName="stroke-dasharray" values="0,800;80,720;0,800" dur="6s" repeatCount="indefinite" />
                            </path>
                            <defs>
                              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                              </linearGradient>
                              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75" />
                          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
                          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s', animationDuration: '3s' }} />
                        </div>
                      </div>

                      <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
                        <div className="relative">
                          <div className="w-20 h-20 bg-to-black rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 relative overflow-hidden p-2">
                            <img src={logo1} alt="Cloudqlobe" className="w-full h-full object-contain z-10 filter brightness-110" />
                            <div className="absolute inset-2 rounded-xl opacity-20 animate-pulse"></div>
                            <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-300 rounded-full"></div>
                            <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-300 rounded-full"></div>
                          </div>
                          <div className="absolute inset-0 w-20 h-20 border-2 border-cyan-400 rounded-2xl animate-spin opacity-30" style={{ animationDuration: '10s' }} />
                          <div className="absolute -inset-2 w-24 h-24 border border-blue-400 rounded-2xl animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xl text-transparent bg-clip-text bg-blue-400" style={{ fontFamily: 'Arial, sans-serif' }}>
                            CLOUD <span className="text-orange-400">QLOBE</span>
                          </h4>
                        </div>

                        <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-xs uppercase tracking-wider overflow-hidden">
                          <span className="relative z-10 flex items-center gap-2">
                            ACCESS NOW
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                          <div className="absolute inset-0 border border-cyan-400 rounded-lg opacity-50"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-1 left-1 w-1 h-1 border-l-2 border-t-2 border-cyan-300"></div>
                          <div className="absolute bottom-1 right-1 w-1 h-1 border-r-2 border-b-2 border-cyan-300"></div>
                        </button>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-white uppercase">ONLINE</span>
                          </div>
                          <div className="w-px h-3 bg-gray-600"></div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <span className="text-xs text-white uppercase">SECURE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-blue-500 transition">{nav.contact}</Link>
            {(role === "guest" || authToken) && (
              <Link
                to="/rates"
                onClick={handleMobileLinkClick}
                className="text-gray-700 hover:text-blue-500 py-2"
              >
                {nav.rates}
              </Link>
            )}


            <Link to="/faq" className="hover:text-blue-500 transition">{nav.faq}</Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* 🌍 Language Selector */}
            <div className="relative w-[220px] h-10" ref={languageRef}>
              <input
                type="text"
                value={languageOptions.find((l) => l.code === language)?.name || language}
                readOnly
                onClick={() => setLangOpen(!langOpen)}
                className="w-full h-full border border-gray-300 rounded pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all cursor-pointer"
              />
              <Languages className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />

              {langOpen && (
                <div className="absolute top-full left-0 w-[500px] bg-white border border-gray-200 rounded-xl shadow-lg mt-1 z-10 p-3 grid grid-cols-4 gap-3">
                  {[
                    { name: "English", icon: "🇬🇧", value: "en" },
                    { name: "Spanish", icon: "🇪🇸", value: "es" },
                    { name: "French", icon: "🇫🇷", value: "fr" },
                    { name: "German", icon: "🇩🇪", value: "de" },
                    { name: "Turkish", icon: "🇹🇷", value: "tr" },
                    { name: "Italian", icon: "🇮🇹", value: "it" },
                    { name: "Arabic", icon: "🇸🇦", value: "ar" },
                    { name: "Japanese", icon: "🇯🇵", value: "ja" },
                    { name: "Korean", icon: "🇰🇷", value: "ko" },
                    { name: "Chinese", icon: "🇨🇳", value: "zh-CN" },
                    { name: "Russian", icon: "🇷🇺", value: "ru" },
                    { name: "Portuguese", icon: "🇵🇹", value: "pt" },
                  ].map((lang) => (
                    <div
                      key={lang.name}
                      onClick={() => {
                        setLanguage(lang.value);
                        setLangOpen(false);
                      }}
                      className="flex flex-col items-center justify-center border border-gray-200 rounded-md py-2 hover:bg-blue-50 hover:border-blue-300 transition cursor-pointer w-[100px] h-[65px]"
                    >
                      <span className="text-xl">{lang.icon}</span>
                      <span className="text-[12px] mt-1 text-gray-700 font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-end gap-3 ml-6">
              {hasAuthToken ? (
                /* 🔐 Logged in user */
                <>
                  <Link
                    to="/customer/dashboard"
                    className="w-[120px] text-center px-4 py-2 bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition rounded"
                  >
                    {nav.dashboard}
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-[120px] text-center px-4 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition rounded"
                  >
                    {nav.logout}
                  </button>
                </>
              ) : hasRoleOnly ? (
                /* 👤 Role exists but no token */
                <>
                  <Link
                    to="/customer/register"
                    className="w-[120px] text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition rounded"
                  >
                    {nav.register}
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-[120px] text-center px-4 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition rounded"
                  >
                    {nav.logout}
                  </button>
                </>
              ) : (
                /* 🚪 Not logged in */
                <>
                  <Link
                    to="/customer/register"
                    className="w-[120px] text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition rounded"
                  >
                    {nav.register}
                  </Link>

                  <Link
                    to="/customer/login"
                    className="w-[120px] text-center px-4 py-2 bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition rounded"
                  >
                    {nav.login}
                  </Link>
                </>
              )}
            </div>

          </div>

          {/* 🍔 Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 border border-gray-300 rounded hover:bg-gray-50 transition"
            onClick={() => {
              // toggle sidebar separately from desktop dropdown
              setShowSidebar((prev) => !prev);
              // when opening sidebar, keep services collapsed by default;
              // when closing sidebar, collapse sub-menu
              if (showSidebar) {
                setShowServices(false);
              }
            }}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-5 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-5 h-[2px] bg-gray-800"></div>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 ${showSidebar ? 'left-0' : '-left-full'} w-72 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-50 overflow-y-auto`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => { setShowSidebar(false); setShowServices(false); }}
              className="text-gray-600 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col px-6 space-y-2">
            <Link to="/" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-blue-500 py-2">{nav.home}</Link>
            <Link to="/about" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-blue-500 py-2">{nav.about}</Link>

            {/* Services Dropdown (mobile) */}
            <div className="flex flex-col">
              <button
                onClick={() => {
                  if (!showSidebar) {
                    // open sidebar and show services
                    setShowSidebar(true);
                    setShowServices(true);
                  } else {
                    // toggle submenu
                    setShowServices((prev) => !prev);
                  }
                }}
                className="flex justify-between items-center w-full text-gray-700 hover:text-blue-500 py-2 font-medium"
              >
                Services
                <span className={`transform transition-transform ${showServices ? 'rotate-90' : ''}`}>&gt;</span>
              </button>

              {showServices && (
                <div className="flex flex-col pl-4 space-y-1">
                  <Link to="/services/cc-routes" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.ccRoutes}</Link>
                  <Link to="/services/cli-voice" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.cliVoice}</Link>
                  <Link to="/services/did-solutions" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.didSolutions}</Link>
                  <Link to="/services/voip-websites" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.voipWebsites}</Link>
                  <Link to="/services/server-hosting" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.serverHosting}</Link>
                  <Link to="/services/dialer-solutions" onClick={handleMobileLinkClick} className="text-gray-600 hover:text-blue-500 py-1 text-sm">{t.dialerSolutions}</Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-blue-500 py-2">{nav.contact}</Link>
            {(role === "guest" || authToken) && (
              <Link
                to="/rates"
                onClick={handleMobileLinkClick}
                className="text-gray-700 hover:text-blue-500 py-2"
              >
                {nav.rates}
              </Link>
            )}



            <Link to="/faq" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-blue-500 py-2">{nav.faq}</Link>
          </nav>

          {/* Language Switcher */}
          <div className="mt-6 px-6">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="tr">Türkçe</option>
              <option value="it">Italiano</option>
              <option value="ar">العربية</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="zh-CN">中文</option>
              <option value="ru">Русский</option>
              <option value="pt">Português</option>
            </select>
          </div>

          {/* Auth Buttons */}
          <div className="mt-6 flex flex-col px-6 space-y-3">
            {hasAuthToken ? (
              <>
                <Link to="/customer/dashboard" onClick={handleMobileLinkClick} className="w-full text-center px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition">{nav.dashboard}</Link>
                <button onClick={() => { handleLogout(); handleMobileLinkClick(); }} className="w-full text-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition">{nav.logout}</button>
              </>
            ) : hasRoleOnly ? (
              <>
                <Link to="/customer/register" onClick={handleMobileLinkClick} className="w-full text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition">{nav.register}</Link>
                <button onClick={() => { handleLogout(); handleMobileLinkClick(); }} className="w-full text-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition">{nav.logout}</button>

              </>
            ) : (
              <>
                <Link to="/customer/register" onClick={handleMobileLinkClick} className="w-full text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition">{nav.register}</Link>
                <Link to="/customer/login" onClick={handleMobileLinkClick} className="w-full text-center px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded hover:bg-orange-700 transition">{nav.login}</Link>
              </>
            )}
          </div>
        </div>

        {/* Overlay */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => { setShowSidebar(false); setShowServices(false); }}
          />
        )}
      </div>
    );
  };

  export default Navbar;
