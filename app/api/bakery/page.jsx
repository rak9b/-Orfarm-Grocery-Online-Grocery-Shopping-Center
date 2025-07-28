import React from "react";
import BakeryCards from "./BakeryCards";
import Image from "next/image";

const Bakery = () => {
  const ourBakery = [
    {
      image: "/collection1.png",
      title: "Feel the thirst in summer anytime",
      paragraph: "Your body's way of telling you that it's make strong",
    },
    {
      image: "/collection2.png",
      title: "Most popular item for fast food",
      paragraph: "Your body's way of telling you that it's make strong",
    },
    {
      image: "/collection3.png",
      title: "Authentic Japanese food in real taste",
      paragraph: "Your body's way of telling you that it's make strong",
    },
    {
      image: "/collection4.png",
      title: "Explore our family freshest foods",
      paragraph: "Your body's way of telling you that it's make strong",
    },
  ];

  return (
    <div className="my-10">
      <div>
        <Image
          src="/bannerCollection.png"
          className=""
          width={0}
          height={0}
          layout="responsive"
          alt="banner"
        />
      </div>
      <div className="text-center mt-[50px]">
        <h2 className="text-[25px] md:text-3xl">Curated collections</h2>
        <p className="text-gray-500">
          We have categories the best quality grocery items
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {ourBakery.map((item, idx) => (
          <BakeryCards item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Bakery;
