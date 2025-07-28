import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { ObjectId } from "mongodb";
import ProductModel from "../../ProductModel/ProductModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const { id } = params;
    const query = { _id: new ObjectId(id) };
    const product = await ProductModel.findOne(query);
    if (product) {
      return NextResponse.json(
        {
          message: "Single data fetched successfully",
          data: product,
          success: true,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Product not found", success: false },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", success: false },
      { status: 500 }
    );
  }
};
