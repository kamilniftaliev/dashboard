import clsx from "clsx";
import { ComponentProps } from "react";

interface DashboardCardProps extends ComponentProps<"div"> {
  title: string;
}

export default function DashboardCard({
  title,
  children,
  className,
  ...rest
}: DashboardCardProps) {
  return (
    <div
      className={clsx("grow shadow-md rounded bg-white", className)}
      {...rest}
    >
      <div className="border-b text-xl py-3 px-4">
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}
