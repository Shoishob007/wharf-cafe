"use client";

import { motion } from "framer-motion";
import { Phone, Clock, ShoppingBag, CreditCard } from "lucide-react";

const favourites = [
  { name: "Flat White", price: "$5.50", note: "Regular / Large" },
  { name: "Iced Long Black", price: "$6.00", note: "Served cold" },
  { name: "Fish & Chips", price: "$26.00", note: "Lemon & tartare" },
  { name: "Beef Burger", price: "$24.00", note: "Chips on the side" },
  { name: "Kids Hot Chips", price: "$8.00", note: "Perfect for the beach" },
  { name: "Ice Cream Scoop", price: "$5.00", note: "Flavours change daily" },
];

const steps = [
  {
    icon: Phone,
    title: "Phone ahead",
    description: "Call 09 536 5002 to order.",
  },
  {
    icon: Clock,
    title: "Pick a time",
    description: "Let us know when you will arrive.",
  },
  {
    icon: ShoppingBag,
    title: "Grab & go",
    description: "Collect from the takeaway window.",
  },
  {
    icon: CreditCard,
    title: "Pay on pickup",
    description: "Card or cash accepted.",
  },
];

export default function TakeawayExtended() {
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
              Takeaway Favourites
            </h2>
            <p className="mb-6 text-muted-foreground">
              A quick selection of what locals grab on the way to the beach or
              the boat. Ask staff about today&apos;s cabinet options too.
            </p>
            <div className="divide-y divide-border">
              {favourites.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </div>
                  <span className="font-semibold text-primary">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              How to Order
            </h2>
            <p className="mb-6 text-muted-foreground">
              Ordering is simple. Choose the option that suits you best.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 border-b border-border py-4 last:border-b-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
