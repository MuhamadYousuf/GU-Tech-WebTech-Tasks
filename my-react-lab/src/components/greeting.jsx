import React from 'react'
import './greeting.css';
let nam = "Yousuf";

const greeting = () => {
  return (
    <div className='gret'>
        <div className='gretdiv'>
        <h1 className='gretp'>Hello,{nam}! Wecome to React.</h1>
    </div>
    </div>
  )
}

export default greeting