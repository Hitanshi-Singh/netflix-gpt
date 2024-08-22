import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT API and get Movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Don, Piku, Ye Jawaani Hai Deewani, Student of the Year, Genius";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content:gptQuery  }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const gptResults = "Padosan,Dear Zindagi,Ishq,Dil,Chehre";
    if (!gptResults) {
      //TODO: make some error page
    }
    // const gptMovies=gptResults.choices?.[0]?.message?.content?.split(",");
    const gptMovies = gptResults.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //will return array of promises
    // [Promise,Promise,Promise,Promise,Promise]
    // console.log(promiseArray)
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex justify-center pt-32">
      <form action="" className="p-6 m-4" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[languageKey].gptSearchBarPlaceholder}
          className="w-72 h-11 px-4"
        />
        <button
          className="bg-red-700 text-white w-24 h-11"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
