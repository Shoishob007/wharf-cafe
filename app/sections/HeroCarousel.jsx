"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";

const slides = [
  {
    image: "/cafe-menu/hero.jpg",
    eyebrow: "Maraetai, Auckland",
    title: "Coffee by the Wharf",
    subtitle:
      "Fresh food, great coffee, and stunning beach views at Maraetai Wharf.",
  },
  {
    image: "/cafe-menu/breakfast-05.jpg",
    eyebrow: "All-Day Breakfast",
    title: "Start the Day Right",
    subtitle:
      "Eggs, pancakes, smashed avo, and Allpress espresso on the water.",
  },
  {
    image: "/cafe-menu/lunch-04.jpg",
    eyebrow: "Lunch by the Beach",
    title: "Fresh & Filling",
    subtitle:
      "Fish & chips, burgers, salads, and daily specials made to order.",
  },
  {
    image: "/cafe-menu/drinks-02.jpg",
    eyebrow: "Drinks & Treats",
    title: "Cool Down",
    subtitle:
      "Iced coffee, smoothies, cold drinks, and ice cream for sunny days.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slides[index].image}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80">
              {slides[index].eyebrow}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slides[index].title}
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              {slides[index].subtitle}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/menu/">Explore Menu</Button>
              <Button href="/reservation/" variant="whiteOutline">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
