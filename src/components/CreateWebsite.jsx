import React, { useEffect } from 'react'
import "../style/CreateWebsite.css"
import WebsiteImage from "../assets/WebsiteImage.png"
import { Link, useLocation } from 'react-router-dom'

const CreateWebsite = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/create-hotel-website') {
      window.scroll(0, 0);
    }
  }, [pathname])
  return (
    <div className='container createwebsite'>
      <div className='content my-4'>
        <h1 className='createwebsite-heading'><strong>An interactive website</strong><br /> for a perfect user experience</h1>
        <p className='createwebsite-para'>Our website templates are fully customisableto your brand and offers users a simple and intuitive experience in a smooth process. Your guests will appreciate the seamless online booking experience that is fun and engaging.</p>
        <Link to="/generatewebsite" ><button className='createwebsitebutton'>Create Website</button></Link>
      </div>
      <div className='img'>
        <img loading="lazy"
  decoding="async"
 src={WebsiteImage} alt='createwebsiteimage' />
      </div>
    </div>
  )
}

export default CreateWebsite