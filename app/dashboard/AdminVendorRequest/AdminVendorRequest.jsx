import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
const AdminVendorRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 3;
  const { refetch, data: AllRequestVendor = {} } = useQuery({
    queryKey: ["AllRequestVendor", currentPage, itemPerPage],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllVendorRequest?page=${currentPage}&size=${itemPerPage}`
      );
      return resp?.data;
    },
  });

  const allRequestVendor = AllRequestVendor?.data || [];
  const requestCounter = AllRequestVendor?.requestCounter || 0;
  const numberOfPage = Math.ceil(requestCounter / itemPerPage);
  let pages = [];

  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i);
  }

  const handleVendorAccept = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Vendor it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.patch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorAccept/${id}`
        );
        refetch();
        Swal.fire({
          title: "Vendored",
          text: "Vendor has been created.",
          icon: "success",
        });
      }
    });
  };

  const handleVendorCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Cancel ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.patch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorRequestCancel/${id}`
        );
        refetch();
        Swal.fire({
          title: "Canceled",
          text: "User has been Canceled",
          icon: "success",
        });
      }
    });
  };

  const handlePage = (pag) => {
    setCurrentPage(pag);
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

  return (
    <div className="overflow-x-auto">
      <div className="bg-white md:px-8 md:py-2">
        <h2 className="text-lg md:text-2xl my-4">All Vendor Request</h2>
        <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white border mb-20">
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
        {allRequestVendor?.map((item, idx) => (
          <tr
            key={idx}
            className="border-b text-xs md:text-sm text-center text-gray-800"
          >
            {/* ID column hidden on small screens */}
            <td className="p-2 md:p-4 hidden md:table-cell">{item?._id}</td>
            {/* NAME and STATUS are always visible */}
            <td className="p-2 md:p-4">{item?.name}</td>
            {/* EMAIL column hidden on small screens */}
            <td className="p-2 md:p-4 hidden md:table-cell">{item?.email}</td>
            <td className="p-2 md:p-4">{item?.userRole}</td>
            <td className="relative p-2 md:p-4 flex justify-center space-x-2">
              <button
                onClick={() => handleVendorAccept(item?._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
              >
                Accept
              </button>
              <button
                onClick={() => handleVendorCancel(item?._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
              >
                Cancel
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
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
                onClick={() => handlePage(item)}
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

export default AdminVendorRequest;
