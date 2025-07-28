import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  discount: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  disPrice: { type: String, required: true },
  productStatus: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: String, required: true },
  vendorEmail: {
    type: String,
    required: true,
  },
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
