import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const size = searchParams.get("size");
    const page = searchParams.get("page");
    const New = searchParams.get("New") || "";
    const Stock = searchParams.get("Stock") || "";
    const priceFilter = searchParams.get("price") || 60;
    const location = searchParams.get("location");
    const search = searchParams.get("search");
    const category = searchParams.get("category");

    let query = {};
    if (priceFilter) {
      query.price = { $gte: parseFloat(priceFilter) };
    }

    if (New === "NEW") {
      query.productStatus = New;
    }

    if (Stock === "In Stock") {
      query.stock = Stock;
    }

    if (location) {
      query.location = location;
    }
    if (category) {
      query.category = category;
    }
    if (search) {
      const regex = new RegExp(`^${search}`, "i");
      query.title = { $regex: regex };
    }

    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 1;

    await ConnectMongoose();
    const productCount = await ProductModel.countDocuments(query);
    const product = await ProductModel.find(query)
      .skip(sizeNumber * (pageNumber - 1))
      .limit(sizeNumber);

    return NextResponse.json(
      {
        data: product,
        totalCount: productCount,
        message: "Product Data",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was a server error",
        success: false,
      },
      { status: 500 }
    );
  }
};
