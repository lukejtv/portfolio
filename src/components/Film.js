import React from "react";
import ReactPlayer from "react-player";
import FilmAnimation from "../assets/FILM_MP4.mp4";

import { useInView } from 'react-intersection-observer';

const Film = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={props.innerRef} className="film">
      <div ref={ref}>
        <ReactPlayer
          url={FilmAnimation}
          playing={inView}
          muted
          loop
          playsinline
          width="100%"
          height="90%"
        />
      </div>
    </div>
  );
};

export default Film;
