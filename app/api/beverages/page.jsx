"use client";

import ProductCard from "@/app/_Components/OurProduct/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Beverages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const {
    refetch,
    isLoading,
    data: allProduct = [],
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/AllProduct`);
      return resp?.data?.data;
    },
  });

  const totalPages = Math.ceil(allProduct.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const currentProducts = allProduct.slice(
    startIdx,
    startIdx + productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="md:w-full md:h-[400px] w-[320px] h-[200px] bg-cover rounded-md bg-no-repeat bg-center bg-[url('/bakeryBanner.jpg')]">
          <div className="flex flex-col justify-center items-center md:translate-y-[150px] translate-y-[60px]">
            <div>
              <h2 className="text-[16px] md:text-[25px] text-gray-500">
                Organic Meals Prepared
              </h2>
              <h2 className="text-[16px] md:text-[35px]">
                Delivered to <span className="text-[#80b500]">your Home</span>
              </h2>
              <p className="text-gray-500">
                Fully prepared & delivered nationwide
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#80b500]"></div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {currentProducts.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            className={`px-4 py-2 mx-1 bg-[#80b500] text-white rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#80b500] text-white"
                  : "bg-white text-[#80b500] border-[1px] border-[#80b500] hover:bg-[#b3d366] hover:text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 mx-1 bg-[#80b500] text-white rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
