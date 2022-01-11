import Card, { CardProps } from "./Card";

interface DashboardCardProps extends CardProps {
  title: string;
}

/** A card component with title as a first line */
export default function DashboardCard({
  title,
  children,
  ...rest
}: DashboardCardProps) {
  return (
    <Card {...rest}>
      <div className="border-b text-xl dark:text-white dark:border-slate-500 py-3 px-4">
        <p>{title}</p>
      </div>
      {children}
    </Card>
  );
}
