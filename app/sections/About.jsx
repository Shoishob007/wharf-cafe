"use client";

import { motion } from "framer-motion";
import { Coffee, Waves, Sun, UtensilsCrossed } from "lucide-react";
import Button from "../components/Button";
import ShapedImage from "../components/ShapedImage";

const highlights = [
  { icon: Coffee, label: "Allpress Coffee" },
  { icon: Waves, label: "Beachside Spot" },
  { icon: Sun, label: "Outdoor Dining" },
  { icon: UtensilsCrossed, label: "Breakfast & Lunch" },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ShapedImage
            src="/cafe-menu/about.jpg"
            alt="Maraetai Wharf Café"
            shape="leaf"
            className="aspect-[4/3] w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              About Maraetai Wharf Café
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Located right on the water at Maraetai Wharf, our café is a
              relaxed beachside spot for locals and visitors alike. We serve
              fresh breakfast and lunch, cabinet food, great coffee, and cold
              drinks with views across the water.
            </p>
            <p className="mb-8 text-muted-foreground">
              <strong>Address:</strong> 231 Maraetai Drive, Maraetai, Auckland
              2018
              <br />
              <strong>Phone:</strong> 09 536 5002
              <br />
              <strong>Open:</strong> 7am daily
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>

            <Button href="/reservation/">Book Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
