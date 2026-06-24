"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah K.",
    text: "Best coffee on the coast. The view from the deck is unbeatable.",
    rating: 5,
  },
  {
    name: "Mike & Jen",
    text: "We bring the boat in just for the fish and chips. Always fresh.",
    rating: 5,
  },
  {
    name: "Emma R.",
    text: "Lovely brunch spot. The shakshuka is a must-try.",
    rating: 5,
  },
  {
    name: "David T.",
    text: "Family-friendly, great cabinet food, and staff are welcoming.",
    rating: 5,
  },
  {
    name: "Holly W.",
    text: "Perfect after a swim. Iced coffee and ice cream hit the spot.",
    rating: 5,
  },
  {
    name: "Chris P.",
    text: "Our go-to weekend breakfast spot. The big brekkie is huge.",
    rating: 5,
  },
];

export default function TestimonialMarquee() {
  const items = [...reviews, ...reviews];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
          What Locals Say
        </h2>
        <p className="text-muted-foreground">Real feedback from our community.</p>
      </div>

      <div className="group relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 pl-6">
          {items.map((review, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 rounded-2xl border border-border bg-muted p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
