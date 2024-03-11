import React from "react";
import { RiSearchLine } from "react-icons/ri";

function MovieSearch() {
  return (
    <div className="p-4">
      <div className="text-white flex items-center justify-between px-4 py-2 border-white border rounded-xl">
        <p className="text-[16px] font-light">Busca tu película</p>
        <RiSearchLine className="text-lg"/>
      </div>
    </div>
  );
}

export default MovieSearch;
