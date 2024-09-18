import Image from "next/image";
import sitting from "../assets/sitting.svg"

const Sitting = () => {
  return (
    <div className="relative h-[100vh]">
          <Image src={sitting} alt="sitting" className="absolute h-full w-full object-cover" />
   
          <div className="pt-[100px] flex items-center justify-center h-screen relative">
  <div className="text-center">
    <div className="z-10 text-7xl text-white font-darker-grotesque-medium">
      ALL FROM YOUR HOME
    </div>
    <div className="z-10 text-white mt-4 font-darker-grotesque-regular text-4xl">
      The 4D experience you always wanted
    </div>
  </div>
</div>
    </div>
  );
}

export default Sitting;
