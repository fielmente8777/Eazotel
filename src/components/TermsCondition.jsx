import React from 'react'
import TermsBanner from '../assets/TermsBanner.png'


function TermsCondition() {
    return (
        <>
            <div className='tcMain'>
                {/* <div className="container">
                    <h3 className='privacyh4'>Terms & Conditions </h3>
                </div> */}

                <div className="tcImgdiv">

                    <img src={TermsBanner} />

                </div>
                <div className="container tcContent">
                    <div className='mb-4 d-flex' style={{gap:'5px'}}>
                        <a href="/">Home</a>/
                        <a href="/terms&condition">Terms & Conditions</a>
                    </div>
                    <p>Enter Terms & Conditions</p>
                </div>
            </div>
        </>
    )
}

export default TermsCondition
