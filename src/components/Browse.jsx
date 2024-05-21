import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  usePlayingNowMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      - Main Container
       -videobackground
       -video title
      -Secondary Container
       - Movie Lists * N 
        - Movies * N 
      */}
    </div>
  );
};

export default Browse;
