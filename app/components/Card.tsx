import clsx from "clsx";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps extends ComponentProps<"div"> {}

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx("grow shadow-md rounded bg-white dark:bg-slate-700", className)
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
