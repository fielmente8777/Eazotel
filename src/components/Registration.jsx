import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSocialGoogle } from "reactjs-social-login";
import Logo from "../assets/EAZOTEL LOGO-09.png";
import Spinner from "../components/Spinner";
import AuthContext from "../context/AuthProvider";
import "../style/Registration.css";





const Registration = ({ hoteldata }) => {
  const [username,setusername] = useState("")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")


  const { baseUrl,baseUrl1, setAuth, setHaveDashboardPassword, showpop, setShowpop, setSubmitForm } = useContext(AuthContext);
  const newreghost = `${baseUrl}/api/register`;
  const newUrl = `${baseUrl1}/eazotel/ceateuser`
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { load, setLoad, modalShow, setModalShow,clientWebsite, setClientWebsite,clientengine, setClientengine } = useContext(AuthContext);

  const onSubmit = async () => {
    if(username==="" || Email==="" || Password===""){
      toast.warning("Please Fill fields")
    }
    else{
      try {
        const response = await fetch(newUrl, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              "register":"true",
              emailId: Email,
              userName: username,
              accesskey: Password
          }),
        });
  
        const json = await response.json();
        if (json.Status === true) {
            setAuth(true)
            localStorage.setItem("Token", json.Token);
            setusername("")
            setEmail("")
            setPassword("")
            toast.success("Creating website for you")
          try {
            const response1 = await fetch(`${baseUrl1}/eazotel/createwebsite`, {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Token: json.Token,
                template: "1",
                hotelName: hoteldata.HotelName,
                hotelPhone: hoteldata.Hotelnumber,
                hotelAddress:"addr",
                hotelState: hoteldata.State,
                hotelCity: hoteldata.City,
                hotelCountry: hoteldata.Country,
                hotelPinCode: hoteldata.pincode,
                hotelEmail: hoteldata.email,
                oldWebsite: "",
                "planName":"P1",
                "category":"Hotel",
                "currency":"INR",
                "starRating":"4",
                "hasPool":"false",
                "breakfastOption":[],
                "serveBreakfast":"false",
                "breakfastIncluded":"false",
                "parkingType":"best",
                "parkingAvailability":"false",
                "parkingCost":"200",
                "parkingLocation":"underground",
                "pricingStructure":"",
                "reservationRequirement":"false",
                "logo":"https://urbanvenue.in/wp-content/uploads/2020/09/logo_uv-removebg-preview-e1701685619775.png",
                "totalroomCategory":"0",
                "roomCategories":[],
                "bannerVideo":"",
                "hotelDescription":"Best Hotel",
                "customDomain":"",
                "colorCombination":{
                    "backgroundColor":"#153B5B",
                    "buttonColor":"#0A3A75",
                    "fontColor":"#0A3A75",
                    "boardColor":"#0A3A75"
                },
                "Facilities":{
                              "FrontDesk":"true",
                              "Wifi":"false",
                              "Board":"false",
                              "Rooftop_Cafe":"false",
                              "Health_Club":"false",
                              "Express_checks":"false",
                              "Wave_Bar":"false",
                              "Conference_Hall":"false",
                              "Alchemy":"false",
                              "Suncafe":"false",
                              "Doctor":"false",
                              "Spa":"false",
                              "Babysitting":"false",
                              "Electricity":"false",
                              "Concierge":"false",
                              "Conditinoer":"false",
                              "Security":"false",
                              "TravelTour":"false",
                              "Currency_Exchange":"false",
                              "Laundry":"false",
                              "Casino":"false",
                              "Parking":"false",
                              "Elevator":"false",
                              "Jacuzzi":"false",
                              "Room_Service":"false",
                              "Accept_Cards":"false",
                              "Child_Care":"false",
                              "Conference_Rooms":"false",
                              "Fitness_Center":"false",
                              "Health_&_Beauty":"false",
                              "Restaurant":"false",
                              "Swimming_Pool":"false",
                              "Housekeep":"false",
                              "cofeemaker":"false",
                              "minibar":"false",
                              "Evpoint":"false",
                              "SaunaStream":"false"
                              },
                "checkInFrom":"2024-02-12",
                "checkInUntil":"01:33",
                "petCharges":"100",
                "allowPets":"true",
                "checkOutFrom":"2024-02-12",
                "allowChildren":"true",
                "checkOutUntil":"01:33",
                "languages":["English"],
                "pagesRequired":{},
                "establishedSince":"1995",
                "document":{},
                "otaRequired":{}
  
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
              const websiteTab = window.open(json1.Website, '_blank');
              const dashboardTab = window.open(json1.BookingEngine, '_blank');
              const bookingTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
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
    }
  
  };


  const handleGoogleLogin = async (provider, data) => {
    setLoad(true)
    const emailId = data.email;
    const userName = data.name;
    const accesskey = data.email;
    try {
      const response = await fetch(newUrl, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "register":"true",
            emailId: emailId,
            userName: userName,
            accesskey: accesskey
        }),
      });

      const json = await response.json();
      if (json.Status === true) {
          setAuth(true)
          localStorage.setItem("Token", json.Token);
          toast.success("Creating website for you")
        try {
          const response1 = await fetch(`${baseUrl1}/eazotel/createwebsite`, {
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
              hotelAddress:"addr",
              hotelState: hoteldata.State,
              hotelCity: hoteldata.City,
              hotelCountry: hoteldata.Country,
              hotelPinCode: hoteldata.pincode,
              hotelEmail: hoteldata.email,
              oldWebsite: "",
              "planName":"P1",
              "category":"Hotel",
              "currency":"INR",
              "starRating":"4",
              "hasPool":"false",
              "breakfastOption":[],
              "serveBreakfast":"false",
              "breakfastIncluded":"false",
              "parkingType":"best",
              "parkingAvailability":"false",
              "parkingCost":"200",
              "parkingLocation":"underground",
              "pricingStructure":"",
              "reservationRequirement":"false",
              "logo":"https://urbanvenue.in/wp-content/uploads/2020/09/logo_uv-removebg-preview-e1701685619775.png",
              "totalroomCategory":"0",
              "roomCategories":[],
              "bannerVideo":"",
              "hotelDescription":"Best Hotel",
              "customDomain":"",
              "colorCombination":{
                  "backgroundColor":"#153B5B",
                  "buttonColor":"#0A3A75",
                  "fontColor":"#0A3A75",
                  "boardColor":"#0A3A75"
              },
              "Facilities":{
                            "FrontDesk":"true",
                            "Wifi":"false",
                            "Board":"false",
                            "Rooftop_Cafe":"false",
                            "Health_Club":"false",
                            "Express_checks":"false",
                            "Wave_Bar":"false",
                            "Conference_Hall":"false",
                            "Alchemy":"false",
                            "Suncafe":"false",
                            "Doctor":"false",
                            "Spa":"false",
                            "Babysitting":"false",
                            "Electricity":"false",
                            "Concierge":"false",
                            "Conditinoer":"false",
                            "Security":"false",
                            "TravelTour":"false",
                            "Currency_Exchange":"false",
                            "Laundry":"false",
                            "Casino":"false",
                            "Parking":"false",
                            "Elevator":"false",
                            "Jacuzzi":"false",
                            "Room_Service":"false",
                            "Accept_Cards":"false",
                            "Child_Care":"false",
                            "Conference_Rooms":"false",
                            "Fitness_Center":"false",
                            "Health_&_Beauty":"false",
                            "Restaurant":"false",
                            "Swimming_Pool":"false",
                            "Housekeep":"false",
                            "cofeemaker":"false",
                            "minibar":"false",
                            "Evpoint":"false",
                            "SaunaStream":"false"
                            },
              "checkInFrom":"2024-02-12",
              "checkInUntil":"01:33",
              "petCharges":"100",
              "allowPets":"true",
              "checkOutFrom":"2024-02-12",
              "allowChildren":"true",
              "checkOutUntil":"01:33",
              "languages":["English"],
              "pagesRequired":{},
              "establishedSince":"1995",
              "document":{},
              "otaRequired":{}

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
            const websiteTab = window.open(json1.Website, '_blank');
            const dashboardTab = window.open(json1.BookingEngine, '_blank');
            const bookingTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
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
    setTimeout(() => {
      const websiteTab = window.open(clientWebsite, '_blank');
      const dashboardTab = window.open(clientengine, '_blank');
      const bookingTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');

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
        <div className="login-body" > {/* onSubmit={handleSubmit(onSubmit)} */}
          <Link to="/" className="image">
            {" "}
            <img loading="lazy"
  decoding="async"
 className="login-image" src={Logo} alt="loginImg" />
          </Link>
          <div>
            <input style={{"width":"100%","marginTop":"7px"}} value={username} onChange={(e)=>{setusername(e.target.value)}}  type="text" placeholder="username" />
            <input style={{"width":"100%","marginTop":"7px"}} value={Email} onChange={(e)=>{setEmail(e.target.value)}}  type="email" placeholder="Email id" />
            <input style={{"width":"100%","marginTop":"7px","marginBottom":"7px"}} value={Password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Password" />
            <button style={{marginLeft:"35%"}} onClick={()=>{onSubmit()}}  className="createwebsitebutton ">Submit</button>
          </div>
          or
          <div className="googleauth mt-1 w-100">
            <LoginSocialGoogle
              client_id="525278251391-g3jigd28se6a4fse2ld8pcp2spvv2jnp.apps.googleusercontent.com"
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
        </div>

        {/* {loading ? <Spinner /> : undefined} */}


      </div>
    </div>


  )
}

export default Registration