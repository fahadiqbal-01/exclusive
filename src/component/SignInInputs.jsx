import React, { useState } from "react";
import Title2 from "./Title2";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInInputs = ({ className }) => {
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSignIn = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  };

  return (
    <div className={className}>
      <Title2 title="Log in to Exclusive" subtitle="Enter your details below" />
      <div className=" flex flex-col mt-[48px] ">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email or Phone Number"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] border-b-[1px] border-[#7D8184] mb-[40px] "
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
      </div>
      <div className=" flex justify-between items-center ">
        <button
          onClick={handleSignIn}
          className=" text-[16px] font-medium font-poppins leading-[24px] text-white px-[48px] py-[16px] rounded-[4px] bg-orange "
        >
          Log In
        </button>
        <Link className="text-[16px] font-medium font-poppins leading-[24px] text-orange ">
          Forget Password?
        </Link>
      </div>
    </div>
  );
};

export default SignInInputs;
