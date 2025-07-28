import mongoose from "mongoose";

const WishModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
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
  quantity: {
    type: Number,
    required: true,
  },
  prdID: {
    type: String,
    required: true,
  },
});

const WishListModel = mongoose.models.wish || mongoose.model("wish", WishModel);
export default WishListModel;
