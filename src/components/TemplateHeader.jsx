import React from 'react'
import "../style/TemplateHeader.css"
import { Link } from 'react-router-dom'
const TemplateHeader = () => {


    const data = {
        "subheading": "AN Affordable SOCIAL MEDIA MANAGING SYSTEM FOR ALL HOSPITALITY BUSINESSES",
        "heading": "FOR ALL HOSPITALITY BUSINESSES",
        "details": "With our simple-to-use website templates for both mobile and desktop versions, designed specifically for the hospitality industry, Eazotel helps you save time and attract more consumers!"
    }

    return (
        <div className='container template'>
            <div className='row template-content'>

                <h1 className='template_h1'>{data.subheading}</h1>

                <h2>{data.heading}</h2>

                <p>{data.details}</p>

                {/* <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link> */}
            </div>


        </div>
    )
}

export default TemplateHeader