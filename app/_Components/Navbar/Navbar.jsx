"use client";
import React, { useContext, useState } from "react";
import { Beef, CupSoda, Menu, Pizza, Soup, Cookie, Coffee } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavbarLink from "./NavbarLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
const Home = [
  {
    title: "Home",
    path: "/",
    description:
      "Orfarm Grocery is an online food website designed to provide users with a convenient platform to shop for groceries and other food items",
  },
  {
    title: "Feature Home",
    path: "/",
    description:
      " The app offers a wide selection of products, making it easy for customers to find and purchase their desired items from the comfort of their homes.",
  },
];

const Shop = [
  {
    title: "Shop",
    path: "/api/shop",
    description:
      "Orfarm Grocery is an online food website designed to provide users with a convenient platform to shop for groceries and other food items",
  },
  {
    title: "Feature Shop",
    path: "/api/shop",
    description:
      " The app offers a wide selection of products, making it easy for customers to find and purchase their desired items from the comfort of their homes.",
  },
];

const Navbar = () => {
  const path = usePathname();
  const { handleCategory } = useContext(AuthProduct);

  return (
    <div className={path === "/api/dashboard" ? "hidden" : ""}>
      <div className={`md:flex hidden items-center justify-between`}>
        <div>
          <Select onValueChange={handleCategory}>
            <SelectTrigger className="w-[220px] py-6 px-4 bg-[#80b500] text-white rounded-full">
              <Menu size={18} />
              <SelectValue placeholder="ALL CATEGORIES" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>CATEGORIES</SelectLabel>
                <SelectItem value="Food_Drinks">Food & Drinks</SelectItem>
                <SelectItem value="Vegetables">Vegetables</SelectItem>
                <SelectItem value="Dried_Foods">Dried Foods</SelectItem>
                <SelectItem value="Bread_Cake">Bread & Cake</SelectItem>
                <SelectItem value="Fish_Meat">Fish & Meat</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex md:flex-wrap items-center gap-2">
          <NavbarLink name={"HOME"} Home={Home} link={"/"} path={path} />
          <NavbarLink
            name={"SHOP"}
            Home={Shop}
            link={"/api/shop"}
            path={path}
          />

          <Link
            href="/api/bakery"
            className={path === "/api/bakery" ? "bg-[#dcfce7]" : ""}
          >
            <button className="text-[18px] hover:bg-green-100 flex text-gray-700 items-center gap-2 px-[15px] py-[7px] uppercase rounded-md">
              <span>
                <Cookie size={20} className="text-gray-500" />
              </span>{" "}
              Bakery
            </button>
          </Link>

          <Link
            href="/api/beverages"
            className={path === "/api/beverages" ? "bg-[#dcfce7]" : ""}
          >
            <button className="text-[18px] hover:bg-green-100 flex text-gray-700 items-center gap-2 px-[15px] py-[7px] uppercase rounded-md">
              <span>
                <Coffee size={20} className="text-gray-500" />
              </span>{" "}
              Beverages
            </button>
          </Link>

          <Link
            href="/api/foodDrinks"
            className={path === "/api/foodDrinks" ? "bg-[#dcfce7]" : ""}
          >
            <button className="text-[18px] hover:bg-green-100 text-gray-700  px-[15px] py-[7px] uppercase rounded-md">
              News
            </button>
          </Link>

          <Link
            href="/api/blog"
            className={path === "/api/blog" ? "bg-[#dcfce7]" : ""}
          >
            <button className="text-[18px] hover:bg-green-100 px-[15px] text-gray-700 py-[7px] uppercase rounded-md">
              Blog
            </button>
          </Link>
          <Link
            href="/api/contact"
            className={path === "/api/contact" ? "bg-[#dcfce7]" : ""}
          >
            <button className="text-[18px] hover:bg-green-100 px-[15px] text-gray-700 py-[7px] uppercase rounded-md">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
