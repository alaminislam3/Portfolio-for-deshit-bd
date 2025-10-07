import React from "react";



/* Note : This page is under construction ... */
const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-[#d9cabf] py-10 px-6 sm:px-10 lg:px-[150px] font-sans"
    >
      {/* Main Title */}
      <h1 className="text-5xl font-extrabold text-center text-black mb-12">
        Professional Experience
      </h1>

      {/* Timeline Container */}
      <div className="relative ">
        {/* Timeline Stick - Right side */}
        <div className="hidden lg:block absolute top-0 right-1.5 w-1 bg-gray-600 h-full"></div>

        {/* Timeline Item */}
        <div className="mb-10 flex flex-col lg:flex-row lg:justify-end items-center lg:gap-6 relative">
          {/* Empty space on left for alignment */}
          <div className="hidden lg:block flex-1"></div>

          {/* Card */}
          <div className="bg-[#f5f5f5] rounded-lg shadow-lg p-6 max-w-xl lg:mr-12">
            {/* Header with logo */}
            <div className="flex items-center gap-3">
              <img
                src="/BKash-Logo-icon-Pngsource-V833RDST.png" // Place in public folder
                alt="bKash Ltd Logo"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                bKash Ltd
              </h2>
            </div>

            {/* Role */}
            <p className="text-lg text-gray-700 font-medium mt-2">
              Customer Service Executive (2023 Feb - 2024 Oct)
            </p>

            {/* Experience Duration */}
            <p className="text-gray-600 text-sm mb-4">
              Experience: 1.8 years
            </p>

            {/* Short Description */}
            <p className="text-gray-700 leading-relaxed">
              Solved high-volume customer issues using strong problem-solving
              and communication skills while ensuring top service quality in a
              fast-paced environment.
            </p>
          </div>

          {/* Timeline Dot */}
          <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-green-500 rounded-full border-2 border-[#d9cabf] absolute right-0 top-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
