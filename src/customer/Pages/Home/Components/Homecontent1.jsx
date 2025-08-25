import React from 'react';
import Homeimage1 from '../../../../assets/3719997.jpg';
import Homeimage2 from '../../../../assets/ChatGPT Image Aug 17, 2025, 07_08_05 AM.png'
import Homeimage3 from '../../../../assets/5252489.jpg' // Make sure this file exists in src/assets

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden mt-[-60px]">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-gray-500 mb-20 mt-8 leading-snug">
         Seamless of  Communication with Our 
        <span className="text-orange-500"> Advanced Telecom Technology</span>
      </h1>

      {/* CC Routes Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2 mt-[-180px]">
          <img
            src={Homeimage2}
            alt="CC Routes"
            className="w-[580px] h-[500px] object-cover rounded-lg ml-[-120px] mt-[180px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px] mt-[-20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
             CC Routes for<span className="text-blue-500"> Reliable Global Connections</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We Cloud Qlobe provide next-generation CC Routes built on advanced telecom infrastructure that ensures seamless global connectivity and crystal-clear communication. Our routing systems are backed by intelligent algorithms, low-latency pathways, and redundant networks, designed to minimize downtime and deliver consistent call quality across multiple regions. Our CC Routes adapt with smart load balancing and automatic optimization to give you uninterrupted service at all times.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            We Cloud Qlobe go beyond just affordability by integrating cutting-edge technology with cost-effective solutions. With real-time traffic monitoring, fraud detection, and automated failover systems, we make sure your communications are both secure and efficient. Our strong carrier partnerships and optimized interconnects enable us to provide genuine, transparent pricing without compromising on quality. By combining scalability and reliability, we ensure your business enjoys affordable rates, future-ready solutions, and a trusted communication network that grows with your needs.
          </p>
        </div>
      </section>

      {/* CLI Voice Termination Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-20 max-w-7xl mx-auto ml-[35px] mt-[-20px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
           Premium CLI Routes<span className="text-blue-500"> with Trust and Transparency</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            At CloudQlobe provide premium CLI (Calling Line Identification) routes designed to deliver seamless voice connectivity with unmatched reliability. Our CLI routes ensure that every call displays the correct caller ID, enhancing trust, transparency, and professionalism in communication. With our robust carrier-grade infrastructure, businesses experience crystal-clear voice quality, minimal latency, and zero interruptions, making global outreach smoother than ever.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
           We combine advanced telecom technologies, intelligent routing mechanisms, and real-time monitoring to guarantee maximum uptime and performance. Whether your business requires enterprise-level calling, international connectivity, or customer engagement at scale, our CLI solutions are tailored to provide affordable, efficient, and secure voice services. We CloudQlobe are committed to making communication not just reliable but also technologically future-ready, ensuring your business always stays ahead in the global telecom landscape.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage1}
            alt="CLI Voice Terminations"
            className="w-[680px] h-[580px] object-cover rounded-lg ml-[180px]"
          />
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mt-[-80px]">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage3}
            alt="DID Solutions"
            className="w-[520px] h-[530px] object-cover rounded-lg mt-[20px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
           Flexible DID Numbers <span className="text-blue-600"> with Seamless Integration</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We Cloud Qlobe provide Direct Inward Dialing (DID) numbers that empower businesses to establish a local presence across the globe without the need for physical offices. Our DID solutions allow clients to purchase virtual numbers from multiple countries and regions, enabling direct inbound calls from customers worldwide. With scalable cloud-based infrastructure, intelligent call routing, and seamless PBX/VoIP integration, our DID services help businesses stay connected anytime, anywhere.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
           We offer easy integration with CRM, call center software, and custom applications, ensuring businesses can manage customer interactions, analytics, and call tracking efficiently. Our DID solutions are built to be low-cost, flexible, and highly compatible with existing telecom systems—making it simple for clients to expand their reach and handle large volumes of calls effortlessly. With multi-device accessibility, advanced call forwarding, and number portability, CloudQlobe ensures your communication ecosystem is not just reliable but also future-ready and globally connected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
