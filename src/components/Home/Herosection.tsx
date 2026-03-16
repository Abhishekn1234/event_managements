import { FC } from "react";

interface HeroSectionProps {
  onPlanClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onPlanClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
     <video
  src="/14988161-hd_1280_720_50fps.mp4" // replace with your video path
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-snug sm:leading-tight lg:leading-tight">
          Turning Your{" "}
          <span className="text-cyan-400">Dream Events</span> <br />
          Into Unforgettable Experiences
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          From weddings and corporate gatherings to birthdays and private celebrations,{" "}
          <span className="text-cyan-400 font-semibold">Aalizah Events</span> brings
          creativity, elegance, and flawless execution to every moment.
        </p>

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