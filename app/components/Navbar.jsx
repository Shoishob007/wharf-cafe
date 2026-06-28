"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const topLevelLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/menu/", label: "Menu" },
  { href: "/takeaway/", label: "Takeaway" },
  { href: "/reservation/", label: "Reservation" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

const menuDropdown = [
  { href: "/menu/", label: "Full Menu" },
  { href: "/menu/?category=breakfast", label: "Breakfast" },
  { href: "/menu/?category=brunch", label: "Brunch" },
  { href: "/menu/?category=lunch", label: "Lunch" },
  { href: "/menu/?category=drinks", label: "Drinks" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function navLinkClasses(active, isTop) {
  if (active) return "text-primary hover:text-primary";
  return isTop
    ? "text-white hover:text-white/80"
    : "text-foreground hover:text-primary";
}

function underlineClasses(active) {
  return `absolute -bottom-1 left-0 h-0.5 w-full bg-current transition-transform duration-200 ${
    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { theme, mounted: themeMounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileMenuOpen(false);
  };

  const isTop = !scrolled;
  // Before theme is known on client, always use white logo (matches SSR default)
  const isDark = themeMounted && theme === "dark";
  const logoSrc = isDark || isTop ? "/white-logo.webp" : "/black-logo.webp";

  const topText = isTop ? "text-white" : "text-foreground";
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Maraetai Wharf Café"
              width={200}
              height={70}
              className="h-12 w-auto object-contain transition-all duration-300 sm:h-16"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {topLevelLinks.map((link) =>
              link.href === "/menu/" ? (
                <div
                  key="menu"
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    href="/menu/"
                    className={`group relative flex items-center gap-1 text-sm font-medium transition-colors ${navLinkClasses(
                      isActive(pathname, "/menu/"),
                      isTop,
                    )}`}
                  >
                    Menu
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={underlineClasses(isActive(pathname, "/menu/"))}
                    />
                  </Link>
                  <AnimatePresence>
                    {menuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-lg"
                      >
                        {menuDropdown.map((item) => {
                          const isFullMenu = item.href === "/menu/";
                          const itemCategory = isFullMenu
                            ? null
                            : new URL(
                                item.href,
                                "http://localhost",
                              ).searchParams.get("category");
                          const active = isFullMenu
                            ? pathname === "/menu/" && !currentCategory
                            : itemCategory === currentCategory;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground ${
                                active
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-card-foreground"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative inline-block text-sm font-medium transition-colors ${navLinkClasses(
                    isActive(pathname, link.href),
                    isTop,
                  )}`}
                >
                  {link.label}
                  <span
                    className={underlineClasses(isActive(pathname, link.href))}
                  />
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:+64095365002"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                isTop
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>09 536 5002</span>
            </a>
            <ThemeToggle className={topIcon} />
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle className={topIcon} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`rounded-md p-2 transition-colors ${
                isOpen
                  ? "text-foreground hover:bg-muted"
                  : `${topText} ${topBg}`
              }`}
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
            className="fixed inset-0 z-40 bg-background pt-20 xl:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-6">
              {/* Home */}
              {[
                { href: "/", label: "Home" },
                { href: "/about/", label: "About" },
              ].map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`group relative inline-block text-lg font-medium transition-colors ${
                      active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span className={underlineClasses(active)} />
                  </Link>
                );
              })}

              {/* Menu accordion — correct position in sequence */}
              <div className="w-full text-center">
                <button
                  onClick={() => setMobileMenuOpen((p) => !p)}
                  className={`group relative inline-flex items-center gap-1 text-lg font-medium transition-colors ${
                    isActive(pathname, "/menu/")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Menu
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 overflow-hidden"
                    >
                      <div className="flex flex-col gap-2 rounded-xl bg-muted px-4 py-3">
                        {menuDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="text-base text-muted-foreground hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining links */}
              {[
                { href: "/takeaway/", label: "Takeaway" },
                { href: "/reservation/", label: "Reservation" },
                { href: "/gallery/", label: "Gallery" },
                { href: "/contact/", label: "Contact" },
              ].map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`group relative inline-block text-lg font-medium transition-colors ${
                      active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span className={underlineClasses(active)} />
                  </Link>
                );
              })}
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
