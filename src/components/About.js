import React from "react";
import ReactPlayer from "react-player";
import SignatureAnimation from "../assets/signature.mp4";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="about">
        <div ref={ref} className="signature-video">
          <ReactPlayer
            url={SignatureAnimation}
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

// 1500x1080
