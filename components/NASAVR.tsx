import Image from "next/image";
import Nasa from "../assets/nasa2.svg";

const NASAVR = () => {
  return (
    <div className=" relative h-[100vh] bg-white mt-[720px]">
      <Image
        src={Nasa}
        alt="vision"
        className="absolute h-[100vh] w-[50%] object-cover object-right"
      />

<div className="z-10 absolute mt-10 text-[46px] darker-grotesque right-20">
     1985
     </div>

     <div className="z-10 absolute mt-[200px] text-[46px] darker-grotesque right-20">
     Then, audio.
     </div>
    </div>
  );
};

export default NASAVR;
