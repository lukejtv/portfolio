import React from "react";
import ReactPlayer from "react-player";
import AudioAnimation from "../assets/AUDIO_MP4.mp4";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Audio = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={props.innerRef} className="audio">
  
      <div ref={ref}>
        <ReactPlayer
          url={AudioAnimation}
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

export default Audio;
