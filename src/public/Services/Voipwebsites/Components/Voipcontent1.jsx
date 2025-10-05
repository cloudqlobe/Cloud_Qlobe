import Homeimage13 from '../../../../assets/ChatGPT Image Aug 18, 2025, 04_45_59 AM.png' 
import Homeimage15 from '../../../../assets/wmremove-transformed (5).jpeg' 
import Homeimage14 from '../../../../assets/ChatGPT Image Aug 18, 2025, 04_57_25 AM.png' 

const Voipcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Build the Future of Digital Experiences with Our{" "}
        <span className="text-blue-800">Advanced Development </span>
      </h1>

      {/* Website Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage13}
            alt="Website Development"
            className="w-[480px] h-[480px] object-cover rounded-lg ml-[-150px] mt-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Innovative <span className="text-orange-500">Website Development</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            At CloudQlobe, we specialize in developing powerful and future-ready VoIP websites that go beyond 
            static pages and transform into fully functional communication hubs. Our websites are carefully 
            engineered with telecom-grade features including live rate displays, integrated billing, and 
            automated call routing modules, ensuring businesses can manage their operations without technical barriers. 
            We prioritize performance and usability, offering responsive layouts, lightning-fast load times, and 
            optimized code structures for search engine visibility. Each solution is tailored to reflect the brand 
            identity of our clients, enabling telecom providers and resellers to build trust with their customers 
            through an elegant, professional, and conversion-focused online presence.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Our websites don’t just look good—they work hard for your business. With integrations for SIP APIs, 
            CRM systems, and advanced reporting dashboards, you can offer customers a self-service experience 
            while also monitoring your operations in real time. Whether you’re launching a new VoIP business 
            or scaling an established carrier platform, CloudQlobe builds digital infrastructures that adapt 
            and grow with your goals, ensuring affordability, transparency, and long-term stability.
          </p>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Scalable <span className="text-orange-500">Mobile App Development</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe takes your VoIP business mobile by building cutting-edge applications that deliver 
            convenience, reliability, and performance. Our mobile apps empower users with features such as 
            account management, instant balance recharge, call history tracking, secure VoIP calling, 
            and in-app notifications. Designed for Android and iOS platforms, our applications ensure your 
            services are available to a global audience at their fingertips. We integrate essential telecom 
            protocols like SIP, WebRTC, and secure authentication, so users experience consistent call quality 
            with the flexibility to connect anytime, anywhere.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Beyond basic functionality, our mobile solutions focus on customer engagement and retention. 
            With push notifications for promotions, real-time billing updates, and multi-language support, 
            your app becomes a key driver of user satisfaction and revenue growth. Whether you are a reseller 
            offering international calling or an enterprise managing distributed teams, CloudQlobe’s mobile 
            apps provide the scalability to handle thousands of concurrent users while maintaining low costs. 
            By combining intuitive design with robust back-end systems, we help businesses expand into the 
            mobile-first era of digital communication.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage14}
            alt="Mobile App Development"
            className="w-[610px] h-[480px] object-cover rounded-lg ml-[150px] mt-[20px]"
          />
        </div>
      </section>

      {/* Advanced Tech & Innovation Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage15}
            alt="Advanced Tech"
            className="w-[540px] h-[480px] object-cover rounded-lg mt-[50px] ml-[-120px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-40px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Advanced <span className="text-orange-500">Technology & Innovation</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            The telecom world is rapidly evolving, and CloudQlobe stays ahead by embedding innovation at the core 
            of every solution we deliver. Our VoIP platforms are powered by advanced cloud infrastructure, AI-driven 
            analytics, and intelligent call routing engines. This combination ensures minimal downtime, ultra-low 
            latency, and seamless scalability when traffic spikes. By integrating real-time fraud detection, adaptive 
            quality monitoring, and proactive alerts, we safeguard your communication channels from both technical 
            issues and security risks.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Innovation also means affordability. With multi-carrier routing, cost-optimized call flows, and 
            automated billing, CloudQlobe helps businesses save significantly on operational expenses while still 
            delivering premium call quality. Our systems are future-proof, supporting the latest SIP standards, 
            API-driven integrations, and AI-based performance optimization. Whether you’re an emerging VoIP provider 
            or an enterprise scaling globally, CloudQlobe ensures your communication systems are built to perform, 
            evolve, and lead in a highly competitive market.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Voipcontent1;
