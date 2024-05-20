import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  usePlayingNowMovies();
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
