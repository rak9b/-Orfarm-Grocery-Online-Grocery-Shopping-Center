import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { ObjectId } from "mongodb";
import UserModel from "../../UserModel/UserModel";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const id = params.id;
    const query = { _id: new ObjectId(id) };
    const result = await UserModel.findByIdAndDelete(query);
    return NextResponse.json(
      { data: result, message: "User Delete success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a server error", success: false },
      { status: 400 }
    );
  }
};
