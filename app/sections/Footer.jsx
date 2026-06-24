"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/menu/", label: "Menu" },
  { href: "/takeaway/", label: "Takeaway" },
  { href: "/reservation/", label: "Reservation" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              Maraetai Wharf Café
            </h3>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              A relaxed beachside café on the water, serving fresh breakfast,
              lunch, coffee, and takeaway at Maraetai Wharf.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>231 Maraetai Drive, Maraetai, Auckland 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+64095365002" className="hover:text-primary">
                  09 536 5002
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hello@maraetaiwharfcafe.co.nz"
                  className="hover:text-primary"
                >
                  hello@maraetaiwharfcafe.co.nz
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-card-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-card-foreground">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 7am – 3pm</li>
              <li>Sat – Sun: 7am – 4pm</li>
              <li>Public Holidays: 7am – 4pm</li>
              <li>Kitchen closes 2:30pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maraetai Wharf Café. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/maraetaiwharfcafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/maraetaiwharfcafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@maraetaiwharfcafe.co.nz"
              aria-label="Email"
              className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+64095365002"
              aria-label="Phone"
              className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
