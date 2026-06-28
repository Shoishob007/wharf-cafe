"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`rounded-full p-2 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      >
        <Moon className="h-5 w-5 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`rounded-full p-2 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
