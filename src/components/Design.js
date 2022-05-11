import React from 'react'
import ReactPlayer from "react-player";
import DesignAnimation from "../assets/DESIGN_MP4.mp4";

const Design = () => {
  return (
    <div className='design'>
      <ReactPlayer url={DesignAnimation} playing={true} muted playsinline/>
    </div>
  )
}

export default Design