import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../style/React-card-carousal.css'
import Banner from './Banner'
import Service from './Service'
import Partner from './Partner';
import Country from './Country';
import Slider from './Slider';
import Form from './Form';
import BrowsMore from './BrowsMore';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import Tweet from './Tweet';

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);




  return (
    <div>
      <Banner />
      <Service />
      <Partner />
      <Country />
      <Slider />
      {/* <Tweet /> */}
      {/* <BrowsMore /> */}
      <Form />
      <Loader />

    </div>
  )
}

export default Home
