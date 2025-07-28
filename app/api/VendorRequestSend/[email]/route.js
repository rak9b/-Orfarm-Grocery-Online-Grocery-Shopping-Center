import { NextResponse } from "next/server";
import UserModel from "../../UserModel/UserModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";

export const PATCH = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { email: email };

    const updatedUser = await UserModel.findOneAndUpdate(
      query,
      { $set: { vendor: "Yes" } },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
