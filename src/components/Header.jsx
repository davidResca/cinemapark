import React from "react";
import { RiMovie2Line, RiAccountCircleFill, RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="flex items-end justify-between gap-2 h-[70px] px-2">
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
        <NavLink to="/profile">
          <RiAccountCircleFill className="text-white text-4xl" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
