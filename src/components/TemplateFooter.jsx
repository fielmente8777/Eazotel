import React from 'react'
import "../style/TemplateFooter.css"
import { Link } from 'react-router-dom'

const TemplateFooter = () => {
    return (
        <div className='container  '>
            <div className='row template-footer'>
                {/* <Link to="/login" ><button className='createwebsitebutton'>Login</button></Link> */}
                <h3>Everything you need!</h3>
                <p>At one place on your fingertips to access easily</p>
            </div>
        </div>
    )
}

export default TemplateFooter