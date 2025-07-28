"use client";

import { Apple, CakeSlice, Cherry, Fish, Salad } from "lucide-react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React, { useContext, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/grid";

import { FreeMode, Pagination, Grid } from "swiper/modules";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";

const OurProduct = () => {
  const { ManageAllProduct, isLoading, manageLoading, refetch, product } =
    useContext(AuthProduct);

  const [toggle, setToggle] = useState(0);

  const Food_Drinks = ManageAllProduct.filter(
    (item) => item.category === "Food_Drinks"
  );
  const Vegetables = ManageAllProduct.filter(
    (item) => item.category === "Vegetables"
  );
  const Dried_Foods = ManageAllProduct.filter(
    (item) => item.category === "Dried_Foods"
  );
  const Bread_Cake = ManageAllProduct.filter(
    (item) => item.category === "Bread_Cake"
  );
  const Fish_Meat = ManageAllProduct.filter(
    (item) => item.category === "Fish_Meat"
  );

  return (
    <div>
      <div className="text-center mt-[20px] md:mt-[100px]">
        <h1 className="text-[25px] md:text-[50px]">Our Products</h1>
        <p className="text-[16px] lg:text-[18px] text-gray-600">
          A highly efficient slip-ring scanner for today's diagnostic
          requirements.
        </p>
      </div>
      <div>
        <div className="my-[20px] md:my-[50px] flex flex-wrap gap-2 md:gap-0 justify-center items-center">
          <button
            onClick={() => setToggle(0)}
            className={`text-[14px] md:text-[18px]    pb-[4px] md:pb-3 justify-center md:w-[200px] ${
              toggle === 0 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            FOOD & DRINKS
          </button>
          <Apple
            className="text-gray-400 pb-[4px] md:pb-3 md:flex hidden"
            size={32}
          />
          <button
            onClick={() => setToggle(1)}
            className={`text-[14px] md:text-[18px]   pb-[4px] md:pb-3 justify-center md:w-[200px] ${
              toggle === 1 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            VEGETABLES
          </button>
          <Salad
            className="text-gray-400 pb-[4px] md:pb-3 md:flex hidden"
            size={32}
          />
          <button
            onClick={() => setToggle(2)}
            className={`text-[14px] md:text-[18px]    pb-[4px] md:pb-3 justify-center md:w-[200px] ${
              toggle === 2 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            DRIED FOODS
          </button>
          <Cherry
            className="text-gray-400 pb-[4px] md:pb-3 md:flex hidden"
            size={32}
          />
          <button
            onClick={() => setToggle(3)}
            className={`text-[14px] md:text-[18px]    pb-[4px] md:pb-3 justify-center md:w-[200px] ${
              toggle === 3 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            BREAD & CAKE
          </button>
          <CakeSlice
            className="text-gray-400 pb-[4px] md:pb-3 md:flex hidden"
            size={32}
          />
          <button
            onClick={() => setToggle(4)}
            className={`text-[14px] md:text-[18px]    pb-[4px] md:pb-3 justify-center md:w-[200px] ${
              toggle === 4 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            FISH & MEAT
          </button>
          <Fish
            className="text-gray-400 pb-[4px] md:pb-3 md:flex hidden"
            size={32}
          />
        </div>
        <div className="mb-10">
          {manageLoading && (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#80b500]"></div>
            </div>
          )}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            style={{
              "--swiper-pagination-color": "#80b500",
              "--swiper-pagination-bullet-inactive-color": "#80b500",
            }}
            pagination={{
              clickable: true,
            }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination, Grid]}
            className="mySwiper"
          >
            {toggle === 0 ? (
              <>
                {Food_Drinks.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
              </>
            ) : toggle === 1 ? (
              <>
                {Vegetables.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
              </>
            ) : toggle === 2 ? (
              <>
                {Dried_Foods.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
              </>
            ) : toggle === 3 ? (
              <>
                {Bread_Cake.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
              </>
            ) : toggle ? (
              <>
                {Fish_Meat.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              ""
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
