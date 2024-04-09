import React from "react";
import UserAvatar from "./UserAvatar";
import { RiMovie2Line, RiAccountCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="fixed z-10 z w-screen bg-black bg-opacity-60 flex items-end justify-between gap-2 h-[80px] px-2 py-4">
      <NavLink to='/'>
        <div className="flex items-end gap-2">
          <RiMovie2Line className="text-white text-4xl" />
          <h1 className="text-white text-3xl uppercase font-semibold">
            cinema<span className="font-extralight">park</span>
          </h1>
        </div>
      </NavLink>
      <div className="flex items-end gap-2">
        {/* <RiSearchLine className="text-white text-4xl font-extralight" /> */}
          <UserAvatar/>
      </div>
    </div>
  );
}

export default Header;
