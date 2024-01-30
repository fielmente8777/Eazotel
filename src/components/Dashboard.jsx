import React, { useEffect } from "react";
import "../style/Dashboard.css";
import DashboardImage from "../assets/dashboard1.png";
import { useLocation, Link } from "react-router-dom";
const Dashboard = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/dashboard") {
      window.scroll(0, 0);
    }
  }, [pathname]);

  const data = {
    heading: "Interactive Dashboard for Business Intelligence -",
    subheading: "Your Hotel Superpower!",
    subtitle: "Choose a Plan!",
    para: "Take control of your hospitality business like a pro with Eazotel's Interactive Dashboard. Get ready for simplified analytics, smart forecasts, and a whole new level of efficiency! Choose a Plan! ",
  };
  const list_Data = {
    heading: "Why You Need It:",
    point1:
      "Simplified Analytics: See all your key performance indicators in a snap! Understand your business better and fix any bottlenecks for increased profitability.",
    point2:
      "Focus on What Matters: Identify areas that need attention and invest your efforts wisely for maximum impact.",
    point3:
      "Accurate Forecasts: Plan room occupancy, revenue, and distribution with precision, thanks to exact numbers and trends.",
  };

  const list_Data2 = {
    heading: "How It Works:",
    point1:
      "Room Reservations: Keep track of all reservations effortlessly.See new guests, checkouts, and reservation statuses at a glance.",
    point2:
      "Guest Insights: Get to know your guests inside out.Measure customer engagement, preferences, and spending habits for targeted marketing.",
    point3:
      "Stay Alert: Stay on top of guest arrivals, departures, and in -house bookings for smooth operations.",
    point4:
      "Source Tracking: Know where your bookings come from - direct, OTA systems, or Channel Manager - to optimize your marketing efforts.",
  };

  const list_Data3 = {
    heading: "What You Get:",
    point1:
      "Clear Data Clarity: Real - time KPIs and easy - to - understand numbers for quick decision - making.",
    point2:
      "Gainers and Losers: Compare different indicators side by side to spot top performers.",
    point3:
      "New Creative Solutions: Unleash your creativity with data presented in various forms.",
  };

  const list_Data4 = {
    heading: "What Makes Eazotel Dashboard Special:",
    point1:
      "Unity of Components: Graphics, diagrams, and numbers come together to form a cohesive picture.",
    point2:
      "Data Hierarchy: Information is systematically displayed, allowing for easy comparison and analysis.",
    point3:
      "Simplicity and Live Updates: Complicated information made simple, with new indicators added in a jiffy.",
  };

  const list_Data5 = {
    subtitle: " Start Your Free Trial Today! ",
    para: "Level up your hospitality game with Eazotel's Interactive Dashboard. Sign up now for the best hotel management experience!",
  };

  return (
    <div className="container">
      <div className="dashboard dashmain">
        <h2 className="heading">{data.heading}</h2>
        <h2 className="subheading">{data.subheading}</h2>
        <div className="content">
          <div className="col-xl-6 col-md-6 col-sm-8 col-content">
            <img
              loading="lazy"
              decoding="async"
              src={DashboardImage}
              alt="dashboard"
            />
          </div>
        </div>
        <p className="para">{data.para}</p>
        {/* <h3>{data.subtitle}</h3> */}
        {/* <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link> */}
      </div>

      <div className="dashboard-content-list1">
        <div className="container content">
          <h2>{list_Data.heading}</h2>
          <ul>
            <li>{list_Data.point1}</li>
            <li>{list_Data.point2}</li>
            <li>{list_Data.point3}</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-content-list2">
        <div className="container content">
          <h2>{list_Data2.heading}</h2>
          <ul>
            <li>{list_Data2.point1}</li>
            <li>{list_Data2.point2}</li>
            <li>{list_Data2.point3}</li>
            <li>{list_Data2.point4}</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-content-list1">
        <div className="container content">
          <h2>{list_Data3.heading}</h2>
          <ul>
            <li>{list_Data3.point1}</li>
            <li>{list_Data3.point2}</li>
            <li>{list_Data3.point3}</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-content-list2">
        <div className="container content">
          <h2>{list_Data4.heading}</h2>
          <ul>
            <li>{list_Data4.point1}</li>
            <li>{list_Data4.point2}</li>
            <li>{list_Data4.point3}</li>
          </ul>
        </div>
      </div>

      <div className="box">
        <div className=" row but">
          <div className="col-md-4  col-sm-8 free">
            <h3>Free trial:</h3>
            <p>Get started with a 30-day free trial!</p>
          </div>
          <div className="col-md-4 col-sm-8 pick">
            <h3>Pick a Plan:</h3>
            <p>Choose the right fit for your hotel management needs!</p>
          </div>
        </div>
      </div>

      <div className=" dashboard dashboard-foot">
        <div className="row footdata mb-5">
          <div className="col-md-9">
            <p className="para">{list_Data5.para}</p>
            <h3>{list_Data5.subtitle}</h3>
            <Link to="/login">
              <button className="createwebsitebutton">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
