import React from "react";
import bannerCineblack from "../assets/img/banner_cineblack.png";
import bannerMovie from "../assets/img/bannerMovie.png";
function AdsBannerTop() {
  return (
    <div className="flex overflow-hidden mt-4">
      <img className="w-screen" src={bannerMovie} alt="cineblack" />
      <img className="w-screen" src={bannerCineblack} alt="cineblack" />
    </div>
  );
}

export default AdsBannerTop;
