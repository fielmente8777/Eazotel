import React from 'react'
import "../style/ourWorkCard.css"
import { Link } from 'react-router-dom';

const OurWorkCard = ({ data, index }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };
    return (
        <div className="ourworkcard container pt-4 pb-4 mt-4 mb-4" >
            <div className="row justify-content-center">
                <div className={`left col-lg-6 col-md-12 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                    <div className="card-body">
                        <h5 className="card-title ">{data.client}</h5>
                        {/* <img src={data.img} className="w-100 img-fluid  d-lg-none d-md-none d-sm-block" alt="client" /> */}

                        <p className="card-text">{truncateText(data.description, 400)}</p>
                    </div>

                    <Link to={data.link} className='btn mt-3' style={{ backgroundColor: '#FC5C01', color: "#fff" }}>
                        View Website
                    </Link>
                </div>
                <div className={` right  col-lg-6 col-md-12 d-flex`}>
                    <img src={data.img} className="w-100 img-fluid" alt="client" />

                </div>
            </div>
        </div>
    )
}

export default OurWorkCard