import { useRef } from "react";


const Animation = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOverlayClcik = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  };
  return (
    <div className="bg-black sm:h-[98vh] mt-[700px] relative">
     
        <video
        ref={videoRef}
          src="https://cloud-ofkfgjclu-hack-club-bot.vercel.app/0ivoine_journey_sound.mp4"
          width="100%"
        className="h-[100vh]"
        
        >
     
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 cursor-pointer" 
        onClick={handleOverlayClcik}
        ></div>
      </div>

  );
}

export default Animation;
