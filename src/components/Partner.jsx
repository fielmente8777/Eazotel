import React from 'react'
import "../style/Partner.css"
import Dinabite from "../assets/Dinabite.png"
import Autiller from "../assets/Autiller.png"
import Stripe from "../assets/Stripe.png"
import Razorpay from "../assets/Razorpay.png"
import Fiel from "../assets/Fiel.png"

const Partner = () => {
  return (
    <div className='container partner'>
        <div className='heading'>
         <h2>Our <strong>incredible partners</strong> who make it <strong>Easy</strong></h2>
        </div>
        <div className='row card-section'>
            <div className='partner-card col-md-2'>
                <img src={Dinabite} alt='dinabite' width={100} height={100} />
            </div>
            <div className='partner-card col-md-2'>
                <img src={Autiller} alt='autiller' width={100} height={100}/>
            </div>
            <div className='partner-card col-md-2'>
                <img src={Stripe} alt='stripe' width={100} height={100}/>
            </div>
            <div className='partner-card col-md-2'>
                <img src={Razorpay} alt='razorpay' width={100} height={100}/>
            </div>
            <div className='partner-card col-md-2'>
                <img src={Fiel} alt='zoho' width={100} height={100}/>
            </div>
        </div>
    </div>

  )
}

export default Partner