import { 
  FaLaptopCode,       // Web Development
  FaPaintBrush,       // Web Design
  FaMobileAlt,        // App Design & Development
  FaPencilRuler,      // UI/UX Design
  FaBullhorn,         // SEO Marketing
  FaPalette           // Graphic Design
} from "react-icons/fa";

export default function ServiceCards() {
  const services = [
    {
      title: "Web Design",
      desc: "Beautiful and user-friendly website layouts.",
      icon: <FaPaintBrush className="text-white text-3xl z-10" />,
    },
    {
      title: "Web Development",
      desc: "Modern and responsive web applications.",
      icon: <FaLaptopCode className="text-white text-3xl z-10" />,
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and engaging user experiences.",
      icon: <FaPencilRuler className="text-white text-3xl z-10" />,
    },
    {
      title: "App Design & Development",
      desc: "Cross-platform mobile app solutions.",
      icon: <FaMobileAlt className="text-white text-3xl z-10" />,
    },
    {
      title: "Graphic Design",
      desc: "Creative and eye-catching brand visuals.",
      icon: <FaPalette className="text-white text-3xl z-10" />,
    },
    {
      title: "SEO Marketing",
      desc: "Boosting your website’s visibility and traffic.",
      icon: <FaBullhorn className="text-white text-3xl z-10" />,
    },
  ];

  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-[80px] h-[80px] mx-auto flex items-center justify-center mb-4">
              <div className="absolute inset-0 bg-[#FFBD39] rounded-[20%_80%_40%_80%/20%_70%_20%_70%]"></div>
              {service.icon}
            </div>

            <h2 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h2>

            <div className="w-12 h-[2px] bg-[#FFBD39] mx-auto mb-2"></div>

            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
