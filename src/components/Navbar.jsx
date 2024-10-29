import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/EAZOTEL LOGO-09.png";
import AuthContext from "../context/AuthProvider";
import "../style/Navbar.css";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const { auth, setAuth, haveDashboardPassword, setHaveDashboardPassword } =
    useContext(AuthContext);
  const [setGetDashboard] = useState(false);
  const navigate = useNavigate();

  const handleToggleButton = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    if (auth) {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
      setAuth(!auth);
      setHaveDashboardPassword(false);
    }
  };

  useEffect(() => {}, [setGetDashboard]);

  return (
    <div className="header fixed-top">
      <div className="header-item">
        <div>
          <Link to="/">
            <img
              decoding="async"
              src={Logo}
              className="logo"
              alt="Ez Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="authbutton">
          {/* <div className="demo-button bookDemoBtn me-3">
            <Link to="/our-work">
              <button className="demobutton">Our Work</button>
            </Link>
          </div> */}
          <div className="demo-button bookDemoBtn me-3">
            <Link to="/demo">
              <button className="demobutton">Book Demo</button>
            </Link>
          </div>
          {!auth ? (
            <div className="demo-button me-0">
              <Link to="/login" onClick={handleToggleButton}>
                <button className="demobutton">Login</button>
              </Link>
            </div>
          ) : (
            <div className="dropdown-container">
              <FaUserAlt
                size={30}
                className="profile"
                // style={{ color: " #193971" }}
                onClick={handleProfileClick}
              />
              {!dropdownOpen && (
                <ul className="dropdown-menu">
                  {haveDashboardPassword ? (
                    <li>
                      <Link
                        to={`https://dashboard.eazotel.com/?id=${localStorage.getItem(
                          "Token"
                        )}`}
                        target="_blank"
                        onClick={handleProfileClick}
                      >
                        {" "}
                        <li className="drop-item">My dashboard</li>
                      </Link>
                    </li>
                  ) : null}
                  <li onClick={handleProfileClick}>
                    <Link to="/create-hotel-website" className="drop-item">
                      Create Website{" "}
                    </Link>
                  </li>

                  <li onClick={handleProfileClick}>
                    <Link to="/booking-engine" className="drop-item">
                      Booking Engine
                    </Link>
                  </li>
                  <li onClick={handleProfileClick}>
                    <Link to="/dashboard" className="drop-item">
                      Interactive Dashboard
                    </Link>
                  </li>
                  <li onClick={handleProfileClick}>
                    <Link to="/social-media-manager" className="drop-item">
                      Social Media Manager
                    </Link>
                  </li>
                  {/* <Link
                    to="/templates"
                    onClick={handleProfileClick}
                  >
                    {" "}
                    <li className="drop-item">Template</li>
                  </Link> */}
                  <li onClick={handleProfileClick}>
                    <Link to="/aboutus" className="drop-item">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <button onClick={handleLogout} className="drop-item">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
