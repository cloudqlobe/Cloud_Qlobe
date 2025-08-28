import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDatabase2Fill } from "react-icons/ri";
import { GiSurroundedEye } from "react-icons/gi";
import { GiGroundbreaker } from "react-icons/gi";
import { FaLayerGroup } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";
import { GiFlowerTwirl } from "react-icons/gi";
import {
  Search,
  ArrowRight,
} from "lucide-react";
import logo1 from "../../assets/Square_Organic_Beauty_Cleanser_Logo__1_-removebg-preview.png";
import logo from "../../assets/logo1-removebg-preview.png";
import axiosInstance from "../../utils/axiosinstance";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropdownItems = [
    { label: "CC Routes", icon: <GiFlowerTwirl size={40} />, path: "/cc-routes" },
    { label: "CLI Voice", icon: <FaLayerGroup size={40} />, path: "/cli-voice" },
    { label: "DID Solutions", icon: <GiSurroundedEye size={40} />, path: "/did-solutions" },
    { label: "VoIP Websites", icon: <GiGroundbreaker size={40} />, path: "/voip-websites" },
    { label: "Server Hosting", icon: <RiDatabase2Fill size={40} />, path: "/server-hosting" },
    { label: "Dialer Solutions", icon: <SiSimilarweb size={40} />, path: "/dialer-solutions" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleLogout = async () => {
    try {
      await axiosInstance.post('api/logout', {}, { withCredentials: true });
      sessionStorage.removeItem('authToken');
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-[50px]">
          <img src={logo} alt="Cloudqlobe Logo" className="h-16 w-auto" />
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-10 text-gray-600 font-medium items-center ml-[80px]">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>

          {/* Enhanced Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            ref={dropdownRef}
          >
            <button className="hover:text-blue-500 transition">Services</button>

            {showDropdown && (
              <div
                className="absolute top-8 left-[306%] transform -translate-x-1/2 mt-2 w-[1519px] bg-white text-black squared-xl z-50 shadow-2xl border border-gray-200 overflow-hidden"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full -translate-x-16 -translate-y-16 animate-bounce" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-full translate-x-12 translate-y-12 animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  </div>

                  <div className="flex-1 bg-white rounded-l-xl relative z-10 p-4">
                    <div className="w-full h-full border-2 border-gray-200 squared-xl p-4">
                      <div className="grid grid-cols-3 gap-4">
                        {dropdownItems.map((item, idx) => (
                          <div key={idx} className="border border-gray-200 squared-lg p-2">
                            <Link
                              to={item.path}
                              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 transform hover:scale-102 hover:shadow-lg"
                              onClick={() => setShowDropdown(false)}
                            >
                              <div className="w-16 h-16 border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                                <div className="text-[#5885AF] group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110">
                                  {item.icon}
                                </div>

                              </div>
                              <span className="text-sm font-default text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                                {item.label}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Animated separator line */}
                  <div className="w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 animate-pulse opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>

                  {/* Right Ad Section */}
                  <div className="w-96 h-78 bg-[#0a2463] squared-r-xl relative z-10 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden rounded-r-xl">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-4 left-8 w-8 h-8 border-2 border-cyan-400 opacity-30 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                        <div className="absolute top-12 right-12 w-6 h-6 border-2 border-blue-400 opacity-40 transform rotate-12 animate-pulse"></div>
                        <div className="absolute bottom-16 left-6 w-10 h-10 border border-purple-400 opacity-25 transform -rotate-12 animate-bounce" style={{ animationDuration: '4s' }}></div>

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

                        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
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
                        <div className="absolute inset-0 w-20 h-20 border-2 border-cyan-400 rounded-2xl animate-spin opacity-30" style={{ animationDuration: '10s' }}></div>
                        <div className="absolute -inset-2 w-24 h-24 border border-blue-400 rounded-2xl animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                      </div>

                      <div className="space-y-3">
                        <h4
                          className="text-xl text-transparent bg-clip-text bg-blue-400"
                          style={{ fontFamily: 'Arial, sans-serif' }}
                        >
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

          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/rates" className="hover:text-blue-500 transition">Rates</Link>
          <Link to="/faq" className="hover:text-blue-500 transition">FAQ</Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative w-[250px] h-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border border-gray-300 rounded pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-end gap-3 ml-6">
          {sessionStorage.getItem("authToken") ? (
            <>
              <Link
                to="/dashboard"
                className="w-[120px] text-center px-4 py-2 bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition rounded"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout()
                }}
                className="w-[120px] text-center px-4 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="w-[120px] text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition rounded"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="w-[120px] text-center px-4 py-2 bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition rounded"
              >
                Login
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
