import "./App.css";
//import gsap from 'gsap';
import Hero1 from '../assets/icons/herooo.png'

const Hero = () => {
  return (
    <>
      <section className="relative bg-black h-screen w-screen overflow-hidden text-white flex justify-center items-center">
        <div className="absolute rotate-41 left-30 right-[-800px]">
          <div
            className="absolute left-50 w-[70px]
           h-[600px] rounded-full bg-azure"
          ></div>
          <div
            className="absolute left-69 w-[70px]
            h-[700px] rounded-full bg-banana"
          ></div>
          <div
            className="absolute left-88 w-[70px]
           h-[650px] rounded-full bg-crimson"
          ></div>
        </div>

        <img 
        className="w-[1100px] h-[600px] z-10"
        src={Hero1} alt="" />
      </section>
    </>
  );
};

export default Hero;
