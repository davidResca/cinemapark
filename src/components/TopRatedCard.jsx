import React from "react";

const TopRatedCard = ({ m }) => {
  return (
    <div className="relative text-white min-w-[200px]">
      <img
        className="inline-block"
        src={"https://image.tmdb.org/t/p/w200/" + `${m.poster_path}`}
        alt={m.original_title}
      />
      <div className="absolute bottom-0 text-center bg-black bg-opacity-65 w-full">
        <h3 className="font-light p-2">{m.original_title}</h3>
      </div>
    </div>
  );
};

export default TopRatedCard;
