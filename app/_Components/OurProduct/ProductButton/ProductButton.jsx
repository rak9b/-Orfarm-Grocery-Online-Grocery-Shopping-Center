import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Rating } from "@smastrom/react-rating";

import { ArrowRightLeft, Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductButton = ({
  item,
  singleProductShow,
  singleProduct,
  handleIncrement,
  handleDecrement,
  count,
  handleDetailsAddToCart,
  singleProductLoading,
}) => {
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
  } = singleProduct || {};

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full p-0 w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-[#80b500] hover:text-white transition-all"
          >
            {" "}
            <button
              onClick={() => singleProductShow(item?._id)}
              className="w-[40px] bg-white hover:bg-[#80b500] h-[40px] transition-all hover:text-white rounded-full flex justify-center items-center"
            >
              <Eye size={16} />
            </button>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogDescription>
              <div>
                {singleProductLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
                  </div>
                ) : (
                  <div className="flex gap-[50px]">
                    <div>
                      <Image
                        src={image}
                        alt=""
                        width={444}
                        height={444}
                        layout="intrinsic"
                        className=""
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Rating
                          style={{ maxWidth: 80 }}
                          value={parseFloat(prdRating)}
                          readOnly
                        />
                        <span className="text-[#80b500]">( 95 Reviews )</span>
                      </div>
                      <h2 className="text-[25px] text-black my-4 mb-8">
                        {title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[50px] text-[#80b500]">
                          ${price}.00
                        </h2>
                        <h2 className="text-[40px] text-[#b3d366]">
                          <del>${disPrice}.00</del>
                        </h2>
                      </div>
                      <h2 className="border-t-2 border-b-2 mt-8 py-4 text-base w-full">
                        Categories:{" "}
                        <span className="text-black">{category}</span>
                      </h2>

                      <div className="flex items-center gap-4 mt-8">
                        <div className="">
                          <button
                            onClick={handleDecrement}
                            className="w-[40px] h-[60px] outline-none border-b-2 border-t-2 border-l-2 text-center text-lg text-black"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            name=""
                            id=""
                            value={count}
                            className="w-[55px] h-[59px] outline-none border-2 text-center text-lg text-black"
                          />
                          <button
                            onClick={handleIncrement}
                            className="w-[40px] h-[60px] outline-none border-b-2 border-t-2 border-r-2 text-center text-lg text-black"
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              handleDetailsAddToCart(singleProduct)
                            }
                            className="flex items-center gap-2 bg-[#80b500] text-white px-6 py-3 text-lg"
                          >
                            {" "}
                            <ShoppingCart size={20} /> ADD TO CART
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mt-4">
                          <button className="flex items-center gap-2 text-lg text-black">
                            {" "}
                            <Heart size={20} /> Add to Wishlist
                          </button>
                          <button className="flex items-center gap-2 text-lg text-black">
                            <ArrowRightLeft size={20} /> Compare
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 border-t-2 pt-4 mt-4">
                        <h2 className="text-lg text-black">Share:</h2>
                        <div className="flex items-center gap-4">
                          <a href="https://x.com" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="fill-current"
                            >
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                          </a>
                          <a href="https://www.youtube.com" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="fill-current"
                            >
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                          </a>
                          <a href="https://facebook.com" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="fill-current"
                            >
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductButton;
