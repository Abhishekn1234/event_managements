"use client";

import { FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type CardSlide = {
  type: "card";
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    title: string;
  };
};

type ImagesSlide = {
  type: "images";
  images: {
    src: string;
    title: string;
  }[];
};

type Slide = CardSlide | ImagesSlide;

const ServicesSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slides: Slide[] = [
    {
      type: "card",
      title: "AALIZAH",
      subtitle: "EVENT",
      description: "EXPERIENCES",
      image: {
        src: "/fotografo-samuel-cruz-QB3loRGh3ZQ-unsplash.jpg",
        title: "Luxury Wedding Planning",
      },
    },
    {
      type: "images",
      images: [
        { src: "/ray-hennessy-gdTxVSAE5sk-unsplash.jpg", title: "Corporate Events" },
        { src: "/privateparties.jpg", title: "Private Celebrations" },
        { src: "/eventphotography.jpg", title: "Event Photography" },
      ],
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className=" text-white min-h-screen overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.5rem,6vw,4rem)] font-light tracking-widest text-[#d9c15e]">
          OUR SERVICES
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 text-[clamp(0.9rem,2.5vw,1.25rem)] md:text-lg">
          Creating unforgettable experiences for every celebration
        </p>
      </div>

      <motion.div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
        animate={{ x: -currentSlide * slideWidth }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10"
          >
            {/* CARD SLIDE */}
            {slide.type === "card" && (
              <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

                {/* Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
                  <h1 className="text-[#d9c15e] text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(3rem,7vw,5rem)] md:text-[clamp(3.5rem,8vw,6rem)] font-light mb-2 sm:mb-4">
                    {slide.title}
                  </h1>

                  <div className="inline-block mb-4 sm:mb-6 rotate-[-2deg] bg-[#9d622b] px-4 sm:px-6 py-2 sm:py-3 rounded">
                    <p className="text-white text-[clamp(1.5rem,5vw,2.5rem)] sm:text-3xl md:text-[2.5rem]">
                      {slide.subtitle}
                    </p>
                  </div>

                  <p className="text-white text-[clamp(1.5rem,5vw,2.5rem)] sm:text-3xl md:text-[2.5rem] font-light">
                    {slide.description}
                  </p>

                  <p className="text-gray-400 mt-4 sm:mt-6 max-w-md text-[clamp(0.85rem,2.5vw,1rem)] sm:text-sm md:text-base">
                    We design and manage luxury events with creativity, precision,
                    and attention to every detail.
                  </p>
                </div>

                {/* Image */}
                <div className="w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <motion.div
                    className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]"
                    whileHover={{ scale: 1.05, rotate: -4 }}
                  >
                    <img
                      src={slide.image.src}
                      alt={slide.image.title}
                      className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl"
                    />
                    <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/60 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-lg rounded">
                      {slide.image.title}
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* SERVICES GRID */}
            {slide.type === "images" && (
              <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">
                {slide.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
                    whileHover={{ scale: 1.06, rotate: -3 }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full aspect-[3/4] object-cover rounded-xl shadow-xl"
                    />
                    <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/60 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-lg rounded">
                      {img.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;