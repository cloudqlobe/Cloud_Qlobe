import React from 'react';
import Homeimage7 from '../../../../assets/DeWatermark.ai_1755397739921.jpeg';
import Homeimage8 from '../../../../assets/ChatGPT Image Aug 17, 2025, 08_47_42 AM.png';
import Homeimage9 from '../../../../assets/wmremove-transformed (4).jpeg';

const Servercontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Power Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>
      </h1>

      {/* Cloud Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage8}
            alt="Cloud Hosting"
            className="w-[580px] h-[420px] object-cover rounded-lg mt-[150px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Reliable <span className="text-orange-500">Cloud Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s cloud hosting delivers enterprise-grade infrastructure that combines speed, scalability, and security. Our cloud servers are built on a global network of data centers, ensuring low latency, seamless performance, and uninterrupted availability across all regions. Whether you’re running a startup application, scaling an e-commerce store, or managing enterprise workloads, our cloud hosting provides the flexibility to grow instantly without worrying about downtime or performance drops. With advanced virtualization and containerized environments, we ensure every application runs smoothly while offering the agility to adapt to sudden traffic spikes or business expansions.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Beyond performance, we focus on complete data security and operational reliability. Automated backups, disaster recovery mechanisms, and real-time monitoring safeguard your applications and critical information at all times. Our solutions integrate easily with modern tools and platforms, giving developers and IT managers the power to deploy apps, scale resources, and manage workloads with ease. With CloudQlobe cloud hosting, businesses gain cost efficiency, technical excellence, and the confidence of partnering with a provider that prioritizes both innovation and stability for long-term growth.
          </p>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Secure <span className="text-orange-500">VPS Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            With CloudQlobe’s VPS hosting, businesses enjoy dedicated resources and full control without the cost of physical hardware. Each virtual private server is fully isolated, providing enhanced security and predictable performance for mission-critical workloads. Equipped with SSD storage, guaranteed CPU power, and customizable configurations, our VPS hosting solutions deliver lightning-fast speed and complete flexibility to adapt to your requirements. Whether you’re hosting websites, running custom applications, or managing secure databases, our VPS ensures reliability, efficiency, and the ability to scale in real time as your projects expand.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Security and control remain at the heart of our VPS hosting. With root access, advanced firewalls, DDoS protection, and instant OS reinstallation, you’re empowered to configure and manage your environment without compromise. Businesses can easily integrate APIs, automate deployments, and manage multiple projects simultaneously through our intuitive control panels. Supported by 24/7 expert assistance, CloudQlobe VPS hosting gives you the performance of a dedicated server with the flexibility of virtualization, making it the perfect solution for growing businesses that demand speed, security, and adaptability.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage9}
            alt="VPS Hosting"
            className="w-[580px] h-[480px] object-cover rounded-lg ml-[200px] mt-[100px]"
          />
        </div>
      </section>

      {/* Dedicated Servers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage7}
            alt="Dedicated Servers"
            className="w-[480px] h-[490px] object-cover rounded-lg mt-[40px] ml-[-50px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            High-Performance <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            For enterprises and organizations handling heavy workloads, CloudQlobe’s dedicated servers provide unmatched performance, exclusivity, and control. With enterprise-grade hardware, high-speed connectivity, and no shared resources, your applications and databases run at maximum efficiency without interference. Ideal for industries such as finance, healthcare, and SaaS, our dedicated servers offer the power to run mission-critical operations, high-traffic platforms, and large-scale applications with total confidence. Every server is fully customizable, giving you the freedom to configure CPU, RAM, storage, and security to align perfectly with your business requirements.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Our dedicated hosting solutions are backed by 24/7 proactive monitoring, redundant power systems, and advanced security measures to keep your infrastructure safe and always operational. With both managed and unmanaged options, you can choose the level of support that suits your team’s needs while relying on our expert engineers for maintenance, patching, or troubleshooting. CloudQlobe dedicated servers are designed for businesses that demand zero compromise—delivering top-tier performance, high availability, and enterprise-level reliability that scale effortlessly with your long-term growth strategy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servercontent1;
