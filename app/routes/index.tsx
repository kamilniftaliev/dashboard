import { useLoaderData } from "remix";
import RevenueExpense from "~/containers/Dashboard/charts/RevenueExpense";
import SalesStats from "~/containers/Dashboard/charts/SalesStats";
import ProductsList from "~/containers/Dashboard/ProductsList";
import Header from "../containers/Dashboard/Header";
import dashboardDB from "~/db/dashboard.json";
import MembersList from "~/containers/Dashboard/MembersList";

// Fake database
export const loader = () => dashboardDB;

export default function Index() {
  const { stats, products, productCategories, members, memberStatuses } =
    useLoaderData();

  return (
    <div className="flex flex-col gap-y-6 p-6">
      <Header stats={stats} />
      <div className="flex gap-x-6">
        <SalesStats />
        <RevenueExpense />
      </div>
      <div className="flex gap-x-6">
        <ProductsList products={products} categories={productCategories} />
        <MembersList members={members} statuses={memberStatuses} />
      </div>
    </div>
  );
}
