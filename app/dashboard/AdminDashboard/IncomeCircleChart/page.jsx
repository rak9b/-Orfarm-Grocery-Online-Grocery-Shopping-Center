"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeCircleChart = () => {
  const data = {
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#696CFF", "#e0e0e0"],
        borderWidth: 2,
        cutout: "80%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    circumference: 360,
    rotation: 0,
  };

  return (
    <div style={{ width: "55px", height: "55px", position: "relative" }}>
      <Doughnut data={data} options={options} />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        $65
      </div>
    </div>
  );
};

export default IncomeCircleChart;
