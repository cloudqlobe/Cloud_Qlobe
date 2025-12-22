import React from 'react';

import Homeimage56 from '../../../assets/3697570.jpg';
import Homeimage58 from '../../../assets/5805597.jpg';
import Homeimage60 from '../../../assets/3856358.jpg';

const Homecontent1 = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 py-16 overflow-hidden">
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Explore the Future of Communication with Our{' '}
        <span className="text-blue-800">Advanced Telecom Solutions</span>
      </h1>

      {/* CC Routes Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center items-center w-full">
            <img
              src={Homeimage56}
              alt="CC Routes"
              className="w-full max-w-[480px] h-auto md:h-[400px] object-cover rounded-lg
                         md:ml-[-100px] md:mt-[40px]"
            />
          </div>

          <div className="flex flex-col justify-center w-full max-w-[850px] md:ml-[25px] md:mt-[-40px]">
            <h2 className="text-[26px] md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
              High-Quality <span className="text-orange-500">CC Routes</span>
            </h2>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
  Our Call Center (CC) Routes are specifically designed to handle high-volume outbound traffic, giving businesses a strong strategic edge in managing large-scale campaigns, customer support operations, and sales acquisition activities. These routes are optimized for crystal-clear voice quality, redundancy, and intelligent traffic prioritization to guarantee zero call drops and smooth interactions with clients in real time.
            </p>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
  With ultra-low PDD (Post Dial Delay), advanced failover mechanisms, and multi-layered routing, we provide both CLI and non-CLI options for maximum flexibility across global markets. Our infrastructure is continuously monitored through automated quality checkers and real-time dashboards, ensuring stable performance with unmatched reliability. By partnering with top-tier global carriers, CloudQlobe maintains industry-leading benchmarks for ACD (Average Call Duration) and ASR (Answer-Seizure Ratio), helping businesses achieve higher call connectivity and stronger customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CLI Voice Termination Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col justify-center w-full max-w-[850px]">
            <h2 className="text-[26px] md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
              Trusted <span className="text-orange-500">CLI Voice Terminations</span>
            </h2>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
  CloudQlobe’s CLI (Calling Line Identification) termination ensures your brand identity is consistently maintained across every customer interaction. By showcasing verified, local, and geographically familiar caller IDs, your calls instantly feel more authentic and trustworthy. This not only boosts answer rates but also strengthens brand reputation and customer confidence, making your outreach far more impactful. With higher engagement levels, your sales teams can connect faster, improve lead conversion, and create lasting business relationships that are built on trust and recognition.
            </p>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
  Our CLI routes are fully compliant with global telecom standards and regulatory frameworks, ensuring reliability and legitimacy for every call. We provide advanced features such as customized caller ID options, intelligent routing, and dynamic number presentation tailored to your campaign’s geographic focus. Whether you are running large-scale outbound marketing, appointment scheduling, or cross-border B2B communication, our solutions give your business the credibility it needs to succeed. 
            </p>
          </div>

          <div className="flex justify-center items-center w-full">
            <img
              src={Homeimage58}
              alt="CLI Voice Terminations"
              className="w-full max-w-[630px] h-auto md:h-[440px] object-cover rounded-lg
                         md:ml-[150px] md:mt-[50px]"
            />
          </div>
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center items-center w-full">
            <img
              src={Homeimage60}
              alt="DID Solutions"
              className="w-full max-w-[560px] h-auto md:h-[470px] object-cover rounded-lg
                         md:ml-[-100px] md:mt-[-20px]"
            />
          </div>

          <div className="flex flex-col justify-center w-full max-w-[850px] md:ml-[20px] md:mt-[-100px]">
            <h2 className="text-[26px] md:text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
              Global <span className="text-orange-500">DID Number Solutions</span>
            </h2>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
  Establishing a virtual presence worldwide has never been easier. With our Direct Inward Dialing (DID) number solutions, you gain access to local, national, and toll-free numbers across 100+ countries — instantly. These numbers are indispensable for businesses that require global reach with local appeal, helping them connect with customers and partners across borders without investing in physical infrastructure. Whether you are a startup expanding into new markets or an enterprise streamlining global communications, our DID solutions make international presence simple and cost-effective.
            </p>

            <p className="text-[#5f6368] text-[16px] md:text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
  Perfect for customer service hubs, remote teams, and VoIP PBX deployments, our DIDs support number portability, SIP trunking, and advanced call forwarding. You get complete control via a self-service portal, enabling real-time routing changes, live call reporting, and SIP registration — all designed to optimize efficiency. With CloudQlobe, every number comes with security, scalability, and seamless provisioning baked in, ensuring your business communications remain reliable, professional, and ready for growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
