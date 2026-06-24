"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Dog, CreditCard, Wifi, Baby } from "lucide-react";

const faqs = [
  {
    icon: Car,
    question: "Is there parking?",
    answer:
      "Yes, there is street parking nearby and space around the wharf area for cars and boats on trailers.",
  },
  {
    icon: Dog,
    question: "Are dogs allowed?",
    answer:
      "Dogs are welcome in our outdoor seating area. Please keep them on a lead and bring water on hot days.",
  },
  {
    icon: CreditCard,
    question: "Do you accept card payments?",
    answer:
      "Yes, we accept all major cards and contactless payments. We are cashless for dine-in and takeaway.",
  },
  {
    icon: Wifi,
    question: "Is there Wi-Fi?",
    answer:
      "We have free Wi-Fi for customers. Ask staff for the password when you order.",
  },
  {
    icon: Baby,
    question: "Are high chairs available?",
    answer:
      "Yes, we have high chairs and a kids&apos; menu. The beachside setting is great for families.",
  },
  {
    icon: MapPin,
    question: "Can we sit outside?",
    answer:
      "Absolutely. We have deck and outdoor seating with views of the water and the beach.",
  },
];

export default function ContactExtended() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl"
          >
            <iframe
              title="Maraetai Wharf Cafe location"
              src="https://maps.google.com/maps?q=-36.8809932,175.044216&z=15&output=embed"
              className="h-96 w-full border-0 grayscale-[20%]"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Find Us
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We are located right on Maraetai Wharf, at the end of Maraetai
              Drive. Look for the café with the deck facing the water.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Address:</strong> 231
                Maraetai Drive, Maraetai, Auckland 2018
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong> 09 536 5002
              </p>
              <p>
                <strong className="text-foreground">Email:</strong> hello@maraetaiwharfcafe.co.nz
              </p>
              <p>
                <strong className="text-foreground">Hours:</strong> Mon–Fri
                7am–3pm, Sat–Sun 7am–4pm
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground">Common Questions</h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl bg-muted p-6"
            >
              <item.icon className="mb-4 h-7 w-7 text-primary" />
              <h4 className="mb-2 font-semibold text-foreground">
                {item.question}
              </h4>
              <p className="text-sm text-muted-foreground">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
