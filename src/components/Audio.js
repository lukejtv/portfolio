import React from "react";
import ReactPlayer from "react-player";
import AudioAnimation from "../assets/AUDIO_MP4.mp4";

const Audio = () => {
  return (
    <div className="audio">
      <ReactPlayer
        url={AudioAnimation}
        playing={true}
        muted
        playsinline
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Audio;
