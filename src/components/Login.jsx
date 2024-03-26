import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckvalidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch=useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleClick = (e) => {
    // e.preventDefault();
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = CheckvalidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://4kwallpapers.com/images/wallpapers/beautiful-woman-ai-art-2732x2732-11247.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative top-44 m-auto p-20 w-1/3 bg-gray-950/75 flex flex-col rounded-md  text-white"
      >
        <h1 className="font-bold text-4xl text-white mb-10">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 rounded-md bg-transparent border-slate-700 border-2"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-2 rounded-md bg-transparent border-slate-700 border-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-md  bg-transparent border-slate-700 border-2"
        />
        {<p className="text-red-500">{errorMessage}</p>}
        <button
          className="px-4 py-3 my-2 bg-red-600 rounded-md"
          onClick={handleButtonClick}
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
