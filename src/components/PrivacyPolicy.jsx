import React from 'react'


function PrivacyPolicy() {
    return (
        <>
            <div className='PrivacyMain'>
                <div className="container">
                    <h3 className='privacyh4'>Privacy Policy</h3>
                </div>

                <div className="policyImgdiv">
                    <img src="https://www.shutterstock.com/image-photo/privacy-policy-concept-businessman-protective-260nw-369815300.jpg" alt="Privacy policy banneer image" />
                </div>
                <div className="container policyContent">
                    <div className='mb-4 d-flex' style={{ gap: '5px' }}>
                        <a href="/">Home</a>/
                        <a href="/privacypolicy">Privacy Policy</a>
                    </div>
                    <p>Enter Privacy Policy</p>
                </div>
            </div>
        </>

    )
}

export default PrivacyPolicy
