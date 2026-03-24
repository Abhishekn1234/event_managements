"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ✅ Updated Premium Colors (match hero) */
const colorA = "#ec4899"; // pink-500
const colorB = "#f59e0b"; // yellow-500
const colorC = "#facc15"; // yellow-400
const colorD = "#f472b6"; // pink-400
const colorE = "#fde047"; // soft yellow

const AnimatedWord = ({
  children,
  delay = 0,
  className = "",
  gradientColors = [colorA, colorB],
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  gradientColors?: string[];
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px", amount: 0.3 });

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        opacity: inView ? 1 : 0.3,
        transform: inView ? "translateY(0px)" : "translateY(30px)",
        background: inView
          ? `linear-gradient(135deg, ${gradientColors.join(", ")})`
          : "none",
        WebkitBackgroundClip: inView ? "text" : "unset",
        color: inView ? "transparent" : "#9ca3af",
        transition: "all 0.8s ease",
        transitionDelay: `${delay}s`,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
};

const SplitPhrase = ({
  phrase,
  baseDelay = 0,
  wordClassName = "",
  gradientOverride,
}: {
  phrase: string;
  baseDelay?: number;
  wordClassName?: string;
  gradientOverride?: string[];
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
      {phrase.split(" ").map((word, i) => (
        <AnimatedWord
          key={i}
          delay={baseDelay + i * 0.08}
          className={wordClassName}
          gradientColors={gradientOverride || [colorA, colorB]}
        >
          {word}
        </AnimatedWord>
      ))}
    </div>
  );
};

const GlowOrb = ({
  size,
  color,
  top,
  left,
}: {
  size: string;
  color: string;
  top: string;
  left: string;
}) => (
  <div
    className={`absolute ${size} rounded-full bg-gradient-to-r ${color} blur-[120px] opacity-60 pointer-events-none animate-pulse`}
    style={{ top, left }}
  />
);

const CelebrateMoments = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20 
      bg-gradient-to-br from-[#0a0c10] via-[#11141c] to-[#0b0e14] overflow-hidden"
    >
      {/* Softer Premium Glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 blur-[140px]"
        style={{
          transform: `translate(${mouse.x * 25}px, ${mouse.y * 20}px)`,
          top: "10%",
          left: "-15%",
        }}
      />
      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-l from-yellow-400/10 to-pink-500/10 blur-[160px]"
        style={{
          transform: `translate(${mouse.x * -20}px, ${mouse.y * -15}px)`,
          bottom: "-20%",
          right: "-10%",
        }}
      />

      <GlowOrb
        size="w-[400px] h-[400px]"
        color="from-pink-500/10 to-yellow-400/10"
        top="60%"
        left="-10%"
      />

      <div className="relative z-10 text-center max-w-7xl space-y-16">
        
        {/* Tagline (Glass Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-200">
            Curated for the extraordinary
          </span>
        </motion.div>

        {/* Main Text */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <SplitPhrase
            phrase="Where every"
            baseDelay={0.1}
            wordClassName="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold"
            gradientOverride={[colorA, colorB]}
          />

          <SplitPhrase
            phrase="gathering becomes"
            baseDelay={0.3}
            wordClassName="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold"
            gradientOverride={[colorA, colorB]}
          />

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-8xl md:text-9xl lg:text-[8rem] font-extrabold 
            bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-tight"
          >
            UNFORGETTABLE
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold 
          bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-tight"
        >
          Moments
        </motion.h2>

        {/* Bottom */}
        <div className="space-y-4 sm:space-y-6">
          <SplitPhrase
            phrase="designed to echo"
            baseDelay={0.3}
            wordClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
          />
          <SplitPhrase
            phrase="through time & hearts"
            baseDelay={0.5}
            wordClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/971521775669?text=Hello%20Aalizah%20Events,%20I%20would%20like%20to%20plan%20an%20event",
                "_blank"
              )
            }
            className="px-10 py-5 rounded-3xl font-bold text-lg sm:text-xl 
            bg-white/10 backdrop-blur-md border border-white/20 
            hover:border-white/40 transition-all duration-300 hover:scale-105 text-white"
          >
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Start Your Journey
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CelebrateMoments;