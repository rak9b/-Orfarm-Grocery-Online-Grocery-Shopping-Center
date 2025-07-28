import WishListModel from "@/app/WishListProductModel/WishListProductModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const WishProduct = await request.json();
    // console.log(WishProduct);
    const wishProductExisting = await WishListModel.findOne({
      prdID: WishProduct.prdID,
    });
    if (wishProductExisting) {
      return NextResponse.json(
        { message: "Product already exists in the cart", success: false },
        { status: 400 }
      );
    }
    const result = await WishListModel.create(WishProduct);
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
