import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleClick = (e) => {
    // e.preventDefault();
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="h-max">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute  bg-slate-950/35 w-full h-full"></div>
      </div>
      <form className="relative top-44 m-auto p-20 w-1/3 bg-gray-950/75 flex flex-col rounded-md  text-white">
        <h1 className="font-bold text-4xl text-white mb-10">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 rounded-md bg-transparent border-slate-700 border-2"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 rounded-md bg-transparent border-slate-700 border-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-md  bg-transparent border-slate-700 border-2"
        />
        <button
          className="px-4 py-3 my-2 bg-red-600 rounded-md"
          // onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleClick}>
          {isSignIn
            ? "New to Netflix? Sign Up."
            : "Already registered? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
