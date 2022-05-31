import React from "react";
import ReactPlayer from "react-player";
import FilmAnimation from "../assets/FILM_MP4.mp4";

import { useInView } from "react-intersection-observer";

const Film = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="film">
      <div ref={ref} className="film-video">
        <ReactPlayer
          url={FilmAnimation}
          playing={inView}
          muted
          loop
          playsinline
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Film;
