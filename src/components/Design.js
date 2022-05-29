import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import DesignAnimation from "../assets/DESIGN_MP4.mp4";

import { useInView } from "react-intersection-observer";

const Design = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="design">
       2
    </div>
  );
};

export default Design;

 {/* <div ref={ref} style={{width: "50%"}}>
          <ReactPlayer
            url={DesignAnimation}
            playing={inView}
            loop
            muted
            playsinline
            width="100%"
            height="60%"
          />
        </div>
        <div className="design-text">
          <div style={{fontWeight: "bold", paddingBottom: 20}}>What makes a Luke J design?</div>
          <div>Simply intuitive & intuitively simple.</div>
          <div> You name it, he can create something unique and exciting.</div>
        </div> */}