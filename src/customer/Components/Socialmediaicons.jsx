import React, { useState, useRef } from "react";
import {
  FaFacebookF,
  FaMicrosoft,
  FaTelegramPlane,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef(null);

  const icons = [
    {
      icon: <FaFacebookF className="text-white w-5 h-5" />,
      url: "https://facebook.com",
      bg: "bg-[#1877F2]",
    },
    {
      icon: <FaMicrosoft className="text-white w-5 h-5" />,
      url: "https://teams.microsoft.com",
      bg: "bg-[#6264A7]",
    },
    {
      icon: <FaTelegramPlane className="text-white w-5 h-5" />,
      url: "https://telegram.org",
      bg: "bg-[#0088cc]",
    },
    {
      icon: <FaInstagram className="text-white w-5 h-5" />,
      url: "https://instagram.com",
      bg: "bg-[#C13584]",
    },
    {
      icon: <FaLinkedinIn className="text-white w-5 h-5" />,
      url: "https://linkedin.com",
      bg: "bg-[#0A66C2]",
    },
    {
      icon: <FaWhatsapp className="text-white w-5 h-5" />,
      url: "https://whatsapp.com",
      bg: "bg-[#25D366]",
    },
  ];

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 h-full w-16 z-50"
    >
      <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2">
        {isHovered &&
          icons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 ${item.bg} flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.icon}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
