import VendorPaymentModel from "@/app/VendorPaymentModel/VendorPaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { vendorEmail: email };
    const result = await VendorPaymentModel.find(query);
    return NextResponse.json(
      { data: result, message: "Vendor payment success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: error,
        message: "There was a vendor payment error",
        success: false,
      },
      { status: 400 }
    );
  }
};
