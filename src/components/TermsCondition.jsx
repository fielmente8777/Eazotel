import React, { useEffect } from "react";
import TermsBanner from "../assets/TermsBanner.png";
import { Link, useLocation } from "react-router-dom";

function TermsCondition() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/terms&condition") {
      window.scroll(0, 0);
    }
  }, [pathname]);
  return (
    <>
      <div className="tcMain">
        {/* <div className="container">
                    <h3 className='privacyh4'>Terms & Conditions </h3>
                </div> */}

        <div className="tcImgdiv">
          <img loading="lazy" decoding="async" src={TermsBanner} alt="TermsBanner" />
        </div>
        <div className="container tcContent">
          <div className="mb-4 d-flex" style={{ gap: "5px" }}>
            <Link to="/">Home</Link>/
            <Link to="/terms&condition">Terms & Conditions</Link>
          </div>
          <p>Enter Terms & Conditions</p>
        </div>
      </div>
    </>
  );
}

export default TermsCondition;
