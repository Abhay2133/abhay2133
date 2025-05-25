"use client";
import { useEffect, useRef, useState } from "react";
import CursorIcon from "./icons/curosr";
import { useTheme } from "next-themes";

export default function Cursor() {
  const { theme } = useTheme();
  const [color, setColor] = useState(theme == "dark" ? "white" : "black");
  const [fill, setFill] = useState("transparent");

  const cursorRef = useRef<HTMLDivElement | null>(null);

  function onMove(e: Partial<MouseEvent>) {
    const { clientX: x = 0, clientY: y = 0 } = e;
    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }

  function onLeave(e: Partial<MouseEvent>) {
    cursorRef.current?.style?.setProperty("opacity", "0");
    cursorRef.current?.style?.setProperty("transition", "none");
  }

  function onEnter(e: Partial<MouseEvent>) {
    const { clientX: x, clientY: y } = e;
    cursorRef.current?.style?.setProperty("transform", `translateX(${x}px) translateY(${y}px)`);
    cursorRef.current?.style?.setProperty("opacity", "1");
    setTimeout(() => cursorRef.current?.style?.setProperty("transition", "50ms"), 0);
  }

  function onLinkEntered(e: Partial<MouseEvent>) {
    setFill(theme == "dark" ? "white" : "black");
  }

  function onLinkLeaved(e: Partial<MouseEvent>) {
    const link = e.target as HTMLElement;
    link.style.background = "red";
    setTimeout(() => setFill("transparent"), 100);
  }

  function attachListeners() {
    listners.each((target, event, handler) => {
      if (target === "window") return window.addEventListener(event, handler);
      document.querySelectorAll(target)?.forEach((i) => i.addEventListener(event, handler));
    });
  }

  function detachListeners() {
    listners.each((target, event, handler) => {
      if (target === "window") return window.removeEventListener(event, handler);
      document.querySelectorAll(target)?.forEach((i) => i.removeEventListener(event, handler));
    });
  }

  const listners = {
    each(cb: (target: string, event: string, handler: VoidFunction) => void) {
      for (const [target, events] of Object.entries(listners)) {
        for (const [event, handler] of Object.entries(events)) {
          event.split(",").forEach((e) => cb(target, e.trim(), handler));
        }
      }
    },

    body: {
      mousemove: onMove,
      mouseleave: onLeave,
      mouseenter: onEnter,
    },
    // ".nav-item,a": {
    //   mouseleave: onLinkLeaved,
    //   mouseenter: onLinkEntered,
    // },
  };

  useEffect(() => {
    attachListeners();
    return detachListeners;
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ position: "fixed", top: 0, left: 0, transition: "100ms", zIndex: 999999999999999 }}
      className="dark:invert"
    >
      <CursorIcon color={color} fill={fill} />
    </div>
  );
}
