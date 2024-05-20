import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-56 px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h3 className="w-1/3">{overview}</h3>
      <div className="my-5">
        <button className="my-2 mr-5 w-36 h-10 bg-white rounded-lg text-black hover:bg-opacity-90">
        <FontAwesomeIcon icon="fa-solid fa-play" /> Play Now
        </button>
        <button className="my-2 mr-5 w-36 h-10 bg-gray-400 rounded-lg text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
