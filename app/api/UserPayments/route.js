import PaymentModel from "@/app/PaymentModel/PaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const paymentData = await request.json();
    const newPayment = new PaymentModel(paymentData);
    const result = await newPayment.save();
    return NextResponse.json(
      { data: result, message: "Payment data save success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a payment error", success: false },
      { status: 400 }
    );
  }
};
