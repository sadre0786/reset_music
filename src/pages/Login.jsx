import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { assets } from "../assets/assets";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full min-h-screen bg-image flex flex-col items-center">
      <img src={assets.reset_icon} className="w-10 py-3 block" alt="" />
      <div className="gradiant-line"></div>

      <div className="text-white mt-auto mb-auto flex flex-col justify-around items-center">
        <h1 className="text-4xl mb-6">
          <span className="text-blue-700">login</span> to reset
        </h1>

        <form className="md:w-[650px] w-[95vw] rounded-t-lg md:py-6 md:px-12 py-3 px-6 flex items-center flex-col border-b-[3px] border-blue-800 bg-gradient-to-br from-[#0a0a23] to-[#0d1b3f]">
          <div className="w-full mb-1">
            <label htmlFor="email" className="md:text-xl text-lg">
              email
            </label>
          </div>
          <div className="w-full relative">
            <MdOutlineEmail className="inside-icon" />
            <input required type="email" className="input-login" />
          </div>

          <div className="w-full mt-5 mb-1">
            <label htmlFor="email" className="md:text-xl text-lg">
              password
            </label>
          </div>
          <div className="w-full relative">
            <TbLockPassword className="inside-icon" />
            <input
              required
              type={showPassword ? "text" : "password"}
              className="input-login"
            />
            <div
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          <a
            href="#"
            className="hover:text-blue-800 ml-auto mt-1 text-base sm:text-xl"
          >
            Forgot Password?
          </a>

          <div className="button-wrapper mt-9 shadow-sm shadow-black">
            <button className="custom-button">login</button>
          </div>

          <div className="flex items-center w-64 my-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-white text-sm">Or Sign in With</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="flex justify-around items-center md:w-64 w-52">
            <a
              href="#"
              className="w-12 h-12 bg-white  rounded-lg flex justify-center items-center"
            >
              <img
                src={assets.google_icon}
                alt="apple_icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white  rounded-lg flex justify-center items-center"
            >
              <img
                src={assets.facebook_icon}
                alt="apple_icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white  rounded-lg flex justify-center items-center"
            >
              <img
                src={assets.apple_icon}
                alt="apple_icon"
                className="w-6 h-6"
              />
            </a>
          </div>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-800 underline">
            Create Account
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
