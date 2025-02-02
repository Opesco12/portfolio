import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-1 h-screen">
      <div className="text-center flex flex-col flex-1">
        <h1 className="text-9xl font-bold text-gray-800 dark:text-neutral-200">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-neutral-400 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>

        <DotLottieReact
          src="https://lottie.host/b701cf7e-ae53-4eaf-acc2-6f993a153edf/jSPwvlbeDn.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default NotFound;
