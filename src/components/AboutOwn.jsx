import React from "react";
import "../style/AboutOwn.css";
import SachinImg from "../assets/Sachin.png";
const AboutOwn = () => {
  return (
    <div className="container aboutown">
      <div className="row about">
        <div className="col-md-7 data">

          <h3>Meet the visionary <br/>behind Eazotel:</h3>
          <h2 className="title">Sachin Kapoor</h2>
          <p className="para">
            Behind every successful idea, lies a dedicated leader. Get to know
            the CEO of Eazotel and their commitment to empowering hotels with
            intelligent booking solutions.
          </p>
        </div>
        <div className="col-md-5 img">
          <img src={SachinImg} alt="head" />
        </div>
          <h1 className="titlesecond">Sachin Kapoor</h1>
          <p className="parasecond">
            Behind every successful idea, lies a dedicated leader. Get to know
            the CEO of Eazotel and their commitment to empowering hotels with
            intelligent booking solutions.
          </p>
      </div>
    </div>
  );
};

export default AboutOwn;
