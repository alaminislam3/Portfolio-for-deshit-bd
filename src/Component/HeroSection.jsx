// src/components/HeroSection.jsx
import portImg from "../assets/portfolio dp-fotor-bg-remover-20250628183822.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <header className="bg-[#d9cabf] pt-10 pb-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-[40px] lg:px-[150px] gap-12">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h4 className="text-[32px] lg:text-[45px] font-bold text-[#474747]">
            Hi, I am
          </h4>
          <h1 className="text-[50px] lg:text-[65px] font-extrabold">
            Alamin Islam
          </h1>
          <p className="text-[20px] font-semibold text-[#444] mb-2">
            MERN Stack Developer
          </p>
          <p className="text-[#221f1f] mt-4">
            I create fast and user-friendly websites using HTML, CSS,
            JavaScript, and React. With my past customer service experience, I
            know how to understand people’s needs and build solutions they enjoy
            using. Let’s build something so good, your users will never want to
            leave.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-6 justify-center lg:justify-start text-3xl">
            <a
              href="https://www.linkedin.com/in/alaminislam1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/alaminislam3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Drcryptu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1TcsHVXij52Zm1OBQIg5p2f1lPJfA7df3/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-[#FD6E0A] text-white text-lg">
                <i className="fa-solid fa-download fa-bounce mr-2 text-green-900"></i>
                Download CV
              </button>
            </a>

            <button className="btn border-2 border-[#FD6E0A] text-[#FD6E0A] bg-transparent text-lg">
              <i className="fa-solid fa-phone fa-fade mr-2"></i>
              Contact
            </button>
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
