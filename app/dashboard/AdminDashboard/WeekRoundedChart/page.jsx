"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const WeekRoundedChart = () => {
  const data = {
    datasets: [
      {
        data: [38, 62], // 38% value and remaining part
        backgroundColor: ["#00c8ff", "#8b8b8b", "#34c38f", "#696cff"], // Multiple colors
        borderWidth: 5, // Width of border
        borderColor: "#fff", // White border between sections
        cutout: "75%", // Inner circle size
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: 0, // Start from the top
    circumference: 360, // Full-circle for the chart
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
  };

  return (
    <div style={{ width: "100px", height: "100px", position: "relative" }}>
      <Doughnut data={data} options={options} />
      {/* Text inside the chart */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        38%
        <br />
        Weekly
      </div>
    </div>
  );
};

export default WeekRoundedChart;
