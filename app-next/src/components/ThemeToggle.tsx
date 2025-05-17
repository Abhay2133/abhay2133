"use client";

import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="cursor-pointer rounded-lg p-2 shadow shadow-gray-300 dark:shadow-gray-500">
      {theme === "light" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
