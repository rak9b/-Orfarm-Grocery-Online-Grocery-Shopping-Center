"use client"
import { DollarSign, Box, ShoppingBag, TrendingUp } from "lucide-react";
import VendorRevenueChart from "./VendorRevenueChart/page";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const VendorDashboard = () => {
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
        // console.log(error)
      }
    },
  });

  // console.log(VendorDashBoardData);
  const discountedPrice = VendorDashBoardData?.totalPrice * 0.8;

  return (
    <div>
      {/* VendorStatistics code start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100">
        {/* Total Earnings */}
        <div className="flex items-center bg-white cursor-pointer shadow-md rounded-lg py-8 px-8 hover:bg-blue-50 transition duration-200">
          <div className="text-blue-500">
            <DollarSign className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {discountedPrice.toFixed(2)}$
            </h3>
            <p className="text-gray-600">Total Earnings</p>
          </div>
        </div>

        {/* Total Products */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-orange-50 transition duration-200">
          <div className="text-orange-500">
            <Box className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {VendorDashBoardData?.totalProduct}
            </h3>
            <p className="text-gray-600">Total Products</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-red-50 transition duration-200">
          <div className="text-red-500">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {VendorDashBoardData?.totalOrders}
            </h3>
            <p className="text-gray-600">Total Orders</p>
          </div>
        </div>

        {/* Total Sales */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-green-50 transition duration-200">
          <div className="text-green-500">
            <TrendingUp className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {VendorDashBoardData?.totalPrice}$
            </h3>
            <p className="text-gray-600">Total Sales</p>
          </div>
        </div>
      </div>
      {/* VendorStatistics code end */}
      <div className="xl:w-[1000px] w-[300px] md:w-[620px] 2xl:w-[1500px] mx-auto">
        <VendorRevenueChart />
      </div>
    </div>
  );
};

export default VendorDashboard;
