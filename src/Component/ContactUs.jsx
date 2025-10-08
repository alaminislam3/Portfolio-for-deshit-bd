import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#333333] text-white py-4 sm:py-6 lg:py-12  px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>

        {/* Underline design */}
        <div className="relative w-full flex justify-center mb-2">
          <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
        </div>

        <p className="text-gray-300 mb-6">
          Don't be hesitant, just send a message
        </p>

        {/* Input fields */}
        <form className="flex flex-col items-center gap-3">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row justify-center gap-3 w-full max-w-[820px]">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-500/50 bg-transparent px-3 py-2 rounded w-full md:w-1/2 focus:outline-none focus:border-[#FFBD39]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-500/50 bg-transparent px-3 py-2 rounded w-full md:w-1/2 focus:outline-none focus:border-[#FFBD39]"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Your Subject"
            className="border border-gray-500/50 bg-transparent px-3 py-2 rounded w-full max-w-[820px] focus:outline-none focus:border-[#FFBD39]"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            className="border border-gray-500/50 bg-transparent px-3 py-2 rounded w-full max-w-[820px] h-32 resize-none focus:outline-none focus:border-[#FFBD39]"
          ></textarea>

          {/* Submit button */}
          <div className="w-full max-w-[820px] flex justify-start">
            <button
              type="submit"
              className="bg-[#FFBD39] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition-all duration-200"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
