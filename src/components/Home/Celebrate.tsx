"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* =========================
   Colors
========================= */
const colorA = "#FFB347";
const colorB = "#FF6B6B";
const colorC = "#C44569";
const colorD = "#F9D56E";
const colorE = "#E84A5F";

/* =========================
   Animated Word
========================= */
const AnimatedWord = ({
  children,
  delay = 0,
  className = "",
  gradientColors = [colorA, colorB, colorC],
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  gradientColors?: string[];
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    margin: "-15% 0px -15% 0px",
    amount: 0.3,
  });

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        opacity: inView ? 1 : 0.4,
        transform: inView ? "translateY(0px)" : "translateY(25px)",
        background: inView
          ? `linear-gradient(135deg, ${gradientColors.join(", ")})`
          : "none",
        WebkitBackgroundClip: inView ? "text" : "unset",
        color: inView ? "transparent" : "#9ca3af",
        transition: "all 0.8s ease",
        transitionDelay: `${delay}s`,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
};

/* =========================
   Split Phrase
========================= */
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
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
      {phrase.split(" ").map((word, i) => (
        <AnimatedWord
          key={i}
          delay={baseDelay + i * 0.08}
          className={wordClassName}
          gradientColors={gradientOverride || [colorA, colorB, colorC]}
        >
          {word}
        </AnimatedWord>
      ))}
    </div>
  );
};

/* =========================
   Glow Orb
========================= */
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
    className={`absolute ${size} rounded-full bg-gradient-to-r ${color} blur-[100px] opacity-70 pointer-events-none animate-pulse`}
    style={{ top, left }}
  />
);

/* =========================
   MAIN COMPONENT
========================= */
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
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-br from-[#0a0c10] via-[#11141c] to-[#0b0e14] overflow-hidden"
    >
      {/* Parallax Glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-orange-400/10 to-pink-500/10 blur-[140px]"
        style={{
          transform: `translate(${mouse.x * 25}px, ${mouse.y * 20}px)`,
          top: "10%",
          left: "-15%",
        }}
      />

      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-l from-yellow-300/10 to-red-400/10 blur-[160px]"
        style={{
          transform: `translate(${mouse.x * -20}px, ${mouse.y * -15}px)`,
          bottom: "-20%",
          right: "-10%",
        }}
      />

      {/* Extra Glow */}
      <GlowOrb
        size="w-[400px] h-[400px]"
        color="from-rose-300/10 to-amber-200/10"
        top="60%"
        left="-10%"
      />

      <div className="relative z-10 text-center max-w-6xl space-y-14">

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Curated for the extraordinary
          </span>
        </motion.div>

        {/* Main Text */}
        <div className="space-y-4">
          <SplitPhrase
            phrase="Where every"
            baseDelay={0.1}
            wordClassName="text-5xl md:text-8xl font-bold"
            gradientOverride={[colorA, colorD, colorB]}
          />

          <SplitPhrase
            phrase="gathering becomes"
            baseDelay={0.3}
            wordClassName="text-5xl md:text-8xl font-bold"
            gradientOverride={[colorB, colorC, colorE]}
          />

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent"
          >
            UNFORGETTABLE
          </motion.h1>
        </div>

        {/* Middle */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent"
        >
          Moments
        </motion.h2>

        {/* Bottom */}
        <div className="space-y-3">
          <SplitPhrase
            phrase="designed to echo"
            baseDelay={0.3}
            wordClassName="text-3xl md:text-6xl"
          />
          <SplitPhrase
            phrase="through time & hearts"
            baseDelay={0.5}
            wordClassName="text-3xl md:text-6xl"
          />
        </div>

        {/* CTA */}
       <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
  <button
    onClick={() =>
      window.open(
        "https://wa.me/971521775669?text=Hello%20Aalizah%20Events,%20I%20would%20like%20to%20plan%20an%20event",
        "_blank"
      )
    }
    className="px-8 py-4 border border-blue-400 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent"
  >
    Start your journey
  </button>
</div>
      </div>
    </section>
  );
};

export default CelebrateMoments;