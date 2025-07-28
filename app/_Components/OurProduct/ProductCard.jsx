"use client";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import Card from "./Card/card.module.css";
import ProductButton from "./ProductButton/ProductButton";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import ProductCardStyle from "./ProductCardStyle/ProductCardStyle.module.css";
import Image from "next/image";
const ProductCard = ({ item }) => {
  const {
    singleProductShow,
    singleProduct,
    handleAddToCart,
    handleWishList,
    handleIncrement,
    handleDecrement,
    count,
    handleDetailsAddToCart,
    singleProductLoading,
  } = useContext(AuthProduct);
  const {
    category,
    disPrice,
    discount,
    image,
    location,
    price,
    productStatus,
    rating: prdRating,
    stock,
    title,
    _id,
  } = item || {};

  return (
    <div>
      <div
        className={`max-w-xs border-[1px] ${Card.card} ${ProductCardStyle.CardAnimation} relative`}
      >
        <Image
        height={288}
        width={308}
        layout="intrinsic"  
          src={image}
          alt=""
          className={`object-cover object-center  rounded-t-md  dark:bg-gray-500 ${Card.cardImage}`}
        />
        <div className="absolute top-5 right-5">
          <span className="bg-[#80b500] text-white px-4 text-base py-1 rounded-tl-[15px] rounded-tr-none rounded-bl-none rounded-br-[15px]">
            {productStatus === "NEW" ? (
              <>{productStatus}</>
            ) : (
              <>{`-${discount}%`}</>
            )}
          </span>
        </div>
        <div className={Card.overlay}>
          <div className="flex justify-center items-center gap-2">
            {/* <button className="w-[40px] bg-white hover:bg-[#80b500] h-[40px] transition-all hover:text-white rounded-full flex justify-center items-center">
              <Eye size={16} />
            </button> */}
            <ProductButton
              item={item}
              singleProductShow={singleProductShow}
              singleProduct={singleProduct}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              count={count}
              handleDetailsAddToCart={handleDetailsAddToCart}
              singleProductLoading={singleProductLoading}
            />
            <button
              onClick={() => handleAddToCart(item)}
              className="w-[40px] bg-white h-[40px] hover:bg-[#80b500] transition-all hover:text-white rounded-full flex justify-center items-center"
            >
              <ShoppingCart size={16} />
            </button>
            <button
              onClick={() => handleWishList(item)}
              className="w-[40px] bg-white h-[40px] hover:bg-[#80b500] transition-all hover:text-white rounded-full flex justify-center items-center"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 items-center text-center">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <Rating
              style={{ maxWidth: 100 }}
              value={parseFloat(prdRating)}
              readOnly
            />
            <h2 className="text-lg">{title}</h2>
            <div className="flex items-center gap-2">
              <h2 className="text-[23px] text-[#80b500]">${price}.00</h2>
              <h2 className="text-[23px] text-[#b3d366]">
                <del>${disPrice}.00</del>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
