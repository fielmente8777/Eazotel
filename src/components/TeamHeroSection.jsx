import React from "react";
import { motion } from "framer-motion";
import "../style/TeamHeroSection.css";
import teamhero from "../assets/teamhero.png";

const TeamHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible">
      <div className="teamherosection-left-container">
        <h1 className="teamherosection-left-title">OUR TEAM</h1>
        <h2 className="teamherosection-left-subtitle">
          Lorem ipsum dolor sit amet sectetur.
        </h2>
        <p className="teamherosection-left-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="teamherosection-right-container">
        <motion.img className="teamherosection-right-img" src={teamhero} alt="" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} />
      </div>
    </motion.div>
  );
};

export default TeamHeroSection;
