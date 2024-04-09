import React from "react";
import AdsBannerTop from "../components/AdsBannerTop";
import MovieSearch from "../components/MovieSearch";
import Movies from '../components/Movies'; 


function Home() {
  return (
    <div className="flex flex-col gap-2 bg-black py-16">
      <AdsBannerTop />
      <MovieSearch />
      <Movies />
    </div>
  );
}

export default Home;
