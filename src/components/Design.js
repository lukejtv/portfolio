import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import DesignAnimation from "../assets/DESIGN_MP4.mp4";


const Design = (props) => {

  return (
    <div ref={props.innerRef} className="design">

      <ReactPlayer
        url={DesignAnimation}
        playing={true}
        muted
        playsinline
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Design;
