"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Coffee,
  Sun,
  Heart,
  UtensilsCrossed,
  Droplets,
} from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Great Coffee",
    description: "We pour Allpress espresso and make every cup to order.",
  },
  {
    icon: Leaf,
    title: "Fresh & Local",
    description:
      "Our kitchen uses seasonal produce and local suppliers where possible.",
  },
  {
    icon: Sun,
    title: "Beachside Views",
    description:
      "Sit on the deck and watch the boats, the beach, and the water.",
  },
  {
    icon: Heart,
    title: "Family Friendly",
    description:
      "Kids are welcome, and we keep a relaxed, easy-going atmosphere.",
  },
  {
    icon: UtensilsCrossed,
    title: "All-Day Food",
    description: "Breakfast, lunch, cabinet food, and snacks from 7am.",
  },
  {
    icon: Droplets,
    title: "By the Water",
    description: "Right on Maraetai Wharf — perfect before or after a swim.",
  },
];

export default function AboutExtended() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our Story
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Maraetai Wharf Café has been a gathering spot for locals, boaties,
              beachgoers, and weekend visitors for years. We opened with a
              simple idea: serve good food and great coffee in one of the best
              spots on the Pōhutukawa Coast.
            </p>
            <p className="text-muted-foreground">
              Whether you are here for a long breakfast, a quick takeaway
              coffee, or an ice cream after a swim, we aim to make every visit
              easy and enjoyable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why Visit
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              We are one of the few cafés in the area sitting directly on the
              wharf. That means fresh air, open views, and a front-row seat to
              the tide and the boats.
            </p>
            <p className="text-muted-foreground">
              There is plenty of outdoor seating, takeaway options for the
              beach, and a menu that covers breakfast classics, lunch
              favourites, and cabinet treats.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground">What We Offer</h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl bg-card p-6 shadow-sm"
            >
              <item.icon className="mb-4 h-8 w-8 text-primary" />
              <h4 className="mb-2 font-semibold text-card-foreground">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
