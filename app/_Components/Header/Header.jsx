"use client";
import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
const Header = () => {
  const { myCart, handleLocation, handleSearch } = useContext(AuthProduct);
  const session = useSession();
  const myCartProduct = myCart.filter(
    (item) => item.email === session?.data?.user?.email
  );

  const totalProductPrice =
    myCartProduct.reduce(
      (prev, after) => parseInt(prev) + parseInt(after.price),
      0
    ) || "00";

  const path = usePathname();

  return (
    <div className={path === "/api/dashboard" ? "hidden" : ""}>
      <div className="px-2 md:px-0">
        <div className="border-b-[1px] border-t-[1px] mt-4 md:mt-8 py-3 md:py-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex gap-12 items-center">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <div className="md:hidden lg:hidden flex">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild className="border-none">
                          <Button variant="outline">
                            <Menu className="text-gray-600" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="/">HOME</Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            <Link href="/api/shop">SHOP</Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            <Link
                              href="/api/bakery"
                              className={
                                path === "/api/bakery" ? "text-[#dcfce7]" : ""
                              }
                            >
                              <button className="text-[14px]  text-gray-700  uppercase ">
                                Bakery
                              </button>
                            </Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            {" "}
                            <Link
                              href="/api/beverages"
                              className={
                                path === "/api/beverages"
                                  ? "text-[#dcfce7]"
                                  : ""
                              }
                            >
                              <button className="text-[14px]   text-gray-700 uppercase ">
                                Beverages
                              </button>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/api/foodDrinks"
                              className={
                                path === "/api/foodDrinks"
                                  ? "text-[#dcfce7]"
                                  : ""
                              }
                            >
                              <button className="text-[14px] text-gray-700   uppercase ">
                                News
                              </button>
                            </Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            <Link
                              href="/api/blog"
                              className={
                                path === "/api/blog" ? "text-[#dcfce7]" : ""
                              }
                            >
                              <button className="text-[14px] text-gray-700 uppercase ">
                                Blog
                              </button>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/api/contact"
                              className={
                                path === "/api/contact" ? "text-[#dcfce7]" : ""
                              }
                            >
                              <button className="text-[14px] text-gray-700  uppercase ">
                                Contact
                              </button>
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="md:flex hidden">
                      <Image
                        src="/logo1.png"
                        className="md:w-[50px] w-[30px]"
                        width={50}
                        height={40}
                        alt="logo"
                      />
                    </div>
                    <div>
                      <h2 className="md:text-2xl text-[16px]">
                        Orfarm Grocery
                      </h2>
                      <p className="text-sm text-gray-400 hidden md:flex">
                        Online Grocery Shopping Center
                      </p>
                    </div>
                  </div>
                  <div className="xl:flex md:hidden hidden">
                    <Select onValueChange={handleLocation}>
                      <SelectTrigger className="w-[180px] h-[50px]">
                        <SelectValue placeholder="Select a Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Location</SelectLabel>
                          <SelectItem value="California">California</SelectItem>
                          <SelectItem value="Florida">Florida</SelectItem>
                          <SelectItem value="New_York">New York</SelectItem>
                          <SelectItem value="Washington">Washington</SelectItem>
                          <SelectItem value="Alaska">Alaska</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="lg:flex  items-center hidden ml-8 gap-6">
                  <div>
                    <div className="relative">
                      <input
                        onChange={handleSearch}
                        className="bg-[#f3f4f7] outline-none px-8 py-4 rounded-md md:w-[440px] xl:w-[600px]"
                        type="text"
                        placeholder="Search for products..."
                      />
                      <div className="absolute right-6 cursor-pointer top-4">
                        <Search className="text-gray-600" />
                      </div>
                    </div>
                  </div>
                  <div>
                    {session?.status === "authenticated" ? (
                      <div>
                        {session?.data?.user?.image ? (
                          <div>
                            <div className="flex flex-col items-center justify-center">
                              <div className="flex space-x-5">
                                <DropdownMenu>
                                  <DropdownMenuTrigger
                                    asChild
                                    className="rounded-full"
                                  >
                                    <Button variant="none">
                                      <Image
                                        alt=""
                                        width={40}
                                        height={40}
                                        layout="intrinsic"
                                        className=" rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                                        src={session?.data?.user?.image}
                                      />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="w-56">
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel>
                                      {session?.data?.user?.name}
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      {session?.data?.user?.email}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <button
                                        onClick={() => signOut()}
                                        className="text-red-500"
                                      >
                                        Logout
                                      </button>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <DropdownMenu>
                              <DropdownMenuTrigger
                                asChild
                                className="rounded-full"
                              >
                                <Button variant="outline">
                                  <UserRound className="text-gray-600" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>
                                  {session?.data?.user?.name}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  {session?.data?.user?.email}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <button
                                    onClick={() => signOut()}
                                    className="text-red-500"
                                  >
                                    Logout
                                  </button>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        )}
                      </div>
                    ) : session.status === "loading" ? (
                      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#80b500]"></div>
                    ) : (
                      <div>
                        <Link
                          className="text-lg border-2 rounded-md py-[6px] text-gray-600 px-3"
                          href="/api/login"
                        >
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* cart section */}
              </div>
              <div>
                <Link href="/dashboard">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">
                        <h2 className="text-xl text-gray-600 mr-4 hidden md:flex">
                          ${totalProductPrice}.00
                        </h2>
                        <div>
                          <div className="bg-[#fff1ee] w-[45px] relative h-[45px] flex justify-center items-center rounded-full">
                            <ShoppingCart className="text-red-400" size={20} />
                            <span className="bg-red-600 top-[-2px] right-[-3px] absolute w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                              {myCartProduct?.length || 0}
                            </span>
                          </div>
                        </div>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-1">
                        {myCartProduct.length > 0
                          ? myCartProduct.map((item) => (
                              <div
                                className="flex items-center justify-between"
                                key={item.prdID}
                              >
                                <h2>{item?.title}</h2>
                                <h2>Quantity: {item?.quantity}</h2>
                              </div>
                            ))
                          : "No Product Here"}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </Link>
              </div>
            </div>
            <div className="mt-0 lg:mt-4">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
