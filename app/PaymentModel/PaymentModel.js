import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "cancelled"],
  },
  transaction: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: () => {
      const date = new Date();
      return date.toISOString().split("T")[0];
    },
  },
});

const PaymentModel =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default PaymentModel;
