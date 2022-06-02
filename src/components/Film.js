import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import FilmAnimHori from "../assets/Film_FINAL.mp4";
import FilmAnimVert from "../assets/Film_vert.mp4";

import { useInView } from "react-intersection-observer";

const Film = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="film">
      <div className="film-container">
        <div ref={ref} className={"film-video"}>
          <ReactPlayer
            url={
              windowDimenion.winWidth >= windowDimenion.winHeight
                ? FilmAnimHori
                : FilmAnimVert
            }
            playing={inView}
            muted
            loop
            playsinline
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Film;