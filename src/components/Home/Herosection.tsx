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
      {/* Background Video */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
        {/* Heading */}
        <h1 className="font-extrabold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Turning Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Dream Events
            </span>
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
            Into Unforgettable Experiences
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-center">
          From weddings and corporate gatherings to birthdays and private celebrations,{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Aalizah Events
          </span>{" "}
          brings creativity, elegance, and flawless execution to every moment.
        </p>

        {/* Button */}
        <button
          onClick={onPlanClick}
          className="w-full sm:w-auto bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent"
        >
          Plan Your Event
        </button>
      </div>
    </div>
  );
};

export default HeroSection;