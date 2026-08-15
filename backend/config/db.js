import mongoose from "mongoose";

const connecdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db error", error);
  }
};

export default connecdb;
