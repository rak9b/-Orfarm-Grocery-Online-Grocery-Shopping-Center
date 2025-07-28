import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "../ProductModel/ProductModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const ManageProduct = await ProductModel.find();
    return NextResponse.json(
      { data: ManageProduct, message: "product get success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There are server error", success: false },
      { status: 500 }
    );
  }
};
