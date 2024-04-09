import React from "react";
import Seat from "../components/Seat";
import Screen from "../assets/svg/screen.svg";
import JSONSeats from "../../global/seats.json"

const SeatSelection = () => {
  const seats = JSONSeats;

  const renderMatrix = () => {
    return seats.map((row, rowIndex) => (
      <div className="flex w-full justify-center text-lg items-center mb-1" key={rowIndex}>
        <p className="mr-3 text-xs font-thin">{String.fromCharCode(rowIndex+65)}</p>
        {row.map((seat, columnIndex) => (
            <Seat key={columnIndex} seat={seat} />
        ))}
      </div>
    ));
  };

  return (
    <div className="h-screen bg-yellow-300 py-20">
      <div className="flex flex-col items-center gap-6 p-4">
        <img src={Screen}/>
        <div className="w-3/4">{renderMatrix()}</div>
      </div>
    </div>
  );
};

export default SeatSelection;
