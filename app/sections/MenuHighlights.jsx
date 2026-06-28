"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, WheatOff, Flame, Clock, Expand, X } from "lucide-react";

const specials = [
  {
    name: "Weekend Big Breakfast",
    price: "$25",
    description:
      "Eggs your way, bacon, sausages, mushrooms, tomatoes, toast, and hash browns.",
    days: "Saturday & Sunday",
    image: "/cafe-menu/breakfast-05.jpg",
  },
  {
    name: "Wharf Fish & Chips",
    price: "$26",
    description:
      "Crispy battered fish with hand-cut chips, lemon, and house tartare.",
    days: "Daily",
    image: "/cafe-menu/lunch-04.jpg",
  },
  {
    name: "Brunch Shakshuka",
    price: "$20",
    description: "Baked eggs in spiced tomato sauce with herbs and sourdough.",
    days: "Weekends",
    image: "/cafe-menu/breakfast-04.jpg",
  },
];

const dietary = [
  { icon: Leaf, label: "Vegetarian options" },
  { icon: WheatOff, label: "Gluten-free available" },
  { icon: Flame, label: "Daily soup" },
  { icon: Clock, label: "Cabinet food all day" },
];

function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 rounded-full bg-primary p-2 text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        <motion.img
          key={src}
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default function MenuHighlights() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Specials & Dietary
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Look out for seasonal dishes and everyday options to suit different
            diets.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => setLightbox({ src: item.image, alt: item.name })}
                className="group relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                  <Expand className="h-5 w-5 text-white drop-shadow sm:h-6 sm:w-6" />
                  <span className="text-[11px] font-medium tracking-wide text-white drop-shadow sm:text-xs">
                    Click to expand
                  </span>
                </div>
              </button>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="text-xs font-medium text-primary">{item.days}</p>
            </motion.div>
          ))}
        </div>

        {lightbox && (
          <ImageLightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}

        <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 lg:grid-cols-4">
          {dietary.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
