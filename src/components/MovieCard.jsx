import React from "react";
import movieImg from "../assets/img/witch_of_blair.png";

function MovieCard() {
  return (
    <div className="relative min-w-fit rounded-2xl overflow-hidden">
      <img
        className="aspect-auto w-[180px]"
        src={movieImg}
        alt="witch of blair movie"
      />
      <div className="flex flex-col items-center absolute bottom-0 bg-black bg-opacity-45">
        <h2 className="text-white p-2 text-md font-medium tracking-wide capitalize">witch of blair</h2>
        <button className="bg-[#FF8A00] w-[180px] p-1 capitalize text-sm font-medium">
          comprar tickets
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
