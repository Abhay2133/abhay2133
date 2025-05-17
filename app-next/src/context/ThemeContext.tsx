"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const _theme = useRef<Theme>("light");
  const [theme, setTheme] = useState<Theme>(_theme.current);

  useEffect(() => {
    if (_theme.current == theme) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    _theme.current = theme;
  }, [theme]);

  useEffect(() => {
    // to clean the side-effect
    let removeListener = false;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem("theme") as Theme;
    const prefersDark = mediaQuery.matches;

    mediaQuery.addEventListener("change", function onChange(e) {
      if (removeListener) {
        mediaQuery.removeEventListener("change", onChange);
        return;
      }
      setTheme(e.matches ? "dark" : "light");
    });

    setTheme(() => storedTheme || (prefersDark ? "dark" : "light"));

    return () => {
      // initiat clean on next `change`
      removeListener = true;
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
