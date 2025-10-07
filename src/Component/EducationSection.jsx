export default function EducationSection() {
    const educationData = [
      {
        year: "2001-2005",
        title: "Computer Science",
        institute: "International University",
        desc: "Focused on programming fundamentals, algorithms, and database systems.",
      },
      {
        year: "2006-2010",
        title: "Bachelor Degree",
        institute: "Creative IT Institute",
        desc: "Learned front-end design, responsive layouts, and user experience principles.",
      },
      {
        year: "2011-2015",
        title: "Master Degree",
        institute: "Tech University",
        desc: "Specialized in full-stack development and project management.",
      },
    ];
  
    return (
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 py-4 bg-[#333333] text-white ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#3333] rounded-xl p-6 w-full md:w-[30%] hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            
            <div className="inline-block bg-[#FFBD39] text-white px-2 py-1 rounded-full mb-4 font-semibold">
              {edu.year}
            </div>
  
            <h2 className="text-xl font-bold mb-2">{edu.title}</h2>
            <p className="text-gray-300 mb-3">{edu.institute}</p>
            <p className="text-gray-400 text-sm">{edu.desc}</p>
          </div>
        ))}
      </div>
    );
  }
  