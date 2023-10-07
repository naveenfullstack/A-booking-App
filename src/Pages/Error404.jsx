import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Assets/error404.json";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className="h-[500px]">
        <Lottie animationData={animationData} className="h-full"/>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(`/`)}
            className="bg-black p-2 px-4 rounded-lg border text-white font-medium"
          >
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
}