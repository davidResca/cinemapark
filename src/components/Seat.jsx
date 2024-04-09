import React, { useState } from "react";
import { PiArmchairFill, PiArmchairLight } from "react-icons/pi";
import { TbArmchair2Off } from "react-icons/tb";
import { VscBlank } from "react-icons/vsc";

const Seat = ({ seat }) => {
  const [seatSelect, setSeatSelect] = useState(false)

  const { seatName, available } = seat;

  const handleClick = () => {
    seatSelect ? setSeatSelect(false) : setSeatSelect(true);
  }

  if (!seatName) return <VscBlank />;
  if (!available) return <TbArmchair2Off />;

  return (
    <div onClick={handleClick}>
      {!seatSelect ? <PiArmchairLight /> : <PiArmchairFill />}
    </div>
  );
};

export default Seat;
