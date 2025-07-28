"use client"
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

import { useSession } from "next-auth/react";
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

const RevenueChart = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data: VendorDashBoardData = [] } = useQuery({
    queryKey: ["VendorDashBoardData"],
    queryFn: async () => {
      try {
        const reps = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorDashboardData/${email}`
        );
        return reps?.data?.data;
      } catch (error) {
        // console.log(error);
      }
    },
  });

  const discountedPrice = VendorDashBoardData?.totalPrice * 0.8;

  // Get the current month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()];

  const data = {
    labels: [currentMonth], // Dynamically setting the label to the current month
    datasets: [
      {
        label: "Revenue",
        data: [discountedPrice], // Using discountedPrice as the only data point
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness for different screen sizes
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Revenue for ${currentMonth}`, // Displaying current month in the title
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Revenue Chart</h2>
      <div className="w-full h-64 sm:h-80 lg:h-96">
        {" "}
        {/* Responsive height for different devices */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
