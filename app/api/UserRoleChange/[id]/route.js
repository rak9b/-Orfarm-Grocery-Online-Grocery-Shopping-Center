import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import UserModel from "../../UserModel/UserModel";

export const PATCH = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const id = params.id;
    const query = { _id: new ObjectId(id) };
    const { Role } = await request.json();
    const update = {
      $set: {
        userRole: Role,
      },
    };
    const result = await UserModel.findByIdAndUpdate(query, update, {
      new: true,
    });
    return NextResponse.json(
      { data: result, message: "Update role success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There was a server error", success: false },
      { status: 400 }
    );
  }
};
