import React from 'react';
import Homeimage10 from '../../../../../assets/ChatGPT Image Aug 17, 2025, 08_31_13 AM.png'
import Homeimage12 from '../../../../../assets/wmremove-transformed (2).jpeg'
import Homeimage11 from '../../../../../assets/wmremove-transformed (3).jpeg'

const Homecontent1 = () => {
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
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Scalable <span className="text-orange-500">Cloud Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s cloud hosting platform is designed for businesses that demand flexibility, speed, and reliability. Our cloud infrastructure leverages the latest virtualization technologies, allowing you to scale resources up or down instantly as your needs change. Whether you’re launching a new website, running a SaaS application, or managing a global e-commerce store, our cloud hosting adapts to your business growth without downtime or disruption.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Enjoy seamless integration with popular development tools and frameworks, automated backups, and robust disaster recovery options. Our global network of data centers ensures your applications are always close to your users, reducing latency and improving performance. With advanced security protocols, including DDoS protection and real-time threat monitoring, your data and customer information remain safe and compliant with industry standards.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Why choose CloudQlobe Cloud Hosting?</strong> Our platform is trusted by startups, agencies, and enterprises for its reliability and ease of use. You get 24/7 expert support, a user-friendly control panel, and transparent, pay-as-you-go pricing. Focus on your business while we handle the infrastructure, ensuring your digital presence is always online, secure, and ready to scale.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            <strong>Use Cases:</strong> CloudQlobe’s cloud hosting is perfect for businesses with fluctuating traffic, developers needing test environments, and organizations seeking high availability for mission-critical applications. Join hundreds of satisfied customers who trust CloudQlobe to power their online success.
          </p>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px] mt-[10px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Reliable <span className="text-orange-500">VPS Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Take your business to the next level with CloudQlobe’s VPS hosting. Our virtual private servers offer dedicated resources, full root access, and complete isolation from other users, ensuring your applications run smoothly and securely. With SSD storage, guaranteed CPU and RAM, and instant scalability, you can handle traffic spikes and resource-intensive workloads with ease.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Our VPS solutions are ideal for hosting custom applications, databases, and development environments. You can choose your preferred operating system, install any software, and configure your server to meet your exact requirements. Our intuitive dashboard makes server management simple, while our API allows for automation and integration with your existing workflows.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Security and Support:</strong> We take security seriously, with advanced firewalls, regular patching, and proactive monitoring. Our technical support team is available 24/7 to assist with migrations, troubleshooting, and optimization, so you can focus on your business goals. With CloudQlobe VPS hosting, you get the power and flexibility of a dedicated server at a fraction of the cost.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            <strong>Who benefits?</strong> Our VPS hosting is trusted by web agencies, SaaS startups, game developers, and businesses running custom applications. Whether you need a staging environment, a secure database server, or a scalable platform for your web apps, our VPS solutions provide the reliability and flexibility you need to innovate and grow.
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
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Powerful <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            For businesses that demand the ultimate in performance, security, and control, CloudQlobe’s dedicated servers are the ideal solution. Our dedicated servers are built with enterprise-grade hardware, providing you with exclusive access to all server resources. This means no sharing, no slowdowns, and complete freedom to run mission-critical applications, large databases, and high-traffic websites.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Each dedicated server is fully customizable, allowing you to choose the exact specifications that match your workload. Benefit from high-speed network connectivity, redundant power supplies, and advanced security features. Our data centers are monitored 24/7, ensuring your server is always protected and operating at peak efficiency.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Unmatched Performance:</strong> Our dedicated servers are equipped with the latest Intel and AMD processors, ECC memory, and NVMe SSD storage for blazing-fast data access. We offer a variety of configurations to suit any workload, from single-tenant web hosting to complex enterprise applications. With full root access, you have complete control over your environment, including the ability to install custom operating systems and software.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            <strong>Perfect for Demanding Workloads:</strong> CloudQlobe dedicated servers are trusted by financial institutions, healthcare providers, media companies, and SaaS vendors who require maximum uptime and data security. Our team of engineers is available around the clock to monitor your server, apply security patches, and respond to any issues. With CloudQlobe, you can focus on your core business while we ensure your infrastructure is always running at its best.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you need scalable cloud hosting, secure VPS solutions, or high-performance dedicated servers, CloudQlobe has the expertise and technology to help your business thrive. Our commitment to innovation, security, and customer satisfaction sets us apart in the hosting industry.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Join hundreds of businesses worldwide who trust CloudQlobe for their mission-critical hosting needs. Contact our team today for a free consultation, or explore our plans to find the perfect solution for your organization. Experience the CloudQlobe difference—where your success is our priority.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-800 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-900 transition"
        >
          Get Started with CloudQlobe
        </a>
      </section>
    </div>
  );
};

export default Homecontent1;