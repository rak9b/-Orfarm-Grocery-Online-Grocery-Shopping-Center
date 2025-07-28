"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/grid";

import { FreeMode, Grid } from "swiper/modules";
import Brand from "./ProductBrandStyle/ProductBrand.module.css";
const ProductBrand = () => {
  return (
    <div className="border-t-2 mt-[20px] md:mt-[100px]">
      <div className="container mx-auto">
        <div className="my-[20px] md:my-[60px]">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
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
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Grid]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/brand1.png"
                alt="brand"
                width={160}
                height={160}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/brand2.png"
                alt="brand"
                width={160}
                height={160}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/brand3.png"
                alt="brand"
                width={160}
                height={160}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/brand4.png"
                alt="brand"
                width={160}
                height={160}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/brand3.png"
                alt="brand"
                width={150}
                height={150}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/brand2.png"
                alt="brand"
                width={160}
                height={160}
                className={`${Brand.brand} ${Brand.brandStyle} ${Brand.brandNormal} cursor-pointer`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductBrand;
