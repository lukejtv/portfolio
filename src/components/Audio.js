import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import AudioAnimHori from "../assets/Audio_FINAL.mp4";
import AudioAnimVert from "../assets/Audio_vert.mp4";

import { useInView } from "react-intersection-observer";

const Audio = () => {
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
    <div className="audio">
      <div className="audio-container">
        <div ref={ref} className={"audio-video"}>
          <ReactPlayer
            url={
              windowDimenion.winWidth >= windowDimenion.winHeight
                ? AudioAnimHori
                : AudioAnimVert
            }
            playing={inView}
            muted
            playsinline
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Audio;

