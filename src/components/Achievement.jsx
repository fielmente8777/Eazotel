import React from 'react';
import '../style/Achievement.css'
import Slider from 'react-slick';
import Award1 from '../assets/Award1.png';
import Award2 from '../assets/Award2.png';
import Award3 from '../assets/Award3.png';
import Award4 from '../assets/Award4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Achievement = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
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
    <div className="container award">
      <div className="heading">
        <span>
          <strong>Achievement </strong>
          we are proud of and
          <strong> Award's </strong>
          received because of
          <strong> YOU</strong>
        </span>
      </div>
      <div className="row award-section">
          <Slider {...settings}>
          <div className='award-card'>
            <div className='card-content'>
              <img loading="lazy"
  decoding="async"
 src={Award1} alt='award' />
            </div>
          </div>
          <div className='award-card'>
            <div className='card-content'>
              <img loading="lazy"
  decoding="async"
 src={Award2} alt='award' />
            </div>
          </div>
          <div className='award-card'>
            <div className='card-content'>
              <img loading="lazy"
  decoding="async"
 src={Award3} alt='awrad' />
            </div>
          </div>
          <div className='award-card'>
            <div className='card-content'>
              <img loading="lazy"
  decoding="async"
 src={Award4} alt='award' />
            </div>
          </div>
          
        </Slider>
       
      </div>
      <div className="horizontel-line"></div>
    </div>
  );
};

export default Achievement;
