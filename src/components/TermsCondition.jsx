import React, { useEffect } from 'react'
import TermsBanner from '../assets/TermsBanner.png'
import { useLocation } from 'react-router-dom';


function TermsCondition() {
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/terms&condition') {
        window.scroll(0, 0);
        }
    }, [pathname])
    return (
        <>
            <div className='tcMain'>
                {/* <div className="container">
                    <h3 className='privacyh4'>Terms & Conditions </h3>
                </div> */}

                <div className="tcImgdiv">

                    <img loading="lazy"
  decoding="async"
 src={TermsBanner} />

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
