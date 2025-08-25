import React from 'react';
import Homeimage51 from '../../../../assets/8607123.jpg'
import Homeimage52 from '../../../../assets/4998647.jpg'
import Homeimage53 from '../../../../assets/9963641.jpg'


const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Experience Innovation with <span className="text-blue-800">We Cloud Qlobe</span> – Your Global Telecom Partner
      </h1>

      {/* About Us Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage51}
            alt="About Us"
            className="w-[650px] h-[400px] object-cover rounded-lg mt-[150px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Driving Global Connections
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
  At Cloud Qlobe, we specialize in creating seamless communication networks that empower businesses and individuals worldwide. Our expertise covers advanced VoIP solutions, intelligent call routing, dialer systems, and fully integrated digital platforms that adapt to diverse business needs. With a strong focus on innovation and reliability, we design communication frameworks that ensure uninterrupted connectivity, crystal-clear voice quality, and easy scalability, keeping organizations connected no matter where their operations take them.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
  By combining innovative technology with personalized service, we deliver tailored telecom solutions that enhance efficiency, optimize connectivity, and drive measurable growth. Our global presence and strategic partnerships allow us to support clients in expanding their reach, while real-time monitoring and expert support guarantee security and performance. With a commitment to excellence and customer success, Cloud Qlobe stands as a trusted partner, helping businesses build reliable communication infrastructures that are future-ready and competitive in today’s digital landscape.
</p>

        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            A Culture of Collaboration
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
  Our team thrives in an inspiring environment where creativity, collaboration, and innovation are at the heart of every project. We believe in empowering our employees to share ideas freely, explore emerging technologies, and take ownership of initiatives that drive real impact for our clients. From brainstorming sessions to cross-functional teamwork, every effort is designed to encourage knowledge sharing and foster a culture of continuous improvement. This dynamic approach not only strengthens our solutions but also ensures that every project reflects diverse perspectives and cutting-edge thinking.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
  With a strong focus on professional growth, mentorship, and overall well-being, we cultivate a workplace where every member feels supported, valued, and motivated to achieve their best. Regular training, skill development programs, and leadership opportunities help our team stay ahead in a rapidly evolving digital landscape. Our positive and inclusive atmosphere translates directly into exceptional service, innovative solutions, and long-term client satisfaction.
</p>

        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage52}
            alt="Team Culture"
            className="w-[540px] h-[420px] object-cover rounded-lg ml-[180px] mt-[80px]"
          />
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage53}
            alt="Our Solutions"
            className="w-[580px] h-[490px] object-cover rounded-lg ml-[-50px] mt-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Innovative Telecom Services
          </h2>
         <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
  Cloud Qlobe provides a complete range of telecom solutions, including CC Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Each service is carefully engineered for reliability, scalability, and exceptional voice quality, allowing businesses to streamline communications and boost productivity. Our flexible solutions integrate smoothly with existing systems, making it easier for organizations to upgrade their networks without disruption. 
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
  Backed by advanced infrastructure, real-time monitoring, and round-the-clock technical support, our solutions guarantee uninterrupted connectivity, enhanced security, and optimized performance. We go beyond standard telecom services by offering analytics, customizable features, and multi-language support, enabling businesses to adapt to diverse markets and customer needs. Whether it’s expanding international reach, optimizing outbound and inbound campaigns, or deploying advanced communication platforms, Cloud Qlobe stands as a trusted partner.
</p>

        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
