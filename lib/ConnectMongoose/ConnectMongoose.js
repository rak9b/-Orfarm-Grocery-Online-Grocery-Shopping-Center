import mongoose from "mongoose";

const ConnectMongoose = async () => {
  try {
    const res = await mongoose.connect(process.env.MongooseURI);

    console.log("Mongoose Connect Successfully");
  } catch (error) {
    console.error("Test MongoDB connection failed:", error);
  }
};

export default ConnectMongoose;
