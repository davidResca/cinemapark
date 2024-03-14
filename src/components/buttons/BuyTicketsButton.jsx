import React from "react";

const BuyTicketsButton = ({ selectSeats }) => {
  const handleClick = () => {
    selectSeats()
  };

  return (
    <div onClick={handleClick} className="flex justify-center bg-orange-500 rounded-t-3xl py-2 sticky bottom-0">
      <p>Buy Tickets</p>
    </div>
  );
};

export default BuyTicketsButton;
