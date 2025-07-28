"use client";
import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid"; // Import Swiper grid styles
import { FreeMode, Pagination, Grid } from "swiper/modules";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import BestProductCard from "./BestProductCard";
import PaginationColor from "./ProductCategory/ProductCategory.module.css";

const BestProductCategory = () => {
  const { allProduct, ManageAllProduct } = useContext(AuthProduct);

  const featureProduct = ManageAllProduct.filter(
    (item) => parseFloat(item.rating) > 3 && item.productStatus === "NEW"
  );

  const popularProduct = ManageAllProduct.filter(
    (item) => parseInt(item.price) > 100 && item.productStatus === "NEW"
  );
  const bestSellingProduct = ManageAllProduct.filter(
    (item) => parseInt(item.price) > 100 && item.productStatus === "OLD"
  );

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <div className="grid  grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-[25px] md:text-[40px] border-b-2  mb-4 md:mb-12">
              Featured Products
            </h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              style={{
                "--swiper-pagination-color": "#80b500",
                "--swiper-pagination-bullet-inactive-color": "#80b500",
              }}
              grid={{
                rows: 3,
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[FreeMode, Pagination, Grid]}
              className="mySwiper"
            >
              {featureProduct.map((item) => (
                <SwiperSlide key={item._id}>
                  <BestProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-1">
            <h2 className="text-[25px] md:text-[40px] border-b-2 mb-4 md:mb-12">
              Most View Products
            </h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              grid={{
                rows: 3,
                fill: "row",
              }}
              style={{
                "--swiper-pagination-color": "#80b500",
                "--swiper-pagination-bullet-inactive-color": "#80b500",
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[FreeMode, Pagination, Grid]}
              className="mySwiper"
            >
              {popularProduct.map((item) => (
                <SwiperSlide key={item._id}>
                  <BestProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-1">
            <h2 className="text-[25px] md:text-[40px] border-b-2 mb-4 md:mb-12">
              Bestseller Products
            </h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              grid={{
                rows: 3,
                fill: "row",
              }}
              style={{
                "--swiper-pagination-color": "#80b500",
                "--swiper-pagination-bullet-inactive-color": "#80b500",
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[FreeMode, Pagination, Grid]}
              className="mySwiper"
            >
              {bestSellingProduct.map((item) => (
                <SwiperSlide key={item._id}>
                  <BestProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProductCategory;
