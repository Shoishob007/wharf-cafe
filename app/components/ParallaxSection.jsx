"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({
  image,
  children,
  height = "60vh",
  overlay = "bg-black/50",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-[-10%] bg-cover bg-center"
        // Background image set via style prop from parent
        {...{ "data-bg": image }}
      />
      <div
        className="absolute inset-[-10%] bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
