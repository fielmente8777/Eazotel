import React from "react";
import "../style/Hand.css";
import HandImg from "../assets/hand.png";

const Hand = () => {
  return (
    <div className="container handcont">
      <div className="row hand">
        <div className="col-md-7 data">
          <h3>OUR MISSION</h3>
          <p>
            Eazotel's mission is to revolutionize the hospitality industry
            through innovative technology solutions, exceptional customer
            service, and personalized experiences.
          </p>
        </div>
        <div className="col-md-5 img ">
          <img loading="lazy" decoding="async" src={HandImg} alt="]hand" />
        </div>
      </div>
    </div>
  );
};

export default Hand;
