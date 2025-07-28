import PaymentModel from "@/app/PaymentModel/PaymentModel";
import VendorPaymentModel from "@/app/VendorPaymentModel/VendorPaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectMongoose();
    const Revenue = await VendorPaymentModel.find();
    const totalRevenue = Revenue.reduce(
      (prev, after) => parseInt(prev) + parseInt(after?.price),
      0
    );
    const Sales = await PaymentModel.find();
    const totalSales = Sales.reduce(
      (prev, after) => parseInt(prev) + parseInt(after?.price),
      0
    );
    const totalProduct = await VendorPaymentModel.countDocuments();
    return NextResponse.json(
      {
        data: { totalRevenue, totalSales, totalProduct },
        message: "Admin all data get success",
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
