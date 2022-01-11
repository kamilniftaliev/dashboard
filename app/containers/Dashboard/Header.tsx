import CurrencyDollarIcon from "@heroicons/react/outline/CurrencyDollarIcon";
import BasketIcon from "@heroicons/react/outline/ShoppingCartIcon";
import TrendingUpIcon from "@heroicons/react/outline/TrendingUpIcon";
import ChartBarIcon from "@heroicons/react/outline/ChartBarIcon";
import ArrowSmUpIcon from "@heroicons/react/outline/ArrowSmUpIcon";
import ArrowSmDownIcon from "@heroicons/react/outline/ArrowSmDownIcon";
import { StatType } from "~/@types";
import clsx from "clsx";
import Card from "~/components/Card";

type Stat = {
  type: StatType;

  /** A stat's title (first line of the card) */
  title: string;

  /** A stat's description (second line of the card) */
  description: string;

  change: {
    /** Direction of the progress */
    direction: "up" | "down";

    /** A number indication the amount of change */
    amount: number;
  };
};

export interface HeaderProps {
  stats: Stat[];
}

const ICONS = {
  earnings: {
    icon: CurrencyDollarIcon,
    color: "bg-green-500",
  },
  orders: {
    icon: BasketIcon,
    color: "bg-yellow-500",
  },
  views: {
    icon: TrendingUpIcon,
    color: "bg-sky-500",
  },
  progress: {
    icon: ChartBarIcon,
    color: "bg-violet-500",
  },
};

export default function Header({ stats }: HeaderProps) {
  return (
    <div className="flex gap-x-6">
      {stats.map(({ type, title, description, change }) => {
        const { icon: Icon, color } = ICONS[type];

        let changeInfo = null;

        // If there's a change in comparison with last results
        if (change) {
          const { amount, direction } = change;

          const ArrowIcon =
            direction === "up" ? ArrowSmUpIcon : ArrowSmDownIcon;
          const arrowColor =
            direction === "up" ? "text-green-500" : "text-red-500";

          // Render an arrow with percentage
          changeInfo = (
            <span className={clsx("flex items-center text-base", arrowColor)}>
              <span>{amount}%</span>
              <ArrowIcon className="w-5" />
            </span>
          );
        }

        return (
          <Card key={type} className="flex p-2">
            <div className={clsx("flex items-center justify-center ")}>
              <Icon
                className={clsx(
                  "border-4 rounded-full m-3 p-4 w-20 h-20",
                  color
                )}
                color="white"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="flex gap-x-3 text-2xl text-slate-600 dark:text-white">
                {title}
                {changeInfo}
              </p>
              <p className="text-lg text-slate-400">{description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
