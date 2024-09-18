import Image from "next/image";
import hero from "../assets/Hero.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="bg-black h-[108vh] text-white relative">
      <Image src={hero} alt="hero" className="absolute h-full w-full object-cover" />
      <div className="absolute bottom-[8rem] w-full">
        <div className="text-center text-9xl font-darker-grotesque-medium">FIT I</div>
        <div className="text-center font-darker-grotesque-regular text-5xl">Bringing haptics to virtual reality</div>

        <div className="flex justify-center mt-4">
          <button className="flex items-center">
            <div className="font-darker-grotesque-regular text-[30px]">Preorder Now</div>
            <div className="ml-2">
              <Image src={arrow} alt="arrow" width={30} className="pt-2"/>
            </div>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
