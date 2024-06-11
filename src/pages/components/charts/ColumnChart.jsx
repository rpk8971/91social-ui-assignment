import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./chartcard.css";

const ColumnChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          {
            x: 1,
            y: 8,
            fillColor: "#E6EEF5",
          },
          {
            x: 1,
            y: 4,
            fillColor: "#3354F4",
          },
          {
            x: 2,
            y: 8,
            fillColor: "#E6EEF5",
          },
          {
            x: 2,
            y: 2,
            fillColor: "#3354F4",
          },
          {
            x: 3,
            y: 8,
            fillColor: "#E6EEF5",
          },
          {
            x: 3,
            y: 6,
            fillColor: "#3354F4",
          },
          {
            x: 4,
            y: 8,
            fillColor: "#E6EEF5",
          },
          {
            x: 4,
            y: 6,
            fillColor: "#3354F4",
          },
          {
            x: 5,
            y: 8,
            fillColor: "#E6EEF5",
          },
          {
            x: 5,
            y: 3,
            fillColor: "#3354F4",
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 100,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "65%",
          endingShape: "rounded",
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
      },
      yaxis: {
        min: 0,
        max: 8,
        tickAmount: 2,
        labels: {
          formatter: (value) => {
            if (value === 8) return "8";
            if (value === 4) return "4";
            if (value === 0) return "0";
            return "";
          },
        },
        // title: {
        //   text: "Values",
        // },
      },
      fill: {
        opacity: 1,
        colors: ["#FF4560", "#008FFB"],
      },
    },
  });

  return (
    <div className="column-chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={110}
        width={180}
      />
    </div>
  );
};

export default ColumnChart;
