import Image from "next/image";
import React from "react";

const FoodDrinks = () => {
  const newsDetails = [
    {
      image: "/News1.png",
      title:
        "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      paragraph:
        "Organic and healthy snack options like dried fruits, nuts, granola, as well as beverages like cold-pressed juices and herbal teas.",
    },
    {
      image: "/News2.png",
      title:
        "Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco",
      paragraph:
        " wide range of organic dairy products such as milk butter yogurt and free-range eggs, all sourced from local farms",
    },
    {
      image: "/News3.png",
      title:
        "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      paragraph:
        "A collection of organic rice, lentils, beans, and flour, catering to health-conscious consumers",
    },
  ];

  return (
    <div>
      <div className="bg-[#f6f6e8] my-10">
        <div className="container mx-auto">
          <div className="flex py-[40px] md:flex-row gap-8 md:gap-0 flex-col justify-between items-center">
            <div className=" md:space-y-4">
              <h2 className="text-[20px]">Rubber plant get 30% off</h2>
              <h2 className="text-[20px] md:text-[60px] leading-[60px] md:w-[300px]">
                Grow green and be safe
              </h2>
              <button className="bg-[#ad5c08] px-10 py-3 text-white">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                src="/foodTree.png"
                width={0}
                height={0}
                layout="responsive"
                alt="tree"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl">Feeding</h2>
                <p>
                  Feeding food refers to the process of providing nourishment.
                </p>
              </div>
              <div>
                <h2 className="text-xl">Light</h2>
                <p>
                  Light is a form of energy that makes it possible for us to
                  see.
                </p>
              </div>
              <div>
                <h2 className="text-xl">Care</h2>
                <p>
                  Care refers to the attention and effort given to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 mb-8">
          {newsDetails.map((item, idx) => (
            <div key={idx}>
              <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 h-full">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Image
                      src={item?.image}
                      alt=""
                      height={288}
                      width={0}
                      layout="responsive"
                      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex items-center text-xs">
                      <span>6 min ago</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                      <h3 className="text-xl font-semibold dark:text-violet-600">
                        {item?.title}
                      </h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">
                      {item?.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDrinks;
