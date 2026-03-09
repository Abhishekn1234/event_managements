"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Calendar, Users, Sparkles, Camera, MapPin, Heart } from "lucide-react";
import Events from "./Events";

/* -------------------
   EVENT THEMES
------------------- */
interface ThemeType {
  block: string;
  glow: string;
  gradient: string[];
  icon: React.ElementType;
}

interface EventBlockProps {
  text: string;
  description: string;
  index: number;
  isMobile: boolean;
}

const EVENT_THEMES: ThemeType[] = [
  { block: "#8B5CF6", glow: "rgba(139,92,246,0.3)", gradient: ["#C4B5FD", "#8B5CF6", "#6D28D9"], icon: Calendar },
  { block: "#EC4899", glow: "rgba(236,72,153,0.3)", gradient: ["#FBCFE8", "#EC4899", "#BE185D"], icon: Heart },
  { block: "#06B6D4", glow: "rgba(6,182,212,0.3)", gradient: ["#CFFAFE", "#06B6D4", "#0891B2"], icon: Camera },
  { block: "#F59E0B", glow: "rgba(245,158,11,0.3)", gradient: ["#FDE68A", "#F59E0B", "#D97706"], icon: Users },
];

/* -------------------
   EVENT BLOCK
------------------- */
const EventBlock: React.FC<EventBlockProps> = ({ text, description, index, isMobile }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const theme = EVENT_THEMES[index % EVENT_THEMES.length];
  const Icon = theme.icon;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], [isMobile ? 15 : 60, isMobile ? -15 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`relative ${isMobile ? "w-[95vw]" : "w-[80vw] max-w-[900px]"} mx-auto`}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 backdrop-blur-xl"
        style={{
        
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="relative flex items-center gap-4 sm:gap-6">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/20"
          >
            <Icon size={isMobile ? 24 : 30} style={{ color: theme.block }} />
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className={`font-bold text-[clamp(1.5rem,5vw,2.5rem)] sm:text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.5rem,6.5vw,3.5rem)]`}
              style={{
                background: `linear-gradient(135deg, ${theme.gradient.join(",")})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {text}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-gray-300 mt-1 sm:mt-2 text-[clamp(0.8rem,2.5vw,1rem)] sm:text-sm md:text-base"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------
   EVENT STATS
------------------- */
const EventStats = () => {
  const stats = [
    { label: "Events Hosted", value: "500+", icon: Calendar },
    { label: "Happy Clients", value: "1000+", icon: Users },
    { label: "Cities", value: "25+", icon: MapPin },
    { label: "Photos Taken", value: "50K+", icon: Camera },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-purple-400" />
            <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

/* -------------------
   MAIN COMPONENT
------------------- */
const ScrollHighlight: React.FC = () => {
  const events = [
    { text: "WEDDINGS", description: "Create magical wedding moments" },
    { text: "CORPORATE", description: "Professional and impactful events" },
    { text: "SOCIAL", description: "Birthdays, parties & celebrations" },
    { text: "FESTIVALS", description: "Large scale cultural celebrations" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <motion.div
      className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex flex-col items-center space-y-16 sm:space-y-20 md:space-y-24 overflow-hidden"
      
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      {/* overlay */}
      <div className="absolute inset-0" />

      {/* glow lights */}
      <div className="absolute top-[-150px] left-[-120px] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px] sm:blur-[160px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-pink-500/20 rounded-full blur-[120px] sm:blur-[160px]" />

      {/* floating sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2  rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 500,
            opacity: 0,
          }}
          animate={{
            y: [null, -50 - Math.random() * 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-3xl"
      >
        <div className="flex items-center justify-center gap-2 text-purple-300 text-xs sm:text-sm">
          <Sparkles size={16} />
          <span className="uppercase tracking-[4px] sm:tracking-[6px]">Aalizah Events</span>
          <Sparkles size={16} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
          Crafting{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Unforgettable
          </span>
          <br />
          Celebrations
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          We design extraordinary events that create lasting memories.
        </p>
      </motion.div>

      {/* Stats */}
      <EventStats />

      {/* Event blocks */}
      <div className="relative w-full max-w-6xl space-y-6 sm:space-y-10 md:space-y-12">
        {events.map((event, i) => (
          <EventBlock key={i} text={event.text} description={event.description} index={i} isMobile={isMobile} />
        ))}
      </div>

      <Events />
    </motion.div>
  );
};

export default ScrollHighlight;