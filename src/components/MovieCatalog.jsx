import React from "react";
import MovieCatalogCard from "./MovieCatalogCard";

function MovieCatalog() {
  return (
    <>
      <div className="w-screen flex flex-wrap justify-center gap-3 p-4">
      <h2 className="text-white w-full">Todas las películas</h2>
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
        <MovieCatalogCard />
      </div>
    </>
  );
}

export default MovieCatalog;
