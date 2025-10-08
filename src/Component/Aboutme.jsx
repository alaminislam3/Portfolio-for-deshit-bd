import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="bg-[#333333] py-12 lg:py-20 px-6 sm:px-10 lg:px-[50px]"
    >
      
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-10 lg:gap-12">
        <div className="w-full">
          <p className="text-[#FFBD39]">About me</p>
          <h2 className="text-[20px] font-bold mb-6">
            Hello! I'm <span className="text-[#FFBD39]">David Andrew.</span> I'm
            Professional Web Designer & Wordpress Developer &{" "}
            <span className="text-[#FFBD39]">Freelancer.</span>
          </h2>
          <p className="leading-relaxed text-justify text-base text-[16px] text-white">
            I started my career in customer service, where I learned how to
            understand people’s needs and solve problems quickly. Over time, I
            became excited to shift my career into the world of code, creating
            digital solutions that make life easier and more enjoyable. Outside
            of coding, I love traveling to new places and watching movies that
            inspire creativity. <br /> My ultimate goal is to become a skilled
            Full Stack Developer, building projects from idea to completion. I’m
            ready to bring your vision to life and I’m waiting for our next
            great collaboration.
          </p>
         
           
            <div className="flex gap-3 items-center">
            <p className="text-white">Follow me : </p>
              <a
                href="#"
                className="bg-[#163D4D] text-white p-3 rounded-full hover:bg-[#FFBD39] hover:text-black transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-[#163D4D] text-white p-3 rounded-full hover:bg-[#FFBD39] hover:text-black transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="bg-[#163D4D] text-white p-3 rounded-full hover:bg-[#FFBD39] hover:text-black transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-[#163D4D] text-white p-3 rounded-full hover:bg-[#FFBD39] hover:text-black transition"
              >
                <FaDribbble size={18} />
              </a>
            </div>
            <div className="flex gap-2 mt-4">
            <button className="btn bg-primary">My work</button>
            <button className="btn bg-[#FFBD39]">Download Cv</button>
            </div>
          
        </div>

        <div className="w-full  flex justify-center min-w-0">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 max-w-5xl">
            <div class="bg-[#3e3c3c] rounded-2xl shadow p-10 text-center">
              <h2 class="text-2xl font-semibold text-white mb-3">599</h2>
              <p class="text-white">Happy Client</p>
            </div>

            <div class="bg-[#3e3c3c] rounded-2xl shadow p-10 text-center">
              <h2 class="text-2xl font-semibold text-white mb-3">2001</h2>
              <p class="text-white">Sales </p>
            </div>

            <div class="bg-[#3e3c3c] rounded-2xl shadow p-10 text-center">
              <h2 class="text-2xl font-semibold text-white mb-3">5000</h2>
              <p class="text-white">project complete</p>
            </div>

            <div class="bg-[#3e3c3c] rounded-2xl shadow p-10 text-center">
              <h2 class="text-2xl font-semibold text-white mb-3">6</h2>
              <p class="text-white">years of Exprience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
