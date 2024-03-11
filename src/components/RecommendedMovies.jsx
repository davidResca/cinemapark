import React from "react";
import MovieCard from "./MovieCard";
function RecommendedMovies() {
  return (
    <>
      <h2 className="text-white w-full px-4">Top recomendadas</h2>
      <div className="px-4 flex gap-4 overflow-x-scroll">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default RecommendedMovies;
