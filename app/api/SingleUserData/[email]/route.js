import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { email: email };
    const userFind = await UserModel.find(query);
    return NextResponse.json(
      { data: userFind, success: true, message: "Single user find success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, success: false, message: "There was a server error" },
      { status: 400 }
    );
  }
};
