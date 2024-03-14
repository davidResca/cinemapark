import React from "react";
import { APIKey } from "../../global/apiKey";
import { useLoaderData } from "react-router-dom";
import BuyTicketsButton from "../components/buttons/BuyTicketsButton";

const MovieDetail = () => {
  const { movie, image } = useLoaderData();
  const { logos } = image;
  console.log(image);
  const logoMovie = logos.find( l => l.iso_639_1 === 'en')

  const selectSeats = () => {
    console.log('vamos a elegir los asientos');
  }

  const {
    adult,
    genres,
    backdrop_path,
    poster_path,
    homepage,
    original_languaje,
    original_title,
    tagline,
    overview,
  } = movie;

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
      className="relative h-screen flex flex-col justify-between bg-cover bg-center bg-fixed"
    >
      <div className="flex items-center h-1/4 justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w200/${logoMovie.file_path}}`}
          alt={original_title}
        />
      </div>

      <section className="absolute bottom-0 px-8 pt-10 flex flex-col bg-white bg-opacity-65 rounded-t-3xl">
        
        <article className="h-full flex flex-col gap-6">
          
          <p className="font-light">{overview}</p>

          <section>
            <p className="font-normal">Genres:</p>
            <div className="flex gap-2 font-thin">
              {genres.map((g, index) => (
                <p key={index}>{g.name}</p>
              ))}
            </div>
          </section>

          <a className="text-indigo-500 font-light" href={homepage}>
            {homepage}
          </a>
        
        </article>
        
        <BuyTicketsButton selectSeats={selectSeats}/>
      
      </section>
    </div>
  );
};

export default MovieDetail;

export const loaderMovie = async ({ params }) => {
  try {
    const resMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?${APIKey}`
    );
    const resImage = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/images?${APIKey}`
    );

    if (!resMovie.ok || !resImage.ok) {
      throw new Error("can\t find element");
    }

    const movie = await resMovie.json();
    const image = await resImage.json();

    console.log(movie);
    return { movie, image };
  } catch (error) {
    console.log(error.message);
  }
};


