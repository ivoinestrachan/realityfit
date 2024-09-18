import Image from "next/image";
import walk from "../assets/walk.svg"

const Immersion = () => {
  return (
    <div className="relative h-[100vh]">
     <Image src={walk} alt="walk" className="absolute h-full w-full object-cover" />
    
     <div className="pt-[100px] flex items-center justify-center h-screen relative">
  <div className="text-center">
    <div className="z-10 text-7xl text-white font-darker-grotesque-medium">
      TRUE IMMERSION.
    </div>
    <div className="z-10 text-white mt-4 font-darker-grotesque-regular text-4xl">
      Feel like you're in the middle of the action
    </div>
  </div>
</div>

    </div>
  );
}

export default Immersion;
