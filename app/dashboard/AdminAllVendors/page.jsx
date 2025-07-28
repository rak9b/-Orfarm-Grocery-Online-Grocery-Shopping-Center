"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { useState } from "react";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const AdminAllVendors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;

  const { data: allVendor = {} } = useQuery({
    queryKey: ["allVendor", currentPage, itemPerPage],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllVendor?page=${currentPage}&size=${itemPerPage}`
      );
      return resp.data;
    },
  });

  const VendorCount = allVendor?.vendorCount || 0;
  const Vendor = allVendor?.data || [];
  const NumberOfPage = Math.ceil(VendorCount / itemPerPage);
  const pages = [];
  for (let i = 1; i <= NumberOfPage; i++) {
    pages.push(i);
  }

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < NumberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white md:px-8 md:py-2">
      <h2 className="text-lg md:text-2xl my-4">All Vendor</h2>

      {/* Table container with horizontal scroll for smaller screens */}
      <div className="relative overflow-x-auto">
        <table className="min-w-full bg-white border mb-4">
          <thead>
            <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
              {/* ID column hidden on small screens */}
              <th className="p-0 hidden md:table-cell">
                <span className="block py-2 px-3 border-r border-gray-300">
                  ID
                </span>
              </th>
              <th className="p-0">
                <span className="block py-2 px-3 border-r border-gray-300">
                  NAME
                </span>
              </th>
              {/* EMAIL column hidden on small screens */}
              <th className="p-0 hidden md:table-cell">
                <span className="block py-2 px-3 border-r border-gray-300">
                  EMAIL
                </span>
              </th>
              <th className="p-0">
                <span className="block py-2 px-3 border-r border-gray-300">
                  STATUS
                </span>
              </th>
              <th className="p-4 text-xs md:text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Vendor.map((item) => (
              <tr
                key={item?._id}
                className="border-b text-xs md:text-sm text-center text-gray-800"
              >
                {/* ID column hidden on small screens */}
                <td className="p-2 md:p-4 hidden md:table-cell">{item?._id}</td>
                {/* Show NAME, STATUS, and ACTIONS on all screens */}
                <td className="p-2 md:p-4">{item?.name}</td>
                {/* EMAIL column hidden on small screens */}
                <td className="p-2 md:p-4 hidden md:table-cell">
                  {item?.email}
                </td>
                <td className="p-2 md:p-4">{item?.userRole}</td>
                <td className="relative p-2 md:p-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="bg-none">
                        <button
                          className={`bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm ${
                            item?.userRole === "admin" ? "hidden" : ""
                          }`}
                        >
                          Details
                        </button>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <div>
                        <div className="flex lg:flex-row flex-col gap-4">
                          <div>
                            <Image
                              src={item?.image}
                              className="xl:w-[400px] xl:h-[150px]"
                              alt="profile"
                              width={400}
                              height={150}
                            />
                          </div>
                          <div>
                            <h2 className="text-lg">{item?.name}</h2>
                            <h2 className="text-lg">{item?.email}</h2>
                            <h2 className="text-lg text-red-500">
                              {item?.userRole}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mb-2">
          <h2></h2>
          <div className="space-x-2 flex items-center">
            <button
              onClick={handlePrev}
              className={`bg-[#22c55e] text-white px-[8px] py-[8px] rounded-md`}
            >
              <ChevronLeft />
            </button>
            {pages.map((item) => (
              <button
                onClick={() => handleChange(item)}
                className={` text-black px-4 py-1 rounded-md ${currentPage === item ? "bg-[#22c55e] text-white" : "bg-[#d1d5db]"}`}
                key={item}
              >
                {item}
              </button>
            ))}
            <button
              onClick={handleNext}
              className={`bg-[#22c55e] text-white px-[8px] py-[8px] rounded-md`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllVendors;
