import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiSignOutThin } from "react-icons/pi";
import { logout } from "../../config/firebase";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link
      to="/"
      onClick={handleLogout}
      className="flex items-center gap-1 font-thin text-sm"
    >
      <PiSignOutThin className="text-base" />
      <p>Sign out</p>
    </Link>
  );
};

export default SignOutButton;
