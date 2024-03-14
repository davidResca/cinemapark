import React from "react";
import AdsBannerTop from "../components/AdsBannerTop";
import MovieSearch from "../components/MovieSearch";
import Movies from '../components/Movies'; 
// import RecommendedMovies from "../components/RecommendedMovies";

function Home() {
  return (
    <div className="flex flex-col gap-2 bg-black">
      <AdsBannerTop />
      <MovieSearch />
      <Movies />
      {/* <RecommendedMovies /> */}
    </div>
  );
}

export default Home;
