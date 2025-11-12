import "./components/App.css";
import { useEffect } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import CustomOrder from "./components/CustomOrder";
import HowToOrder from "./components/HowToOrder";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    gsap.from("section", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      <Hero />
      <About />
      <Collections />
      <CustomOrder />
      <HowToOrder />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
