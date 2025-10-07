// src/components/HeroSection.jsx
import portImg from "../assets/portfolio dp-fotor-bg-remover-20250628183822.png";


const HeroSection = () => {
  return (
    <header className="bg-[#333333] pt-10 pb-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-[40px] lg:px-[150px] gap-12">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h4 className="text-[15px] lg:text-[20px] font-bold text-[#FFBD39]">
            Hello
          </h4>
          <h1 className="text-[20px] lg:text-[32px] font-extrabold">
            I'm Professional Web Designer & <br />
            <span className="lg:text-[32px] text-[#FFBD39]">
              Wordpress Developer
            </span>
          </h1>

          <p className="text-white mt-4">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          </p>

          <div className="mt-5 flex gap-6">
          <button className="btn btn-primary border-none">Hire me</button>
          <button className="btn bg-[#FFBD39] border-none">Download Cv</button>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={portImg}
            alt="Alamin Islam dp"
            height={676}
            width={584}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
