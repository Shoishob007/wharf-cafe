"use client";

import { motion } from "framer-motion";
import { Coffee, Waves, Sun, UtensilsCrossed } from "lucide-react";
import Button from "../components/Button";

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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl"
          >
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/cafe-menu/about.jpg')" }}
            />
          </motion.div>

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

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center rounded-xl bg-card p-4 text-center shadow-sm"
                >
                  <item.icon className="mb-2 h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">
                    {item.label}
                  </span>
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
