import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const userRole = await UserModel.findOne({ email });
    return NextResponse.json(
      {
        data: userRole?.userRole,
        success: true,
        message: "User role Find Success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, success: false, message: "There a server error" },
      { status: 400 }
    );
  }
};
