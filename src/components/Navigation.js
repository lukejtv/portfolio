import React from 'react'

const Navigation = (props) => {


  return (
    <div className='navigation'>
      <button onClick={props.designScroll} className='button'>Design.</button>
      <button onClick={props.filmScroll} className='button'>Film.</button>
      <button onClick={props.audioScroll} className='button'>Audio.</button>
      <button onClick={props.contactScroll} className='button'>Contact.</button>
    </div>
  )
}

export default Navigation