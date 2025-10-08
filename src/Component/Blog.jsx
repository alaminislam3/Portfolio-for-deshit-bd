import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      img: "/b1.png",
      title: "The Future of Web Development",
      info: "Admin / 2 Comments / Design",
      desc: "Explore the trends shaping the next generation of web applications with React, AI, and cloud-based solutions.",
      date: { day: "8", month: "Jan" },
    },
    {
      id: 2,
      img: "/b2.png",
      title: "UI/UX Best Practices in 2025",
      info: "Staff / 4 Comments / UI Design",
      desc: "Learn the latest UI/UX techniques that help designers create user-centered and visually engaging interfaces.",
      date: { day: "15", month: "Feb" },
    },
    {
      id: 3,
      img: "/b3.png",
      title: "Building Scalable MERN Apps",
      info: "Moderator / 3 Comments / Development",
      desc: "Understand how to design and deploy high-performance applications using MongoDB, Express, React, and Node.",
      date: { day: "27", month: "Mar" },
    },
  ];

  return (
    <section
      id="blog"
      className="bg-[#333333] text-white py-16 px-6 sm:px-10 lg:px-12"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Our Latest Blog
        </h2>

        {/* Decorative underline */}
        <div className="relative flex justify-center mb-3">
          <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base">
          Read our blog and learn a lot of things
        </p>
      </div>

      {/* Blog Cards */}
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-[#2c2c2c]"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-60 xl:h-72 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FFBD39] text-black text-center rounded-md px-3 py-1 shadow-md">
                <p className="text-lg font-bold leading-none">
                  {blog.date.day}
                </p>
                <p className="text-sm font-semibold">{blog.date.month}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
                {blog.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-2">
                {blog.info}
              </p>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {blog.desc}
              </p>

              <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                <span className="text-sm sm:text-base">Read More</span>
                <FaArrowRight className="text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
