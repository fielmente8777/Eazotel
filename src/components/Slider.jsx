import React from "react";
import "../style/Slider.css";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderCard = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container slider">
      <div className="heading">
        <h2>
          Enabling <strong>our clients</strong> to get <strong>Easy</strong>{" "}
          with their businesses
        </h2>
      </div>
      <div className="row slider-section">
        <Slider {...settings}>
          <div className='slider-card'>
            <div className='card-content'>
              <img src={Frame1} alt='frame' />
            </div>
          </div>
          <div className='slider-card'>
            <div className='card-content'>
              <img src={Frame2} alt='frame' />
            </div>
          </div>
          <div className='slider-card'>
            <div className='card-content'>
              <img src={Frame3} alt='frame' />
            </div>
          </div>
          <div className='slider-card'>
            <div className='card-content'>
              <img src={Frame4} alt='farme' />
            </div>
          </div>
          <div className='slider-card'>
            <div className='card-content'>
              <img src={Frame5} alt='farme' />
            </div>
          </div>
        </Slider>
          
        </div>
      </div>
  );
};

export default SliderCard;
