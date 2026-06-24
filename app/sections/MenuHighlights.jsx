"use client";

import { motion } from "framer-motion";
import { Leaf, WheatOff, Flame, Clock } from "lucide-react";

const specials = [
  {
    name: "Weekend Big Breakfast",
    price: "$25",
    description: "Eggs your way, bacon, sausages, mushrooms, tomatoes, toast, and hash browns.",
    days: "Saturday & Sunday",
    image: "/cafe-menu/breakfast-05.jpg",
  },
  {
    name: "Wharf Fish & Chips",
    price: "$26",
    description: "Crispy battered fish with hand-cut chips, lemon, and house tartare.",
    days: "Daily",
    image: "/cafe-menu/lunch-04.jpg",
  },
  {
    name: "Iced Coffee Flight",
    price: "$12",
    description: "Three mini iced coffees: long black, mocha, and vanilla latte.",
    days: "Summer specials",
    image: "/cafe-menu/drinks-02.jpg",
  },
];

const dietary = [
  { icon: Leaf, label: "Vegetarian options" },
  { icon: WheatOff, label: "Gluten-free available" },
  { icon: Flame, label: "Daily soup" },
  { icon: Clock, label: "Cabinet food all day" },
];

export default function MenuHighlights() {
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
            Look out for seasonal dishes and everyday options to suit different diets.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-card shadow-sm"
            >
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground">
                    {item.name}
                  </h3>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-xs font-medium text-primary">{item.days}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dietary.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-muted p-4"
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
