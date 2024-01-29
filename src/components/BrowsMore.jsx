import React from 'react'
import "../style/BrowsMore.css"
import Vector from "../assets/Vector.png"
const BrowsMore = () => {
  return (
    <div className='container brows'>
        <h1 className='heading'>Browse more such happy experiences <img loading="lazy"
  decoding="async"
  className="vector" src={Vector} alt='vector'/></h1>
    </div>
  )
}

export default BrowsMore