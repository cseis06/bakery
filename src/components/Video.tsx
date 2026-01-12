import VideoBakery from "../assets/video/bakery-video.mp4";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-[60dvh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={VideoBakery}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoBackground;