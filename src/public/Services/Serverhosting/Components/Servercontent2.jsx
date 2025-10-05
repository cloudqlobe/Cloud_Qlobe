import React from 'react';
import Homeimage10 from '../../../../assets/ChatGPT Image Aug 17, 2025, 08_31_13 AM.png'
import Homeimage12 from '../../../../assets/wmremove-transformed (2).jpeg'
import Homeimage11 from '../../../../assets/wmremove-transformed (3).jpeg'

const Servercontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Empower Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>
      </h1>

      {/* Cloud Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage12}
            alt="Cloud Hosting"
            className="w-[600px] h-[450px] object-cover rounded-lg ml-[-50px] mt-[180px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px] mt-[-20px]">
          <h2 className="text-[28px] font-semibold font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Smarter <span className="text-orange-500">Cloud Infrastructure</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s Cloud Hosting is built for businesses seeking unmatched flexibility and seamless growth. 
            Our cloud environment dynamically scales resources to match your traffic and operational demands, 
            giving you the freedom to focus on innovation instead of technical limitations. 
            Whether you're hosting a simple website, managing complex applications, or running multi-client projects, 
            our cloud ensures reliability, speed, and high availability around the globe.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Each plan comes with advanced security protocols, automated backups, and full compliance support, 
            ensuring your sensitive data is fully protected. With global accessibility and 24/7 monitoring, 
            your teams can collaborate effortlessly from anywhere, at any time. 
            CloudQlobe takes care of infrastructure management so you can focus on scaling, growth, 
            and delivering exceptional value to your customers without worrying about downtime or bottlenecks.
          </p>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px] mt-[10px]">
          <h2 className="text-[28px] font-semibold font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Performance-Driven <span className="text-orange-500">VPS Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe VPS Hosting gives businesses dedicated resources and total control over their server environment. 
            Unlike shared hosting, your VPS is completely isolated, providing consistent performance even during traffic surges. 
            It's ideal for hosting multiple websites, running complex applications, and managing resource-intensive workloads with ease, 
            ensuring uninterrupted performance and maximum uptime for mission-critical operations.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            With full root access and customizable configurations, our VPS allows developers and IT teams to tailor the server environment to their exact specifications. 
            Combine this with enterprise-grade security, proactive 24/7 monitoring, and high-speed connectivity, 
            and you get a solution that offers both flexibility and reliability. 
            CloudQlobe VPS empowers your business to scale, innovate, and maintain a competitive edge without technical compromises.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage11}
            alt="VPS Hosting"
            className="w-[520px] h-[520px] object-cover rounded-lg ml-[150px] mt-[10px]"
          />
        </div>
      </section>

      {/* Dedicated Servers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage10}
            alt="Dedicated Servers"
            className="w-[480px] h-[520px] object-cover rounded-lg ml-[-50px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-40px]">
          <h2 className="text-[28px] font-semibold font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Enterprise-Grade <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe Dedicated Servers deliver unparalleled power, control, and reliability for businesses with the highest demands. 
            Running mission-critical applications, high-traffic websites, and secure databases is effortless with dedicated access to enterprise-class hardware. 
            Every server is designed to ensure maximum performance, eliminating bottlenecks and providing predictable, high-speed operations even under heavy loads.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Beyond performance, our dedicated servers provide complete customization, advanced security features, and proactive monitoring. 
            You get exclusive access to all CPU, RAM, and storage resources, ensuring no compromises in efficiency or uptime. 
            Combined with DDoS protection, regular maintenance, and expert support, CloudQlobe Dedicated Servers allow enterprises to operate globally with confidence, 
            knowing that critical infrastructure is reliable, secure, and always optimized for success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servercontent2;
