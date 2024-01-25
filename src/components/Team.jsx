import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TeamHeroSection from "./TeamHeroSection";
import "../style/Team.css";
import TeamProfiles from "./TeamProfiles";
import TeamJoin from "./TeamJoin";

function Team() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/createwebsite") {
      window.scroll(0, 0);
    }
  }, [pathname]);
  return (
    <>
      <div className="team_main">
        <div className="container p-md-0 m-md-0">
          <TeamHeroSection />
          <TeamProfiles />
        </div>
      </div>
      <TeamJoin />
    </>
  );
}

export default Team;
