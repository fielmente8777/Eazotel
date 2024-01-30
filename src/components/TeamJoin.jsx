import React from "react";
import "../style/TeamJoin.css";
import { FaArrowRight } from "react-icons/fa";
import teamjoinbg from "../assets/teamjoinbg.png";

import { Link } from "react-router-dom";

const TeamJoin = () => {
  return (
    <div
      className="teamjoin-container py-lg-5 py-md-4 py-2  bg-img"
      style={{ backgroundImage: `url(${teamjoinbg})` }}
    >
      <div className="container py-2  h-100 ">
        <div className="row h-100">
          <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start justify-content-center h-100 gap-2">
            <h2 className="teamjoin-left-title">Want to join?</h2>
            <p className="teamjoin-left-description">
              Find a team of digital marketers you can rely on. Every day, we
              build trust through communication, transparency, and results.
            </p>
          </div>

          <div className="col-lg-6 h-100 d-flex flex-column align-items-center align-items-lg-end justify-content-center  ">
            <Link to="#" className="teamjoin-right-btn">
              Learn More
              <FaArrowRight className="teamjoin-right-icon-btn" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamJoin;
