"use client";

import { motion, Variants } from "framer-motion";

export default function DripSection() {

  const container: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const title: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const subtitle: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } },
  };

  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden bg-black">

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full px-4 sm:px-6 md:px-12"
      >
        {/* Glass card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center mx-auto w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

          {/* Title */}
          <motion.h2
            variants={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-white leading-snug sm:leading-snug md:leading-snug"
          >
            MAKE YOUR EVENT
            <br />
            UNFORGETTABLE
          </motion.h2>

          {/* Divider */}
          <div className="w-16 sm:w-24 h-[2px] bg-white/40 mx-auto my-6 sm:my-8" />

          {/* Subtitle */}
          <motion.p
            variants={subtitle}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed"
          >
            From luxury weddings to grand corporate galas, Aalizah Events
            creates magical experiences designed to leave lasting impressions.
          </motion.p>

          {/* Bottom tagline */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 tracking-widest">
            WEDDINGS • CORPORATE • CELEBRATIONS • FESTIVALS
          </p>
        </div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 md:h-24" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,101.3C672,107,768,117,864,112C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

    </section>
  );
}