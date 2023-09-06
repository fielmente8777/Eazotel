import React, { useContext, useState } from "react";
import Logo from "../assets/EAZOTEL LOGO-09.png";
import "../style/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import AuthContext from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { LoginSocialGoogle } from "reactjs-social-login";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrClose } from "react-icons/gr";





const Registration = ({ hoteldata }) => {
  const { baseUrl, setAuth, setHaveDashboardPassword, showpop, setShowpop, setSubmitForm } = useContext(AuthContext);
  const newreghost = `${baseUrl}/api/register`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { load, setLoad, modalShow, setModalShow, setClientWebsite, setClientengine } = useContext(AuthContext);

  // const onSubmit = async (data) => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(reghost, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ Name: data.username, Email: data.email, Password: data.password }),
  //     });

  //     setLoading(false);
  //     const json1 = await response.json();

  //     if (json1.Status === true) {
  //       toast.success("User registered")
  //       localStorage.setItem("Token", json1.Token);
  //       sessionStorage.setItem("Token", json1.Token);
  //       setAuth(true);
  //       setSubmitForm(true)

  //       setShowpop(false)

  //       CheckDashboardAPI()
  //     } else {
  //       toast.warning("Registered already");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast("Registration failed");
  //   }
  // };

  function Dinabite(token) {
    const url = 'https://www.dinabitedev.com/auth/account-google';
    const payload = {
      tokenId: token
    };

    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', process.env.REACT_APP_DINABITE_API_KEY); // Use the x-api-key header

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data); // Process the response data here
        if (data.access_token) {
          localStorage.setItem("dinabiteToken", data.access_token)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const DinabiteRegister = async (data) => {
    const url = 'https://www.dinabitedev.com/companies/company-user';
    const info = {
      name: hoteldata.HotelName,
      phone: hoteldata.Hotelnumber,
      phoneCode: "+91",
      country: hoteldata.Country,
      address: hoteldata.Address,
      city: hoteldata.City,
      zipCode: hoteldata.pincode,
      webLink: "www.dinabite.ai",
      facebookAdId: "string",
      email: data.email,
      firstName: data.name,
      lastName: data.name,
      accountType: "SOCIAL"
    };

    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', process.env.REACT_APP_DINABITE_API_KEY);

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(info)
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data); // Process the response data here
        if (data.access_token) {
          localStorage.setItem("dinabiteToken", data.access_token)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  const handleGoogleLogin = async (provider, data) => {
    setLoad(true)
    const emailId = data.email;
    const userName = data.name;
    const accesskey = data.email;
    try {
      const response = await fetch(newreghost, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId: emailId,
          userName: userName,
          accesskey: accesskey
        }),
      });

      const json = await response.json();
      if (json.Status === true) {
        Dinabite(data.access_token)
        if (!localStorage.getItem("dinabiteToken")) {
          DinabiteRegister(data)
          Dinabite(data.access_token)
        }
        setAuth(true)
        localStorage.setItem("Token", json.Token);
        toast.success("Creating website for you")
        try {
          const response1 = await fetch(`${baseUrl}/api/registerCreate`, {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Token: localStorage.getItem('Token'),
              template: "1",
              hotelName: hoteldata.HotelName,
              hotelPhone: hoteldata.Hotelnumber,
              hotelState: hoteldata.State,
              hotelCity: hoteldata.City,
              hotelCountry: hoteldata.Country,
              hotelPinCode: hoteldata.pincode,
              hotelEmail: hoteldata.email,
              hotelDomain: hoteldata.HotelName

            }),
          });

          const json1 = await response1.json();
          if (json1.Status === true) {
            setClientWebsite(json1.Website)
            setClientengine(json1.BookingEngine)
            setLoad(false)
            setShowpop(false)
            setModalShow(true)
            setHaveDashboardPassword(true)
            //redirections
            redirectToDashboard();
          }
          else {
            setLoad(false)
            toast.error(json1.Message)
          }
        }
        catch (error) {
          setLoad(false)
          toast.error("Unable to request Server");
        }

      }
      else {
        setLoad(false)
        toast.error("User Exists")
      }
    }
    catch (error) {
      toast.error("Unable to request Server");
    }
  };


  // Redirection function

  const redirectToDashboard = () => {
    // Open client's website, dashboard, and booking engine in new tabs
    // const websiteTab = window.open(`https://clientwebsite.com`, '_blank');
    // const dashboardTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
    // const bookingTab = window.open(`https://bookingengine.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');

    // Close the website tab after a delay
    setTimeout(() => {
      const websiteTab = window.open(`https://clientwebsite.com`, '_blank');
      const dashboardTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
      const bookingTab = window.open(`https://bookingengine.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');

    }, 4000); // Adjust the delay if needed
  };

  const handleOnClick = () => {
    setShowpop(false)
  }


  return (

    <div className="registrationeazotel">
      <ToastContainer />

      <div className="login-content">
        {load ? <Spinner /> : ""}
        <div className="icon">
          {showpop ? <GrClose size={20} onClick={handleOnClick} /> : ""}

        </div>
        <form className="login-body" > {/* onSubmit={handleSubmit(onSubmit)} */}
          <Link to="/" className="image">
            {" "}
            <img className="login-image" src={Logo} alt="loginImg" />
          </Link>
          {/* <div className="input mb-3 w-100">
            <input
              style={{ width: "100%" }}
              id="myInput"
              type="text"
              {...register("username", {
                required: "Username is required!",
              })}
              placeholder="Username"
            />
            <span className='error'>{errors.email?.message}</span>
          </div>
          <div className="input mb-3 w-100">
            <input
              style={{ width: "100%" }}
              id="myInput"
              type="email"
              {...register("email", {
                required: "Email is required!",
              })}
              placeholder="Email"
            />
            <span className='error'>{errors.email?.message}</span>
          </div>
          <div className="input mb-3 w-100">
            <input
              id="myInput"
              type="password"
              style={{ width: "100%" }}
              {...register("password", {
                required: "Password is required!",
              })}
              placeholder="Password"
            />
            <span className='error'>{errors.password?.message}</span>
          </div>

          <button type="submit" className="btn btn-primary mt-3 w-100">
            Signup
          </button>
          <p className=" mt-3" style={{ color: "#193971" }}>
            OR
          </p> */}
          <div className="googleauth mt-1 w-100">
            <LoginSocialGoogle
              client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                // console.log(data)
                handleGoogleLogin(provider, data);

              }}
              onReject={(err) => {
                console.log(err);
              }}
            >

              <div className="google">
                <FcGoogle size={30} style={{ marginRight: "1rem" }} />
                <h3 className="glb">Continue with Google</h3>
              </div>
            </LoginSocialGoogle>
          </div>
          <p className="abs mt-3">
            *By filling this information you’re agreeing to our terms and
            conditions{" "}
          </p>
        </form>

        {/* {loading ? <Spinner /> : undefined} */}


      </div>
    </div>


  )
}

export default Registration