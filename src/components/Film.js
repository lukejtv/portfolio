import React from 'react'
import ReactPlayer from "react-player";
import FilmAnimation from "../assets/FILM_MP4.mp4";

const Film = () => {
  return (
    <div className='film'>
      <ReactPlayer url={FilmAnimation} playing={true} muted playsinline/>
    </div>
  )
}

export default Film