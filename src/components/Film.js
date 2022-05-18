import React from 'react'
import ReactPlayer from "react-player";
import FilmAnimation from "../assets/FILM_MP4.mp4";

const Film = () => {
  return (
    <div className='film'>
      <ReactPlayer url={FilmAnimation} playing={true} muted playsinline width='100%'
          height='100%'/>
    </div>
  )
}

export default Film