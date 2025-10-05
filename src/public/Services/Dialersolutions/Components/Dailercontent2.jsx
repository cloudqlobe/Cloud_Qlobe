import React from 'react';
import Homeimage35 from '../../../../assets/ChatGPT Image Aug 18, 2025, 12_32_42 PM.png'
import Homeimage36 from '../../../../assets/ChatGPT Image Aug 18, 2025, 12_05_22 PM.png'
import Homeimage37 from '../../../../assets/ChatGPT Image Aug 18, 2025, 12_49_48 PM.png'

const Dailercontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Maximize Outreach & Efficiency with <span className="text-blue-800">CloudQlobe Dialer Solutions</span>
      </h1>

      {/* Intelligent Multi-Channel Dialers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage35}
            alt="Multi-Channel Dialers"
            className="w-[580px] h-[480px] object-cover rounded-lg mt-[70px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px] mt-[-50px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Intelligent <span className="text-orange-500">Multi-Channel Dialers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s multi-channel dialer solutions provide advanced voice, email, and messaging capabilities in a single unified platform. 
            These intelligent dialers automatically adapt to network conditions, agent availability, and customer preferences, ensuring maximum 
            efficiency and superior call quality. Features such as dynamic call scheduling, automated lead prioritization, and optimized routing 
            allow businesses to handle larger volumes while keeping every interaction accurate and timely.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Real-time dashboards, AI-driven call guidance, and seamless CRM integration empower agents to focus on meaningful conversations, 
            increase engagement, and improve conversion rates. By reducing operational complexities and manual tasks, businesses can maintain 
            consistent communication across multiple channels while enhancing customer satisfaction and driving measurable results.
          </p>
        </div>
      </section>

      {/* Advanced Dialer Integration Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px] mt-[-50px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">Integration & Automation</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe dialers integrate smoothly with CRMs, VoIP systems, and other business tools, creating a centralized hub for campaign 
            management. Automated lead assignment, intelligent routing, and workflow optimization reduce manual intervention and ensure 
            campaigns run efficiently. These features allow businesses to scale operations, streamline processes, and maintain high standards 
            of service quality across all interactions.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            The platform also provides full API support, secure cloud-based architecture, and real-time monitoring. Managers can access 
            comprehensive performance reports, track agent productivity, and adjust campaigns on the fly to maximize results. 
            This seamless automation and integration not only reduces errors and operational overhead but also empowers teams to focus on 
            delivering personalized customer experiences and achieving higher ROI.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage36}
            alt="Dialer Integration"
            className="w-[490px] h-[490px] object-cover rounded-lg ml-[150px] mt-[20px]"
          />
        </div>
      </section>

      {/* Analytics & Call Performance Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage37}
            alt="Dialer Analytics"
            className="w-[500px] h-[540px] object-cover rounded-lg ml-[-150px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-120px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Data-Driven <span className="text-orange-500">Analytics & Call Performance</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s analytics tools provide actionable insights into dialer performance, agent efficiency, and customer engagement metrics. 
            Detailed dashboards display call trends, response rates, and campaign outcomes in real time, helping businesses make informed decisions. 
            The system also tracks quality metrics such as call clarity, drop rates, and hold times, allowing teams to continuously refine 
            communication strategies and improve overall efficiency.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Predictive reporting, performance benchmarking, and intelligent alerts enable organizations to quickly address challenges and optimize 
            operations. By leveraging these insights, managers can coach agents effectively, enhance campaign planning, and maintain a 
            competitive edge. The comprehensive analytics ensure that every call contributes positively to customer experience, operational 
            efficiency, and business growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dailercontent2;
