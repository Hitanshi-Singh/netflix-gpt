import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  return (
    movieNames && (
      <div>
        <div>
          <div>
            {movieResults.map((movieName, index) => (
              <MovieList
                key={movieNames[index]}
                title={movieNames[index]}
                movies={movieName}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestions;
