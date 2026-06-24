"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Breakfast",
    description: "Served until 11:30am, weekdays & weekends.",
    items: [
      {
        name: "Garden Eggs Benedict",
        price: "$22",
        image: "/cafe-menu/breakfast-01.jpg",
      },
      {
        name: "Smoked Salmon Bagel",
        price: "$20",
        image: "/cafe-menu/breakfast-02.jpg",
      },
      {
        name: "Avocado & Feta Smash",
        price: "$19",
        image: "/cafe-menu/breakfast-03.jpg",
      },
      {
        name: "Buttermilk Pancakes",
        price: "$18",
        image: "/cafe-menu/breakfast-04.jpg",
      },
      {
        name: "Big Breakfast Plate",
        price: "$25",
        image: "/cafe-menu/breakfast-05.jpg",
      },
      {
        name: "Granola & Yogurt Bowl",
        price: "$16",
        image: "/cafe-menu/breakfast-06.jpg",
      },
      {
        name: "French Toast",
        price: "$19",
        image: "/cafe-menu/breakfast-07.jpg",
      },
    ],
  },
  {
    title: "Lunch",
    description: "Served from 11:30am until kitchen closes at 2pm.",
    items: [
      {
        name: "Grilled Chicken Salad",
        price: "$23",
        image: "/cafe-menu/lunch-01.jpg",
      },
      {
        name: "Beef & Cheddar Burger",
        price: "$24",
        image: "/cafe-menu/lunch-02.jpg",
      },
      {
        name: "Mediterranean Bowl",
        price: "$21",
        image: "/cafe-menu/lunch-03.jpg",
      },
      { name: "Fish & Chips", price: "$26", image: "/cafe-menu/lunch-04.jpg" },
      {
        name: "Pumpkin Risotto",
        price: "$22",
        image: "/cafe-menu/lunch-05.jpg",
      },
      {
        name: "Steak Sandwich",
        price: "$27",
        image: "/cafe-menu/lunch-06.jpg",
      },
      {
        name: "Vegan Buddha Bowl",
        price: "$21",
        image: "/cafe-menu/lunch-07.jpg",
      },
    ],
  },
  {
    title: "Drinks",
    description: "Artisan coffee, cold drinks, smoothies & juices.",
    items: [
      { name: "Flat White", price: "$5.50", image: "/cafe-menu/drinks-01.jpg" },
      {
        name: "Iced Long Black",
        price: "$6",
        image: "/cafe-menu/drinks-02.jpg",
      },
      {
        name: "Berry Smoothie",
        price: "$8.50",
        image: "/cafe-menu/drinks-03.jpg",
      },
      {
        name: "Green Detox Juice",
        price: "$8",
        image: "/cafe-menu/drinks-04.jpg",
      },
      { name: "Hot Chocolate", price: "$6", image: "/cafe-menu/drinks-05.jpg" },
      { name: "Craft Beer", price: "$10", image: "/cafe-menu/drinks-06.jpg" },
      {
        name: "Sparkling Water",
        price: "$4.50",
        image: "/cafe-menu/drinks-07.jpg",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Our Menu
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Fresh breakfast, lunch, cabinet food, and drinks served every day at
            the wharf.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between"
              >
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="p-4">
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="font-semibold text-card-foreground">
                          {item.name}
                        </h4>
                        <span className="font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
