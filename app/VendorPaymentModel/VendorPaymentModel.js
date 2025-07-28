import mongoose from "mongoose";

const VendorPaymentSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  disPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pay: {
    type: Boolean,
    default: false,
  },
  prdID: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productStatus: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  rating: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  vendorEmail: {
    type: String,
    required: true,
  },
});

const VendorPaymentModel =
  mongoose.models.VendorPayment ||
  mongoose.model("VendorPayment", VendorPaymentSchema);

export default VendorPaymentModel;
