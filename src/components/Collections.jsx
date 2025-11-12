import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";


const categories = [
  "Anime",
  "Faith",
  "Tech",
  "Sports",
  "Quotes",
  "Cars",
  "Art",
];

const Collections = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".planet"),
      { scale: 0 },
      { scale: 1, stagger: 0.2, duration: 1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="py-24 text-center bg-gray-900"
    >
      <h2 className="text-4xl mb-10 font-semibold">Sticker Galaxies</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="planet w-28 h-28 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-110 transition-transform"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
