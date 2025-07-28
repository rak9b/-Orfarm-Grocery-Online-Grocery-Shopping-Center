import VendorPaymentModel from "@/app/VendorPaymentModel/VendorPaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "../../ProductModel/ProductModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { vendorEmail: email };
    const findTotalPrice = await VendorPaymentModel.find(query);
    const totalPrice = findTotalPrice.reduce(
      (prev, after) => parseInt(prev) + parseInt(after.price),
      0
    );
    const totalOrders = await VendorPaymentModel.countDocuments(query);
    const totalProduct = await ProductModel.countDocuments(query);
    return NextResponse.json(
      {
        data: { totalPrice, totalOrders, totalProduct },
        message: "Vendor All Data Fetch Success",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: error,
        message: "There was a server error",
        success: false,
      },
      { status: 400 }
    );
  }
};
