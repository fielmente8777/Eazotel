import React from "react";
import "../style/TeamProfiles.css";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.png";
import profile8 from "../assets/profile8.png";
import profile9 from "../assets/profile9.png";

const TeamProfiles = () => {
  const profileDetails = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9,
  ];
  return (
    <div className="teamprofiles-container">
      <div className="teamprofiles-grid-container">
      {profileDetails.map((profile,index)=>(
        <>
        <div className="profilescontainer">
          <img className="profile-img" src={profile} alt="" />
          <h5 className="profile-name">Lorem ipsum</h5>
          <p className="profile-description">Lorem ipsum</p>
        </div>
        </>
      ))}
      </div>
    </div>
  );
};

export default TeamProfiles;
