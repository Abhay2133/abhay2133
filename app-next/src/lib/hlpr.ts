export const randint = (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1));

export function clamp(min: number, max: number, num: number) {
  if (num < min) return min;
  if (num > max) return max;
  return num;
}

export function cycle(min: number, max: number, num: number) {
  if (num < min) return max;
  if (num > max) return min;
  return num;
}

export default function randomHexColor() {
  return (
    "#" +
    Array.from({ length: 8 })
      .map(() => hexcodes.charAt(randint(0, hexcodes.length - 1)))
      .join("")
  );
}

const hexcodes = "0123456789abcdef";

export function scrollTo(node?: Element | null, offset: number = 0): void {
  if (!node) return;

  const top = node.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

export const $ = (q: string) => document.querySelector(q);
