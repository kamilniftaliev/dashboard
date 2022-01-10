import DashboardCard from "~/components/DashboardCard";
import SelectedStarIcon from "@heroicons/react/solid/StarIcon";
import EmptyStarIcon from "@heroicons/react/outline/StarIcon";
import { Image } from "~/@types";
import clsx from "clsx";

type Product = {
  id: string;
  title: string;
  categoryId: string;
  price: number;
  rating: number;
  image: Image;
};

type Category = {
  id: string;
  title: string;
};

const MAX_STARS_ARRAY = new Array(5).fill(null);

interface ProductsListProps {
  products: Product[];
  categories: Category[];
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ProductsList({
  products,
  categories,
}: ProductsListProps) {
  return (
    <DashboardCard className="w-2/5" title="Popular Products">
      <div className="flex flex-col">
        {products.map(
          ({ id, title, image, rating, categoryId, price }, index) => {
            const { title: categoryTitle } =
              categories.find(({ id }) => id === categoryId) || {};

            return (
              <div
                key={id}
                className={clsx("flex gap-x-4 py-2 px-4", {
                  "bg-cyan-50": index % 2,
                })}
              >
                <img className="rounded-sm" src={image.small} alt={title} />
                <div className="w-1/3 flex flex-col justify-center">
                  <p className="text-sm font-medium">{title}</p>
                  {categoryTitle && (
                    <p className="text-xs font-medium text-slate-500">
                      {categoryTitle}
                    </p>
                  )}
                </div>
                <div className="flex gap-x-0.5">
                  {MAX_STARS_ARRAY.map((_, index) =>
                    rating - 1 >= index ? (
                      <SelectedStarIcon
                        key={index}
                        className="w-4"
                        color="#ff851e"
                      />
                    ) : (
                      <EmptyStarIcon key={index} className="opacity-50 w-3.5" />
                    )
                  )}
                </div>
                <div className="flex items-center ml-auto">
                  <p className="text-xs w-full text-right">
                    {formatter.format(price)}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </DashboardCard>
  );
}