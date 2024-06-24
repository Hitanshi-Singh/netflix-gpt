import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="pl-4 py-4 bg-black bg-opacity-70">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard poster={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
