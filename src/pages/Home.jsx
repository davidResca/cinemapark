import React from "react";
import AdsBannerTop from "../components/AdsBannerTop";
import MovieSearch from "../components/MovieSearch";
import MovieCatalog from "../components/MovieCatalog";
import RecommendedMovies from "../components/RecommendedMovies";
import Header from '../components/Header'

function Home() {
  return (
    <div className="flex flex-col gap-2 bg-black">
      <AdsBannerTop />
      <MovieSearch />
      <RecommendedMovies />
      <MovieCatalog />
    </div>
  );
}

export default Home;
