import React from "react";
import { Link } from "react-router-dom";
import { PiSignInThin } from "react-icons/pi";

const SignInButton = () => {
  return (
    <Link to="/login" className="flex items-center gap-1 font-thin text-sm">
      <PiSignInThin className="text-base" />
      <p>Sign In</p>
    </Link>
  );
};

export default SignInButton;
