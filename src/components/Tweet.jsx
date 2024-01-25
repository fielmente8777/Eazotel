import React from "react";
import "../style/Tweet.css";
import User from "../assets/EmptyProfile.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Tweet = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 700,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          speed: 700,
          slidesToShow: 2, // Show 2 cards in tablet mode
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container tweet">
      <div className="heading">
        <h3>
          <strong>Client Testimonials</strong> that speak for themselves
        </h3>
      </div>
      <div className="row tweet-section">
        <Slider {...settings}>
          <div className="tweet-card card1">
            <div className="card-content">
              <img src={User} alt="user" />
              <p className="data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                convallis cursus ligula sit amet fermentum. Vestibulum lobortis
                lorem id lorem iaculis, sit amet gravida diam porttitor. Proin
                vitae est consectetur, sollicitudin tortor ac, tincidunt risus.
                Aliquam laoreet sed magna vel consequat.
              </p>
              <p className="star" style={{ color: "#FD5C01" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </p>
              <h5 className="name">Tanya Roy</h5>
              <p className="subname">Foodflatters</p>
            </div>
          </div>
          <div className="tweet-card card2">
            <div className="card-content">
              <img src={User} alt="user" />
              <p className="data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                convallis cursus ligula sit amet fermentum. Vestibulum lobortis
                lorem id lorem iaculis, sit amet gravida diam porttitor. Proin
                vitae est consectetur, sollicitudin tortor ac, tincidunt risus.
                Aliquam laoreet sed magna vel consequat.
              </p>
              <p className="star" style={{ color: "#FD5C01" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </p>
              <h5 className="name">Mark Henry</h5>
              <p className="subname">Foodflatters</p>
            </div>
          </div>
          <div className="tweet-card card3">
            <div className="card-content">
              <img src={User} alt="user" />
              <p className="data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                convallis cursus ligula sit amet fermentum. Vestibulum lobortis
                lorem id lorem iaculis, sit amet gravida diam porttitor. Proin
                vitae est consectetur, sollicitudin tortor ac, tincidunt risus.
                Aliquam laoreet sed magna vel consequat.
              </p>
              <p className="star" style={{ color: "#FD5C01" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </p>
              <h5 className="name">BD Macculum</h5>
              <p className="subname">Foodflatters</p>
            </div>
          </div>
          <div className="tweet-card card2">
            <div className="card-content">
              <img src={User} alt="user" />
              <p className="data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                convallis cursus ligula sit amet fermentum. Vestibulum lobortis
                lorem id lorem iaculis, sit amet gravida diam porttitor. Proin
                vitae est consectetur, sollicitudin tortor ac, tincidunt risus.
                Aliquam laoreet sed magna vel consequat.
              </p>
              <p className="star" style={{ color: "#FD5C01" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </p>
              <h5 className="name">Tanya Roy</h5>
              <p className="subname">Foodflatters</p>
            </div>
          </div>
          <div className="tweet-card card3">
            <div className="card-content">
              <img src={User} alt="user" />
              <p className="data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                convallis cursus ligula sit amet fermentum. Vestibulum lobortis
                lorem id lorem iaculis, sit amet gravida diam porttitor. Proin
                vitae est consectetur, sollicitudin tortor ac, tincidunt risus.
                Aliquam laoreet sed magna vel consequat.
              </p>
              <p className="star" style={{ color: "#FD5C01" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </p>
              <h5 className="name">Trent Bault</h5>
              <p className="subname">Foodflatters</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Tweet;
