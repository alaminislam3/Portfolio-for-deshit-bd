import React from "react";
import { FaUniversity } from "react-icons/fa"; // Institution icon

const Education = () => {
  return (
    <div id="education" className="bg-[#d9cabf] py-10 px-6 sm:px-10 lg:px-[150px] font-sans">
      {/* Main Title */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Education Journey
      </h1>

      {/* Timeline container */}
      <div className="relative border-l-4 border-gray-600 pl-8">
        {/* Timeline Item */}
        <div className="mb-10 ml-4">
          {/* Dot */}
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[10px] top-2 border-2 border-white"></div>

          {/* Card */}
          <div className="bg-[#f5f5f5] rounded-lg shadow-lg p-6 max-w-xl">
            {/* Title with icon */}
            <div className="flex items-center gap-3">
              <FaUniversity className="text-blue-600 text-3xl" />
              <h2 className="text-2xl font-bold text-gray-800">
                Govt. Bangla College
              </h2>
            </div>

            <p className="text-lg text-gray-600 font-medium mt-2">
              Master of Social Science
            </p>
            <p className="text-gray-500 text-sm mb-4">Completed in 2023</p>
            <p className="text-gray-700">
              📍 <span className="font-medium">Mirpur, Dhaka</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
