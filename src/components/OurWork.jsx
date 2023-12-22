import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/OurWork.css";
import Sparvhospitalitydesktop from "../assets/Sparvhospitalitydesktop.png";
import Sparvhospitalitytablet from "../assets/Sparvhospitalitytablet.png";
import Bhairahawagardenresortdesktop from "../assets/Bhairahawagardenresortdesktop.png";
import Bhairahawagardenresorttablet from "../assets/Bhairahawagardenresorttablet.png";
import Peaceatpeakdesktop from "../assets/Peaceatpeakdesktop.png";
import Peaceatpeaktablet from "../assets/Peaceatpeaktablet.png";

const OurWork = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/our-work") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div>
      <div className="margin-top"></div>
      <section className="container pt-5 pb-3">
        <div className="banner-heading text-center mt-4 mb-3">
          <h1 className=" textblue title-heading ps-3">
            Our Featured <span className="textorange">Work</span>
          </h1>
        </div>
        <div className="banner-text fontfamily-fm-b text-center">
          <p className=" textblue title-text fontfamily-fm-b textorange">
            Enabling our clients to get Easy with their businesses. Our goal is
            to nurture your vision and provide innovative, custom solutions for
            all your needs.
          </p>
        </div>
      </section>

      <section className="container py-4">
        <div className="custom-container">
          <div className="img-frame">
            <div className="img-desktop">
              <img src={Bhairahawagardenresortdesktop} alt="" className="d-block " />
            </div>
            <div className="img-tab">
              <img src={Bhairahawagardenresorttablet} alt="" className="d-block " />
            </div>
          </div>
          <div className="content">
            <h5 className="card-title">Bhairahawa Garden Resort</h5>
            <p className="card-text fontfamily-fm-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nostrum dolor repellendus distinctio deleniti minima!
            </p>
            <Link to="https://bhairahawagardenresort.com/" className="link-btn link-text fontfamily-fm-b">
              View Live Website
            </Link>
          </div>
        </div>
        <div className="custom-container">
          <div className="img-frame">
            <div className="img-desktop">
              <img src={Peaceatpeakdesktop} alt="" className="d-block " />
            </div>
            <div className="img-tab">
              <img src={Peaceatpeaktablet} alt="" className="d-block " />
            </div>
          </div>
          <div className="content">
            <h5 className="card-title">Peace at peak</h5>
            <p className="card-text fontfamily-fm-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nostrum dolor repellendus distinctio deleniti minima!
            </p>
            <Link to="https://peaceatpeak.com/" className="link-btn link-text fontfamily-fm-b">
              View Live Website
            </Link>
          </div>
        </div>
        <div className="custom-container">
          <div className="img-frame">
            <div className="img-desktop">
              <img src={Sparvhospitalitydesktop} alt="" className="d-block " />
            </div>
            <div className="img-tab">
              <img src={Sparvhospitalitytablet} alt="" className="d-block " />
            </div>
          </div>
          <div className="content">
            <h5 className="card-title">SPARV Hospitality</h5>
            <p className="card-text fontfamily-fm-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nostrum dolor repellendus distinctio deleniti minima!
            </p>
            <Link to="https://sparvhospitality.com/" className="link-btn link-text fontfamily-fm-b">
              View Live Website
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center mt-5 mb-4">
        <div className="bottom">
          <h2 className="bottom-text fontfamily-fm-b">
            Transformative experiences by design. Let’s work together.
          </h2>
        </div>
        <div className="">
          <Link
            to="/demo"
            className="link-btn link-text m-auto fontfamily-fm-b"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
