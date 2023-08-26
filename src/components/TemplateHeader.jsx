import React from 'react'
import "../style/TemplateHeader.css"
import { Link } from 'react-router-dom'
const TemplateHeader = () => {


    const data = {
        "subheading": "Perfect templates to get the right attention",
        "heading": "FOR ALL HOSPITALITY BUSINESSES",
        "details": "With our simple-to-use website templates for both mobile and desktop versions, designed specifically for the hospitality industry, Eazotel helps you save time and attract more consumers!"
    }

    return (
        <div className='container template'>
            <div className='row template-content'>

                <h3>{data.subheading}</h3>

                <h1>{data.heading}</h1>

                <p>{data.details}</p>

                <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link>
            </div>


        </div>
    )
}

export default TemplateHeader