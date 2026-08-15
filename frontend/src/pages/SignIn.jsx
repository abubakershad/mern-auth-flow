import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverURL } from "../App";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/signin`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      toast.success(result.data.message || "Signed in successfully!");
      console.log(result);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid email or password.",
      );
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-emerald-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-2 border-gray-300">
        <h1 className="text-emerald-600 text-3xl font-bold mb-2">MERN Auth</h1>
        <p className="text-gray-600 mb-4 leading-snug">
          Sign in to continue to your account.
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

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700 font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter your Password"
              className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <p
          className="text-right text-sm text-emerald-600 cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
        {/* Sign In Button */}
        <button
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 duration-200 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <p className="text-center mt-2">
          Create a new account?{" "}
          <span
            className="text-emerald-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
