import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DashboardCard from "~/components/DashboardCard";

const options: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: undefined,
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    allowDecimals: false,
    labels: {
      formatter: function () {
        return `${this.value}`; // clean, unformatted number for year
      },
    },
    gridLineWidth: 1,
    gridLineDashStyle: "ShortDash",
  },
  yAxis: {
    title: {
      text: undefined,
    },
    gridLineWidth: 0,

    labels: {
      formatter: function () {
        return `${this.value / 1000 + "k"}`;
      },
    },
  },
  tooltip: {
    pointFormat:
      "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
  },
  series: [
    {
      name: "Online",
      color: "#36ad82",
      data: [
        4018, 10358, 10104, 9620, 9326, 5113, 5113, 10527, 10475, 4954, 4804,
        10295,
      ],
    },
    {
      name: "In-store",
      color: "#f0b34e",
      data: [
        4500, 18000, 16000, 14162, 12787, 12600, 20000, 19000, 11400, 5500,
        1231, 17000,
      ],
    },
  ],
};

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
          options={options}
          ref={chartComponentRef}
        />
      </div>
    </DashboardCard>
  );
}
