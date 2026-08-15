// Its home page code|UI takes from AI but all excepted home page complete authentication is built itself.

import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaSignInAlt,
  FaKey,
  FaShieldAlt,
  FaMobileAlt,
  FaLock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const authSteps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Register a new account using your name, email, mobile number and password.",
      action: "Go to Sign Up",
      path: "/signup",
      color: "emerald",
    },
    {
      icon: <FaSignInAlt />,
      title: "Sign In",
      description:
        "Use your registered credentials to securely access your account.",
      action: "Go to Sign In",
      path: "/signin",
      color: "blue",
    },
    {
      icon: <FaKey />,
      title: "Forgot Password",
      description:
        "Forgot your password? Start the recovery process and receive an OTP.",
      action: "Reset Password",
      path: "/forgot-password",
      color: "orange",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Authentication",
      description:
        "Authentication is handled through a dedicated backend API with protected credentials.",
    },
    {
      icon: <FaMobileAlt />,
      title: "OTP Verification",
      description:
        "Verify your identity with a one-time password during the recovery process.",
    },
    {
      icon: <FaLock />,
      title: "Password Recovery",
      description:
        "A complete forgot-password and reset-password workflow is available.",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                M
              </div>

              <span className="text-xl font-bold text-emerald-600">
                MERN Auth
              </span>
            </button>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/signin")}
                className="hidden sm:block px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 transition cursor-pointer"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaCheckCircle />
                Complete Authentication System
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Simple and Secure{" "}
                <span className="text-emerald-600">MERN Authentication</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                A complete authentication experience built with React, Node.js,
                Express and MongoDB. Test registration, login, password
                recovery, OTP verification and password reset from one place.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition cursor-pointer shadow-md"
                >
                  Create Account
                  <FaArrowRight />
                </button>

                <button
                  onClick={() => navigate("/signin")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:border-emerald-500 hover:text-emerald-600 rounded-lg font-semibold transition cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-40" />

              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Authentication</p>
                    <h2 className="text-xl font-bold text-gray-900">
                      System Overview
                    </h2>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                    <FaShieldAlt />
                  </div>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                      <FaUserPlus />
                    </div>

                    <div>
                      <h3 className="font-semibold">Registration</h3>
                      <p className="text-sm text-gray-500">
                        Create a new account
                      </p>
                    </div>

                    <FaCheckCircle className="ml-auto text-emerald-600" />
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                      <FaSignInAlt />
                    </div>

                    <div>
                      <h3 className="font-semibold">Authentication</h3>
                      <p className="text-sm text-gray-500">
                        Secure account login
                      </p>
                    </div>

                    <FaCheckCircle className="ml-auto text-blue-600" />
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                      <FaKey />
                    </div>

                    <div>
                      <h3 className="font-semibold">Recovery</h3>
                      <p className="text-sm text-gray-500">
                        OTP & password reset
                      </p>
                    </div>

                    <FaCheckCircle className="ml-auto text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-emerald-600 font-semibold mb-2">
              AUTHENTICATION FLOW
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Test Every Authentication Feature
            </h2>

            <p className="mt-4 text-gray-600">
              Quickly navigate through the authentication pages and test each
              part of your application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {authSteps.map((step) => (
              <div
                key={step.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed min-h-20">
                  {step.description}
                </p>

                <button
                  onClick={() => navigate(step.path)}
                  className="mt-5 flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 cursor-pointer"
                >
                  {step.action}
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to test the authentication flow?
            </h2>

            <p className="mt-4 text-emerald-50 max-w-2xl mx-auto">
              Create an account first, then test sign in and password recovery
              to verify your complete authentication system.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition cursor-pointer"
              >
                Create Account
              </button>

              <button
                onClick={() => navigate("/signin")}
                className="px-6 py-3 border border-emerald-300 text-white rounded-lg font-semibold hover:bg-emerald-700 transition cursor-pointer"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/forgot-password")}
                className="px-6 py-3 border border-emerald-300 text-white rounded-lg font-semibold hover:bg-emerald-700 transition cursor-pointer"
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold">MERN Auth</p>
              <p className="text-sm mt-1">Complete authentication workflow.</p>
            </div>

            <div className="flex items-center gap-5 text-sm">
              <button
                onClick={() => navigate("/signin")}
                className="hover:text-white cursor-pointer"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="hover:text-white cursor-pointer"
              >
                Sign Up
              </button>

              <button
                onClick={() => navigate("/forgot-password")}
                className="hover:text-white cursor-pointer"
              >
                Password Recovery
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm">
            © {new Date().getFullYear()} MERN Auth. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
