import VendorPaymentModel from "@/app/VendorPaymentModel/VendorPaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const product = await request.json();
    const result = await VendorPaymentModel.insertMany(product);
    return NextResponse.json(
      { data: result, message: "Vendor Data Post success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a server error", success: false },
      { status: 400 }
    );
  }
};
