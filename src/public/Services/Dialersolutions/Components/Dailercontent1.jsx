import Homeimage32 from '../../../../assets/ChatGPT Image Aug 18, 2025, 11_08_22 AM.png'
import Homeimage33 from '../../../../assets/ChatGPT Image Aug 18, 2025, 11_38_47 AM.png'
import Homeimage34 from '../../../../assets/ChatGPT Image Aug 18, 2025, 11_49_43 AM.png'

const Dailercontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Revolutionize Your Outreach with <span className="text-blue-800">CloudQlobe Dialer Solutions</span>
      </h1>

      {/* Global Dialer Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage32}
            alt="Global Dialer Solutions"
            className="w-[590px] h-[400px] object-cover rounded-lg mt-[190px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Powerful <span className="text-orange-500">Global Dialer Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe provides advanced Global Dialer Solutions that redefine efficiency and scalability in the VoIP industry. 
            Built on robust and resilient network infrastructure, our solutions enable high-quality voice connectivity across multiple countries, 
            ensuring seamless communication for businesses of all sizes. With intelligent load balancing, adaptive network management, and 
            automated call optimization, organizations can maintain consistent voice clarity while managing extensive call volumes. 
           
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Designed for enterprises, customer engagement teams, and service providers, CloudQlobe Dialer Solutions enhance productivity 
            and streamline communication workflows. By offering multi-channel support, flexible CLI management, and secure end-to-end connections, 
            our solutions empower businesses to maintain high levels of customer satisfaction while minimizing technical interruptions. 
            Additionally, our platform provides detailed reporting and monitoring tools that allow organizations to gain actionable insights, 
            optimize resource allocation, and achieve maximum ROI from their communication systems.
          </p>
        </div>
      </section>

      {/* Dialer Integration & Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px] mt-[-100px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">Dialer Integration & Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe Dialer Solutions offer effortless integration with existing VoIP infrastructures, CRM systems, and enterprise communication platforms. 
            Our solutions centralize call management, automate complex call flows, and leverage advanced routing algorithms to maximize connectivity 
            efficiency. Real-time dashboards provide detailed analytics on agent performance, call quality, and network stability, enabling managers 
            to make informed operational decisions and enhance overall productivity.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            The integration framework supports multi-channel communication, automated scheduling, and intelligent call distribution to reduce downtime and 
            optimize workforce allocation. With proactive monitoring, performance alerts, and historical call analytics, businesses can identify trends, 
            anticipate challenges, and implement strategies to continually improve efficiency. CloudQlobe’s management solutions enable organizations to 
            scale operations with confidence while maintaining exceptional service quality across all communication channels.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage33}
            alt="Dialer Integration"
            className="w-[480px] h-[590px] object-cover rounded-lg ml-[200px]"
          />
        </div>
      </section>

      {/* Dialer Billing & Call Monitoring Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage34}
            alt="Dialer Billing & Monitoring"
            className="w-[590px] h-[420px] object-cover rounded-lg mt-[100px] ml-[-120px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-100px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Streamlined <span className="text-orange-500">Billing & Call Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s Billing and Call Monitoring system is designed to provide comprehensive oversight of dialer operations, offering real-time tracking 
            of call duration, usage statistics, and costs. Detailed reporting tools and automated invoice generation simplify financial management, 
            ensuring transparency and accountability while optimizing operational expenditure. This enables businesses to manage large-scale communication 
            efficiently and maintain full control over all aspects of their dialer systems.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Advanced monitoring features include live call analytics, quality assessment, and proactive network health alerts. By providing insights into 
            agent performance, call quality, and system efficiency, CloudQlobe empowers businesses to anticipate challenges, reduce downtime, and 
            maintain consistent service excellence. This robust combination of billing and monitoring ensures scalability, operational reliability, 
            and high levels of client satisfaction across all communication channels.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dailercontent1;
