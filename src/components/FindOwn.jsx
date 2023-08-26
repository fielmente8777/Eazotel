import React from 'react'
import "../style/FindOwn.css"
import Facebook from "../assets/image 1.png"
import Instagram from "../assets/image 2.png"
import Twitter from "../assets/image 3.png"
import Linkedin from "../assets/image 5.png"
import { Link } from 'react-router-dom'

const FindOwn = () => {
  return (
    <div className=' container findown'>
        <h1>
            FIND US ON
        </h1>

        <div className='socialicon'>
            <Link to="/" ><img className="socialimage " src={Facebook} alt='instagram' /></Link>
            <Link to="/" ><img className="socialimage" src={Instagram} alt='facebook'/></Link>
            <Link to="/" ><img className="socialimage" src={Twitter} alt='youtube'/></Link>
            <Link to="/" ><img className="socialimage" src={Linkedin} alt='linkedin'/></Link>
        </div>
    </div>
  )
}

export default FindOwn