// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition hover:scale-110"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </button>
  );
}
