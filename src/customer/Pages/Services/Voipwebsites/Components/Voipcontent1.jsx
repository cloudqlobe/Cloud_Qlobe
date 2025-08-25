import React from 'react';
import Homeimage13 from '../../../../../assets/ChatGPT Image Aug 18, 2025, 04_45_59 AM.png' 
import Homeimage15 from '../../../../../assets/wmremove-transformed (5).jpeg' 
import Homeimage14 from '../../../../../assets/ChatGPT Image Aug 18, 2025, 04_57_25 AM.png' 

const Homecontent1 = () => {
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
  We, CloudQlobe, provide premium CC Voice Routes engineered for maximum reliability and superior voice clarity. 
  Designed for high-volume outbound campaigns, customer support centers, and enterprise communication, our routes 
  minimize call drops, reduce Post Dial Delay (PDD), and maintain crystal-clear connections across global destinations. 
  Flexible CLI and non-CLI options, multi-layer routing, and connectivity to top-tier carriers ensure exceptional call 
  performance with unmatched stability.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
  With real-time monitoring, automated alerts, and proactive quality checks, CloudQlobe ensures every call is delivered 
  reliably and without disruption. Our CC Voice Routes empower businesses to maintain seamless global interactions, 
  enhance customer engagement, and achieve measurable ROI while keeping operations secure, scalable, and cost-efficient. 
  Whether you're running a growing call center or handling enterprise-grade traffic, our solutions are built to adapt 
  and scale with your communication needs.
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
  We, CloudQlobe, provide premium CC Voice Routes engineered for maximum reliability and superior voice clarity. 
  Designed for high-volume outbound campaigns, customer support centers, and enterprise communication, our routes 
  minimize call drops, reduce Post Dial Delay (PDD), and maintain crystal-clear connections across global destinations. 
  Flexible CLI and non-CLI options, multi-layer routing, and connectivity to top-tier carriers ensure exceptional call 
  performance with unmatched stability.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
  With real-time monitoring, automated alerts, and proactive quality checks, CloudQlobe ensures every call is delivered 
  reliably and without disruption. Our CC Voice Routes empower businesses to maintain seamless global interactions, 
  enhance customer engagement, and achieve measurable ROI while keeping operations secure, scalable, and cost-efficient. 
  Whether you're running a growing call center or handling enterprise-grade traffic, our solutions are built to adapt 
  and scale with your communication needs.
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
  We, CloudQlobe, provide premium CC Voice Routes engineered for maximum reliability and superior voice clarity. 
  Designed for high-volume outbound campaigns, customer support centers, and enterprise communication, our routes 
  minimize call drops, reduce Post Dial Delay (PDD), and maintain crystal-clear connections across global destinations. 
  Flexible CLI and non-CLI options, multi-layer routing, and connectivity to top-tier carriers ensure exceptional call 
  performance with unmatched stability.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
  With real-time monitoring, automated alerts, and proactive quality checks, CloudQlobe ensures every call is delivered 
  reliably and without disruption. Our CC Voice Routes empower businesses to maintain seamless global interactions, 
  enhance customer engagement, and achieve measurable ROI while keeping operations secure, scalable, and cost-efficient. 
  Whether you're running a growing call center or handling enterprise-grade traffic, our solutions are built to adapt 
  and scale with your communication needs.
</p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
