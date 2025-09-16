import React from 'react';
import Homeimage7 from '../../../../../assets/DeWatermark.ai_1755397739921.jpeg';
import Homeimage8 from '../../../../../assets/ChatGPT Image Aug 17, 2025, 08_47_42 AM.png';
import Homeimage9 from '../../../../../assets/wmremove-transformed (4).jpeg';

const Homecontent1 = () => {
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
            Experience the next generation of cloud hosting with CloudQlobe. Our cloud infrastructure is designed to deliver unmatched reliability, scalability, and performance for businesses of all sizes. Whether you are running a startup, a growing e-commerce platform, or a large enterprise, our cloud hosting solutions provide the flexibility and power you need to succeed in today’s digital landscape.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            With CloudQlobe, you benefit from instant resource provisioning, seamless scaling, and robust security protocols. Our global network of data centers ensures low latency and high availability, so your applications and websites remain accessible and responsive at all times. We offer automated backups, disaster recovery, and 24/7 monitoring to safeguard your data and keep your business running smoothly.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Our expert support team is always ready to assist you, whether you need help with migration, optimization, or troubleshooting. Choose CloudQlobe’s cloud hosting to empower your business with cutting-edge technology, cost-effective solutions, and the peace of mind that comes from partnering with a trusted industry leader.
          </p>
          {/* <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Why Choose CloudQlobe Cloud Hosting?</strong> Our platform is built on the latest virtualization technologies, ensuring that your resources are always available and your workloads are isolated for maximum security. We support a wide range of operating systems and development stacks, making it easy to deploy any application, from WordPress sites to complex SaaS platforms. With our pay-as-you-go pricing, you only pay for what you use, helping you control costs and scale efficiently.
          </p> */}
          {/* <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            <strong>Use Cases:</strong> CloudQlobe’s cloud hosting is ideal for businesses launching new products, running seasonal campaigns, or managing unpredictable traffic spikes. Developers love our API integrations and one-click deployment tools, while IT managers appreciate our compliance certifications and detailed analytics dashboards. Join thousands of satisfied customers who trust CloudQlobe to keep their digital operations running at peak performance.
          </p> */}
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Secure <span className="text-orange-500">VPS Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Take control of your hosting environment with our secure and high-performance VPS hosting solutions. CloudQlobe’s VPS hosting is perfect for businesses that require dedicated resources, enhanced security, and full customization. Each VPS is isolated, ensuring your data and applications are protected from external threats and neighboring users.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Our VPS plans come with SSD storage, guaranteed CPU and RAM allocations, and root access, giving you the freedom to install and configure any software you need. Enjoy lightning-fast performance, reliable uptime, and the ability to scale resources as your business grows. Our intuitive control panel makes it easy to manage your server, monitor usage, and deploy updates with just a few clicks.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Security is at the core of our VPS hosting. We implement advanced firewalls, DDoS protection, and regular security patches to keep your data safe. Our support team is available 24/7 to assist with server management, migrations, and technical issues, ensuring your operations remain uninterrupted. Choose CloudQlobe VPS hosting for a secure, flexible, and powerful hosting experience tailored to your business needs.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Advanced Features:</strong> Our VPS hosting includes snapshot backups, easy OS reinstallation, and instant scaling. You can upgrade or downgrade your resources at any time without downtime. We support both Linux and Windows environments, and our API allows for automated server management and integration with your existing workflows.
          </p>
          {/* <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            <strong>Who Benefits?</strong> CloudQlobe VPS hosting is trusted by web agencies, SaaS startups, game developers, and businesses running custom applications. Whether you need a staging environment, a secure database server, or a scalable platform for your web apps, our VPS solutions provide the reliability and flexibility you need to innovate and grow. Experience the difference with CloudQlobe—where your server is truly your own.
          </p> */}
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
            For businesses that demand the ultimate in performance, security, and control, CloudQlobe’s dedicated servers are the ideal solution. Our dedicated servers are built with enterprise-grade hardware, providing you with exclusive access to all server resources. This means no sharing, no slowdowns, and complete freedom to run mission-critical applications, large databases, and high-traffic websites.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Each dedicated server is fully customizable, allowing you to choose the exact specifications that match your workload. Benefit from high-speed network connectivity, redundant power supplies, and advanced security features. Our data centers are monitored 24/7, ensuring your server is always protected and operating at peak efficiency.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            With CloudQlobe, you receive expert support for hardware upgrades, software installations, and ongoing maintenance. We offer managed and unmanaged options, so you can focus on your business while we handle the technical details. Experience the power, reliability, and peace of mind that comes with hosting on CloudQlobe’s dedicated servers—engineered for businesses that refuse to compromise.
          </p>
          {/* <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            <strong>Unmatched Performance:</strong> Our dedicated servers are equipped with the latest Intel and AMD processors, ECC memory, and NVMe SSD storage for blazing-fast data access. We offer a variety of configurations to suit any workload, from single-tenant web hosting to complex enterprise applications. With full root access, you have complete control over your environment, including the ability to install custom operating systems and software.
          </p> */}
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
          Join thousands of businesses worldwide who trust CloudQlobe for their mission-critical hosting needs. Contact our team today for a free consultation, or explore our plans to find the perfect solution for your organization. Experience the CloudQlobe difference—where your success is our priority.
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