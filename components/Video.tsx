import Image from "next/image";
import videoImgPlaceholder from "../assets/video.svg"
const Video = () => {
  return (
    <div className="bg-black h-[90vh] flex justify-center">
     <Image src={videoImgPlaceholder} alt="suit" className="cursor-pointer"  draggable="false"/>
    </div>
  );
}

export default Video;
