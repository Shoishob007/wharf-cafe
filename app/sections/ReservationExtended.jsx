"use client";

import { motion } from "framer-motion";
import { Users, Calendar, PartyPopper, Clock, Info } from "lucide-react";

export default function ReservationExtended() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-3xl font-bold text-foreground sm:text-4xl"
          >
            Booking Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            A few things to know before you book.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="rounded-xl bg-card p-6 shadow-sm"
          >
            <Users className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-card-foreground">Group Size</h3>
            <p className="text-sm text-muted-foreground">
              We accept bookings for 1–10 guests. Larger groups are welcome as
              walk-ins if space allows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl bg-card p-6 shadow-sm"
          >
            <Calendar className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-card-foreground">Same-Day Bookings</h3>
            <p className="text-sm text-muted-foreground">
              For same-day tables, please call us on 09 536 5002 and we will do
              our best to fit you in.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl bg-card p-6 shadow-sm"
          >
            <PartyPopper className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-card-foreground">Private Events</h3>
            <p className="text-sm text-muted-foreground">
              Planning a celebration? Contact us to discuss options for a
              reserved area or special menu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl bg-card p-6 shadow-sm"
          >
            <Clock className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-card-foreground">Holding Time</h3>
            <p className="text-sm text-muted-foreground">
              Tables are held for 15 minutes past the booking time. Please let us
              know if you are running late.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-start gap-4 rounded-xl bg-card p-6 shadow-sm"
        >
          <Info className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            A 15% surcharge applies on public holidays. We are a cashless café for
            card payments, and takeaway orders can be paid on pickup. For any
            changes to your booking, please call us directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
