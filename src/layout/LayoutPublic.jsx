import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="bg-black">
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
