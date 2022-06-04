import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import AboutAnimHori from "../assets/About_FINAL.mp4";
import AboutAnimVert from "../assets/About_vert.mp4";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <div className="about">
      <div ref={ref} className="marker"/>
      <div className="about-video">
        <ReactPlayer
          url={
            windowDimenion.winWidth >= windowDimenion.winHeight
              ? AboutAnimHori
              : AboutAnimVert
          }
          playing={inView}
          muted
          playsinline
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default About;
