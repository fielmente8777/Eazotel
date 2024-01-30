import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function PrivacyPolicy() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/privacypolicy") {
      window.scroll(0, 0);
    }
  }, [pathname]);
  return (
    <>
      <div className="PrivacyMain">
        <div className="container">
          <h3 className="privacyh4">Privacy Policy</h3>
        </div>

        <div className="policyImgdiv">
          <img
            loading="lazy"
            decoding="async"
            src="https://www.shutterstock.com/image-photo/privacy-policy-concept-businessman-protective-260nw-369815300.jpg"
            alt="Privacy policy banneer image"
          />
        </div>
        <div className="container policyContent">
          <div className="mb-4 d-flex" style={{ gap: "5px" }}>
            <Link to="/">Home</Link>/<Link to="/privacypolicy">Privacy Policy</Link>
          </div>
          <p>Enter Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
