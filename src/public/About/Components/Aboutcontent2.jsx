import Homeimage51 from '../../../assets/8607123.jpg'
import Homeimage52 from '../../../assets/4998647.jpg'
import Homeimage53 from '../../../assets/9963641.jpg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 overflow-hidden">

      {/* MAIN HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-normal text-center text-black mb-16 leading-snug">
        Experience Innovation with <span className="text-blue-800">We Cloud Qlobe</span> – Your Global Telecom Partner
      </h1>

      {/* ================= ABOUT US ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-20">

        {/* IMAGE */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={Homeimage51}
            alt="About Us"
            className="w-full max-w-[650px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            Driving Global Connections
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify mb-4">
            At Cloud Qlobe, we specialize in creating seamless communication networks that empower businesses and individuals worldwide. Our expertise covers advanced VoIP solutions, intelligent call routing, dialer systems, and fully integrated digital platforms that adapt to diverse business needs. With a strong focus on innovation and reliability, we design communication frameworks that ensure uninterrupted connectivity, crystal-clear voice quality, and easy scalability, keeping organizations connected no matter where their operations take them.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify">
            By combining innovative technology with personalized service, we deliver tailored telecom solutions that enhance efficiency, optimize connectivity, and drive measurable growth. Our global presence and strategic partnerships allow us to support clients in expanding their reach, while real-time monitoring and expert support guarantee security and performance. With a commitment to excellence and customer success, Cloud Qlobe stands as a trusted partner, helping businesses build reliable communication infrastructures that are future-ready and competitive in today's digital landscape.
          </p>
        </div>
      </section>

      {/* ================= TEAM & CULTURE ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-20">

        {/* IMAGE (MOBILE FIRST) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={Homeimage52}
            alt="Team Culture"
            className="w-full max-w-[540px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            A Culture of Collaboration
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify mb-4">
            Our team thrives in an inspiring environment where creativity, collaboration, and innovation are at the heart of every project. We believe in empowering our employees to share ideas freely, explore emerging technologies, and take ownership of initiatives that drive real impact for our clients. From brainstorming sessions to cross-functional teamwork, every effort is designed to encourage knowledge sharing and foster a culture of continuous improvement. This dynamic approach not only strengthens our solutions but also ensures that every project reflects diverse perspectives and cutting-edge thinking.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify">
            With a strong focus on professional growth, mentorship, and overall well-being, we cultivate a workplace where every member feels supported, valued, and motivated to achieve their best. Regular training, skill development programs, and leadership opportunities help our team stay ahead in a rapidly evolving digital landscape. Our positive and inclusive atmosphere translates directly into exceptional service, innovative solutions, and long-term client satisfaction.
          </p>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* IMAGE */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={Homeimage53}
            alt="Our Solutions"
            className="w-full max-w-[580px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            Innovative Telecom Services
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify mb-4">
            Cloud Qlobe provides a complete range of telecom solutions, including CC Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Each service is carefully engineered for reliability, scalability, and exceptional voice quality, allowing businesses to streamline communications and boost productivity. Our flexible solutions integrate smoothly with existing systems, making it easier for organizations to upgrade their networks without disruption.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] leading-[1.8] text-justify">
            Backed by advanced infrastructure, real-time monitoring, and round-the-clock technical support, our solutions guarantee uninterrupted connectivity, enhanced security, and optimized performance. We go beyond standard telecom services by offering analytics, customizable features, and multi-language support, enabling businesses to adapt to diverse markets and customer needs. Whether it's expanding international reach, optimizing outbound and inbound campaigns, or deploying advanced communication platforms, Cloud Qlobe stands as a trusted partner.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Homecontent1;
