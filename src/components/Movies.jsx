import MovieCard from "./MovieCard";
import { APIKey } from "../../global/apiKey";
import { useLoaderData } from "react-router-dom";

const Movies = () => {
  const { movies } = useLoaderData();

  if (!movies) return <div>Loading</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {movies.results.map((m, index) => (
        <MovieCard m={m} key={index} />
      ))}
    </div>
  );
};

export default Movies;

export const loaderMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?${APIKey}`
    );
    const movies = await res.json();

    if (!res.ok) {
      throw new Error("can\t find element");
    }
    
    return { movies };
  } catch (error) {
    console.log(error.message);
  }
};
