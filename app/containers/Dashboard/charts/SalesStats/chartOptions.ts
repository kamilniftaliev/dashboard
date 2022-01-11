export const chartOptions: Highcharts.Options = {
  chart: {
    type: "area",
    backgroundColor: "transparent",
  },
  title: {
    text: undefined,
  },
  xAxis: {
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
      color: "#8ac88a",
      data: [
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126, 27387,
        29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662, 26956, 27912,
        28999, 24099, 24357, 24237, 24401, 24344, 23586, 22380, 21004, 17287,
        14747, 13076, 12555, 12144, 11009, 10295, 10104, 9914, 9620, 9326, 5113,
        5113, 4954, 4804, 4761,
      ],
    },
    {
      name: "In-store",
      color: "#85cae5",
      data: [
        50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322, 4238, 5221,
        6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478, 15915, 35804, 37431,
        39197, 45000, 43000, 41000, 39000, 37000, 35000, 33000, 31000, 29000,
        27000, 25000, 17000, 16000, 15537, 14162, 12787, 12600, 11400, 5500,
        4512, 4502,
      ],
    },
  ],
};
