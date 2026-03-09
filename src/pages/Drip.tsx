"use client";

import { motion, Variants } from "framer-motion";

export default function DripSection() {

  const container: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const title: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const subtitle: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.6,
      },
    },
  };

  const button: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.6,
      },
    },
  };

  const sparkle:Variants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-black">

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
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating sparkles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkle}
          animate="animate"
          className="absolute w-[2px] h-[2px] bg-[#d9c15e] rounded-full"
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
        className="relative max-w-5xl mx-auto px-6"
      >

        {/* Glass card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-[0_0_40px_rgba(217,193,94,0.1)]">

          {/* Title */}
          <motion.h2
            variants={title}
            className="text-4xl md:text-6xl font-light tracking-[0.2em]
            bg-gradient-to-r from-[#d9c15e] via-[#f5e17c] to-[#d9c15e]
            bg-clip-text text-transparent"
          >
            MAKE YOUR EVENT
            <br />
            UNFORGETTABLE
          </motion.h2>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d9c15e] to-transparent mx-auto my-8" />

          {/* Subtitle */}
          <motion.p
            variants={subtitle}
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From luxury weddings to grand corporate galas, Aalizah Events
            creates magical experiences designed to leave lasting impressions.
          </motion.p>

          {/* CTA Button
          <motion.div
            variants={button}
            className="mt-10 flex justify-center"
          >
            <button
              className="px-10 py-4 rounded-full
              bg-gradient-to-r from-[#d9c15e] to-[#caa84c]
              text-black font-semibold tracking-wider
              hover:scale-105 transition-transform duration-300
              shadow-[0_0_20px_rgba(217,193,94,0.4)]"
            >
              PLAN YOUR EVENT
            </button>
          </motion.div> */}

          {/* Bottom tagline */}
          <p className="text-gray-500 text-sm mt-8 tracking-widest">
            WEDDINGS • CORPORATE • CELEBRATIONS • FESTIVALS
          </p>
        </div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none opacity-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            fill="#d9c15e"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,101.3C672,107,768,117,864,112C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

    </section>
  );
}