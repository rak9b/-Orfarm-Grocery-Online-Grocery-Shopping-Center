"use client";
import {
  decrement,
  increment,
} from "@/app/ReduxProvider/CreateSlice/CreateSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
export const AuthProduct = createContext();

const ProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [singleProductLoading, setSingleProductLoading] = useState(false);
  const session = useSession();
  const count = useSelector((state) => state.counter.value);
  const [productLocation, setProductLocation] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const disPatch = useDispatch();
  const router = useRouter();
  const [myCart, setMyCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];
      setMyCart(storedCarts);
    }
  }, []);

  const email = session?.data?.user?.email;

  const { refetch: singleUserLoading, data: singleUserData = [] } = useQuery({
    queryKey: ["singleUserData", !email],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleUserData/${email}`
      );
      return resp?.data?.data;
    },
  });

  const { isLoading: userRoleLoading, data: userRole = [] } = useQuery({
    queryKey: ["userRole", !email],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllUserRole/${email}`
      );
      return resp?.data;
    },
  });

  const {
    refetch,
    isLoading,
    data: allProduct = [],
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllProduct`
        );
        return resp?.data?.data;
      } catch (error) {
        // console.log(error)
      }
    },
  });

  const {
    refetch: manageRefetch,
    isLoading: manageLoading,
    data: ManageAllProduct = [],
  } = useQuery({
    queryKey: ["manageAllProduct"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllProductManage`
        );
        return resp?.data?.data;
      } catch (error) {
        // console.log(error)
      }
    },
  });

  const singleProductShow = async (id) => {
    try {
      setSingleProductLoading(true);
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleProduct/${id}`
      );
      setSingleProductLoading(false);
      setSingleProduct(resp?.data?.data);
    } catch (error) {
      // console.log("Server Error");
    }
  };

  const handleAddToCart = async (prd) => {
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }
    const userEmail = session?.data?.user?.email;
    const updatedProduct = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    delete updatedProduct._id;
    delete updatedProduct.__v;

    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    const existing = carts.find((item) => item.prdID === updatedProduct.prdID);
    if (existing) {
      return toast.error("Product Already Added");
    }
    carts.push(updatedProduct);
    localStorage.setItem("carts", JSON.stringify(carts));
    setMyCart(carts);
    toast.success("Product Add Success");
  };

  const handleWishList = async (prd) => {
    const userEmail = session?.data?.user?.email;
    const updatedProduct = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    delete updatedProduct._id;
    delete updatedProduct.__v;
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existing = wishlist.find(
      (item) => item.prdID === updatedProduct.prdID
    );
    if (existing) {
      return toast.error("Already Added Wishlist");
    }
    wishlist.push(updatedProduct);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Wishlist Add Success");
  };

  const handleDetailsAddToCart = async (prd) => {
    const userEmail = session?.data?.user?.email;
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }
    const updatedData = {
      ...prd,
      prdID: prd._id,
      quantity: count,
      email: userEmail,
      price: parseInt(prd.price) * count,
    };
    delete updatedData._id;
    delete updatedData.__v;
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    const existingIndex = carts.findIndex(
      (item) => item.prdID === updatedData.prdID
    );
    if (existingIndex !== -1) {
      carts[existingIndex] = {
        ...carts[existingIndex],
        quantity: count,
        price: parseInt(prd.price) * count,
      };
      localStorage.setItem("carts", JSON.stringify(carts));
      return toast.success("Product Updated Successfully");
    }
    carts.push(updatedData);
    localStorage.setItem("carts", JSON.stringify(carts));
    setMyCart(carts);
    toast.success("Product Added Successfully");
  };

  const handleIncrement = () => {
    disPatch(increment());
  };
  const handleDecrement = () => {
    if (count > 1) {
      disPatch(decrement());
    }
  };
  const handleLocation = (local) => {
    setProductLocation(local);
  };

  const handleSearch = (search) => {
    setProductSearch(search.target.value);
  };
  const handleCategory = (cate) => {
    setProductCategory(cate);
  };

  const productInfo = {
    allProduct,
    refetch,
    manageRefetch,
    isLoading,
    singleProductShow,
    singleProduct,
    handleWishList,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    count,
    handleDetailsAddToCart,
    ManageAllProduct,
    manageLoading,
    setProductLocation,
    myCart,
    productLocation,
    handleLocation,
    handleSearch,
    setProductSearch,
    productSearch,
    handleCategory,
    productCategory,
    userRole,
    userRoleLoading,
    singleUserData,
    singleUserLoading,
    setTotalPrice,
    totalPrice,
    singleProductLoading,
  };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
