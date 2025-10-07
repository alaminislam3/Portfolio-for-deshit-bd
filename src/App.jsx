import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Skills from "./Component/Skills";
import Aboutme from "./Component/Aboutme";
import Education from "./Component/Education";
import Experience from "./Component/Exprience";
import ProjectSection from "./Component/Project";
import ContactUs from "./Component/ContactUs";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,  // কম duration = fast scroll
      easing: (t) => t, // linear easing
      smooth: true,
      lerp: 0.05, // lower lerp = faster response
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Aboutme />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <ProjectSection />
      <ContactUs />
    </>
  );
}

export default App;
