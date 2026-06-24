"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const categories = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Served until 11:30am every day.",
    images: [
      "/cafe-menu/breakfast-01.jpg",
      "/cafe-menu/breakfast-05.jpg",
      "/cafe-menu/breakfast-03.jpg",
    ],
    items: [
      { name: "Eggs Benedict", price: "$22", note: "Ham or spinach" },
      {
        name: "Big Breakfast",
        price: "$25",
        note: "Eggs, bacon, sausage, hash brown",
      },
      {
        name: "Smashed Avo",
        price: "$19",
        note: "Feta, cherry tomatoes, sourdough",
      },
      {
        name: "Buttermilk Pancakes",
        price: "$18",
        note: "Maple syrup & berries",
      },
      {
        name: "Granola Bowl",
        price: "$16",
        note: "Yogurt, honey & seasonal fruit",
      },
      { name: "French Toast", price: "$19", note: "Bacon & banana" },
    ],
  },
  {
    id: "brunch",
    title: "Brunch",
    description: "Mid-morning favourites from 10am.",
    images: [
      "/cafe-menu/breakfast-02.jpg",
      "/cafe-menu/breakfast-04.jpg",
      "/cafe-menu/breakfast-06.jpg",
    ],
    items: [
      {
        name: "Smoked Salmon Bagel",
        price: "$20",
        note: "Cream cheese & capers",
      },
      {
        name: "Breakfast Burrito",
        price: "$21",
        note: "Eggs, beans, cheese & salsa",
      },
      {
        name: "Shakshuka",
        price: "$20",
        note: "Baked eggs in spiced tomato sauce",
      },
      {
        name: "Mushroom Toast",
        price: "$18",
        note: "Sautéed mushrooms & herbs",
      },
      { name: "Eggs Any Style", price: "$16", note: "On toast with sides" },
      {
        name: "Sweetcorn Fritters",
        price: "$19",
        note: "Avocado & tomato relish",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Served from 11:30am until kitchen closes.",
    images: [
      "/cafe-menu/lunch-04.jpg",
      "/cafe-menu/lunch-02.jpg",
      "/cafe-menu/lunch-06.jpg",
    ],
    items: [
      { name: "Fish & Chips", price: "$26", note: "Tartare & lemon" },
      { name: "Beef Burger", price: "$24", note: "Cheddar, pickles & chips" },
      {
        name: "Grilled Chicken Salad",
        price: "$23",
        note: "Avocado & balsamic",
      },
      {
        name: "Steak Sandwich",
        price: "$27",
        note: "Caramelised onion & mustard",
      },
      {
        name: "Mediterranean Bowl",
        price: "$21",
        note: "Falafel, hummus & tabbouleh",
      },
      { name: "Pumpkin Risotto", price: "$22", note: "Parmesan & sage" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Coffee, cold drinks, smoothies & more.",
    images: [
      "/cafe-menu/drinks-01.jpg",
      "/cafe-menu/drinks-02.jpg",
      "/cafe-menu/drinks-03.jpg",
    ],
    items: [
      { name: "Flat White", price: "$5.50", note: "Allpress espresso" },
      { name: "Iced Long Black", price: "$6", note: "Served over ice" },
      { name: "Berry Smoothie", price: "$8.50", note: "Banana & coconut milk" },
      { name: "Green Detox Juice", price: "$8", note: "Kale, apple & ginger" },
      { name: "Hot Chocolate", price: "$6", note: "Marshmallows on request" },
      { name: "Craft Beer", price: "$10", note: "Local selection" },
      { name: "Sparkling Water", price: "$4.50", note: "Chilled" },
    ],
  },
];

const tabs = [
  { id: "all", label: "Full Menu" },
  ...categories.map((c) => ({ id: c.id, label: c.title })),
];

function MenuInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [active, setActive] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && tabs.some((t) => t.id === category)) {
      setActive(category);
    }
  }, [searchParams]);

  const visibleCategories =
    active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <section id="menu" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Our Menu
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Fresh breakfast, brunch, lunch, cabinet food, and drinks served
            every day at the wharf.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-16"
            >
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-4">
                {category.images.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start justify-between border-b border-border pb-3 pt-2"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                    <span className="font-bold text-primary">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  return (
    <Suspense
      fallback={
        <div className="bg-muted py-20 text-center text-muted-foreground">
          Loading menu...
        </div>
      }
    >
      <MenuInner />
    </Suspense>
  );
}
