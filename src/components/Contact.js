import React from 'react'


const Contact = (props) => {

  return (
    <div ref={props.innerRef} className='contact'>
      <div>Contact</div>
      <input style={{marginBottom: "55%"}}></input>
    </div>
  )
}

export default Contact