"use client";

import { motion } from "framer-motion";

const shapes = {
  arc: "shape-arc",
  diagonal: "shape-diagonal",
  leaf: "shape-leaf",
  pill: "rounded-[2rem]",
  arch: "rounded-t-[50%]",
  "rounded-2xl": "rounded-2xl",
};

export default function ShapedImage({
  src,
  alt,
  shape = "leaf",
  className = "",
  priority = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden bg-cover bg-center ${shapes[shape] || shapes.leaf} ${className}`}
      style={{ backgroundImage: `url('${src}')` }}
      role="img"
      aria-label={alt}
    />
  );
}
