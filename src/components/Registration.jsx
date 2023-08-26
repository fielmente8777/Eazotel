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


const newreghost = 'http://127.0.0.1:8000/api/register';


const Registration = ({hoteldata}) => {

  const { setAuth, setHaveDashboardPassword, showpop, setShowpop, setSubmitForm } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {load, setLoad, modalShow, setModalShow,setClientWebsite, setClientengine} = useContext(AuthContext);

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
      if (json.Status === true){
        setAuth(true)
        localStorage.setItem("Token", json.Token);
        toast.success("Creating website for you")
        try{
          const response1 = await fetch("http://127.0.0.1:8000/api/registerCreate", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Token: localStorage.getItem('Token'),
              template: "1",
              hotelName:hoteldata.HotelName,
              hotelPhone:hoteldata.Hotelnumber,
              hotelState:hoteldata.State,
              hotelCity:hoteldata.City ,
              hotelCountry: hoteldata.Country,
              hotelPinCode: hoteldata.pincode,
              hotelEmail: hoteldata.email,
              hotelDomain: hoteldata.domain

            }),
          });
          
          const json1 = await response1.json();
          if(json1.Status===true){
                setClientWebsite(json1.Website)
                setClientengine(json1.BookingEngine)
                setLoad(false)
                setShowpop(false)
                setModalShow(true)
                setHaveDashboardPassword(true)
                //redirections
          }
          else{
            setLoad(false)
            toast.error(json1.Message)
          }
        }
        catch (error){
          setLoad(false)
          toast.error("Unable to request Server");
        }

      }
      else{
        setLoad(false) 
        toast.error("User Exists")
      }
    }
    catch (error) {
        toast.error("Unable to request Server");
      }
  };

  const handleOnClick = () => {
    setShowpop(false)
  }


  return (

    <div className="registrationeazotel">
      <ToastContainer />
      
      <div className="login-content">
      {load?<Spinner />:""}
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
              client_id="525278251391-g3jigd28se6a4fse2ld8pcp2spvv2jnp.apps.googleusercontent.com"
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(data)
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