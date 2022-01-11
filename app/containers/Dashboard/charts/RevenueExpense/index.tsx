import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DashboardCard from "~/components/DashboardCard";
import { chartOptions } from "./chartOptions";

interface RevenueExpenseProps {
  // We could pass some custom props to display anything specific.
}

export default function RevenueExpense({}: RevenueExpenseProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <DashboardCard className="w-2/5" title="Revenue vs Expense">
      <div className="px-2 py-2">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={chartComponentRef}
        />
      </div>
    </DashboardCard>
  );
}
