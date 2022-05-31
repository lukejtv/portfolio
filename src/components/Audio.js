import React from "react";
import ReactPlayer from "react-player";
import AudioAnimation from "../assets/AUDIO_MP4.mp4";
import DotAnimation from "../assets/DOT_MP4.mp4";

import { useInView } from "react-intersection-observer";

const Audio = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="audio">
      <div className="audio-container">
        <div className="audio-dot">
          <ReactPlayer
            url={DotAnimation}
            playing={true}
            loop
            muted
            playsinline
            width="100%"
            height="100%"
          />
        </div>
        <div ref={ref} className="audio-video">
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
    </div>
  );
};

export default Audio;
