import "./App.css";
import React, { useEffect, useContext } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ResetPassword from "./components/ResetPassword";
import AuthContext from "./context/AuthProvider.js";
import OtpPage from "../src/components/OtpPage";
import Test from "../src/components/Test";
import CongratsModal from "./components/CongratulationModal";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import LoginEazotel from "./components/LoginEazotel";
import Registration from "./components/Registration";
import CreateWebsite from "./components/CreateWebsite";
import BookingEngine from "./components/BookingEngine";
import SocialMedia from "./components/SocialMedia";
import Form from "./components/Form";
import { BsArrowUpCircle } from "react-icons/bs";
import Aboutus from "./components/Aboutus";
import Template from "./pages/Template";
import Dashboard from "./components/Dashboard";
import Imageupload from "./components/Imageupload";


function App() {
  // Context-> Auth Provider.js
  const {baseUrl, auth, setAuth, setHaveDashboardPassword,setClientWebsite,setClientengine } =
    useContext(AuthContext);
  const location = useLocation();

  async function CheckDashboardAPI() {
    const dashboard = await fetch(
      `${baseUrl}/api/getDashboardStatus?id=${localStorage.getItem('Token')}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    const nav = await dashboard.json();
    if (nav.Status) {
      setAuth(true)
      setHaveDashboardPassword(true);
      setClientWebsite(nav.Data.websiteLink)
      setClientengine(nav.Data.bookingEngineLink)
    }
  }
  useEffect(() => {
    if (
      localStorage.getItem("Token") !== null ||
      sessionStorage.getItem("Token") !== null
    ) {
      CheckDashboardAPI();
      setAuth(true);
    }
  }, [auth, setAuth]);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: "Best Hotel Booking & Hospitality Management Software | Eazotel",
          description:
            "Eazotel is a leading Hotel Booking & Hospitality Management Software. We simplify hotel operations with website building, review management, SEO, and SMO of the website. ",
        };
      case '/about':
        return {
          title: 'Eazotel | About',
          description: 'Description for the About page.',
        };
      case '/login':
        return {
          title: 'Eazotel | Login',
          description: 'Description for the Login page.',
        };
      case '/signup':
        return {
          title: 'Eazotel | Signup',
          description: 'Description for the Signup page.',
        };
      case '/services':
        return {
          title: 'Eazotel | Services',
          description: 'Description for the Services page.',
        };
      case '/contact':
        return {
          title: 'Eazotel | Contact',
          description: 'Description for the Contact page.',
        };

      case '/resetpassword':
        return {
          title: 'Eazotel | Reset Password',
          description: 'Description for the Reset Password page.',
        };
      case "/createwebsite":
        return {
          title:
            "Hotel Website Builder | Hotel Website Development Agency - Eazotel",
          description:
            "Eazotel is a leading hotel website development company & builds stunning websites including small hotels, enterprise hotel websites,s and many more. Visit us!",
        };
      case "/socialmedia":
        return {
          title:
            "Eazotel - Affordable Social Media Marketing for Your Hotels",
          description:
            "Boost your hotel's online presence with Eazoteland to engage the audience through effective hotel social media marketing. Enhance brand visibility and bookings.",
        };
      default:
        return "Eazotel";
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle().title}</title>
        <meta name="description" content={getPageTitle().description} />
      </Helmet>
      <>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Navbar />
        )}
      </>
      <></>
      <Routes element={<Outlet />}>
        <Route path="/" element={<Home />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verification" element={<OtpPage />} />
        <Route path="/generatewebsite" element={<Test />} />
        <Route path="/ready" element={<CongratsModal />} />
        <Route path="/login" element={<LoginEazotel />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/createhotelwebsite" element={<CreateWebsite />} />
        <Route path="/bookingengine" element={<BookingEngine />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/demo" element={<Form />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/img" element={<Imageupload />} />  */}
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
      <BsArrowUpCircle
        size={500}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "1rem",
          width: "40px",
          height: "40px",
          zIndex: "999",
          color: "#FD5C01",
        }}
        onClick={handleOnClick}
      />
    </>
  );
}

export default App;
