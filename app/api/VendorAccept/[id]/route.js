import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { ObjectId } from "mongodb";
import UserModel from "../../UserModel/UserModel";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const id = params.id;
    const query = { _id: new ObjectId(id) };
    const update = {
      $set: {
        userRole: "vendor",
        vendor: "No",
      },
    };
    const result = await UserModel.findByIdAndUpdate(query, update, {
      new: true,
    });
    return NextResponse.json(
      { data: result, message: "Update Success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a server error", success: false },
      { status: 400 }
    );
  }
};
