import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('The form was submitted with the following data:');
    console.log({ email, password });
  };

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      console.log("Encoded JWT ID token: " + response.credentials);
    };
    /* global google */
    window.google.accounts.id.initialize({
      client_id: "YOUR_CLIENT_ID",
      callback: handleCallbackResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDev"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <MDBContainer fluid>

     
          <MDBRow>
            <MDBCol sm='6'>
              <div className='d-flex flex-row ps-5 pt-5 align-items-center'>
                <MDBIcon fas icon='crow fa-3x me-3' style={{ color: '#709085' }} />
                <span className='h1 fw-bold mb-0'>Dash-O</span>
              </div>
              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                <h3 className='fw-normal mb-3 ps-5 pb-3' style={{ letterSpacing: '1px' }}>
                  Welcome Back!<br />
                  Collect and manage all your database at one place
                </h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='formControlLg' className='form-label mx-5'>
                    Email address
                  </label>
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    id='formControlLg'
                    type='email'
                    size='lg'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    inputClassName='form-control-lg'
                  />
                  <label htmlFor='formControlLg' className='form-label mx-5'>
                    Password
                  </label>
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    id='formControlLg'
                    type='password'
                    size='lg'
                    name='password'
                    value={password}
                    onChange={handleChange}
                  />
                  <MDBBtn className='mb-4 px-5 mx-5 w-100' color='info' size='lg' type='submit'>
                    Login
                  </MDBBtn>
                </form>
                <p className='small mb-5 pb-lg-3 ms-5'>
                  <Link className='text-muted' to='#!'>
                    Forgot password?
                  </Link>
                </p>
                <p className='ms-5'>
                  Don't have an account? <Link to='#!' className='link-info'>Register here</Link>
                </p>
                <div className="d-flex justify-content-center">
                  <MDBBtn
                    id="signInDev"
                    className='mb-4 px-5 mx-5'
                    color='danger'
                    size='lg'
                  >
                    Sign in with Google
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
            <MDBCol sm='6' className='d-none d-sm-block px-0'>
              <img loading="lazy"
  decoding="async"

                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp'
                alt='Login '
                className='w-100'
                style={{ objectFit: 'cover', objectPosition: 'left' }}
              />
            </MDBCol>
          </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;
