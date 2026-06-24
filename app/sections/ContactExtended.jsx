"use client";

import { motion } from "framer-motion";
import Accordion from "../components/Accordion";

const faqs = [
  {
    id: "parking",
    question: "Is there parking?",
    answer:
      "Yes, there is street parking nearby and space around the wharf area for cars and boats on trailers.",
  },
  {
    id: "dogs",
    question: "Are dogs allowed?",
    answer:
      "Dogs are welcome in our outdoor seating area. Please keep them on a lead and bring water on hot days.",
  },
  {
    id: "payment",
    question: "Do you accept card payments?",
    answer:
      "Yes, we accept all major cards and contactless payments. We are cashless for dine-in and takeaway.",
  },
  {
    id: "wifi",
    question: "Is there Wi-Fi?",
    answer:
      "We have free Wi-Fi for customers. Ask staff for the password when you order.",
  },
  {
    id: "kids",
    question: "Are high chairs available?",
    answer:
      "Yes, we have high chairs and a kids' menu. The beachside setting is great for families.",
  },
  {
    id: "outside",
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
                <strong className="text-foreground">Email:</strong>{" "}
                hello@maraetaiwharfcafe.co.nz
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
          className="mb-6 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Common Questions
          </h3>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
