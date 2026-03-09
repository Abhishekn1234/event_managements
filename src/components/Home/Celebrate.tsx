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
   CENTER WORD
========================= */
const AnimatedMoments = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: inView ? 1 : 0.4,
        y: inView ? 0 : -30,
        transition: {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        },
      }}
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
        sm:text-[clamp(3rem,7vw,6.5rem)]
        md:text-[clamp(3.5rem,8vw,7rem)]
      "
    >
      MOMENTS
    </motion.span>
  );
};

/* =========================
   MAIN SECTION
========================= */
const CelebrateEvents: FC = () => {
  return (
    <section className="relative w-full min-h-screen  overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 space-y-10">

      {/* subtle glow background */}
      <div className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-yellow-500/10 blur-[150px] sm:blur-[200px] rounded-full top-[-150px] sm:top-[-180px] md:top-[-200px]" />

      <div className="text-center max-w-[90vw] xl:max-w-5xl relative z-10 space-y-8 sm:space-y-10 md:space-y-12">

        {/* Top Line */}
        <AnimatedLine
          className="
            font-light
            uppercase
            leading-[1.1]
            text-[clamp(1.8rem,5vw,3rem)]
            sm:text-[clamp(2.2rem,6vw,4rem)]
            md:text-[clamp(2.5rem,6.5vw,5rem)]
            lg:text-[clamp(3rem,7vw,5.5rem)]
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
            leading-[1.1]
            text-[clamp(1.8rem,5vw,3rem)]
            sm:text-[clamp(2.2rem,6vw,4rem)]
            md:text-[clamp(2.5rem,6.5vw,5rem)]
            lg:text-[clamp(3rem,7vw,5.5rem)]
          "
        >
          that people remember forever
        </AnimatedLine>

      </div>
    </section>
  );
};

export default CelebrateEvents;