import React from "react";
import { APIKey } from "../../global/apiKey";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const { movie, image } = useLoaderData();

  //find logo in eng language
  const { logos } = image;
  const logoMovie = logos.find((l) => l.iso_639_1 === "en");

  const {
    id,
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
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}
      className="h-screen flex flex-col justify-between bg-cover bg-center bg-fixed"
    >
      <div className="flex items-center h-2/5 justify-center mt-8">
        <img
          src={`https://image.tmdb.org/t/p/w200/${logoMovie.file_path}}`}
          alt={original_title}
        />
      </div>
      <motion.div
        layout
        animate={{ y: '0%'}}
        initial={{ y: '100%'}}
        transition={{duration:.2}}
        className="h-3/5 px-8 pt-10 flex flex-col justify-between bg-white bg-opacity-85 rounded-t-3xl"
      >
        <article className="h-full flex flex-col gap-6">
          <p className="font-light">{overview}</p>

          <section>
            <p className="font-normal">Genres:</p>
            <div className="flex gap-2 font-thin">
              {genres.map((g, index) => (<p key={index}>{g.name}</p>))}
            </div>
          </section>

          <a className="text-indigo-500 font-light" href={homepage}>{homepage}</a>
          <Link to={`/private/selectseats/${id}`} className="flex w-fit">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Buy Tickets</button>
          </Link>
        </article>
      </motion.div>
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

    return { movie, image };
  } catch (error) {
    console.log(error.message);
  }
};
