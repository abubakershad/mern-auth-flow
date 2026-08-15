import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import { serverURL } from "../App";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handeleSendOtp = async () => {
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/send-otp`,
        {
          email,
        },
        { withCredentials: true },
      );
      toast.success(result.data.message || "OTP sent successfully!");
      console.log(result);
      setStep(2);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send OTP. Please try again.",
      );
      console.log(error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/verify-otp`,
        {
          email,
          otp,
        },
        { withCredentials: true },
      );
      toast.success(result.data.message || "OTP verified successfully!");
      console.log(result);
      setStep(3);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid or expired OTP.");
      console.log(error);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      return null;
    }
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/reset-password`,
        {
          email,
          newPassword,
        },
        { withCredentials: true },
      );
      toast.success(result.data.message || "Password reset successfully!");
      console.log(result);
      navigate("/signin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to reset password.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-emerald-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-2 border-gray-300">
        <div className="flex items-center gap-2 mb-4">
          <BiArrowBack
            size={24}
            className="text-emerald-600 cursor-pointer"
            onClick={() => navigate("/signin")}
          />
          <h1 className="text-emerald-600 text-2xl font-bold">
            Forgot Password
          </h1>
        </div>
        {step == 1 && (
          <div>
            <p className="text-gray-600 mb-4 leading-snug">
              Enter your registered email address and we’ll send you an OTP to
              verify your identity.
            </p>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Reset Password Button */}
            <button
              className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 duration-200 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700"
              onClick={handeleSendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {step == 2 && (
          <div>
            <p className="text-gray-600 mb-4 leading-snug">
              Enter the OTP We’ve sent an OTP to your email. Enter it below to
              continue.
            </p>

            {/* OTP */}
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                OTP
              </label>
              <input
                type="email"
                placeholder="Enter your OTP"
                className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </div>

            {/* Reset Password Button */}
            <button
              className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 duration-200 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {step == 3 && (
          <div>
            <p className="text-gray-600 mb-4 leading-snug">
              Create a new password and confirm it below to secure your account.
            </p>

            {/* New Password */}
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="text-gray-700 font-medium mb-1"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={`${showNewPassword ? "text" : "password"}`}
                  placeholder="Enter your New Password"
                  className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <button
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setNewShowPassword((prev) => !prev)}
                >
                  {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-gray-700 font-medium mb-1"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={`${showConfirmPassword ? "text" : "password"}`}
                  placeholder="Confirm your New Password"
                  className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <button
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* Reset Password Button */}
            <button
              className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 duration-200 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
