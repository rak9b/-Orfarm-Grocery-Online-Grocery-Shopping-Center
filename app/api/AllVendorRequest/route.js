import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const query = { vendor: "Yes" };
    const { searchParams } = new URL(request.url);
    const size = parseInt(searchParams.get("size"));
    const page = parseInt(searchParams.get("page"));
    const requestCounter = await UserModel.countDocuments(query);
    const vendorRequestData = await UserModel.find(query)
      .skip(size * (page - 1))
      .limit(size);
    return NextResponse.json(
      {
        data: vendorRequestData,
        requestCounter,
        message: "Request Vendor Success",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: error,
        message: " There was a server error",
        success: false,
      },
      { status: 400 }
    );
  }
};
