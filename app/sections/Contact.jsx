"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Contact Us
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get in touch with Maraetai Wharf Café. We’re happy to take phone
              orders, booking enquiries, and questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-sm">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    231 Maraetai Drive, Maraetai, Auckland 2018
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-sm">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Phone</h3>
                  <a
                    href="tel:+64095365002"
                    className="text-muted-foreground hover:text-primary"
                  >
                    09 536 5002
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-sm">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Email</h3>
                  <a
                    href="mailto:hello@maraetaiwharfcafe.co.nz"
                    className="text-muted-foreground hover:text-primary"
                  >
                    hello@maraetaiwharfcafe.co.nz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-sm">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Opening Hours
                  </h3>
                  <p className="text-muted-foreground">Mon–Fri 7am–3pm</p>
                  <p className="text-muted-foreground">Sat–Sun 7am–4pm</p>
                  <p className="text-muted-foreground">
                    Public Holidays 7am–4pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl bg-card p-6 shadow-sm sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                  Send us a Message
                </h3>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full rounded-lg">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
