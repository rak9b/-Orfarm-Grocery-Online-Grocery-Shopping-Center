import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import UserModel from "../UserModel/UserModel";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const user = await request.json();
    const exist = await UserModel.findOne({ email: user?.email });
    if (exist) {
      return NextResponse.json({
        message: "User Already Created",
        success: true,
        status: 200,
      });
    }
    const hashPassword = bcrypt.hashSync(user.password, 14);
    const newUser = new UserModel({ ...user, password: hashPassword });
    await newUser.save();
    return NextResponse.json({
      data: newUser,
      message: "User Created Successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
    });
  }
};
