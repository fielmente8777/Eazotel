import React from 'react'
import "../style/Newsletter.css"
import Logo from "../assets/EAZOTEL LOGO-09.png"

const Newsletter = () => {
  return (
    <div className='container newsletter p-0'>
        <div className='new-data'>
            <h4 className='letter-heading'>Subscribe to our monthly newsletter for updates</h4>
            <img loading="lazy"
  decoding="async"
 className='news-logo' src={Logo} alt='logo'/>
        </div>
    </div>
  )
}

export default Newsletter