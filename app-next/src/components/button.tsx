import { PropsWithChildren } from "react";

export default function Button({ children, className, href, target }: PropsWithChildren & { className?: string, href?:string, target?:string }) {
  const _button = <button
      className={
        "text-primary rounded-full border-2 border-gray-500 px-4 py-1 text-base font-extrabold transition-all duration-500 hover:bg-gray-800 hover:text-gray-100 active:scale-95 dark:border-gray-200 dark:hover:bg-white dark:hover:text-gray-800 " +
          className || ""
      }
    >
      {children}
    </button>;

  return href?.trim()?.length ? <a href={href} target={target}>{_button}</a> : _button;
}
