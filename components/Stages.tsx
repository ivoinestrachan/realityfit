import Image from "next/image";
import vision from "../assets/vision01.svg";
import nasa from "../assets/nasa01.svg"
import suit from "../assets/suit01.svg"


const Stages = () => {
  return (
    <div className="bg-black text-white flex py-10 items-center justify-center gap-10">
   <div>
    <Image src={vision} alt="vision" className="h-[550px]"/>
   </div>

   <div>
    <Image src={nasa} alt="vision" className="h-[550px]" />
   </div>

   <div>
    <Image src={suit} alt="vision" className="h-[550px]" />
   </div>
    </div>
  );
};

export default Stages;
