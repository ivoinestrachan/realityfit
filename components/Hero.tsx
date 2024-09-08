import Image from "next/image";
import hero from "../assets/Hero.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="bg-black h-[108vh] text-white relative">
      <Image src={hero} alt="hero" className="absolute h-full w-full object-cover" />
      <div className="absolute bottom-10 w-full">
        <div className="text-center text-7xl">FIT I</div>
        <div className="text-center">Bringing haptics to virtual reality</div>

        <div className="flex justify-center mt-4">
          <button className="flex items-center">
            <div>Preorder Now</div>
            <span className="ml-2">
              <Image src={arrow} alt="arrow" width={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
