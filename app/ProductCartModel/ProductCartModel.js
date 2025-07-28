import mongoose from "mongoose";

const CartModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  discount: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  title: { type: String, required: true },
  disPrice: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  productStatus: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: String, required: true },
  quantity: {
    type: Number,
    required: true,
  },
  prdID: {
    type: String,
    required: true,
  },
});

const ProductCartModel =
  mongoose.models.Cart || mongoose.model("Cart", CartModel);

export default ProductCartModel;
