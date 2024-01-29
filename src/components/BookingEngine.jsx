import React, { useEffect } from 'react'
import "../style/BookingEngine.css"
import BookingEngineImage from "../assets/BookingEngine.png"
import { useLocation,Link } from 'react-router-dom'
const BookingEngine = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/booking-engine') {
      window.scroll(0, 0);
    }
  }, [pathname])


  const data = {
    "title": "of losing potential revenue to third-party booking platforms?",
    "description": "Experience Direct Booking with Eazotel",
    "subtitle": "Try Free for 30 Days"
  }

  const list_Data = {
    "heading": "Why Do you need Eazotel Booking Engine?",
    "point1": "Social Media Redirected: Accept Bookings from Social Media.",
    "point2": "Compatible with Any Website - Start Taking Direct Reservations: Turn your site into a top-performing sales channel. Attract loyal guests.",
    "point3": "No Commissions - Keep Your Profits: Say goodbye to commission fees! Unlike other booking engines, Eazotel charges zero added commissions, allowing you to keep more earnings.",
    "point4": "Boost Revenue with Promo Plans and Codes: Level up your revenue management strategy! Create multiple rate plans, and room types, and generate promo codes for special offers directly on your website.",
    "point5": "Customize Your Brand and Offer a Smooth Experience: Personalize the booking system with custom logos, colors, fonts, and CSS to match your Hotel's look.",
    "point6": "Compare Rates Easily with Rate Checker: Our built-in rate checker allows quick room rate comparisons from various online travel agents without leaving your website.",
    "point7": "Track and Optimize with Google Analytics: Make data-driven decisions! Use Google Analytics to track and generate reports on every shopper passing through your booking engine.",
    "point8": "Manage Availability with Ease: Control room availability on your booking engine and specific channels like Booking.com and Expedia. ",
    "point9": "Perfect for Multiple Properties: Let guests search availability across all your properties, finding the perfect fit for their needs."
  }
  const booking_Data = {
    "heading": "Own the Booking Experience from Start to Finish",
    "point1": " Book Anytime, Anywhere: Never miss a booking! Increase conversion rates from smartphones, tablets, and smart devices. Our reservation system automatically adjusts to fit your guests' screens.",
    "point2": " Book in Preferred Language and Currency: Allow guests to complete reservations in their preferred language and currency anytime and anywhere.",
    "point3": " Cast a personalized spell on your booking system, matching your website's unique brand and style.",
    "point4": " Cast aside worries with instant and secure 24/7 payments. Our booking engine integrates with top payment gateways like granting you peace of mind."
  }
  return (
    <>
      <div className='container bookingengine'>
        <div className='row content'>
          <div className='col-xl-6 col-md-9 col-sm-8 col-content'>
            <h1 ><span>Tired </span>{data.title}</h1>
            <img loading="lazy"
  decoding="async"
 src={BookingEngineImage} alt='createwebsiteimage' />
            <p>{data.description}</p>
            <h3>{data.subtitle}</h3>
            <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link>
          </div>
        </div>
      </div>

      <div className='booking-content-list1'>
        <div className='container content'>
          <h2>{list_Data.heading}</h2>
          <ul>
            <li>{list_Data.point1}</li>
            <li>{list_Data.point2}</li>
            <li>{list_Data.point3}</li>
            <li>{list_Data.point4}</li>
            <li>{list_Data.point5}</li>
            <li>{list_Data.point6}</li>
            <li>{list_Data.point7}</li>
            <li>{list_Data.point8}</li>
            <li>{list_Data.point9}</li>
          </ul>
        </div>
      </div>
      <div className='container booking-content-list2'>
        <div className='row content'>
          <div className='col-md-12'>
            <h2>{booking_Data.heading}</h2>
            <ul>

              <li><strong> Mobile Responsive - </strong>{booking_Data.point1}</li>
              <li><strong> Global Reach - </strong>{booking_Data.point2}</li>
              <li><strong> Customization: </strong>{booking_Data.point3}</li>
              <li><strong> Secure Payments: </strong>{booking_Data.point4}</li>

            </ul>
          </div>
          {/* <button className='createwebsitebutton'>Login</button> */}
          {/* <Link to="/login" className='cont-login' ><button className='createwebsitebutton'>Login</button></Link> */}
        </div>
      </div>
    </>
  )
}

export default BookingEngine