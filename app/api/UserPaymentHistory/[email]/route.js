import PaymentModel from "@/app/PaymentModel/PaymentModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { email: email };
    const paymentData = await PaymentModel.find(query);
    return NextResponse.json(
      { data: paymentData, message: "payment data get success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a payment get error", success: false },
      { status: 400 }
    );
  }
};
