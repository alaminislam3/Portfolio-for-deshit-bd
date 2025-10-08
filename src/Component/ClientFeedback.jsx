import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Hasin Hayder",
    title: "Fiverr",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
    
  },
  {
    id: 2,
    name: "Johnny Depp",
    title: "Themeforest",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
    
  },
  {
    id: 3,
    name: "Mia Khan",
    title: "Upwork",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
    
  },
];

export default function ClientFeedback() {
  const [startIndex, setStartIndex] = useState(0);

  const nextFeedback = () => {
    if (startIndex + 2 < feedbacks.length) setStartIndex(startIndex + 1);
  };

  const prevFeedback = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div className="bg-[#2b2b2b] text-white py-16 px-6 sm:px-10 lg:px-[50px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">Our Client Feedback</h2>
        <div className="relative flex justify-center mb-3">
          <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
        </div>
        <p className=" mx-auto text-gray-300">
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
          Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan
          vulputate.
        </p>
      </div>

      {/* Feedback Section */}
      <div className="relative  mx-auto flex items-center justify-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={prevFeedback}
          disabled={startIndex === 0}
          className={`absolute left-0 md:-left-10 border border-yellow-400 p-2 rounded-full transition 
            ${
              startIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-yellow-400 hover:text-black"
            }`}
        >
          <FaArrowLeft />
        </button>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-2 gap-3 px-4 sm:px-6 lg:px-8">
          {feedbacks.slice(startIndex, startIndex + 2).map((fb) => (
            <div
              key={fb.id}
              className="bg-[#00796b] relative p-3 rounded-lg shadow-lg px-6 sm:px-10 lg:px-[50px]"
            >
              <h3 className="text-lg font-bold capitalize">{fb.name}</h3>
              <p className="text-sm mb-2 text-gray-200">{fb.title}</p>
              <p className="text-gray-100 text-sm mb-4">{fb.text}</p>

              <div className="text-yellow-400 flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              
              
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextFeedback}
          disabled={startIndex + 2 >= feedbacks.length}
          className={`absolute right-0 md:-right-10 border border-yellow-400 p-2 rounded-full transition 
            ${
              startIndex + 2 >= feedbacks.length
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-yellow-400 hover:text-black"
            }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
