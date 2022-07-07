import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed h-[100vh] w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-50 flex items-center justify-center">
      <FaSpinner className="text-2xl text-gray-200 animate-spin" />
    </div>
  );
};

export default Loader;
