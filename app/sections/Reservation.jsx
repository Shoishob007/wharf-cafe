"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Phone, CheckCircle, AlertCircle } from "lucide-react";
import Button from "../components/Button";

const openingHours = {
  weekday: {
    label: "Monday – Friday",
    hours: "7am – 3pm",
    opens: 7,
    closes: 15,
  },
  weekend: {
    label: "Saturday & Sunday",
    hours: "7am – 4pm",
    opens: 7,
    closes: 16,
  },
  publicHoliday: {
    label: "Public Holidays",
    hours: "7am – 4pm",
    opens: 7,
    closes: 16,
  },
};

const kitchenClose = "2:30pm";

function generateTimeSlots(date, opens, closes) {
  const slots = [];
  let current = opens * 60;
  const end = closes * 60;
  while (current < end) {
    const h = Math.floor(current / 60);
    const m = current % 60;
    const label = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    slots.push(label);
    current += 30;
  }
  return slots;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function formatDateInput(date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export default function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => formatDateInput(new Date()), []);

  const selectedDate = date ? new Date(date) : null;
  const isWeekendDay = selectedDate ? isWeekend(selectedDate) : false;
  const hours = isWeekendDay ? openingHours.weekend : openingHours.weekday;
  const timeSlots = selectedDate
    ? generateTimeSlots(selectedDate, hours.opens, hours.closes)
    : [];

  const validate = () => {
    const next = {};
    if (!date) next.date = "Please select a date.";
    if (!time) next.time = "Please select a time.";
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      next.email = "Please enter a valid email.";
    if (!phone.trim()) next.phone = "Please enter your phone number.";
    const guestCount = parseInt(guests, 10);
    if (!guestCount || guestCount < 1 || guestCount > 10)
      next.guests = "We accept bookings for 1–10 guests.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Reservation
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We welcome small walk-in groups during our trading hours. Due to
              our cozy dining area, we accept bookings of up to 10 people.
            </p>

            <div className="mb-8 rounded-2xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <h3 className="font-semibold text-card-foreground">
                  Opening Timings
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">
                    {openingHours.weekday.label}
                  </span>
                  <span className="font-medium text-card-foreground">
                    {openingHours.weekday.hours}
                  </span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">
                    {openingHours.weekend.label}
                  </span>
                  <span className="font-medium text-card-foreground">
                    {openingHours.weekend.hours}
                  </span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">
                    {openingHours.publicHoliday.label}
                  </span>
                  <span className="font-medium text-card-foreground">
                    {openingHours.publicHoliday.hours}
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted-foreground">Kitchen Closes</span>
                  <span className="font-medium text-card-foreground">
                    {kitchenClose}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+64095365002"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-6 py-3 font-medium text-foreground hover:bg-border"
              >
                <Phone className="h-4 w-4" />
                <span>09 536 5002</span>
              </a>
              <p className="text-sm text-muted-foreground">
                A 15% surcharge applies on public holidays.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl bg-card p-6 shadow-sm sm:p-8"
          >
            <h3 className="mb-6 text-xl font-semibold text-card-foreground">
              Make a Reservation
            </h3>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-xl bg-primary/10 p-4 text-primary"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Reservation received!</p>
                    <p className="text-sm">
                      We have sent a confirmation to {email}. We will contact
                      you at {phone} if anything changes.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setTime("");
                      if (errors.date) setErrors((p) => ({ ...p, date: "" }));
                    }}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.date && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Time
                  </label>
                  <select
                    id="time"
                    value={time}
                    disabled={!date}
                    onChange={(e) => {
                      setTime(e.target.value);
                      if (errors.time) setErrors((p) => ({ ...p, time: "" }));
                    }}
                    size={1}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    style={{ maxHeight: "40vh" }}
                  >
                    <option value="">
                      {date ? "Select time" : "Select a date first"}
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-1 block text-sm font-medium text-card-foreground"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    if (errors.guests) setErrors((p) => ({ ...p, guests: "" }));
                  }}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.guests}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: "" }));
                    }}
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
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
                    }}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.phone && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-card-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                  }}
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
                  htmlFor="notes"
                  className="mb-1 block text-sm font-medium text-card-foreground"
                >
                  Special Requests (optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button type="submit" className="w-full rounded-lg">
                Book Your Table
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
