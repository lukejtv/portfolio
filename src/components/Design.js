import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import DesignAnimHori from "../assets/Design_FINAL.mp4";
import DesignAnimVert from "../assets/Design_vert.mp4";

import { useInView } from "react-intersection-observer";

const Design = () => {
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
    <div className="design">
      <div className="design-container">
        <div ref={ref} className={"design-video"}>
          <ReactPlayer
            url={
              windowDimenion.winWidth >= windowDimenion.winHeight
                ? DesignAnimHori
                : DesignAnimVert
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

export default Design;
