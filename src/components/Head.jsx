import React from 'react'
import HeadImg from "../assets/Head.png"
import "../style/Head.css"

const Head = () => {
  return (
    
    <div className='container headcont'>
        <div className="row head">
          <div className="col-md-7 data">
            <h3>OUR VISION</h3>
            <p>
              Eazotel's vision is to be the leading provider of cutting- edge
              technology solutions for the hospitality industry, empowering
              hotels and resorts to deliver exceptional guest experiences and
              drive sustainable growth.
            </p>
          </div>
          <div className="col-md-5 img ">
            <img src={HeadImg} alt="head" />
          </div>
        </div>
    </div>
  )
}

export default Head