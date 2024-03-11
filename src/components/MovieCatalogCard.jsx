import React from 'react'
import movieImg from "../assets/img/TPBanner.png";
function MovieCatalogCard() {
  return (
    <div className="relative min-w-fit">
      <img
        className="aspect-auto w-[158px]"
        src={movieImg}
        alt="the pedestrian movie"
      />
      <div className="w-full p-2 flex flex-col items-center absolute bottom-0 bg-black bg-opacity-45">
        <h2 className="text-white text-sm font-medium tracking-wide capitalize">The pedestrian</h2>
      </div>
    </div>
  )
}

export default MovieCatalogCard