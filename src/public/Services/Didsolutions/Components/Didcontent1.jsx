import Homeimage38 from '../../../../assets/10221126.jpg'
import Homeimage36 from '../../../../assets/ChatGPT Image Aug 18, 2025, 01_20_13 PM.png'
import Homeimage45 from '../../../../assets/ChatGPT Image Aug 18, 2025, 02_47_06 PM.png'

const Didcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Elevate Connectivity with <span className="text-blue-800">CloudQlobe DID Number Solutions</span>
      </h1>

      {/* Global DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage36}
            alt="DID Global Solutions"
            className="w-[480px] h-[540px] object-cover rounded-lg mt-[80px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px] mt-[-40px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Global <span className="text-orange-500">Virtual DID Numbers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe provides an extensive network of worldwide DID numbers, enabling businesses to establish a strong local presence across multiple continents without the need for physical offices. By leveraging our global DID solutions, companies can expand their customer reach, build stronger brand recognition, and offer seamless accessibility to clients in every region. This ensures that businesses remain competitive in an increasingly connected and digital-first world.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Our advanced DID offerings include robust routing options, a wide selection of local area codes, and multiple number types to suit diverse business needs. Whether it’s handling sales inquiries, customer support, or unified communication strategies, CloudQlobe’s DID solutions are scalable, reliable, and designed to provide maximum flexibility. This empowers enterprises to deliver localized experiences globally, enhancing customer engagement and trust while simplifying complex communication networks.
          </p>
        </div>
      </section>

      {/* Custom DID Integration Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">DID Integration</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Integrate DID numbers seamlessly into your existing PBX, VoIP, or unified communication systems without disruptions. CloudQlobe’s solutions are built to ensure smooth interoperability, enabling businesses to efficiently manage incoming and outgoing calls, extensions, and routing with unparalleled flexibility. This integration simplifies operations, reduces setup times, and allows companies to focus on delivering exceptional customer experiences.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            From agile startups to multinational corporations, our DID solutions can be fully customized to meet unique operational requirements. Enjoy the advantages of advanced call forwarding, IVR configuration, SIP trunking, and virtual number portability, all designed to streamline communication workflows. This level of customization ensures businesses can maintain efficiency, responsiveness, and connectivity, even as communication needs evolve and scale globally.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage38}
            alt="DID Integration"
            className="w-[590px] h-[450px] object-cover rounded-lg ml-[180px] mt-[70px]"
          />
        </div>
      </section>

      {/* Billing & Call Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage45}
            alt="DID Billing & Management"
            className="w-[480px] h-[600px] object-cover rounded-lg mt-[50px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-100px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Smart <span className="text-orange-500">Billing & Call Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Maintain complete control over your communication costs with CloudQlobe’s transparent billing and intelligent call management tools. Our platform provides real-time call tracking, detailed analytics, flexible billing cycles, and intuitive dashboards that allow businesses to monitor usage, forecast expenses, and optimize resource allocation. This ensures financial clarity and operational efficiency across all communication channels.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Effectively manage large-scale call traffic, track performance metrics, and allocate budgets efficiently while ensuring uninterrupted service. CloudQlobe guarantees enterprise-grade stability, security, and scalability, giving businesses the confidence that their DID numbers and communication infrastructure are robust, reliable, and capable of supporting growth. Our solutions are designed to empower businesses to focus on innovation and customer satisfaction without worrying about connectivity challenges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Didcontent1;
