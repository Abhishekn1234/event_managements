"use client";

import { motion, Variants } from "framer-motion";

export default function DripSection() {

  const container: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full py-24 md:py-36 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight"
          >
            Crafting Moments <br />
            That Feel Like{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-medium">
              Magic
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 text-base md:text-lg max-w-xl"
          >
            We design and deliver exceptional events that blend elegance,
            creativity, and precision — turning your vision into unforgettable
            experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 justify-center md:justify-start text-xs tracking-widest text-gray-400"
          >
            <span className="text-pink-400">PREMIUM EVENTS</span>
            <span>•</span>
            <span className="text-yellow-400">END-TO-END PLANNING</span>
            <span>•</span>
            <span className="text-pink-400">BESPOKE EXPERIENCES</span>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-4"
        >
          {[
            "Luxury Weddings",
            "Corporate Events",
            "Private Celebrations",
            "Destination Events",
            "Stage & Decor Design",
            "Artist & Entertainment",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-lg 
              rounded-2xl p-5 text-center 
              hover:bg-white/10 hover:border-white/30 
              transition"
            >
              <p className="text-white text-sm md:text-base">
                {service}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] 
      bg-gradient-to-r from-transparent via-pink-500/40 to-yellow-500/40" />

    </section>
  );
}