"use client";
import { useState } from "react";
import * as React from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
const AddProduct = () => {
  const [images, setImages] = useState(null);
  const session = useSession();
  const { refetch, manageRefetch } = useContext(AuthProduct);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(file);
    }
  };

  const [prdCategory, setPrdCategory] = useState();
  const [prdLocation, setPrdLocation] = useState();
  const [prdStatus, setPrdStatus] = useState();
  const [prdStock, setPrdStock] = useState();

  const handleSelectValue = (cate) => {
    setPrdCategory(cate);
  };

  const handleLocationValue = (loc) => {
    setPrdLocation(loc);
  };
  const handleProductStatus = (stat) => {
    setPrdStatus(stat);
  };
  const handleProductStock = (sto) => {
    setPrdStock(sto);
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();

    try {
      const vendorEmail = session?.data?.user?.email;
      const formData = new FormData();
      if (images) {
        formData.append("image", images);
      } else {
        console.error("No image selected!");
        return;
      }

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: process.env.NEXT_PUBLIC_ImageBB_API_Key,
          },
        }
      );

      let from = event.target;
      const image = await response.data.data.url;
      const discount = from.discount.value;
      const rating = from.rating.value;
      const title = from.title.value;
      const price = from.price.value;
      const disPrice = from.discountPrice.value;
      const productStatus = prdStatus;
      const location = prdLocation;
      const category = prdCategory;
      const stock = prdStock;

      if (parseFloat(rating) > 5) {
        return toast.error("Rating Cannot be given more than 5");
      }

      const allData = {
        image,
        discount,
        rating,
        title,
        price,
        disPrice,
        productStatus,
        location,
        category,
        stock,
        vendorEmail,
      };
      // console.log(allData);

      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/VendorProductAdd`,
        allData
      );
      if (resp?.data.success) {
        // refetch();
        // manageRefetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your product has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      }
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <form onSubmit={handleAddProduct} className="mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1">
            <div>
              <div>
                <label className="text-gray-500 text-[20px]">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  required
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Price</label>
                <br />
                <input
                  type="number"
                  name="price"
                  required
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Discount</label>
                <br />
                <input
                  type="number"
                  name="discount"
                  required
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <div>
                  <label className="text-gray-500 text-[20px]">Category</label>
                  <br />
                  <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                    <Select onValueChange={handleSelectValue} required>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="CATEGORIES" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>CATEGORIES</SelectLabel>
                          <SelectItem value="Food_Drinks">
                            Food & Drinks
                          </SelectItem>
                          <SelectItem value="Vegetables">Vegetables</SelectItem>
                          <SelectItem value="Dried_Foods">
                            Dried Foods
                          </SelectItem>
                          <SelectItem value="Bread_Cake">
                            Bread & Cake
                          </SelectItem>
                          <SelectItem value="Fish_Meat">Fish & Meat</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Status</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleProductStatus} required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="STATUS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="NEW">NEW</SelectItem>
                        <SelectItem value="OLD">OLD</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <div className="mb-4">
                <label className="text-gray-500 text-[20px]">Image</label>
                <br />
                <input
                  onChange={handleImageChange}
                  type="file"
                  required
                  className="file-input w-full bg-gray-200 text-gray-500 text-[17px] py-[8px] mt-2 px-5"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">
                  Discount Price
                </label>
                <br />
                <input
                  type="number"
                  name="discountPrice"
                  required
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Rating</label>
                <br />
                <input
                  type="number"
                  name="rating"
                  required
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Location</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleLocationValue} required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                        <SelectItem value="California">California</SelectItem>
                        <SelectItem value="Florida">Florida</SelectItem>
                        <SelectItem value="New_York">New York</SelectItem>
                        <SelectItem value="Washington">Washington</SelectItem>
                        <SelectItem value="Alaska">Alaska</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Stock</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleProductStock} required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="STOCK" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="In Stock">In Stock</SelectItem>
                        <SelectItem value="Out Stock">Out Stock</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#22c55e] w-full py-2 text-white text-[20px] rounded-sm">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
