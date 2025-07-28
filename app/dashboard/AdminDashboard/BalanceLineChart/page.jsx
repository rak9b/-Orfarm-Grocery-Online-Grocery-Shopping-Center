"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const BalanceLineChart = () => {
  const { data: AdminDashboardAllData = [] } = useQuery({
    queryKey: ["AdminDashboardAllData"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminDashboardAllData`
        );
        return resp?.data?.data;
      } catch (error) {
        // console.log(error);
      }
    },
  });

  const totalRevenue = AdminDashboardAllData?.totalSales || 0;
  const percentage = 20;
  const balance = (totalRevenue * percentage) / 100;

  // Get the current month
  const currentMonth = new Date().toLocaleString("default", { month: "short" });

  // Duplicate the single data point to help show the fill color
  const data = {
    labels: [currentMonth, currentMonth], // Duplicate month for a small "line"
    datasets: [
      {
        label: "Balance",
        data: [balance, balance], // Duplicate balance value for fill effect
        borderColor: "#696cff", // Line color (blue)
        backgroundColor: "rgba(105, 108, 255, 0.2)", // Light blue fill under the line
        borderWidth: 2, // Line thickness
        tension: 0.4, // Smooth curve
        fill: true, // Enable fill under the line
        pointBackgroundColor: "#696cff", // Point color
        pointBorderColor: "#696cff", // Border around points
        pointRadius: 8, // Point size for better visibility
        pointHoverRadius: 10, // Hover effect
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0 for better visualization
        ticks: {
          stepSize: balance / 2 || 10, // Adjust step size if balance is too low
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Show tooltips on hover
      },
    },
  };

  return (
    <div className="md:w-[450px] md:h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceLineChart;
