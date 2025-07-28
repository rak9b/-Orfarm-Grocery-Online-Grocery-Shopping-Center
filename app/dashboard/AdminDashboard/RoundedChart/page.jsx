"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RoundedChart = () => {
  const data = {
    datasets: [
      {
        data: [78, 22], // 78% growth and remaining part
        backgroundColor: ["#696cff", "#e0e0e0"], // Primary color and grey for remaining
        borderWidth: 5, // Border width to make the segments more visible
        borderColor: "#ffffff", // White border between segments
        borderRadius: 5, // Slightly rounded segments for a smoother look
        cutout: "80%", // Creates the inner circle
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltip to focus on growth display
      },
    },
    rotation: -90, // Start the chart from the top
    circumference: 240, // Make a 3/4 circle for the meter-like effect
  };

  return (
    <div className="md:w-[180px] w-[150px] h-[150px] md:h-[180px] relative">
      <Doughnut data={data} options={options} />
      {/* Text inside the circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#57626c",
        }}
      >
        78%
        <br />
        Growth
      </div>
    </div>
  );
};

export default RoundedChart;
