import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ m }) {


  return (
    <Link to={`/movies/${m.id}`} className="relative text-white w-[200px]">
      <img
        src={"https://image.tmdb.org/t/p/w200/" + `${m.poster_path}`}
        alt={m.original_title}
      />
      <div className="absolute bottom-0 text-center bg-black bg-opacity-65 w-full">
        <h3 className="font-light p-2">{m.original_title}</h3>
        <button className="bg-orange-500 w-full text-black">
          Buy Tickets
        </button>
      </div>
    </Link>
  );
}

export default MovieCard;
