"use client";

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
      video.currentTime = 5;
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

      {/* Stronger Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-24 space-y-8">
        
        {/* Heading */}
        <h1 className="font-bold text-white leading-tight text-5xl md:text-7xl">
          <span className="block">
            Turning Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Dream Events
            </span>
          </span>
          <span className="block mt-2">
            Into Unforgettable Experiences
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From weddings and corporate gatherings to birthdays and private celebrations,{" "}
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Aalizah Events
          </span>{" "}
          brings creativity, elegance, and flawless execution to every moment.
        </p>

        {/* Button */}
        <button
          onClick={onPlanClick}
          className="mt-6 px-10 py-4 font-bold text-lg rounded-2xl 
          bg-white/10 backdrop-blur-md border border-white/20 
          hover:border-white/40 transition-all duration-300 
          hover:scale-105 text-white"
        >
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Plan Your Event
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;