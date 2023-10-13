import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div className="text-black flex justify-center items-center h-screen">
      <div
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 absolute top-4 left-4 cursor-pointer"
      >
        <BiArrowBack className="text-header" />
        <p> Go Back</p>
      </div>
      <div className="w-full max-w-login px-4">
        <div className="space-y-4">
          <p className="text-title2 font-bold pb-6">
            Sign in or create an account
          </p>
          <div className="space-y-2">
            <p>Email address</p>
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-black/[.50] rounded-default p-2 w-full outline-none"
              />
            </div>
          </div>
          <div>
            <button className="bg-primary text-white w-full p-3 rounded-default text-subtitle3">
              Continue with email
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-[1px] bg-black/[.10] w-full"></div>
            <p className="w-[650px] text-center px-2 text-black/[.70]">
              or use one of these options
            </p>
            <div className="h-[1px] bg-black/[.10] w-full"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="border p-4 rounded-default">
              <FcGoogle className="text-[2rem]" />
            </div>
            <div className="border p-4 rounded-default">
              <BsApple className="text-[2rem]" />
            </div>
          </div>
          <div className="h-[1px] bg-black/[.10] w-full"></div>
          <div>
            <p className="text-center text-subtitle2 text-black/[.70]">
              By signing in or creating an account, you agree with our Terms &
              Conditions and Privacy Statement
            </p>
          </div>
          <div className="h-[1px] bg-black/[.10] w-full"></div>
          <div>
            <p className="text-center text-subtitle2 text-black/[.70]">
              All rights reserved.
              <br /> Copyright 2023 A Booking App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
