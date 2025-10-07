import React from 'react';

const Aboutme = () => {
  return (
    <div id="aboutme" className="bg-[#d9cabf] py-12 sm:py-16 lg:py-24 px-6 sm:px-10 lg:px-[150px]">
      {/* Main Title at top center */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-black mb-12">
        Story About Me
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-10 lg:gap-12">
        {/* Image container */}
        <div className="w-full lg:w-[40%] flex justify-center min-w-0">
          <img
            src="./charlie & katie aree.png"
            alt="Story About Me"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text container */}
        <div className="w-full lg:w-[40%] min-w-0">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6">
            Crafting Ideas into Interactive Web Experiences
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
            I started my career in customer service, where I learned how to
            understand people’s needs and solve problems quickly. Over time, I
            became excited to shift my career into the world of code, creating
            digital solutions that make life easier and more enjoyable.
            Outside of coding, I love traveling to new places and watching movies
            that inspire creativity. My ultimate goal is to become a skilled
            Full Stack Developer, building projects from idea to completion.
            I’m ready to bring your vision to life — and I’m waiting for our
            next great collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
