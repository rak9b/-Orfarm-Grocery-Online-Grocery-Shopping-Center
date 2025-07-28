"use client";

import React from "react";
import { useContext, useEffect, useState } from "react";
import {
  CircleDollarSign,
  Trash2,
  Trash,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Image from "next/image";
const UserWishList = () => {
  const [userWishlistProduct, setUserWishlistProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const paginationProduct = userWishlistProduct.slice(startIndex, endIndex);
  const pages = Math.ceil(userWishlistProduct.length / itemPerPage);
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("wishlist")) || [];
    setUserWishlistProduct(carts);
  }, []);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterPrd = userWishlistProduct.filter(
          (item) => item.prdID !== id
        );
        setUserWishlistProduct(filterPrd);
        localStorage.setItem("wishlist", JSON.stringify(filterPrd));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAddProduct = (prd) => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const filterPrd = userWishlistProduct.filter(
      (item) => item.prdID !== prd.prdID
    );
    setUserWishlistProduct(filterPrd);
    localStorage.setItem("wishlist", JSON.stringify(filterPrd));
    carts.push(prd);
    localStorage.setItem("carts", JSON.stringify(carts));
    toast.success("Product add to Carts Success");
  };

  const handleNext = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // console.log(pageNumbers);

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl mb-4">My Wishlist</h2>

        <div className="relative">
          <div className="rounded-lg">
            <table className="min-w-full bg-white border mb-4">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="p-0 hidden md:table-cell">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      IMAGE
                    </span>
                  </th>
                  <th className="p-0 hidden md:table-cell">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      TITLE
                    </span>
                  </th>
                  <th className="p-0 hidden md:table-cell">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      CATEGORY
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      QUANTITY
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      PRICE
                    </span>
                  </th>
                  <th className="p-4 text-xs md:text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {paginationProduct.map((item) => (
                  <tr
                    key={item?.prdID}
                    className="border-b text-xs md:text-sm text-center text-gray-800"
                  >
                    <td className="p-2 md:p-4 hidden md:table-cell">
                      <Image
                        width={40}
                        height={0}
                        src={item.image}
                        alt=""
                        className=""
                      />
                    </td>
                    <td className="p-2 md:p-4 hidden md:table-cell">
                      {item?.title}
                    </td>
                    <td className="p-2 md:p-4 hidden md:table-cell">
                      {item?.category}
                    </td>
                    <td className="p-2 md:p-4">{item?.quantity}</td>
                    <td className="p-2 md:p-4">${item?.price}</td>
                    <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                      <button
                        onClick={() => handleAddProduct(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        Cart
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(item?.prdID)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {paginationProduct?.length === 0 && (
              <>
                <div className="flex items-center flex-col">
                  <Image
                    width={300}
                    height={300}
                    src="/no-found.png"
                    alt=""
                    className=""
                  />
                  <h2>No Wishlist</h2>
                </div>
              </>
            )}
            <div className="flex md:justify-between md:flex-row flex-col items-center">
              <h1></h1>
              <div className="flex justify-center items-center">
                <button
                  onClick={handlePrevious}
                  className={`bg-green-500 px-[7px] py-[12px] text-white pt-1 flex items-center mr-[4px] justify-center rounded-md ${currentPage === 1 ? "bg-green-400" : ""}`}
                >
                  <ChevronLeft size={25} />
                </button>
                {pageNumbers.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`px-4 py-1 ${
                      currentPage === item
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-black"
                    } rounded-md mx-1`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  className={`bg-green-500 px-[7px] py-[12px] text-white pt-1 flex items-center ml-[4px] justify-center rounded-md ${currentPage === pages ? "bg-green-400" : ""}`}
                >
                  <ChevronRight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishList;
