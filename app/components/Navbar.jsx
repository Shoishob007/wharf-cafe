"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/menu/", label: "Menu" },
  { href: "/takeaway/", label: "Takeaway" },
  { href: "/reservation/", label: "Reservation" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  const isTop = !scrolled;
  const topText = isTop ? "text-white" : "text-foreground";
  const topHover = isTop ? "hover:text-white/80" : "hover:text-primary";
  const topBg = isTop ? "hover:bg-white/10" : "hover:bg-muted";
  const topPhone = isTop
    ? "text-white/90 hover:text-white"
    : "text-foreground/80 hover:text-primary";
  const topIcon = isTop ? "text-white hover:bg-white/10" : "";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight transition-colors ${topText}`}
          >
            Maraetai Wharf Café
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${topText} ${topHover}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+64095365002"
              className={`flex items-center gap-1.5 text-sm font-medium ${topPhone}`}
            >
              <Phone className="h-4 w-4" />
              <span>09 536 5002</span>
            </a>
            <ThemeToggle className={topIcon} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className={topIcon} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`rounded-md p-2 transition-colors ${topText} ${topBg}`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col items-center gap-3 text-sm text-muted-foreground">
                <a href="tel:+64095365002" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>09 536 5002</span>
                </a>
                <a
                  href="mailto:hello@maraetaiwharfcafe.co.nz"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@maraetaiwharfcafe.co.nz</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
