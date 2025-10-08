import ServiceCards from "./ServiceCards";

const Service = () => {
  return (
    <section id="skill" className="py-4 sm:py-6 lg:py-8 px-6 sm:px-10 lg:px-[50px] bg-[#333333]">
      <div className="relative text-center">
        <h2 className="font-bold text-[30px] text-white mb-2">Our Service</h2>

        <div className="relative w-full flex justify-center mb-2">
          <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>

          <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
        </div>

        <p className="text-[16px] text-white">We Really Take Care Our Client</p>
      </div>
      <ServiceCards></ServiceCards>
    </section>
  );
};

export default Service;
