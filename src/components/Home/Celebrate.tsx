"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const gold = "#D4AF37";
const white = "#ffffff";

/* =========================
   Animated Line
========================= */
const AnimatedLine = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.3,
        y: inView ? 0 : -30,
        transition: {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      }}
      style={{
        background: inView
          ? `linear-gradient(to top, ${gold}, ${white})`
          : "none",
        WebkitBackgroundClip: inView ? "text" : "unset",
        color: inView ? "transparent" : "#d1d5db",
      }}
      className={`tracking-wide ${className}`}
    >
      {children}
    </motion.h2>
  );
};

/* =========================
   CENTER CARD
========================= */
const AnimatedMoments = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.4,
        y: inView ? 0 : -30,
        borderColor: inView ? gold : "#444",
        transition: {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        },
      }}
      className="inline-block px-8 sm:px-12 py-5 sm:py-7 border bg-white/5 backdrop-blur-xl rounded-xl"
      style={{ transform: "rotate(-1.5deg)" }}
    >
      <motion.span
        style={{
          background: inView
            ? `linear-gradient(to top, ${gold}, ${white})`
            : "none",
          WebkitBackgroundClip: inView ? "text" : "unset",
          color: inView ? "transparent" : "#e5e7eb",
        }}
        className="
          inline-block
          font-light
          tracking-widest
          text-[clamp(2.5rem,7vw,6rem)]
        "
      >
        MOMENTS
      </motion.span>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const CelebrateEvents: FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#111827] to-black overflow-hidden flex items-center justify-center px-4 py-24">

      {/* subtle glow background */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[200px] rounded-full top-[-200px]" />

      <div className="text-center max-w-[90vw] xl:max-w-5xl space-y-14 relative z-10">

        {/* Top Line */}
        <AnimatedLine
          className="
            font-light
            uppercase
            leading-[1.05]
            text-[clamp(2.2rem,6vw,5rem)]
          "
        >
          We design experiences and celebrations
        </AnimatedLine>

        {/* CENTER WORD */}
        <AnimatedMoments />

        {/* Bottom Line */}
        <AnimatedLine
          delay={0.2}
          className="
            font-light
            uppercase
            leading-[1.05]
            text-[clamp(2.2rem,6vw,5rem)]
          "
        >
          that people remember forever
        </AnimatedLine>

      </div>
    </section>
  );
};

export default CelebrateEvents;
