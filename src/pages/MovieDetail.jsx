import React from "react";
import BackgroundImg from "../assets/img/TPBanner.png";
import BuyTicketsButton from "../components/buttons/BuyTicketsButton";

const MovieDetail = () => {
  return (
    <div className="bg-black flex flex-col justify-between h-full">
      <div className="text-white flex flex-col justify-between gap-6 p-6">
        <h2>Sinopsis:</h2>
        <p>
          Tras los sucesos de la primera parte acontecidos en el planeta
          Arrakis, el joven Paul Atreides se une a la tribu de los Fremen y
          comienza un viaje espiritual y marcial para convertirse en mesías,
          mientras intenta evitar el horrible pero inevitable futuro que ha
          presenciado: una Guerra Santa en su nombre, que se extiende por todo
          el universo conocido... Secuela de 'Dune' (2021). (FILMAFFINITY)
        </p>
        <p>Trailer:</p>
        <p>https://www.youtube.com/watch?v=YdhPAyApRQ4</p>
      </div>
      <img
        className="w-screen aspect-video object-cover "
        src={BackgroundImg}
        alt="pedestrian"
      />
      <BuyTicketsButton />
    </div>
  );
};

export default MovieDetail;
