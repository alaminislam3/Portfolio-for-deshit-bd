import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Aboutme from "./Component/Aboutme";
import ContactUs from "./Component/ContactUs";
import Service from "./Component/Service";
import Resume from "./Component/Resume";
import Project from "./Component/Project";
import Blog from "./Component/Blog";


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,  
      easing: (t) => t, 
      smooth: true,
      lerp: 0.05, 
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
      <Service></Service>
      <Resume/>
      <Project/>
      <Blog/>
      <ContactUs />
    </>
  );
}

export default App;
