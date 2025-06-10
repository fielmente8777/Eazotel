import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/EAZOTEL.svg";
import Insta from "../assets/image 2.png";
import linkedIn from "../assets/image 5.png";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="text-[#0A3A75] bg-[#E8F1FD] py-2 max-w-[1540px] w-full mx-auto">




      
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative aspect-[4/1.5] w-[218px]">
          <img
            loading="lazy"
            decoding="async"
            src={logo}
            alt="logo"
            className="w-full h-full object-contain absolute top-0 right-0"
          />
        </div>
        <div className="max-w-[1320px] px-[.7rem] w-full max-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6">
            <div>
              <h2 className="text-xl font-semibold flex max-sm:flex-col items-start gap-2">
                Address:{" "}
                <Link
                  to="https://maps.app.goo.gl/DqQviHEet9j9YUwU9"
                  className="inline-flex text-decoration-none text-inherit items-start gap-1 font-normal text-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <FaLocationDot color="#FD5C01" size={22} className="mt-1" />
                  </span>{" "}
                  Suncity Success Tower, Golf Course Ext Rd, Sector 65,
                  Gurugram, Haryana 122005
                </Link>
              </h2>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center">
              <h2 className="text-lg font-semibold gap-2">Quick Links</h2>
              <ul className="flex flex-col gap-2 ps-0">
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0A3A75",
                      listStyleType: "none",
                    }}
                    className="link"
                    to="https://www.eazotel.com/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0A3A75",
                      listStyleType: "none",
                    }}
                    className="link"
                    to="/career"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0A3A75",
                      listStyleType: "none",
                    }}
                    className="link"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0A3A75",
                      listStyleType: "none",
                    }}
                    to={"/our-work"}
                    className="link"
                  >
                    Our Work
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex max-sm:flex-col lg:justify-end gap-4">
                <h2 className="text-lg font-semibold gap-2">
                  Contact Details:
                </h2>
                <ul className="flex flex-col gap-2 ps-0">
                  <li>
                    <Link
                      to={"tel:+919501868775"}
                      className="link text-decoration-none flex items-center gap-1 text-[#0A3A75]"
                    >
                      <span>
                        <img
                          alt="phone"
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2301da23e35b1258fb3c0fa797af56b48fc19487f3f731dc9d0e546c835e8f8c?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                          className="w-6 aspect-square"
                        />
                      </span>
                      +91 95018 68775
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"mailto:sachin@eazotel.com"}
                      className="link text-decoration-none flex items-center gap-1 text-[#0A3A75]"
                    >
                      <span>
                        <img
                          alt="email"
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ef70ddf2e60afd55dc17d5edce9c9d1db69f540a605b07ba4d25271b7928ee?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                          className="w-6 aspect-square"
                        />
                      </span>
                      sachin@eazotel.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"mailto:pranav@eazotel.com"}
                      className="link text-decoration-none flex items-center gap-1 text-[#0A3A75]"
                    >
                      <span>
                        <img
                          alt="email"
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ef70ddf2e60afd55dc17d5edce9c9d1db69f540a605b07ba4d25271b7928ee?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                          className="w-6 aspect-square"
                        />
                      </span>
                      pranav@eazotel.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex max-sm:flex-col lg:justify-end lg:gap-4">
                <h2 className="text-lg font-semibold  w-full lg:max-w-[105px] lg:ms-6">
                  Follow Us:
                </h2>
                <ul className="flex items-start justify-start gap-2 w-full lg:max-w-[200px] max-md:ps-0">
                  <li>
                    <Link
                      to="https://www.instagram.com/eazotel/?igshid=MzRlODBiNWFlZA%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        loading="lazy"
                        src={Insta}
                        className="w-10 aspect-square"
                        alt="instagram"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://in.linkedin.com/company/eazotel"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          loading="lazy"
                          src={linkedIn}
                          className="w-10 aspect-square"
                          alt="linkedin"
                        />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-3 justify-center gap-1">
            <p className="text-lg font-semibold">© {getFullYear} Eazotel</p>
            <p className="text-base font-normal m-0">
              Privacy Policy | Terms & Conditions | Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
