export const chartOptions: Highcharts.Options = {
  chart: {
    type: "column",
    backgroundColor: "transparent",
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
      style: {
        color: "var(--text-secondary-color)",
      },
      formatter: function () {
        return `${this.value}`;
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
      style: {
        color: "var(--text-secondary-color)",
      },
      formatter: function () {
        return `${this.value / 1000 + "k"}`;
      },
    },
  },
  legend: {
    itemStyle: {
      color: "var(--text-secondary-color)",
    },
    itemHoverStyle: {
      color: "var(--text-primary-color)",
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
