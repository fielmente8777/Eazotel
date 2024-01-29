import React, { useEffect } from "react";
import "../style/Aboutus.css";
import EZ from "../assets/q.png";
import Hand from "../components/Hand"
import Head from "../components/Head";
import AboutOwn from "../components/AboutOwn";
import { useLocation } from "react-router-dom";
import FindOwn from "./FindOwn";
import Underline from "./Underline";

const Aboutus = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/aboutus') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <>
      <div className=" aboutus">
        <div className="container ">
          <div className="row aboutcontent">
            <div className="col-md-8 data">
              <h3>ONE CLICK SOLUTION TO YOUR HOSPITALITY MANAGEMENT NEEDS</h3>
              <p>
                At Eazotel, we understand the importance of seamless travel
                experiences, and we are here to provide you with a hassle-free
                and personalized booking process. Eazotel is here to ease out
                the manual process by increasing the efficiency of automated
                operations resulting in enhance your guest experience, improved
                communication, increased revenue and brand recognition.
              </p>
            </div>
            <div className="col-md-4 img ">
              <img loading="lazy"
  decoding="async"
 src={EZ} alt="ez" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row second mt-5">
          <div className="col-md-12 second-data">
            <h3>ABOUT US</h3>
            <p>
              Eazotel is a technology company that provides cloud based software
              solutions for the hospitality industry, helping hotels manage
              their operations more efficiently. Their services include website
              design, online booking management, channel management, and
              analytics.
            </p>
          </div>
        </div>
        
      </div>
      {/* <Underline/> */}
      <Head/>
      <Hand/>
      {/* <Underline/> */}
      <AboutOwn/>
      {/* <Underline/> */}
      <FindOwn/>
    </>
  );
};

export default Aboutus;
