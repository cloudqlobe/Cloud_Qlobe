import Homeimage18 from '../../../../assets/3847762.jpg' 
import Homeimage16 from '../../../../assets/ChatGPT Image Aug 18, 2025, 04_27_35 AM.png' 
import Homeimage17 from '../../../../assets/ChatGPT Image Aug 18, 2025, 05_13_01 AM.png'

const Voipcontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-12 py-8 md:py-16 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-12 md:mb-20 mt-4 md:mt-8 leading-snug px-2">
        Empower Your Business with <span className="text-blue-800">Next-Gen Web & App Development</span>
      </h1>

      {/* Website Development Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-10 mb-16 md:mb-24 max-w-7xl mx-auto">
        {/* Mobile: Image first */}
        <div className="flex justify-center items-center w-full p-2 md:hidden">
          <img
            src={Homeimage16}
            alt="Website Development"
            className="w-full max-w-[320px] h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Desktop: Image with specific positioning */}
        <div className="hidden md:flex justify-center items-center w-full p-2">
          <img
            src={Homeimage16}
            alt="Website Development"
            className="w-[520px] h-[520px] object-cover rounded-lg mt-[50px] ml-[-120px]"
          />
        </div>
        
        <div className="flex flex-col justify-center w-full max-w-full md:max-w-[850px] md:ml-[25px] md:mt-[-50px] px-2 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-3 md:mb-4">
            Innovative <span className="text-orange-500">Website Development</span>
          </h2>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify mb-3 md:mb-4">
            We specialize in building responsive, scalable, and high-performing websites that are tailored to meet the exact needs of businesses across industries. Our approach combines elegant UI/UX design with modern frameworks and a strong back-end architecture, ensuring every project performs flawlessly across devices, browsers, and screen sizes. Whether it's a corporate presence, an advanced VoIP platform, or an e-commerce marketplace, we engineer websites that are visually engaging, technically sound, and designed to scale as your brand grows. Each site is developed with future-proof strategies, giving you the flexibility to expand features and adapt to new technologies with ease.
          </p>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify">
            Our development process places a strong emphasis on performance, SEO readiness, and user engagement, ensuring your platform not only attracts visitors but converts them into loyal customers. With advanced integrations—ranging from CRM tools and APIs to cloud-hosted services—we create websites that work as powerful business engines. Security, accessibility, and speed remain at the core of everything we deliver, providing you with a solution that is reliable, future-ready, and built to withstand market competition while creating lasting value for your customers.
          </p>
        </div>
      </section>

      {/* VoIP Websites & App Development Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-10 mb-16 md:mb-24 max-w-7xl mx-auto md:ml-[35px]">
        {/* Mobile: Image first */}
        <div className="flex justify-center items-center w-full p-2 md:hidden">
          <img
            src={Homeimage17}
            alt="VoIP Apps"
            className="w-full max-w-[320px] h-auto object-cover rounded-lg"
          />
        </div>
        
        <div className="flex flex-col justify-center w-full max-w-full md:max-w-[850px] px-2 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-3 md:mb-4 md:mt-[-100px]">
            Custom <span className="text-orange-500">VoIP Websites & Apps</span>
          </h2>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify mb-3 md:mb-4">
            We design and develop advanced VoIP websites and applications that are tailored for telecom providers, resellers, and enterprises aiming to modernize communication. Our solutions feature SIP trunking, real-time call analytics, customer self-care portals, multi-device compatibility, and robust API integrations to ensure seamless connectivity across platforms. From lightweight apps for end-users to enterprise-level admin dashboards, we deliver software that simplifies workflows, improves efficiency, and enhances customer satisfaction. With user-focused interfaces, intuitive navigation, and powerful reporting tools, our VoIP solutions make complex telecom operations easy to manage.
          </p>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify">
            Every VoIP app we build is secured with advanced encryption and developed using cloud-hosted architecture to provide unmatched reliability, scalability, and data protection. Our forward-thinking approach ensures that your platforms remain flexible for upgrades, integrations, and global expansion, minimizing downtime and maximizing growth opportunities. Whether you need custom features like interactive dashboards, multi-channel support, or AI-powered analytics, we deliver VoIP websites and apps that empower you to provide next-level communication experiences to clients worldwide, keeping your business ahead of the curve in the fast-moving telecom industry.
          </p>
        </div>
        
        {/* Desktop: Image with specific positioning */}
        <div className="hidden md:flex justify-center items-center w-full p-2">
          <img
            src={Homeimage17}
            alt="VoIP Apps"
            className="w-[480px] h-[550px] object-cover rounded-lg ml-[180px] mt-[-100px]"
          />
        </div>
      </section>

      {/* Billing & Follow-Up Solutions Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-10 max-w-7xl mx-auto">
        {/* Mobile: Image first */}
        <div className="flex justify-center items-center w-full p-2 md:hidden">
          <img
            src={Homeimage18}
            alt="Billing & Follow Ups"
            className="w-full max-w-[320px] h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Desktop: Image with specific positioning */}
        <div className="hidden md:flex justify-center items-center w-full p-2">
          <img
            src={Homeimage18}
            alt="Billing & Follow Ups"
            className="w-[590px] h-[460px] object-cover rounded-lg ml-[-150px] mt-[100px]"
          />
        </div>
        
        <div className="flex flex-col justify-center w-full max-w-full md:max-w-[850px] md:ml-[20px] md:mt-[-50px] px-2 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-3 md:mb-4">
            Smart <span className="text-orange-500">Billing & Follow-Up Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify mb-3 md:mb-4">
            Our intelligent billing systems and automated follow-up solutions are designed to streamline financial management while delivering complete accuracy and transparency. From generating one-time and recurring invoices to managing multi-currency transactions and tax compliance, our platforms simplify complex financial processes into effortless operations. By integrating flexible payment gateways and offering real-time dashboards, businesses gain a clear understanding of revenue streams, customer payments, and outstanding dues, helping them stay financially organized and future-ready.
          </p>
          <p className="text-[#5f6368] text-base md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.2px] font-normal text-justify">
            To complement billing, our follow-up systems are equipped with automated reminders, multi-channel alerts, and CRM integration, ensuring you never miss an opportunity to engage with clients. These tools strengthen customer relationships, improve collection rates, and reduce manual workloads through intelligent automation. Whether you are handling a handful of clients or thousands of accounts, our scalable solutions grow with your business, offering predictive insights, secure transactions, and seamless customer engagement that keep your financial workflows efficient and your growth trajectory steady.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Voipcontent2;