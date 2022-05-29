import React from "react";
import ReactPlayer from "react-player";
import FilmAnimation from "../assets/FILM_MP4.mp4";

import { useInView } from 'react-intersection-observer';

const Film = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="film">
      3
    </div>
  );
};

export default Film;

{/* <div ref={ref} className="film-container">
        <ReactPlayer
          url={FilmAnimation}
          playing={inView}
          muted
          loop
          playsinline
          width="100%"
          height="100%"
        />
      </div> */}