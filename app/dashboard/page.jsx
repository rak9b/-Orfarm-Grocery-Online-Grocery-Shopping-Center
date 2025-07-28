"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  User,
  FileText,
  LogOut,
  Heart,
  ChevronRight,
  LayoutDashboard,
  UserCog,
  GitPullRequestArrow,
  GitPullRequestCreateArrow,
  ShoppingBag,
  PlusSquare,
  CreditCard,
} from "lucide-react";
import UserProfile from "./UserProfile/page";
import UserWishList from "./UserWishList/page";
import { AuthProduct } from "../Services/ProductProvider/ProductProvider";
import AdminDashBoard from "./AdminDashboard/page";
import AdminAllUsers from "./AdminAllUsers/page";
import AdminAllVendors from "./AdminAllVendors/page";
import AdminVendorRequest from "./AdminVendorRequest/AdminVendorRequest";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import axios from "axios";
import VendorDashboard from "./VendorDashboard/page";
import OrderManagement from "./OrderManagement/page";
import AddProduct from "./AddProduct/page";
import PaymentHistory from "./PaymentHistory/page";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import UserProduct from "./UserProduct/page";
const Sidebar = () => {
  const [selected, setSelected] = useState("my-product");
  const [dashboardSelect, setDashboardSelect] = useState("dashboard");
  const [vendorDashboardSelect, setVendorDashboardSelect] =
    useState("dashboard");

  const router = useRouter();
  const { userRole, userRoleLoading, singleUserData, singleUserLoading } =
    useContext(AuthProduct);
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const [userData] = singleUserData;
  // console.log(userRole?.data);

  const NAV_ITEMS = [
    { id: "my-product", label: "My Product", icon: <ShoppingCart /> },
    { id: "my-wishlist", label: "My Wishlist", icon: <Heart /> },
    { id: "payment-history", label: "Payment History", icon: <CreditCard /> },
    { id: "my-profile", label: "My Profile", icon: <User /> },
    { id: "exit", label: "Exit", icon: <LogOut /> },
  ];

  const NAV_VENDOR_ITEM = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    {
      id: "order-management",
      label: "Order Management",
      icon: <ShoppingBag />,
    },
    { id: "add-product", label: "Add Product", icon: <PlusSquare /> },
    { id: "my-profile", label: "My Profile", icon: <User /> },
    { id: "exit", label: "Exit", icon: <LogOut /> },
  ];

  const NAV_ADMIN_ITEM = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { id: "all-user", label: "All Users", icon: <User /> },
    { id: "all-vendor", label: "All Vendors", icon: <UserCog /> },
    {
      id: "vendor-request",
      label: "Vendor Request",
      icon: <GitPullRequestCreateArrow />,
    },
    { id: "exit", label: "Exit", icon: <LogOut /> },
  ];

  const handleNavigation = (id) => {
    if (id === "exit") {
      router.push("/");
    } else {
      setSelected(id);
      setDashboardSelect(id);
      setVendorDashboardSelect(id);
    }
  };

  const handleBeComeVendor = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send a vendor request ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const emails = session?.data?.user?.email;

        const resp = await axios.patch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorRequestSend/${emails}`
        );
        singleUserLoading();
        if (resp?.data?.success) {
          Swal.fire({
            title: "Send Success",
            text: "Your vendor request has been sent.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleWaitVendor = () => {
    Swal.fire("Wait for admin approval");
  };

  return (
    <div className="">
      <div className="bg-[#1f2937] text-white py-4 md:fixed w-full z-50 border-b-[1px] border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 ml-4">
            {" "}
            <Image
              src="/logo1.png"
              alt="logo"
              layout="intrinsic"
              width={50}
              height={0}
              className=""
            />
            <h1 className="md:text-[25px] text-[16px] mt-2">Orfarm-Grocery</h1>
          </div>
          <div className="mr-4">
            {userRole?.data === "user" ? (
              userData?.vendor === "No" ? (
                <button
                  onClick={handleBeComeVendor}
                  className="md:text-[16px] bg-[#22c55e] md:px-4 px-[10px] py-[6px] md:py-2 rounded-md text-[14px] mt-2"
                >
                  Become a vendor
                </button>
              ) : userData?.vendor === "Yes" ? (
                <button
                  onClick={handleWaitVendor}
                  className="md:text-[16px] bg-orange-500 md:px-4 px-[10px] py-[6px] md:py-2 rounded-md text-[14px] mt-2"
                >
                  Request Processing
                </button>
              ) : (
                ""
              )
            ) : (
              session?.data?.user?.name
            )}
          </div>
        </div>
      </div>
      <div className="flex md:h-[520vh] xl:h-[calc(160vh-83px)]">
        {/* Sidebar */}
        <div className="md:hidden flex z-50">
          <button
            className="px-2 py-2 bg-blue-500 text-white fixed top-[80px] rounded-r-md left-[-0px]"
            onClick={toggleDrawer}
          >
            <ChevronRight />
          </button>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out p-5`}
          >
            <button className="p-4 text-white" onClick={toggleDrawer}>
              Close
            </button>
            <ul>
              {userRoleLoading ? (
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-green-600"></div>
                </div>
              ) : userRole?.data === "user" ? (
                NAV_ITEMS.map((item) => (
                  <li
                    key={item.id}
                    className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                      selected === item.id
                        ? "bg-green-500"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))
              ) : userRole?.data === "vendor" ? (
                NAV_VENDOR_ITEM.map((item) => (
                  <li
                    key={item.id}
                    className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                      dashboardSelect === item.id
                        ? "bg-green-500"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))
              ) : (
                NAV_ADMIN_ITEM.map((item) => (
                  <li
                    key={item.id}
                    className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                      dashboardSelect === item.id
                        ? "bg-green-500"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="w-64 bg-gray-800 text-white h-full p-5 lg:block hidden">
          <ul className="md:fixed md:w-[220px] md:mt-[85px]">
            {userRoleLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-green-600"></div>
              </div>
            ) : userRole?.data === "user" ? (
              NAV_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                    selected === item.id ? "bg-green-500" : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))
            ) : userRole?.data === "vendor" ? (
              NAV_VENDOR_ITEM.map((item) => (
                <li
                  key={item.id}
                  className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                    dashboardSelect === item.id
                      ? "bg-green-500"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))
            ) : (
              NAV_ADMIN_ITEM.map((item) => (
                <li
                  key={item.id}
                  className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                    dashboardSelect === item.id
                      ? "bg-green-500"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-grow px-12 py-4 mt-6 md:mt-[80px] pt-0 md:pt-10 bg-[#f5f5f9]">
          {userRoleLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
            </div>
          ) : userRole?.data === "user" ? (
            <div className="text-2xl font-bold">
              {selected === "my-product" && <UserProduct />}
              {selected === "my-profile" && <UserProfile />}
              {selected === "payment-history" && <PaymentHistory />}
              {selected === "my-wishlist" && <UserWishList />}
            </div>
          ) : userRole?.data === "vendor" ? (
            <div className="text-2xl font-bold ">
              {vendorDashboardSelect === "dashboard" && <VendorDashboard />}
              {vendorDashboardSelect === "order-management" && (
                <OrderManagement />
              )}
              {vendorDashboardSelect === "add-product" && <AddProduct />}
              {selected === "my-profile" && <UserProfile />}
            </div>
          ) : userRole?.data === "admin" ? (
            <div className="text-2xl font-bold ">
              {dashboardSelect === "dashboard" && <AdminDashBoard />}
              {dashboardSelect === "all-user" && <AdminAllUsers />}
              {dashboardSelect === "all-vendor" && <AdminAllVendors />}
              {dashboardSelect === "vendor-request" && <AdminVendorRequest />}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
