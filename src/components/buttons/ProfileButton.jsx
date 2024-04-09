import React from "react";
import { Link } from "react-router-dom";
import { PiUserCircleThin } from "react-icons/pi";

const ProfileButton = () => {
  return (
    <Link
      to="/private/profile"
      className="flex items-center gap-1 font-thin text-sm"
    >
      <PiUserCircleThin className="text-base" />
      <p>Profile</p>
    </Link>
  );
};

export default ProfileButton;
