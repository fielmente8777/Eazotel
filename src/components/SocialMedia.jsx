import React, { useEffect } from 'react'
import "../style/SocialMedia.css"
import { useLocation } from 'react-router-dom'
import TemplateHeader from './TemplateHeader'
import TemplateFooter from './TemplateFooter'
import SocialMediaImgae from '../assets/SocialMediaManager1.png'
import Underline from "../components/Underline"
import { Link } from 'react-router-dom'

const SocialMedia = () => {

  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/socialmedia') {
      window.scroll(0, 0);
    }
  }, [pathname])


  const data = {
    "subheading": "A feasible social media manager to access all at once",
    "details": "Our Social media manager is easy to use for your brand and website, offering users a simple and intuitive managing process. Your clients will appreciate the seamless replies and rapid responses that is clear and simple."
  }
  return (
    <>
      <TemplateHeader />

      <div className='container socialmedia'>
        <div className='row content'>
          <div className='col-xl-6 col-md-9 col-sm-8 col-content'>
            <img src={SocialMediaImgae} alt='SocialMedia' />
          </div>
        </div>
      </div>


      <div className='container socialmedia2'>
        <div className='row socialmedia2-content'>

          <h3>{data.subheading}</h3>
          <p>{data.details}</p>
          <div className='row content'>
            <div className='col-xl-6 col-md-9 col-sm-8 col-content'>
              <img src={SocialMediaImgae} alt='SocialMedia' />
            </div>
          </div>

        </div>


      </div>



      <TemplateFooter />
      <div className='row socialbox'>
        <div className='col-md-3 col-one'>Social posting</div>
        <div className='col-md-3 col-two'>Reviews & Analytics</div>
        <div className='col-md-3 col-three'>Messaging</div>
      </div>
      <Underline />
      <div className='socialfooter'>
        <h3>Don’t let social media control you.<br /> Manage it with us instead!</h3>
        {/* <button className='createwebsitebutton'>Login</button> */}
        <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link>

      </div>
    </>
  )
}

export default SocialMedia