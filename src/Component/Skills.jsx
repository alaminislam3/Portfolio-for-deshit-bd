// src/components/Skills.jsx
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    // Core MERN Stack
    {
      name: "MongoDB",
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "Express.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "React",
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },

    // Programming & Styling
    {
      name: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "HTML5",
      img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    {
      name: "CSS3",
      img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },

    // Tools & Platforms
    {
      name: "Git",
      img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      name: "GitHub",
      img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
    {
      name: "Firebase",
      img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
    
  ];

  return (
    <section id="skill" className="py-12 sm:py-16 lg:py-24 bg-[#d9cabf]">
      <h2 className="text-5xl font-extrabold text-center md:pt-15 mb-10 text-neutral">
        Tech Stack
      </h2>

      <Marquee direction="right" speed={50} gradient={false}>
        <div className="flex gap-10 px-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 w-48 h-48 flex flex-col items-center justify-center border"
            >
              <img src={skill.img} alt={skill.name} className="h-20 object-contain" />
              <p className="mt-4 font-semibold text-black text-lg text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
