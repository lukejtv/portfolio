import React from "react";
import ReactPlayer from "react-player";
import AudioAnimation from "../assets/AUDIO_MP4.mp4";
import DotAnimation from "../assets/DOT_MP4.mp4";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Audio = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="audio">
      4
    </div>
  );
};

export default Audio;


{/* <div ref={ref} className="audio-container">
        <ReactPlayer
          url={DotAnimation}
          playing={true}
          loop
          muted
          playsinline
          width="10%"
          height="10%"
          className="audio-dot"
        />
        <ReactPlayer
          url={AudioAnimation}
          playing={inView}
          muted
          playsinline
          width="90%"
          height="90%"
        />
      </div> */}