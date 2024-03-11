import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
