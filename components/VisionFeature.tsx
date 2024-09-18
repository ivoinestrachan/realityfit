import Image from "next/image";
import visionbg from "../assets/visionbg.svg";

const VisionFeature = () => {
  return (
    <div className="relative">
      <Image
        src={visionbg}
        alt="vision"
        className="absolute h-[100vh]  w-full object-cover sm:object-left object-contai"
      />
      <div className="z-10 absolute ml-10 mt-10 text-[46px] font-darker-grotesque-regular">
        1968
      </div>

      <div className="z-10 absolute ml-[8rem] mt-[300px] text-[46px] font-darker-grotesque-regular">
        First we got vision.
      </div>
    </div>
  );
};

export default VisionFeature;
