import React from "react";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="w-full h-full relative flex justify-center">
      <img
        className="absolute h-[100vh] w-[100vw]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
        alt="background-image"
      />

      <form className="absolute mt-24 mx-auto  bg-black opacity-90 text-white w-[400px] p-12 ">
        <p className="font-bold text-3xl mb-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            className="w-full p-4 bg-gray-900 border opacity-100 border-gray-500 rounded-md mb-3"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="w-full p-4 bg-gray-900 border opacity-100 border-gray-500 rounded-md mb-3"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full p-4 bg-gray-900 border border-gray-500 rounded-md mb-3"
          type="password"
          placeholder="Password"
        />
        <button className="w-full p-4 bg-red-600 border border-gray-500 rounded-md my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={() => setIsSignIn(!isSignIn)}
          className="mt-1 cursor-pointer"
        >
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
