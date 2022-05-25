import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import DesignAnimation from "../assets/DESIGN_MP4.mp4";

import { useInView } from "react-intersection-observer";

const Design = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={props.innerRef} className="design">
      <div ref={ref}>
        <ReactPlayer
          url={DesignAnimation}
          playing={inView}
          loop
          muted
          playsinline
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Design;
