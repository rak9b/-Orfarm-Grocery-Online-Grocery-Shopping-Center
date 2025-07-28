"use client"

import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import React, { useContext, useState } from "react";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
const AdminAllUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const UserPerPage = 4;
  const {
    refetch,
    isLoading: allUserLoading,
    data: allUserData = {},
  } = useQuery({
    queryKey: ["allUser", currentPage, UserPerPage],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllUser?page=${currentPage}&size=${UserPerPage}`
      );
      return resp?.data;
    },
  });

  const userCount = allUserData.totalUsers || 0;
  const allUser = allUserData.data || [];
  const numberOfPage = Math.ceil(userCount / UserPerPage);
  const pages = [];
  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i);
  }
  const handlePageChange = (count) => {
    setCurrentPage(count);
  };

  const handleNext = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRoleChange = async (id, role) => {
    if (role === "user") {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to make him a vendor?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Vendor it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const Role = "vendor";
          const resp = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserRoleChange/${id}`,
            { Role }
          );
          refetch();

          Swal.fire({
            title: "Vendored!",
            text: "Your role change success",
            icon: "success",
          });
        }
      });
    }
    if (role === "vendor") {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to make him a User?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, User it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const Role = "user";
          const resp = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserRoleChange/${id}`,
            { Role }
          );
          refetch();

          Swal.fire({
            title: "User!",
            text: "Your role change success",
            icon: "success",
          });
        }
      });
    }
  };

  const handleUserDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserDelete/${id}`
        );
        refetch();

        Swal.fire({
          title: "Removed!",
          text: "Your user has been removed",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-white md:px-8 md:py-2">
      <h2 className="text-lg md:text-2xl mb-4">All Users</h2>

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
            {allUser.map((item) => (
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
                <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                  <button
                    onClick={() => handleRoleChange(item?._id, item?.userRole)}
                    className={`bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm ${
                      item?.userRole === "admin" ? "hidden" : ""
                    }`}
                  >
                    {item?.userRole === "user" ? "Vendor" : "User"}
                  </button>
                  <button
                    onClick={() => handleUserDelete(item?._id)}
                    className={`bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm ${
                      item?.userRole === "admin" ? "hidden" : ""
                    }`}
                  >
                    <Trash size={20} />
                  </button>
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
                onClick={() => handlePageChange(item)}
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

export default AdminAllUsers;
