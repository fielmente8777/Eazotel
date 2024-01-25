import React from 'react';
import '../style/TeamJoin.css';
import { FaArrowRight } from "react-icons/fa";

const TeamJoin = () => {
  return (
    <div className='teamjoin-container'>
      <div className="teamjoin-left-container">
        <h2 className='teamjoin-left-title'>Want to join?</h2>
        <p className='teamjoin-left-description'>Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.</p>
      </div>
      <div className="teamjoin-right-container">
        <button className='teamjoin-right-btn'>Learn More<FaArrowRight className='teamjoin-right-icon-btn' /></button>
      </div>
    </div>
  )
}

export default TeamJoin
