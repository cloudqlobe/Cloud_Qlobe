import React from 'react';
import Homeimage1 from '../../../assets/3719997.jpg';
import Homeimage2 from '../../../assets/ChatGPT Image Aug 17, 2025, 07_08_05 AM.png';
import Homeimage3 from '../../../assets/5252489.jpg';

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 overflow-hidden mt-[-20px] sm:mt-[-30px] md:mt-[-40px]">
      {/* SEO-friendly h1 (hidden visually but crawled by search engines) */}
      <h1 className="sr-only">
        Seamless Communication with Our Advanced Telecom Technology
      </h1>

      {/* Styled heading (for design only) */}
      <div
        aria-hidden="true"
        className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-[#3c4043] mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20 mt-4 sm:mt-5 md:mt-6 leading-snug px-2 sm:px-4"
      >
        Seamless Communication with Our 
        <span className="text-orange-500"> Advanced Telecom Technology</span>
      </div>

      {/* CC Routes Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <img
            src={Homeimage2}
            alt="CC Routes"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[580px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            CC Routes for<span className="text-blue-500"> Reliable Global Connections</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            We Cloud Qlobe provide next-generation CC Routes built on advanced telecom infrastructure that ensures seamless global connectivity and crystal-clear communication. Our routing systems are backed by intelligent algorithms, low-latency pathways, and redundant networks, designed to minimize downtime and deliver consistent call quality across multiple regions. Our CC Routes adapt with smart load balancing and automatic optimization to give you uninterrupted service at all times.
          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We Cloud Qlobe go beyond just affordability by integrating cutting-edge technology with cost-effective solutions. With real-time traffic monitoring, fraud detection, and automated failover systems, we make sure your communications are both secure and efficient. Our strong carrier partnerships and optimized interconnects enable us to provide genuine, transparent pricing without compromising on quality. By combining scalability and reliability, we ensure your business enjoys affordable rates, future-ready solutions, and a trusted communication network that grows with your needs.
          </p>
        </div>
      </section>

      {/* CLI Voice Termination Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16 max-w-7xl mx-auto">
        <div className="order-2 md:order-1 flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            Premium CLI Routes<span className="text-blue-500"> with Trust and Transparency</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            At CloudQlobe provide premium CLI (Calling Line Identification) routes designed to deliver seamless voice connectivity with unmatched reliability. Our CLI routes ensure that every call displays the correct caller ID, enhancing trust, transparency, and professionalism in communication. With our robust carrier-grade infrastructure, businesses experience crystal-clear voice quality, minimal latency, and zero interruptions, making global outreach smoother than ever.
          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We combine advanced telecom technologies, intelligent routing mechanisms, and real-time monitoring to guarantee maximum uptime and performance. Whether your business requires enterprise-level calling, international connectivity, or customer engagement at scale, our CLI solutions are tailored to provide affordable, efficient, and secure voice services. We CloudQlobe are committed to making communication not just reliable but also technologically future-ready, ensuring your business always stays ahead in the global telecom landscape.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center w-full">
          <img
            src={Homeimage1}
            alt="CLI Voice Terminations"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[680px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto pb-8 sm:pb-12">
        <div className="flex justify-center items-center w-full">
          <img
            src={Homeimage3}
            alt="DID Solutions"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[520px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            Flexible DID Numbers <span className="text-blue-600"> with Seamless Integration</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            We Cloud Qlobe provide Direct Inward Dialing (DID) numbers that empower businesses to establish a local presence across the globe without the need for physical offices. Our DID solutions allow clients to purchase virtual numbers from multiple countries and regions, enabling direct inbound calls from customers worldwide. With scalable cloud-based infrastructure, intelligent call routing, and seamless PBX/VoIP integration, our DID services help businesses stay connected anytime, anywhere.
          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We offer easy integration with CRM, call center software, and custom applications, ensuring businesses can manage customer interactions, analytics, and call tracking efficiently. Our DID solutions are built to be low-cost, flexible, and highly compatible with existing telecom systems making it simple for clients to expand their reach and handle large volumes of calls effortlessly. With multi-device accessibility, advanced call forwarding, and number portability, CloudQlobe ensures your communication ecosystem is not just reliable but also future-ready and globally connected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;