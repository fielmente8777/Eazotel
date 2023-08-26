import React, { useEffect } from 'react'
import "../style/Hospitality.css"
import {FaGlassCheers, FaRegThumbsUp } from "react-icons/fa"
import {TbInputSearch} from "react-icons/tb"
import {CiForkAndKnife} from "react-icons/ci"
import {MdManageSearch} from "react-icons/md"
import {MdOutlineDashboard} from "react-icons/md"
import {AiOutlineCheck} from "react-icons/ai"
import {TbBrandBooking} from "react-icons/tb"
import {GiGooeyEyedSun} from "react-icons/gi"
import { Link, useLocation } from 'react-router-dom'

const Hospitality = () => {
  const {pathname}=useLocation();
  useEffect(() => {
    if (pathname === '/demo') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <div className='hospitality'>
      <div className='hospitality-content container'>
        <div className='heading'>
        <span>Your hospitality business  <strong>easy</strong> with our <strong>all in one solution</strong></span>
        </div>

        <div className='row firstrow'>
            <div className=' rowmember'>
              <FaRegThumbsUp className='row-icon'/>
              <p className='row-text'>Social Media manager</p>
            </div>
            <div className='rowmember'>
              <FaGlassCheers className='row-icon'/>
              <p className='row-text'>Zomato Food Trends</p>
            </div>
            <div className=' rowmember seo'>
            <TbInputSearch className='row-icon'/>
            <p className='row-text'>SEO Manager</p>
            </div>
            <div className='rowmember'>
              <CiForkAndKnife className='row-icon'/>
              <p className='row-text'>FnB Manager</p>
            </div>
            <div className=' rowmember'>
              <MdManageSearch className='row-icon'/>
              <p className='row-text'>Website Manager</p>
            </div>

        </div>

        <div className='row secondrow'>
          <div className=' rowmember'>
            <MdOutlineDashboard className='row-icon' />
            <p className='row-text'>Channel Manager</p>
          </div>
          <div className=' rowmember'>
            <GiGooeyEyedSun className='row-icon'/>
            <p className='row-text'>SEO Optimization</p>
          </div>
          <div className='rowmember'>
            <AiOutlineCheck className='row-icon'/>
            <p className='row-text'>Payment Gateway</p>
          </div>
          <div className='rowmember'>
            <TbBrandBooking className='row-icon'/>
            <p className='row-text'>Booking Engine</p>
          </div>
        </div>
        <div className='hospitality-button'>
          <Link to="/demo"><button className='demobutton'>Book Demo</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hospitality