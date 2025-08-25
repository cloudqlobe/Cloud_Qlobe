import React from 'react';
import Homeimage18 from '../../../../../assets/3847762.jpg' 
import Homeimage16 from '../../../../../assets/ChatGPT Image Aug 18, 2025, 04_27_35 AM.png' 
import Homeimage17 from '../../../../../assets/ChatGPT Image Aug 18, 2025, 05_13_01 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Empower Your Business with <span className="text-blue-800">Next-Gen Web & App Development</span>
      </h1>

      {/* Website Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage16}
            alt="Website Development"
            className="w-[520px] h-[520px] object-cover rounded-lg mt-[50px] ml-[-120px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px] mt-[-50px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Innovative <span className="text-orange-500">Website Development</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            We specialize in crafting responsive, scalable, and performance-driven websites that reflect your brand’s vision and engage customers seamlessly. From corporate sites to advanced VoIP portals, we deliver platforms optimized for speed, security, and modern user experience. Our development approach combines UI/UX design, cutting-edge frameworks, and strong back-end architecture, ensuring your website performs flawlessly across devices and browsers. Every project is customized to meet business goals and built to support future growth, so your online presence stays relevant and competitive.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            Our websites are engineered to handle high traffic, integrate smoothly with CRMs, APIs, and cloud-hosted services, and deliver measurable results. With a strong focus on SEO, accessibility, and conversions, we ensure your site not only looks appealing but also drives customer engagement and revenue. Whether it’s e-commerce, enterprise portals, or global platforms, our development process emphasizes performance, security, and scalability, empowering your business to expand with confidence in the digital marketplace.
          </p>
        </div>
      </section>

      {/* VoIP Websites & App Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800  mt-[-100px]">
            Custom <span className="text-orange-500">VoIP Websites & Apps</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            We design and develop powerful VoIP websites and applications tailored to telecom providers, resellers, and enterprises. With features like SIP trunking, call analytics, multi-device compatibility, and API integrations, our solutions help businesses manage communication with efficiency and flexibility. These platforms are lightweight yet robust, secure, and fully optimized for seamless user experiences. From customer self-care portals to enterprise-level admin dashboards, we build solutions that streamline workflows and enhance productivity.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            Our VoIP apps are built with advanced encryption, cross-platform compatibility, and cloud-hosted architecture, ensuring reliability and scalability for growing businesses. Every solution is designed with a future-ready mindset, offering smooth upgrades, effortless integrations, and long-term sustainability. Whether you require custom features, interactive designs, or multi-channel capabilities, our VoIP development services empower you to deliver better communication experiences to clients worldwide.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage17}
            alt="VoIP Apps"
            className="w-[480px] h-[550px] object-cover rounded-lg ml-[180px] mt-[-100px]"
          />
        </div>
      </section>

      {/* Billing & Follow-Up Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage18}
            alt="Billing & Follow Ups"
            className="w-[590px] h-[460px] object-cover rounded-lg ml-[-150px] mt-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-50px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Smart <span className="text-orange-500">Billing & Follow-Up Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            Our automated billing and intelligent follow-up solutions simplify revenue management while ensuring accuracy and transparency. From generating invoices to handling recurring payments and multi-currency transactions, our platforms are designed to give businesses full financial control. We integrate flexible payment gateways, advanced analytics, and secure data handling, making billing smoother and more efficient. With built-in dashboards and reports, businesses gain real-time insights into revenue, outstanding dues, and financial trends.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            Our follow-up tools are equipped with automated reminders, multi-channel notifications, and CRM integration, enabling businesses to maintain strong client relationships without manual effort. Whether you’re managing thousands of customers or a growing client base, our solutions scale with your operations. By combining secure payment cycles, intelligent reporting, and customer engagement features, we ensure no opportunity is missed and your financial process remains streamlined, efficient, and growth-oriented.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
