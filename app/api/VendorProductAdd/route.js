import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const product = await request.json();
    const result = new ProductModel(product);
    const data = await result.save();
    return NextResponse.json(
      { data: data, message: "Data Post Success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a server error", success: false },
      { status: 400 }
    );
  }
};
