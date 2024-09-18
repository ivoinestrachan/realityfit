import Image from "next/image";
import suit from "../assets/suit.svg"

const Visual = () => {
  return (
    <div className="relative">
    <Image src={suit} alt="suit" className="absolute h-[100vh] object-cover sm:object-left object-right" />
<div className="z-10 absolute ml-10  mt-10 text-[46px] font-darker-grotesque-regular">
2025
</div>

<div className="z-10 absolute ml-[8rem] mt-[300px] text-[46px] font-darker-grotesque-regular">
Now, we have touch.
</div>
</div>
  );
};

export default Visual;
