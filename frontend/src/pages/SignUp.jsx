import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverURL } from "../App";
import { toast } from "sonner";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/signup`,
        {
          name,
          email,
          mobile,
          password,
        },
        { withCredentials: true },
      );
      toast.success(result.data.message || "Account created successfully!");
      console.log(result);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to create your account. Please try again.",
      );
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-emerald-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-2 border-gray-300">
        <h1 className="text-emerald-600 text-3xl font-bold mb-2">MERN Auth</h1>
        <p className="text-gray-600 mb-4 leading-snug">
          Create your account to get started.
        </p>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

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

        {/* Mobile */}
        <div className="mb-4">
          <label htmlFor="mobile" className="text-gray-700 font-medium mb-1">
            Mobile
          </label>
          <input
            type="tel"
            placeholder="Enter your Mobile no"
            className="w-full rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:border-emerald-500"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
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

        {/* Sign Up Button */}
        <button
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 duration-200 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <span
            className="text-emerald-600 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
