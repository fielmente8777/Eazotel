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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("Token");
        const response = await fetch(
          "https://backend.eazotel.com/api/dashboard/Get_user_dash/",
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Token: token }),
          }
        );
        const data = await response.json();
        if (data.Status === false) {
          setGetDashboard(true);
        } else {
          setGetDashboard(false);
        }
      } catch (error) {
        console.log("Failed to fetch Data :", error);
      }
    };
    fetchData();
  }, [setGetDashboard]);

  return (
    <div className="header fixed-top">
      <div className="container header-item">
        <div>
          <Link to="/">
            <img src={Logo} className="logo" alt="Ez Logo" loading="lazy" />
          </Link>
        </div>

        <div className="authbutton">

          <div className="demo-button bookDemoBtn me-3">
            <Link to="/demo" ><button className='demobutton'>Book Demo</button></Link>
          </div>
          {!auth ? (
            <div className="demo-button me-0">
              <Link to="/login" onClick={handleToggleButton}>
                <button className='demobutton'>Login</button>
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
                    <Link
                      to={`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`}
                      target="_blank"
                      onClick={handleProfileClick}
                    >
                      {" "}
                      <li className="drop-item" >My dashboard</li>
                    </Link>
                  ) : null}
                  <Link to="/createhotelwebsite" onClick={handleProfileClick}>
                    <li className="drop-item" >Create Website </li>
                  </Link>

                  <Link
                    to="/bookingengine"
                    onClick={handleProfileClick}
                  >
                    <li className="drop-item">Booking Engine</li>
                  </Link>
                  <Link
                    to="/dashboard"
                    onClick={handleProfileClick}
                  >
                    {" "}
                    <li className="drop-item">Interactive Dashboard</li>
                  </Link>
                  <Link
                    to="/socialmedia"
                    onClick={handleProfileClick}
                  >
                    {" "}
                    <li className="drop-item">Social Media Manager</li>
                  </Link>
                  <Link
                    to="/templates"
                    onClick={handleProfileClick}
                  >
                    {" "}
                    <li className="drop-item">Template</li>
                  </Link>
                  <Link
                    to="/aboutus"
                    onClick={handleProfileClick}
                  >
                    {" "}
                    <li className="drop-item">About Us</li>
                  </Link>

                  <Link onClick={handleLogout}>
                    <li className="drop-item">Logout</li>
                  </Link>
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
