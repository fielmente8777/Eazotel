import React from 'react';
import "../style/Service.css"
import BookingImage from "../assets/Booking.png"
import DashboardCircle from "../assets/DashboardCircle (1).png"
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <div className='container mt-5 service'>

      <div className='service-data row '>
        <div className='heading'>
          <h2 ><strong>Ease</strong> your Hospitality bussiness with our <strong>one stop solutions</strong> </h2>
        </div>

        <div className='s-service d-flex'>

          <div className='left col-md-5'>
            <img src={DashboardCircle} alt='booking' />
          </div>
          <div className='right col-md-5 '>

            <img src={BookingImage} alt='booking'/>
          </div>

        </div>
        <div className='demo-heading'>
          <Link to="/demo" ><button className='demobutton'>Book Demo</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
