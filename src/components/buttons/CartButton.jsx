import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";

const CartButton = () => {
  return (
    <Link to="/" className="flex items-center gap-1 font-thin text-sm">
      <PiShoppingCartThin className="text-base" />
      <p>Cart</p>
    </Link>
  );
};

export default CartButton;
