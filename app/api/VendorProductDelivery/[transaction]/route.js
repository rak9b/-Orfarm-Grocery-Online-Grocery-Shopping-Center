import PaymentModel from "@/app/PaymentModel/PaymentModel";
import VendorPaymentModel from "@/app/VendorPaymentModel/VendorPaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const transaction = params.transaction;
    const query = { transaction: transaction };
    const update = {
      $set: {
        status: "success",
      },
    };
    const result = await PaymentModel.findOneAndUpdate(query, update, {
      new: true,
    });
    await VendorPaymentModel.updateMany(query, update);
    return NextResponse.json(
      { data: result, message: "delivery success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a delivery Error", success: false },
      { status: 400 }
    );
  }
};
