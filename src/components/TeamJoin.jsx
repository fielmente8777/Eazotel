import React from 'react';
import '../style/TeamJoin.css';
import { FaArrowRight } from "react-icons/fa";
import teamjoinbg from "../assets/teamjoinbg.png"

import { Link } from 'react-router-dom';

const TeamJoin = () => {
  return (
    <div className='teamjoin-container bg-img' style={{backgroundImage:`url(${teamjoinbg})`}}>
      <div className="teamjoin-left-container">
        <h2 className='teamjoin-left-title'>Want to join?</h2>
        <p className='teamjoin-left-description'>Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.</p>
      </div>
      <div className="teamjoin-right-container">
        <Link className='teamjoin-right-btn'>Learn More<FaArrowRight className='teamjoin-right-icon-btn' /></Link>
      </div>
    </div>
  )
}

export default TeamJoin
