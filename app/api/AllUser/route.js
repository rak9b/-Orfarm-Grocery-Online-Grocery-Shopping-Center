import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const { searchParams } = new URL(request.url);
    const size = searchParams.get("size");
    const page = searchParams.get("page");
    const sizeNumber = parseInt(size);
    const pageNumber = parseInt(page);
    const totalUsers = await UserModel.countDocuments();
    const allUser = await UserModel.find()
      .skip(sizeNumber * (pageNumber - 1))
      .limit(sizeNumber);
    return NextResponse.json(
      {
        data: allUser,
        totalUsers,
        message: "All user get success",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There is a server error", success: false },
      { status: 400 }
    );
  }
};
