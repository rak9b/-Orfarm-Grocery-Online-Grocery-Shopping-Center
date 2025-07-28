"use client";
import CatagoriesCard from "./CatagoriesCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const TopCatagories = () => {
  const category = [
    {
      img: "/category-1.png",

      title: "Browse all",

      item: "(245 item)",
    },
    {
      img: "/category-2.png",

      title: "Vegetables",

      item: "(78 item)",
    },
    {
      img: "/category-3.png",

      title: "Fruits",

      item: "(45 item)",
    },
    {
      img: "/category-4.png",

      title: "Meat",

      item: "(15 item)",
    },
    {
      img: "/category-5.png",

      title: "Fish",

      item: "(85 item)",
    },
  ];

  return (
    <div className="bg-[#f7f5eb] my-[40px] md:my-[100px]">
      <div className="py-[40px] md:py-[80px]">
        <div className="text-center">
          <h1 className="text-[25px] md:text-[50px]">Top Catagories</h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div>
          <div className="container mx-auto">
            <Swiper
              slidesPerView={4}
              freeMode={true}
              navigation={true}
              style={{
                "--swiper-navigation-color": "#80b500",
                "--swiper-pagination-color": "#80b500",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {category.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <CatagoriesCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCatagories;
