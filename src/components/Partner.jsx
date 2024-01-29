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
                <h2>Our <strong>Incredible Partners</strong> who make it <strong>Easy</strong></h2>
            </div>
            <div className='card-section'>

                {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img loading="lazy"
  decoding="async"
 src={Dinabite} alt='dinabite' class="d-block w-100" />

                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img loading="lazy"
  decoding="async"
 src={Autiller} alt='autiller' class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img loading="lazy"
  decoding="async"
 src={Razorpay} alt='razorpay' class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img loading="lazy"
  decoding="async"
 src={Fiel} alt='zoho' class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}



                <div className='partner-card'>
                    <a href="https://dinabite.ai/" target='_blank'>
                        <img loading="lazy"
  decoding="async"
 src={Dinabite} alt='dinabite.com' width={100} height={100} />
                    </a>
                </div>
                <div className='partner-card'>
                    <a href="https://www.autiller.com/" target='_blank'>
                        <img loading="lazy"
  decoding="async"
 src={Autiller} alt='autiller.com' width={100} height={100} />
                    </a>
                </div>
                <div className='partner-card'>
                    <a href="https://stripe.com/en-in" target='_blank'>
                        <img loading="lazy"
  decoding="async"
 src={Stripe} alt='stripe.com' width={100} height={100} />
                    </a>
                </div>
                <div className='partner-card'>
                    <a href="https://razorpay.com/" target='_blank'>
                        <img loading="lazy"
  decoding="async"
 src={Razorpay} alt='razorpay.com' width={100} height={100} />
                    </a>
                </div>
                <div className='partner-card'>
                    <a href="https://fielmente.com/" target='_blank'>
                        <img loading="lazy"
  decoding="async"
 src={Fiel} alt='Fielmente.com' width={100} height={100} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Partner