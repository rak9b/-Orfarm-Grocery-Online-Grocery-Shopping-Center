import ProductCartModel from "@/app/ProductCartModel/ProductCartModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const ProductCartData = await request.json();
    const query = { prdID: ProductCartData.prdID };
    const cartProductExist = await ProductCartModel.findOne(query);
    if (cartProductExist) {
      return NextResponse.json(
        { message: "Product already exists in the cart", success: false },
        { status: 400 }
      );
    }
    const result = await ProductCartModel.create(ProductCartData);
    return NextResponse.json(
      { message: "Cart data added successfully", success: true, data: result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was a server error",
        success: false,
      },
      { status: 500 }
    );
  }
};
