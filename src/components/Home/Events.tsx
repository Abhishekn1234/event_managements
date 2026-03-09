"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

export default function Events() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const setRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    ref(node);
  };

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(inView);
  }, [inView]);

  /* ----------------------------------
     EVENT DATA
  ---------------------------------- */
  const events = [
    { title: "Luxury Wedding", description: "Elegant weddings crafted with perfection", image: "/Orlando Wedding Venues - The Biggest List Online! - Wedding Venue Map.jpg" },
    { title: "Corporate Gala", description: "Professional events that elevate your brand", image: "/Modern Mythology Gala_ A Celestial Take on Luxury Event Design - A Sparkly Life for Me.jpg" },
    { title: "Private Party", description: "Exclusive celebrations for special moments", image: "/The MOMENT! ✨.jpg" },
    { title: "Festival Event", description: "Large scale entertainment & festivals", image: "/Joyful people celebrating with sparklers and confetti celebration party.jpg" },
    { title: "Brand Launch", description: "Create unforgettable brand experiences", image: "/Highlight your brand with Sense😎.jpg" },
    { title: "Luxury Dining", description: "Premium dining & gala experiences", image: "/Legends Lunch at Grand Hyatt.jpg" },
  ];

  /* ----------------------------------
     ANIMATION
  ---------------------------------- */
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  /* ----------------------------------
     JSX
  ---------------------------------- */
  return (
    <section ref={setRefs} className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
          Event Highlights
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Discover some of our most memorable celebrations and experiences crafted for our amazing clients.
        </p>
      </motion.div>

      {/* FEATURED EVENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
        className="relative max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20"
      >
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
          <img
            src="/Wedding Decor.jpg"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
              Grand Wedding Celebration
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md">
              A breathtaking luxury wedding designed with elegance and unforgettable moments.
            </p>
          </div>
        </div>
      </motion.div>

      {/* EVENT GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        {events.map((event, i) => (
          <motion.div key={i} variants={card} className="relative rounded-2xl overflow-hidden cursor-pointer group">
            <img
              src={event.image}
              className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-4 md:left-5 right-3 sm:right-4 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">{event.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}