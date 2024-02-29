import React from "react";
import profile6 from "../assets/abhay.jpeg";
import profile8 from "../assets/abhijeet.jpeg";
import profile2 from "../assets/dv.jpeg";
import profile5 from "../assets/hem.jpeg";
import profile1 from "../assets/sachin.jpeg";
import profile4 from "../assets/saurabh.jpeg";
import profile3 from "../assets/sumant.jpeg";
import profile7 from "../assets/sumit.jpeg";
import "../style/TeamProfiles.css";

const TeamProfiles = () => {
  const profileDetails = [
    {"img":profile1,"Name":"Sachin Kapoor","Position":""},
    {"img":profile3,"Name":"Sumanto Biswas","Position":""},
    {"img":profile2,"Name":"Divyanshu Sharma","Position":""},
    {"img":profile4,"Name":"Saurabh Sharma","Position":""},
    {"img":profile8,"Name":"Abhijeet Singh","Position":""},
    {"img":profile5,"Name":"Hem Bhadur","Position":""},
    {"img":profile6,"Name":"Abhay Pratap","Position":""},
    {"img":profile7,"Name":"Sumit Kumar","Position":""},
    // {"img":profile8,"Name":"","Position":""},
    // {"img":profile9,"Name":"","Position":""},
  ];
  return (
    <div className="container">
      <div className="teamprofiles-grid-container">
        {profileDetails.map((profile, index) => (
          <div key={index} className="profilescontainer">
            <img
              style={{width:"200px",height:"200px",borderRadius:"50%"}}
              loading="lazy"
              decoding="async"
              className="profile-img"
              src={profile.img}
              alt="profile-img"
            />
            <h3 className="profile-name">{profile.Name}</h3>
            <p className="profile-description">{profile.Position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfiles;
