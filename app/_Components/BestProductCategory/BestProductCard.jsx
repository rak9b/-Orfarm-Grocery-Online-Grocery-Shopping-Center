import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import Shadow from "./ProductCategory/ProductCategory.module.css";
const BestProductCard = ({ item }) => {
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
  } = item || {};

  return (
    <div>
      <div
        className={`border-2 cursor-pointer ${Shadow.cardShadow} ${Shadow.cardTransition}`}
      >
        <div
          className={`flex flex-col md:flex-row items-center py-8 px-6 gap-4 `}
        >
          <div>
            <Image
              src={image}
              alt=""
              layout="intrinsic"
              width={100}
              height={0}
              className={``}
            />
          </div>
          <div className="space-y-3">
            <Rating style={{ maxWidth: 100 }} value={4} readOnly />
            <h2 className="text-lg hover:text-[#80b500]">{title}</h2>
            <h2 className="text-lg">
              ${disPrice}.00{" "}
              <span className="text-[#80b500] text-base">
                <del>${price}.00</del>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
