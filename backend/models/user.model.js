import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  resetOtp: {
    type: String,
  },
  isOtpVerify: {
    type: Boolean,
    default: false,
  },
  otpExpire: {
    type: Date,
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
