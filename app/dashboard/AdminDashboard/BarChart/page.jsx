"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const { data: AdminDashboardAllData = {} } = useQuery({
    queryKey: ["AdminDashboardAllData"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminDashboardAllData`
        );
        return resp?.data?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Calculate 20% of totalRevenue dynamically
  const totalRevenue = AdminDashboardAllData?.totalSales || 0;
  const percentage = 20;
  const Revenue = (totalRevenue * percentage) / 100;

  // Get the current month name
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  // Dynamic data for chart showing only the current month
  const data = {
    labels: [currentMonth], // Use the current month as the only label
    datasets: [
      {
        label: "Current Month Sales",
        data: [Revenue], // Show only the calculated Revenue for this month
        backgroundColor: "#03c3ec",
        borderColor: "#ffffff",
        borderWidth: 3,
        borderRadius: { topLeft: 10, topRight: 10 },
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="md:w-[650px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
