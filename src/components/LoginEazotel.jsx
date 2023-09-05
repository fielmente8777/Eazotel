import React, { useContext, useState } from "react";
import Logo from "../assets/EAZOTEL LOGO-09.png";
import "../style/LoginEazotel.css";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Loader";
import AuthContext from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { LoginSocialGoogle } from "reactjs-social-login";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const newLoginAPI = "https://eazotel.eazotel.com/api/login"

const LoginEazotel = () => {
  const { setAuth, setHaveDashboardPassword,setClientWebsite,setClientengine  } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function CheckDashboardAPI() {
    const dashboard = await fetch(
      `https://eazotel.eazotel.com/api/getDashboardStatus?id=${localStorage.getItem('Token')}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    const nav = await dashboard.json();
    if (nav.Status) {
      setHaveDashboardPassword(true);
      setClientWebsite(nav.Data.websiteLink)
      setClientengine(nav.Data.bookingEngineLink)
      window.location.href = `https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`;
    } else {
      navigate("/generatewebsite");
    }
  }

  function Dinabite(token){
    const url = 'https://www.dinabitedev.com/auth/account-google';
    const payload = {
      tokenId:token
    };

    const headers = new Headers();
      headers.append('accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('x-api-key', process.env.REACT_APP_GOOGLE_CLIENT_ID); // Use the x-api-key header

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data); // Process the response data here
      if(data.access_token){
        localStorage.setItem("dinabiteToken",data.access_token)
      }      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("https://eazotel.eazotel.com/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId: data.email, accesskey: data.password }),
      });

      setLoading(false);
      const json1 = await response.json();

      if (json1.Status === true) {
        toast.success("Login successful")
        localStorage.setItem("Token", json1.Token);
        sessionStorage.setItem("Token", json1.Token);
        setAuth(true);
        CheckDashboardAPI();
      } else {
        toast.error("User Not Registered");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Server Error")
    }
  };

  const handleGoogleLogin = async (provider, data) => {
    const email = data.email;
    const password = data.email;
    try {
      const response = await fetch(newLoginAPI, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId: email,
          accesskey: password
        }),
      });
      const json = await response.json();
      if (json.Status === true) {
        Dinabite(data.access_token)
        toast("Login successful")
        localStorage.setItem("Token", json.Token);
        sessionStorage.setItem("Token", json.Token);
        setAuth(true);
        CheckDashboardAPI();
      } else {
        toast.error("Details Invalid");
      }
    } catch (error) {
      toast.error("server error");
    }
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logineazotel">
      <ToastContainer />
      <div className="container">
        <div className="row  login-content">
          <form className="login-body" onSubmit={handleSubmit(onSubmit)}>

            <Link to="/" className="image">
              {" "}
              <img className="login-image" src={Logo} alt="loginImg" />
            </Link>

            <div className="input mb-4">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required!",
                })}
                placeholder="Email"
              />
              <span className="error">{errors.email?.message}</span>
            </div>
            <div className="input mb-4 input-field">
              <input
                id="myInput"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required!",
                })}
                placeholder="Password"
              />
              <span className="error">{errors.password?.message}</span>
              {showPassword ? (
                <BsEyeSlash
                  className="eye-icon"
                  onClick={toggleShowPassword}
                />
              ) : (
                <BsEye className="eye-icon" onClick={toggleShowPassword} />
              )}
            </div>
            <div className="sub">
              <p className="remember">Remember me</p>
              <Link to="" ><p className="forget">Forget Password</p></Link>
            </div>
            <button type="submit" className="createwebsitebutton mt-4">
              login
            </button>
            <p className="forget mt-4 text-light">
              <Link className="dont">
                OR
              </Link>
            </p>
            <div className="googleauth mt-4">
              <LoginSocialGoogle
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                  handleGoogleLogin(provider, data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <div className="google">
                  <FcGoogle size={30} style={{ marginRight: "1rem" }} />
                  <h1 className="glb">Continue with Google</h1>
                </div>
              </LoginSocialGoogle>
            </div>
            <p className="abs mt-4">
              *By filling this information you’re agreeing to our terms and
              conditions{" "}
            </p>
          </form>


          {loading ? <Spinner /> : undefined}


        </div>
      </div>
    </div>
  );
};

export default LoginEazotel;
