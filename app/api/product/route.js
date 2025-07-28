import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const productData = await request.json();
    const newProducts = await ProductModel.insertMany(productData);
    return NextResponse.json({
      data: newProducts,
      message: "Products Created Successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
    });
  }
};
