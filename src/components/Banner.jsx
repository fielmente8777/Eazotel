import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "../style/Banner.css";
import { FcManager } from "react-icons/fc";
import { Typewriter } from "react-simple-typewriter";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const { auth, setAuth, haveDashboardPassword, setHaveDashboardPassword } =
    useContext(AuthContext);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown open/close state
  };
  const handleToggleButton = () => {
    setNavbarExpanded(!navbarExpanded);
  };
  const handleLogout = () => {
    if (auth) {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
      setAuth(!auth);
      setHaveDashboardPassword(false);
    }
  };
  const handleOnClick = () => {
    navigate("/generatewebsite");
  };

  const slider = {
    infinite: true,
    slidesToShow: 1,
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
    <>
      <div className="started"></div>
      <div className="container banner">
        <div className="row banner-data">
          <div className="col-md-6 left  content ">
            <div className="s-banner">
              <h2 className="heading">
                Build Your
                <span className="typewriter" style={{ color: "#FD5C01" }}>
                  <Typewriter
                    words={[
                      " Hotel Website ",
                      " Hostel Website ",
                      " Camping Website ",
                      " Homestay Website ",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </div>
            <br />
            <br />

            <p>
              The best booking and hospitality management service platform to
              cater to all your needs.
            </p>
            <div className="create-website">
              {haveDashboardPassword ? (
                <Link
                  target="_blank"
                  to={`https://dashboard.eazotel.com/?id=${localStorage.getItem(
                    "Token"
                  )}`}
                >
                  <button className="createwebsitebutton">
                    Go to Dashboard
                  </button>
                </Link>
              ) : (
                <button className="createwebsitebutton" onClick={handleOnClick}>
                  Create Website
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="sliderbanner">
              <Slider {...slider}>
                <img loading="lazy" decoding="async" src={Frame1} alt="frame" />
                <img loading="lazy" decoding="async" src={Frame2} alt="frame" />
                <img loading="lazy" decoding="async" src={Frame3} alt="frame" />
                <img loading="lazy" decoding="async" src={Frame4} alt="farme" />
                <img loading="lazy" decoding="async" src={Frame5} alt="farme" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
