"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import BoidSystem from "./BoidSystem";
import { useTheme } from "@/context/ThemeContext";

export default function BoidsContainer() {
  const { theme } = useTheme();
  const canvas = useRef<HTMLCanvasElement>(null);
  const boidSystem: MutableRefObject<BoidSystem | null> = useRef<BoidSystem | null>(null);

  useEffect(() => {
    const _canvas = canvas.current;
    if (!_canvas) throw Error("Unable to get `canvas` reference");
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(isDarkMode);
    const bs = new BoidSystem(_canvas, theme, 50);
    bs.resizeCanvas();
    boidSystem.current = bs;
    bs.start();

    return () => bs.stop();
  }, []);

  useEffect(() => {
    boidSystem.current && boidSystem.current.setTheme(theme);
  }, [theme]);

  return <canvas ref={canvas} />;
}
