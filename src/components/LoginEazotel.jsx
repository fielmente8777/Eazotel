import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RxArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSocialGoogle } from "reactjs-social-login";
import Spinner from "../components/Loader";
import AuthContext from "../context/AuthProvider";
import "../style/LoginEazotel.css";

const LoginEazotel = () => {
  const { baseUrl,baseUrl1, setAuth, setHaveDashboardPassword, setClientWebsite, setClientengine } =
    useContext(AuthContext);
  const newLoginAPI = `${baseUrl}/api/login`
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
      `${baseUrl1}/eazotel/getuser/${localStorage.getItem('Token')}`,
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




  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl1}/eazotel/ceateuser`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
                            "register":"false",
                            "emailId": data.email,
                            "userName":"Testing",
                            "accesskey": data.password,                
                    }),
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
      const response = await fetch(`${baseUrl1}/eazotel/ceateuser`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "register":"false",
          "emailId": email,
          "accesskey": password,
          "userName":"Testing",
        }),
      });
      const json = await response.json();
      if (json.Status === true) {
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
      {/* <div className="container"> */}


      <div className="loginmain">
        <div className="loginLeft position-relative">
          <Link to='/' className="back-btn">
          <RxArrowLeft  className="fs-3 fw-bold"/>
          </Link>
          {/* <Link to="/" className="image">
            {" "}
            <img loading="lazy"
  decoding="async"
 className="login-image" src={Logo} alt="loginImg" />
          </Link> */}
          <h1>Welcome to the Eazotel</h1>
          <p>Build Your Hotel Website In Just 1 Minute!</p>
          <p>The best booking and hospitality management service platform to cater to all your needs.</p>
        </div>
        <div className="loginRight">
          <div className="row  login-content">
            <form className="login-body" onSubmit={handleSubmit(onSubmit)}>

              {/* <Link to="/" className="image">
                {" "}
                <img loading="lazy"
  decoding="async"
 className="login-image" src={Logo} alt="loginImg" />
              </Link> */}
              <h1>Login</h1>
              <p>Enter your credentials to access your account.</p>

              <div className="input ">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required!",
                  })}
                  placeholder="Email"
                />
                <span className="error">{errors.email?.message}</span>
              </div>
              <div className="input input-field">
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
                {/* <p className="remember">Remember me</p> */}
                <Link to="" ><p className="forget">Forget Password</p></Link>
              </div>
              <button type="submit" className="createwebsitebutton ">
                Login
              </button>
              <span className="dont">
                OR
              </span>
              {/* <p className="forget  text-light">
            <Link className="dont">
              OR
            </Link>
          </p> */}
              <div className="googleauth">
                <LoginSocialGoogle
                  client_id="525278251391-g3jigd28se6a4fse2ld8pcp2spvv2jnp.apps.googleusercontent.com"
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
                    <FcGoogle size={30} style={{ marginRight: "5px" }} />
                    <h1 className="glb">Continue with Google</h1>
                  </div>
                </LoginSocialGoogle>
              </div>
              <p className="abs">
                *By filling this information you’re agreeing to our terms and
                conditions.{" "}
              </p>
            </form>


            {loading ? <Spinner /> : undefined}


          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEazotel;
