import React from 'react'
import ContactImg from "../assets/Hotels.jpg"

const Contact = () => {
  return (
    <div className='pt-2 pb-2'>
        <div className='container '>
        <h1 className='pt-4 pb-4'>Let's Have a Chat</h1>
        <div className='row justify-content-center '>
            <div className='col-md-6 d-flex flex-column h-100'>
                <label htmlFor='name' className='form-label'>Name:</label>
                <input type='text' placeholder="Name" className='form-control mb-2'/>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input type='email' placeholder="Email" className='form-control mb-2'/>
                <label htmlFor='phone' className='form-label'>Phone:</label>
                <input type='phone' placeholder="Phone" className='form-control mb-2'/>
                <label htmlFor='message' className='form-label'>Message:</label>
                <textarea  rows={5} type='textarea' placeholder="Message" className='form-control'/>
            </div>
            <div className='col-md-6 col-sm-6 mt-4'>
                <img src={ContactImg} alt='contact'
                    style={{width:'100%', height:'100%' , objectFit:"cover"}} />
                
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default Contact