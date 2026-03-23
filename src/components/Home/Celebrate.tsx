"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

/* =========================
   Animation Variants
========================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp :Variants= {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =========================
   MAIN COMPONENT
========================= */
const EventShowcase: FC = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-950 text-white flex items-center px-6 sm:px-10 lg:px-20 py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Crafting Unforgettable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Event Experiences
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg max-w-lg"
          >
            From intimate gatherings to grand celebrations, we create immersive
            environments that inspire, connect, and leave lasting impressions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 font-medium">
              Explore Services
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              title: "Weddings",
              desc: "Elegant, timeless, and personalized celebrations.",
            },
            {
              title: "Corporate Events",
              desc: "Professional events that elevate your brand.",
            },
            {
              title: "Private Parties",
              desc: "Unique themes and unforgettable experiences.",
            },
            {
              title: "Luxury Decor",
              desc: "Premium styling with attention to detail.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.03] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EventShowcase;