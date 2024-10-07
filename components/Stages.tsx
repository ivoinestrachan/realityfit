import Image from "next/image";
import vision from "../assets/vision.svg";
import nasa from "../assets/nava.svg";
import suit from "../assets/suitpr.svg";

const Stages = () => {
  return (
    <div className="bg-black text-white flex py-10 items-center">
      <div>
        <Image src={vision} alt="vision" className="ml-10 z-[100px] relative"  />
      </div>

      <div>
        <Image src={nasa} alt="nasa" />
      </div>

      <div>
  <Image src={suit} alt="suit"  />
</div>
    </div>
  );
};

export default Stages;
