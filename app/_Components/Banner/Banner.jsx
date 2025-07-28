import { MoveRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8">
        <div className="lg:col-span-4">
          <div className="md:w-full xl:h-[545px] lg:h-[405px] md:h-[290px] bg-cover rounded-md bg-no-repeat bg-center bg-[url('/Banner1.png')]">
            <div className="md:pt-[50px] lx:pt-[120px] pt-[20px] pl-[20px] pb-[20px] md:pb-[0px] md:pl-[80px]">
              <h2 className="uppercase text-gray-600">
                Exclusive Offer{" "}
                <button className="text-[#1d8e42] uppercase ml-2 rounded-full px-3 py-[4px] bg-gradient-to-r from-[#c4e4d3] to-gray-100">
                  -20% Off
                </button>
              </h2>
              <h1 className="md:text-[25px] xl:text-[55px] lg:text-[55px] text-[20px] font-extrabold md:w-[400px] lx:my-2 md:my-1 my-2 md:leading-[60px]">
                Feed your family the best
              </h1>
              <h2 className="md:text-lg text-gray-600">
                Only this week. Don't miss...
              </h2>
              <h2 className="md:text-lg text-gray-600 my-4">
                from{" "}
                <span className="md:text-2xl xl:text-4xl lg:text-4xl text-lg text-red-500">
                  $7.99
                </span>
              </h2>
              <button className="bg-[#80b500] rounded-full text-sm md:text-base flex justify-center text-white items-center gap-2 md:py-2 md:px-6 py-[4px] px-3">
                Shop Now <MoveRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={"/Banner2.gif"}
            width={400}
            height={110}
            alt="banner"
            className="rounded-md lg:w-[400px] w-full"
          />
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:mt-8">
          <div className="col-span-1">
            <div className="w-full lg:h-[250px] bg-cover rounded-md bg-no-repeat bg-center bg-[url('/Banner3.jpg')]">
              <div className="flex justify-end md:mr-[40px] pt-[20px] mr-[20px] pb-[20px] md:pb-[0px] md:pt-[45px]">
                <div>
                  <h2 className="lg:text-2xl text-lg text-gray-600">
                    Exclusive is so fresh
                  </h2>
                  <h2 className="lg:text-3xl text-xl font-extrabold my-2">
                    only in Bacola
                  </h2>
                  <h2 className="text-gray-600 text-sm mb-4">
                    Bacola Weekend Discount
                  </h2>
                  <button className="text-white rounded-full px-6 text-sm py-[6px] bg-[#80b500]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full md:h-[185px] xl:h-[250px] lg:h-[250px] rounded-md bg-cover bg-no-repeat bg-center bg-[url('/Banner4.png')]">
              <div className="flex justify-end md:mr-[40px] pt-[20px] mr-[20px] pb-[20px] md:pb-[0px] md:pt-[25px] xl:pt-[45px] lg:pt-[45px]">
                <div>
                  <h2 className="lg:text-2xl text-lg text-gray-600">
                    Big Discount
                  </h2>
                  <h2 className="lg:text-3xl text-xl font-extrabold my-2">
                    Organic Legumes
                  </h2>
                  <h2 className="text-gray-600 text-sm mb-4">
                    Bacola Weekend Discount
                  </h2>
                  <button className="text-white rounded-full px-6 text-sm py-[6px] bg-[#80b500]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
