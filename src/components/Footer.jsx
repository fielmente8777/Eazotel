import React from "react";
import "../style/Footer.css";
import Logo from "../assets/EAZOTEL LOGO-09.png";
import Instagram from "../assets/image 2.png"
import Linkedin from "../assets/image 5.png"
import { FaRegCopyright, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom";


const Footer = () => {


  return (
    <>
      <div className="foot">
        <div className="container footer">
          <Link to="/"><img className="footer-logo" src={Logo} alt="logo" /></Link>

          <div className="row footer-body">
            <div className="col-md-6 col-lg-5 col-xl-5 about">
              <h4>Address:</h4>
              <ul className="address">
                <li className="address-list">
                  We Work Forum, DLF Cyber City,
                </li>
                <li>
                  DLF Phase 3, Gurugram, Haryana 122002
                </li>
                <br />
                <li className="address-list">
                  Eazotel Technologies, 71-75 Shelton St, London <br />
                  WC2H 9JQ, United Kingdom
                </li>
              </ul>

              <h4>Contact Details</h4>
              <ul className="contact">
                <li className="address-list">
                  <FaPhoneAlt /> <Link to="tel:9501868775" style={{ textDecoration: "none", color: " #193971" }} >+91 9501868775</Link>
                </li>
                <li className="address-list">
                  <FaEnvelope /> <Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:sachin@eazotel.com'} style={{ textDecoration: "none", color: " #193971" }}>
                    Sachin@eazotel.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 service">
              <h4 className="product-heading">PRODUCTS & SERVICES</h4>
              <ul className="product-list">
                <li><Link to={'/create-hotel-website'} className="productlist">Create Website</Link></li>
                <li><Link to={'/booking-engine'} className="productlist">Booking Engine</Link></li>
                <li><Link to={'/dashboard'} className="productlist">Interactive Dashboard</Link></li>
                <li><Link to={'/social-media-manager'} className="productlist">Social Media Manager</Link></li>
                <li><Link to={'/'} className="productlist">Channel Manager</Link></li>
                <li><Link to={'/'} className="productlist">SEO Manager</Link></li>


              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-2 careers ">
              <h4 className="careers-heading">CAREERS</h4>
              <ul className="careers-list">
                <li><Link to={'/'} className="careerslist">Job opening</Link></li>
                <li><Link to={'/'} className="careerslist">Hiring</Link></li>
                <li><Link to={'/'} className="careerslist">Employee Success</Link></li>
                <li><Link to={'/'} className="careerslist">Benefits</Link></li>


              </ul>

            </div>
            <div className="col-md-6 col-lg-3 col-xl-2 company">
              <h4 className="company-heading">COMPANY</h4>
              <ul className="company-list">
                <li><Link to={'/aboutus'} className="companylist">About Us</Link></li>
                <li><Link to={'/'} className="companylist">Our story</Link></li>
                <li><Link to={'/team'} className="companylist">Team</Link></li>
                <li><Link to={'/'} className="companylist">Legacy</Link></li>


              </ul>
            </div>
          </div>
          <div className="social">
            <div className="social-icon">
              {/* <Link to="/" ><img className="socialimage " src={Facebook} alt='instagram' /></Link> */}
              <Link to="https://instagram.com/eazotel?igshid=MzRlODBiNWFlZA== " target="_blank" ><img className="socialimage" src={Instagram} alt='facebook' /></Link>
              {/* <Link to="/" ><img className="socialimage" src={Twitter} alt='youtube'/></Link> */}
              <Link to="https://www.linkedin.com/company/eazotel/mycompany/" target="_blank" ><img className="socialimage" src={Linkedin} alt='linkedin' /></Link>
            </div>
            <div className="demo-button">
              <Link to="/demo" ><button className='demobutton'>Book Demo</button></Link>
            </div>
          </div>


        </div>

        <div className="horizontal-line-below"></div>
        <div className="container">
          <div className="copywrite-section">

            <h6 className="reserved"><FaRegCopyright className="reserved-icon" /> 2020 Eazotel </h6>
            <div className="privacy">
              <Link className="privacy-link" to="/privacypolicy">Privacy Policy |</Link>
              <Link className="privacy-link" to="/terms&condition">Terms and Conditions |</Link>
              <Link className="privacy-link" to="/">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;