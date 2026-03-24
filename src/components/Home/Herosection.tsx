import { FC, useEffect, useRef } from "react";

interface HeroSectionProps {
  onPlanClick: () => void;
}


const HeroSection: FC<HeroSectionProps> = ({ onPlanClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 5; // Skip the first 5 seconds
      video.play();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
    <video
      ref={videoRef}
      src="/homevideo.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />

      {/* Content */}
   <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-snug sm:leading-tight lg:leading-tight">
    Turning Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Dream Events</span> <br />
    Into Unforgettable Experiences
  </h1>

  {/* Paragraph */}
  <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
    From weddings and corporate gatherings to birthdays and private celebrations,{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Aalizah Events</span> brings creativity,
    elegance, and flawless execution to every moment.
  </p>

  {/* Button */}
  <button
    onClick={onPlanClick}
    className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
  >
    Plan Your Event
  </button>
</div>
    </div>
  );
};

export default HeroSection;