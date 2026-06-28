"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const images = Array.from({ length: 19 }, (_, i) => ({
  src: `/cafe-menu/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Cafe photo ${i + 1}`,
}));

// Desktop 4-col bento
const bentoLayout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

// Mobile 2-col bento — alternating featured + small tiles
const mobileBento = [
  "col-span-2 row-span-2", // wide feature
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2", // tall
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1", // wide
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2", // tall
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2", // wide feature
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1", // wide
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1", // wide
];

function GalleryButton({ image, index, onClick, layoutClass }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onClick={() => onClick(index)}
      className={`group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary ${layoutClass}`}
      aria-label={`Open image ${index + 1}`}
    >
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${image.src}')` }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
        <Expand className="h-5 w-5 text-white drop-shadow" />
        <span className="text-[11px] font-medium tracking-wide text-white drop-shadow sm:text-xs">
          Click to expand
        </span>
      </div>
    </motion.button>
  );
}

export default function BentoGallery() {
  const [lightbox, setLightbox] = useState(null);

  const open = (index) => setLightbox(index);
  const close = () => setLightbox(null);
  const next = () =>
    setLightbox((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setLightbox((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section id="gallery" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A glimpse of the food, views, and atmosphere at Maraetai Wharf Café.
          </p>
        </motion.div>

        {/* Mobile: mini-bento 2-col layout */}
        <div className="grid auto-rows-[120px] grid-cols-2 gap-3 md:hidden">
          {images.map((image, index) => (
            <GalleryButton
              key={image.src}
              image={image}
              index={index}
              onClick={open}
              layoutClass={mobileBento[index] ?? "col-span-1 row-span-1"}
            />
          ))}
        </div>

        {/* Desktop: bento layout */}
        <div className="hidden auto-rows-[180px] grid-cols-4 gap-4 md:grid">
          {images.map((image, index) => (
            <GalleryButton
              key={image.src}
              image={image}
              index={index}
              onClick={open}
              layoutClass={bentoLayout[index]}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-primary p-2 text-primary-foreground"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-h-[88vh] max-w-[92vw] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[88vh] max-w-[92vw] object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
