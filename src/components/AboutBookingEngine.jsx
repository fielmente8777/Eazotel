import React from 'react'
import "../style/AboutBookingEngine.css"
import Booking from "../assets/BookingEngine.png"
const AboutBookingEngine = () => {
  return (
    <div className='container booking'>
      <div className='booking-content'>
        
        <div className='booking-about'>
          <h1 className='booking-heading'>A booking engine to get you endless bookings</h1>
          <p className='booking-para'>Our Booking Engine is a hotel booking system that 
            is fully customisable to your brand and website, 
            offering users a simple and intuitive reservation 
            process. Your guests will appreciate the seamless 
            online booking experience that is secure and quick.
          </p>
        </div>
        <div className='booking-image'>
          <img src={Booking} alt='booking'/>
        </div>
      </div>
    </div>
  )
}

export default AboutBookingEngine