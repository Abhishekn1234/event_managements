import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  onPlanClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onPlanClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const fadeStart = 0;
  const fadeEnd = typeof window !== "undefined" ? window.innerHeight * 0.9 : 800;

  const opacity = useTransform(scrollY, [fadeStart, fadeEnd], [1, 0]);
  const scale = useTransform(scrollY, [fadeStart, fadeEnd], [1.2, 0.95]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0f172a]"
    >
      {/* Background Video */}
      <motion.video
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/IMG_05789.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Turning Your <span className="text-cyan-400">Dream Events</span> <br />
          Into Unforgettable Experiences
        </h1>

        <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto">
          From weddings and corporate gatherings to birthdays and private
          celebrations, <span className="text-cyan-400 font-semibold">Aalizah Events</span>
          brings creativity, elegance, and flawless execution to every moment.
        </p>

        {/* <button
          onClick={onPlanClick}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
        >
          Plan Your Event
        </button> */}

      </div>
    </div>
  );
};

export default HeroSection;
