import React, { useState } from "react";

export default function Project() {
  const categories = [
    "All",
    "Web Design",
    "App Development",
    "UI/UX",
    "Graphic Design",
  ];

  const projects = [
    { id: 1, category: "Web Design", img: "/p1.png" },
    { id: 2, category: "Web Design", img: "/p2.png" },
    { id: 3, category: "App Development", img: "/p3.png" },
    { id: 4, category: "App Development", img: "/p4.png" },
    { id: 5, category: "UI/UX", img: "/p5.png" },
    { id: 6, category: "Graphic Design", img: "/p6.png" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section id="project" className="py-16 bg-[#333333] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>

          <div className="relative w-full flex justify-center mb-2">
            <div className="w-[120px] h-[2px] bg-[#FFBD39]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 bg-white border-[#FFBD39] w-3 h-3 rounded-full border-2"></div>
          </div>

          <p className="text-gray-300">Explore some of my recent work</p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FFBD39] text-black font-semibold"
                  : "border-gray-500 text-white hover:bg-[#FFBD39] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-6 ${
            activeCategory === "All"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={project.img}
                alt={project.category}
                className="w-full h-auto max-w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-[#FFBD39] font-semibold">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
