import React from 'react'
import "../style/AboutDashboard.css"
import Dashboard from "../assets/Dashboard.png"
const AboutDashboard = () => {
  return (
    <div className='container dashboard'>
      <div className='row dashboard-content'>
        <div className='col-md-7 dashboard-image'>
          <img className="image"src={Dashboard} alt='dashboard' />
        </div>
        <div className='col-md-5 dashboard-about'>
          <h1 className='dashboard-heading'>An integrated Dashboard for all your needs</h1>
          <p className='dashboard-para'>An all in one dashboard that covers everything from 
            bookings to SEO to social media, analytics, channel 
            manager and much more!<br/>
            It comes with best in class features that put you in 
            the driver’s seat. Eazotel will provide you with the 
            tools to grow your online bookings and a simple 
            user interface to manage it all from a single source.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutDashboard