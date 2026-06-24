"use client";

import Link from "next/link";

const variants = {
  primary: {
    base: "border-2 border-transparent bg-primary text-primary-foreground",
    overlay: "bg-primary-foreground/20",
    textHover: "",
  },
  outline: {
    base: "border-2 border-primary text-primary hover:border-primary",
    overlay: "bg-primary",
    textHover: "group-hover:text-primary-foreground",
  },
  white: {
    base: "border-2 border-white text-white hover:border-white",
    overlay: "bg-white",
    textHover: "group-hover:text-foreground",
  },
  whiteOutline: {
    base: "border-2 border-primary text-white",
    overlay: "bg-primary",
    textHover: "group-hover:text-primary-foreground",
  },
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const v = variants[variant] || variants.primary;
  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-medium transition-transform focus:outline-none focus:ring-2 focus:ring-primary/50 ${v.base} ${className}`;

  const content = (
    <>
      <span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${v.textHover}`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 z-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${v.overlay}`}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
