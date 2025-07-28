import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const { searchParams } = new URL(request.url);
    const size = parseInt(searchParams.get("size"));
    const page = parseInt(searchParams.get("page"));
    const query = { userRole: "vendor" };
    const AllVendor = await UserModel.find(query)
      .skip(size * (page - 1))
      .limit(size);
    const vendorCount = await UserModel.countDocuments(query);
    return NextResponse.json(
      {
        data: AllVendor,
        vendorCount,
        message: "all vendor get success",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There Was a server error", success: false },
      { status: 400 }
    );
  }
};
