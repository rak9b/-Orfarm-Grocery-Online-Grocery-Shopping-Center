"use client"
import {
  CircleDollarSign,
  Trash2,
  Trash,
  ChevronRight,
  ChevronLeft,
  Truck,
  X,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import Image from "next/image";
const OrderManagement = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { refetch, data: OrderManageMent = [] } = useQuery({
    queryKey: ["OrderManageMent"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorDeliveryPayment/${email}`
        );
        return resp?.data?.data;
      } catch (error) {
        // console.log(error)
      }
    },
  });
  const order = OrderManageMent.filter((item) => item?.status === "pending");

  const handleDelivery = async (trans) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to deliver?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delivery it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const resp = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorProductDelivery/${trans}`
          );
          // console.log(resp?.data)

          refetch();

          Swal.fire({
            title: "Delivery",
            text: "Delivery has been made.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl my-4">Order Management</h2>

        <div className="relative overflow-auto">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border mb-4">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="hidden md:table-cell p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Transaction ID
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Total Amount
                    </span>
                  </th>
                  <th className="hidden md:table-cell p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Product Category
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Status
                    </span>
                  </th>
                  <th className="p-4 text-xs md:text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b text-xs md:text-sm text-center text-gray-800"
                  >
                    <td className="hidden md:table-cell p-2 md:p-4">
                      {item?.transaction}
                    </td>
                    <td className="p-2 md:p-4">{item?.price}$</td>
                    <td className="hidden md:table-cell p-2 md:p-4">
                      {item?.category}
                    </td>
                    <td className="p-2 md:p-4">
                      <button className="bg-green-500 px-2 py-[6px] text-sm text-white rounded-md">
                        Payed
                      </button>
                    </td>
                    <td className="relative p-2 md:p-4">
                      <button
                        onClick={() => handleDelivery(item?.transaction)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        <Truck size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {order?.length === 0 && (
              <>
                <div className="flex items-center flex-col">
                  <Image
                    layout="intrinsic"
                    width={300}
                    height={300}
                    src="/no-found.png"
                    alt=""
                    className=""
                  />
                  <h2>No Order Management</h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
