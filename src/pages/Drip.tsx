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

  const sparkle: Variants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0.2, 0.8, 0.2],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">

      {/* Soft animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #5B3B00, #000 70%)",
            "radial-gradient(circle at 80% 80%, #7C4A03, #000 70%)",
            "radial-gradient(circle at 20% 80%, #6A3F02, #000 70%)",
            "radial-gradient(circle at 80% 20%, #5B3B00, #000 70%)",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating sparkles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkle}
          animate="animate"
          className="absolute w-[1.5px] sm:w-2 h-[1.5px] sm:h-2 bg-[#d9c15e] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full px-4 sm:px-6 md:px-12"
      >
        {/* Glass card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center mx-auto w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl shadow-[0_0_40px_rgba(217,193,94,0.1)]">

          {/* Title */}
          <motion.h2
            variants={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em]
              bg-gradient-to-r from-[#d9c15e] via-[#f5e17c] to-[#d9c15e]
              bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-snug"
          >
            MAKE YOUR EVENT
            <br />
            UNFORGETTABLE
          </motion.h2>

          {/* Divider */}
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d9c15e] to-transparent mx-auto my-6 sm:my-8" />

          {/* Subtitle */}
          <motion.p
            variants={subtitle}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed"
          >
            From luxury weddings to grand corporate galas, Aalizah Events
            creates magical experiences designed to leave lasting impressions.
          </motion.p>

          {/* Bottom tagline */}
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 tracking-widest">
            WEDDINGS • CORPORATE • CELEBRATIONS • FESTIVALS
          </p>
        </div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 md:h-24" preserveAspectRatio="none">
          <path
            fill="#d9c15e"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,101.3C672,107,768,117,864,112C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

    </section>
  );
}