import Homeimage10 from '../../../../assets/ChatGPT Image Aug 17, 2025, 08_31_13 AM.png'
import Homeimage12 from '../../../../assets/wmremove-transformed (2).jpeg'
import Homeimage11 from '../../../../assets/wmremove-transformed (3).jpeg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 overflow-hidden mt-[-20px] sm:mt-[-30px] md:mt-[-40px]">
      {/* SEO-friendly h1 (hidden visually but crawled by search engines) */}
      <h1 className="sr-only">
        Empower Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>
      </h1>

      {/* Styled heading (for design only) */}
      <div
        aria-hidden="true"
        className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-[#3c4043] mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20 mt-4 sm:mt-5 md:mt-6 leading-snug px-2 sm:px-4"
      >
        Empower Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>

      </div>

      {/* CC Routes Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <img
            src={Homeimage12}
            alt="CC Routes"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[580px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            Smarter <span className="text-orange-500">Cloud Infrastructure</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            CloudQlobe’s Cloud Hosting is built for businesses seeking unmatched flexibility and seamless growth. 
            Our cloud environment dynamically scales resources to match your traffic and operational demands, 
            giving you the freedom to focus on innovation instead of technical limitations. 
            Whether you're hosting a simple website, managing complex applications, or running multi-client projects, 
            our cloud ensures reliability, speed, and high availability around the globe.          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Each plan comes with advanced security protocols, automated backups, and full compliance support, 
            ensuring your sensitive data is fully protected. With global accessibility and 24/7 monitoring, 
            your teams can collaborate effortlessly from anywhere, at any time. 
            CloudQlobe takes care of infrastructure management so you can focus on scaling, growth, 
            and delivering exceptional value to your customers without worrying about downtime or bottlenecks.          </p>
        </div>
      </section>

      {/* CLI Voice Termination Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16 max-w-7xl mx-auto">
        <div className="order-2 md:order-1 flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            Performance-Driven <span className="text-orange-500">VPS Solutions</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            CloudQlobe VPS Hosting gives businesses dedicated resources and total control over their server environment. 
            Unlike shared hosting, your VPS is completely isolated, providing consistent performance even during traffic surges. 
            It's ideal for hosting multiple websites, running complex applications, and managing resource-intensive workloads with ease, 
            ensuring uninterrupted performance and maximum uptime for mission-critical operations.          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            With full root access and customizable configurations, our VPS allows developers and IT teams to tailor the server environment to their exact specifications. 
            Combine this with enterprise-grade security, proactive 24/7 monitoring, and high-speed connectivity, 
            and you get a solution that offers both flexibility and reliability. 
            CloudQlobe VPS empowers your business to scale, innovate, and maintain a competitive edge without technical compromises.          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center w-full">
          <img
            src={Homeimage11}
            alt="CLI Voice Terminations"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[680px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto pb-8 sm:pb-12">
        <div className="flex justify-center items-center w-full">
          <img
            src={Homeimage10}
            alt="DID Solutions"
            className="w-full sm:w-[90%] md:w-[95%] lg:w-[520px] h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:max-w-[850px] px-2 sm:px-3 md:px-4">
          <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-[25px] xl:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-[#202124] mb-3 sm:mb-4 text-center md:text-left leading-tight">
            Enterprise-Grade <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify mb-3 sm:mb-4">
            CloudQlobe Dedicated Servers deliver unparalleled power, control, and reliability for businesses with the highest demands. 
            Running mission-critical applications, high-traffic websites, and secure databases is effortless with dedicated access to enterprise-class hardware. 
            Every server is designed to ensure maximum performance, eliminating bottlenecks and providing predictable, high-speed operations even under heavy loads.          </p>
          <p className="text-[#4d5156] text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Beyond performance, our dedicated servers provide complete customization, advanced security features, and proactive monitoring. 
            You get exclusive access to all CPU, RAM, and storage resources, ensuring no compromises in efficiency or uptime. 
            Combined with DDoS protection, regular maintenance, and expert support, CloudQlobe Dedicated Servers allow enterprises to operate globally with confidence, 
            knowing that critical infrastructure is reliable, secure, and always optimized for success.          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;