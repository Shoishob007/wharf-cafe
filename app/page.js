"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Button from "./components/Button";

const featuredMenu = [
  {
    category: "Breakfast",
    image: "/cafe-menu/breakfast-01.jpg",
    items: ["Eggs Benedict", "Avocado Smash", "Buttermilk Pancakes"],
  },
  {
    category: "Lunch",
    image: "/cafe-menu/lunch-04.jpg",
    items: ["Fish & Chips", "Beef Burger", "Grilled Chicken Salad"],
  },
  {
    category: "Drinks",
    image: "/cafe-menu/drinks-01.jpg",
    items: ["Flat White", "Iced Long Black", "Berry Smoothie"],
  },
];

const galleryPreview = [
  "/cafe-menu/gallery-01.jpg",
  "/cafe-menu/gallery-02.jpg",
  "/cafe-menu/gallery-03.jpg",
  "/cafe-menu/gallery-04.jpg",
  "/cafe-menu/gallery-05.jpg",
  "/cafe-menu/gallery-06.jpg",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />

      {/* Menu teaser */}
      <section id="home-menu" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              From Our Menu
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Fresh breakfast, lunch, and drinks made for the beach.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMenu.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl bg-card shadow-sm"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${group.image}')` }}
                />
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                    {group.category}
                  </h3>
                  <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href="/menu/"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View full menu <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway teaser */}
      <section id="home-takeaway" className="bg-background py-20 sm:py-28">
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
                style={{ backgroundImage: "url('/cafe-menu/lunch-02.jpg')" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Takeaway by the Beach
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Grab your favourites to go — coffee, cabinet food, fish and chips,
                ice cream, and cold drinks for the beach or the boat.
              </p>
              <Button href="/takeaway/">
                Order Takeaway <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation teaser */}
      <section id="home-reservation" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Book a Table
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We welcome walk-ins and accept bookings for up to 10 guests.
                Reserve your spot for breakfast or lunch by the water.
              </p>
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Mon–Fri 7am–3pm</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Sat–Sun 7am–4pm</span>
                </div>
              </div>
              <Button href="/reservation/">
                Make a Reservation <ArrowRight className="h-4 w-4" />
              </Button>
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
                style={{ backgroundImage: "url('/cafe-menu/breakfast-05.jpg')" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section id="home-gallery" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Gallery
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A taste of the food, drinks, and views at the wharf.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/gallery/" variant="outline">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section id="home-contact" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Visit Us
              </h2>
              <p className="mb-6 max-w-xl text-lg text-muted-foreground">
                We’re right on the water at Maraetai Wharf. Come in for coffee,
                breakfast, lunch, or a takeaway treat.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      231 Maraetai Drive, Maraetai, Auckland 2018
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a
                      href="tel:+64095365002"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      09 536 5002
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:hello@maraetaiwharfcafe.co.nz"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      hello@maraetaiwharfcafe.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Open</p>
                    <p className="text-sm text-muted-foreground">7am daily</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <Button href="/contact/">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

