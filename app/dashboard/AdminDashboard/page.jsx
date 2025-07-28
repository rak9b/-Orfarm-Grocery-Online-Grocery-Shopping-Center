"use client";

import {
  ArrowDown,
  ArrowUp,
  EllipsisVertical,
  Shirt,
  Smartphone,
  Trophy,
} from "lucide-react";
import React from "react";
import BarChart from "./BarChart/page";
import RoundedChart from "./RoundedChart/page";
import LineChart from "./LineChart/page";
import WeekRoundedChart from "./WeekRoundedChart/page";
import BalanceLineChart from "./BalanceLineChart/page";
import IncomeCircleChart from "./IncomeCircleChart/page";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import dynamic from "next/dynamic";
// const BalanceLineChart = dynamic(() => import("./BalanceLineChart/page"), {
//   ssr: false,
// });

const AdminDashBoard = () => {
  const session = useSession();
  const name = session?.data?.user?.name;

  const { data: AdminDashboardAllData = [] } = useQuery({
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

  const totalRevenue = AdminDashboardAllData?.totalSales;
  const percentage = 20;
  const Profit = (totalRevenue * percentage) / 100;
  const percentageSale = 90;
  const Payments = (totalRevenue * percentageSale) / 100;
  // console.log(AdminDashboardAllData);
  // console.log(Payments);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-6 gap-3 xl:gap-6">
        <div className="col-span-4">
          <div className="text-base bg-white rounded-md md:h-[205px] h-[342px] shadow-Cards">
            <div className="p-6 flex md:flex-row flex-col justify-between">
              <div>
                <h1 className="text-[#696cff] text-[18px]">
                  Congratulations {name}! 🎉
                </h1>
                <p className="text-[#767f88] text-[15px] md:w-[250px] my-4">
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </p>
                <button className="border-[#696cff] text-[#696cff] border-[1px] hover:text-white hover:bg-[#696cff] transition-all ease-in-out text-[13px] rounded-sm px-4 py-[3px]">
                  View Badges
                </button>
              </div>
              <div>
                <Image
                  src="/man-with-laptop.png"
                  alt="man with laptop"
                  width={222}
                  height={222}
                  layout="intrinsic"
                  className="md:mr-8 md:mt-0 ml-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="text-base bg-white rounded-md shadow-Cards md:mt-6 mt-3">
            <div className="p-6">
              <div className="flex md:flex-col xl:flex-row flex-col gap-4">
                <div>
                  <div className="flex justify-between ">
                    <h2 className="text-[18px] text-[#57626c]">
                      Total Revenue
                    </h2>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                  <BarChart />
                </div>
                <div className="flex-1 md:border-l-[1px] border-gray-300 space-y-5">
                  <div className="flex justify-center">
                    <button className="border-[#696cff] text-[#696cff] border-[1px] hover:text-white hover:bg-[#696cff] transition-all ease-in-out text-[18px] rounded-sm px-6 py-[6px]">
                      2024
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <RoundedChart />
                  </div>
                  <h2 className="text-center text-[17px] text-[#57626c]">
                    78% Company Growth
                  </h2>
                  <div className="flex justify-center items-center">
                    <div className="flex items-center gap-[60px]">
                      <div className="flex items-center gap-2">
                        <div className="w-[40px] bg-[#e7e7ff] rounded-md">
                          <h2 className="text-[#696cfe] flex justify-center items-center text-[24px] py-2">
                            $
                          </h2>
                        </div>
                        <div>
                          <h2 className="text-sm text-gray-500">2024</h2>
                          <h2 className="text-gray-600">${Payments}k</h2>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[40px] bg-[#e7e7ff] rounded-md">
                          <Image
                            src="/wallet-info.png"
                            alt=""
                            width={0}
                            height={38}
                            layout="intrinsic"
                            className=""
                          />
                        </div>
                        <div>
                          <h2 className="text-sm text-gray-500">2024</h2>
                          <h2 className="text-gray-600">
                            ${AdminDashboardAllData?.totalSales}k
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* last row chart  */}
          <div className="flex md:flex-col xl:flex-row flex-col gap-3 md:gap-6">
            <div className="text-base bg-white rounded-md shadow-Cards md:mt-6 mt-3 md:w-[500px]">
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-[18px] text-[#57626c]">
                      Order Statistics
                    </h2>
                    <h2 className="text-[15px] text-[#8f969e]">
                      42.82k Total Sales
                    </h2>
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-[#a7acb2]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-[28px]">
                      {AdminDashboardAllData?.totalProduct}
                    </h2>
                    <h2 className="text-[#a7acb2] mt-3">Total Orders</h2>
                  </div>
                  <div>
                    <WeekRoundedChart />
                  </div>
                </div>
                <div className="mt-4 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="bg-[#e7e7ff] px-[10px] py-[10px] rounded-md">
                          <Smartphone size={20} className="text-[#696cfe]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-base text-gray-600">Electronic</h2>
                        <h2 className="text-sm text-[#a2a8af]">
                          Mobile, Earbuds, TV
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-700 text-lg">82.5k</h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="bg-[#e8fadf] px-[10px] py-[10px] rounded-md">
                          <Shirt size={20} className="text-[#71dd37]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-base text-gray-600">Fashion</h2>
                        <h2 className="text-sm text-[#a2a8af]">
                          T-shirt, Jeans, Shoes
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-700 text-lg">23.8k</h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="bg-[#d7f5fc] px-[10px] py-[10px] rounded-md">
                          <Smartphone size={20} className="text-[#03c2eb]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-base text-gray-600">Decor</h2>
                        <h2 className="text-sm text-[#a2a8af]">
                          Fine Art, Dining
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-700 text-lg">849k</h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="bg-[#ebeef0] px-[10px] py-[10px] rounded-md">
                          <Trophy size={20} className="text-[#696cfe]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-base text-gray-600">Sports</h2>
                        <h2 className="text-sm text-[#a2a8af]">
                          Football, Cricket Kit
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-700 text-lg">99</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-base bg-white rounded-md shadow-Cards md:mt-6 mt-3 md:w-[500px]">
              <div className="p-6">
                <div className="space-x-1">
                  <button className="bg-[#696cff] px-6 py-[7px] rounded-md text-white">
                    Income
                  </button>
                  <button className="px-6 py-[7px] hover:bg-[#e7e7ff] hover:text-[#6163e6] transition-all hover:ease-in-out rounded-md text-gray-700">
                    Expense
                  </button>
                  <button className="px-6 py-[7px] hover:bg-[#e7e7ff] hover:text-[#6163e6] transition-all hover:ease-in-out rounded-md text-gray-700">
                    Profit
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/wallet.png"
                        alt=""
                        width={40}
                        height={0}
                        layout="intrinsic"
                        className=""
                      />
                    </div>
                    <div>
                      <h2 className="text-gray-500 text-[16px]">
                        Total Balance
                      </h2>
                      <h2 className="flex items-center gap-2 text-gray-700">
                        ${Profit.toFixed(1)}
                        <span className="text-[#71dd37] flex items-center gap-2">
                          {" "}
                          <ArrowUp size={18} className="text-[#71dd37]" /> 42.9%
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div>
                  <BalanceLineChart />
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex items-center gap-4">
                    <div>
                      <IncomeCircleChart />
                    </div>
                    <div>
                      <h2 className="text-gray-700">Income this week</h2>
                      <h2 className="text-gray-400">
                        ${Profit.toFixed(1)}k less than last week
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side content */}
        <div className="col-span-2">
          <div className="flex md:flex-row  xl:flex-row flex-col md:items-center gap-3 md:gap-6">
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px]  h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <Image
                      width={40}
                      height={0}
                      layout="intrinsic"
                      src="/chart-success.png"
                      alt=""
                      className=""
                    />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Profit</h2>
                  <h2 className="text-[28px] text-[#384551]">
                    ${Profit.toFixed(1)}
                  </h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +72.80%
                  </h2>
                </div>
              </div>
            </div>
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px] h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <Image
                      width={40}
                      height={0}
                      layout="intrinsic"
                      src="/wallet-info.png"
                      alt=""
                      className=""
                    />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Sales</h2>
                  <h2 className="text-[28px] text-[#384551]">
                    ${AdminDashboardAllData?.totalSales}
                  </h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +28.42%
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* second row box  */}
          <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-6 mt-3 md:mt-6">
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px]  h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <Image
                      width={40}
                      height={0}
                      layout="intrinsic"
                      src="/paypal.png"
                      alt=""
                      className=""
                    />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Payments</h2>
                  <h2 className="text-[28px] text-[#384551]">
                    ${Payments?.toFixed(2)}
                  </h2>
                  <h2 className="text-[#e6381a] flex gap-2 items-center">
                    <ArrowDown size={18} /> -14.82%
                  </h2>
                </div>
              </div>
            </div>
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px] h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <Image
                      width={40}
                      height={0}
                      layout="intrinsic"
                      src="/cc-primary.png"
                      alt=""
                      className=""
                    />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Transactions</h2>
                  <h2 className="text-[28px] text-[#384551]">
                    ${AdminDashboardAllData?.totalSales?.toFixed(1)}
                  </h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +28.14%
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-Cards md:w-[460px] rounded-md mt-3 md:mt-6">
            <div className="p-6">
              <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-8">
                <div className="h-[120px]">
                  <h2 className="text-gray-600 text-[20px]">Profile Report</h2>
                  <button className="text-[#ffb41c] bg-[#fff2d6] px-3 text-[16px] rounded-md">
                    YEAR 2024
                  </button>
                  <h2 className="text-[#74de3c] flex gap-2 items-center text-[16px]">
                    <ArrowUp size={18} /> -14.82%
                  </h2>
                  <h2 className="text-[#384551]">
                    ${AdminDashboardAllData?.totalSales}k
                  </h2>
                </div>
                <div className="">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-Cards md:w-[460px] rounded-md mt-3 md:mt-6">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-600 text-[18px]">Transactions</h2>
                <EllipsisVertical size={20} className="text-[#9ca3af]" />
              </div>
              <div className="mt-4 md:mt-[38px]">
                <div className="space-y-3 md:space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          width={0}
                          height={0}
                          layout="responsive"
                          src="/paypal.png"
                          alt=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">Paypal</h2>
                        <h2 className="text-[16px] text-gray-700">
                          Send money
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        +82.6 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          width={40}
                          height={0}
                          layout="intrinsic"
                          src="/wallet.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">Wallet</h2>
                        <h2 className="text-[16px] text-gray-700">Mac'D</h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        +270.69 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          layout="intrinsic"
                          width={40}
                          height={0}
                          src="/chart.png"
                          alt=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">Transfer</h2>
                        <h2 className="text-[16px] text-gray-700">Refund</h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        +637.91 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          layout="intrinsic"
                          width={40}
                          height={0}
                          src="/cc-primary.png"
                          alt=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">
                          Credit Card
                        </h2>
                        <h2 className="text-[16px] text-gray-700">
                          Ordered Food
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        -838.71 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          layout="intrinsic"
                          width={40}
                          height={0}
                          src="/wallet.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">Wallet</h2>
                        <h2 className="text-[16px] text-gray-700">Starbucks</h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        +203.33 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          layout="intrinsic"
                          width={40}
                          height={0}
                          src="/cc-warning.png"
                          alt=""
                        />
                      </div>
                      <div className="leading-[22px]">
                        <h2 className="text-[14px] text-gray-500">
                          Mastercard
                        </h2>
                        <h2 className="text-[16px] text-gray-700">
                          Ordered Food
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-gray-600 text-[18px]">
                        -92.45 <span className="text-gray-400">USD</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
