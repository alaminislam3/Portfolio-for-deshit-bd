export default function ExprienceSection() {
    const experience = [
      {
        year: "2016-2018",
        title: "Junior Web Developer",
        institute: "TechSoft Solutions",
        desc: "Worked on front-end development using HTML, CSS, and JavaScript. Collaborated with designers to create responsive layouts and user-friendly interfaces.",
      },
      {
        year: "2019-2021",
        title: "Full Stack Developer",
        institute: "Creative IT Hub",
        desc: "Developed full-stack web applications using MERN stack. Focused on REST APIs, authentication, and database optimization.",
      },
      {
        year: "2022-Present",
        title: "Frontend Engineer",
        institute: "Sparktech Agency",
        desc: "Building high-performance, scalable web applications using React, Tailwind CSS, and Next.js. Collaborating with cross-functional teams for smooth delivery.",
      },
    ];
  
    return (
      <section className="bg-[#333333] py-10">
        <h2 className="font-bold text-[30px] text-white text-center mb-8">
          My Experience
        </h2>
  
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 text-white">
          {experience.map((exp, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 w-full md:w-[30%] hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              {/* Year Badge */}
              <div className="inline-block bg-[#FFBD39] text-white px-3 py-1 rounded-full mb-4 font-semibold">
                {exp.year}
              </div>
  
              <h2 className="text-xl font-bold mb-2">{exp.title}</h2>
              <p className="text-gray-300 mb-3">{exp.institute}</p>
              <p className="text-gray-400 text-sm">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  