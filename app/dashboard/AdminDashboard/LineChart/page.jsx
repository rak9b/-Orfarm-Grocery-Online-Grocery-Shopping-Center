"use client"

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChart = () => {
  const {
    data: AdminDashboardAllData = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["AdminDashboardAllData"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminDashboardAllData`
        );
        return resp?.data?.data;
      } catch (error) {
        // console.log(error)
      }
    },
  });

  if (isLoading) return <p>Loading chart data...</p>;
  if (isError) return <p>Error loading chart data.</p>;

  const ProfileReport = Array.isArray(AdminDashboardAllData?.totalSales)
    ? AdminDashboardAllData.totalSales
    : [10, 20, 30, 40 || AdminDashboardAllData.totalSales];

  const data = {
    labels: ProfileReport.map((_, index) => `Month ${index + 1}`),
    datasets: [
      {
        label: "Sales",
        data: ProfileReport,
        borderColor: "#FFA500",
        borderWidth: 5,
        tension: 0.4,
        fill: {
          target: "origin",
          above: "rgba(255, 165, 0, 0.3)",
        },
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="md:w-[200px] w-[190px] md:h-[100px]">
      {ProfileReport.length > 0 && ProfileReport[0] !== 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p>No data available for the chart.</p>
      )}
    </div>
  );
};

export default LineChart;
