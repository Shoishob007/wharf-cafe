"use client";

import { motion } from "framer-motion";
import { Phone, Clock, ShoppingBag, MapPin } from "lucide-react";
import Button from "../components/Button";

export default function Takeaway() {
  return (
    <section id="takeaway" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Takeaway at the Wharf
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              In a hurry? Grab your favourite coffee, cabinet food, fish and
              chips, ice cream, or cold drinks to enjoy on the beach or at the
              park. Our takeaway window keeps things simple so you can spend
              more time by the water.
            </p>
            <p className="mb-8 text-muted-foreground">
              Perfect for beach walks, boat trips, picnics, and lazy weekends.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Same Hours</p>
                  <p className="text-sm text-muted-foreground">
                    7am open daily
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Pick Up</p>
                  <p className="text-sm text-muted-foreground">
                    231 Maraetai Drive
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">
                    Phone Ahead
                  </p>
                  <p className="text-sm text-muted-foreground">09 536 5002</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">
                    Order In Person
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Walk-up window
                  </p>
                </div>
              </div>
            </div>

            <Button href="/contact/">Contact Us</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-2xl"
          >
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/cafe-menu/lunch-04.jpg')" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
