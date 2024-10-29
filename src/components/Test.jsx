import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ConfettiExplosion from "react-confetti-explosion";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestImage from "../assets/Testform.png";
import EmailRegisteredPopup from "../components/EmailRegistered";
import Spinner from "../components/Spinner";
import AuthContext from "../context/AuthProvider";
import "../style/Model.css";
import "../style/Test.css";
import BrowsMore from "./BrowsMore";
import Registration from "./Registration";

const Test = () => {
  const { baseUrl, auth, baseUrl1, setAuth, setHaveDashboardPassword } = useContext(AuthContext)
  const { clientWebsite, clientengine } = useContext(AuthContext);
  const { modalShow, setModalShow } = useContext(AuthContext);
  const { load, setLoad, setClientWebsite, setClientengine } = useContext(AuthContext);

  const navigate = useNavigate();
  const [location, setLocation] = useState({});
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const [showEmailRegisteredPopup, setShowEmailRegisteredPopup] = useState(false);
  const [isExploding, setIsExploding] = useState(false); //Confetti explosion
  const { showpop, setShowpop } = useContext(AuthContext)
  const [FormdatawithLocation, setFormdatawithLocation] = useState({})


  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === "/generatewebsite") {
      window.scroll(0, 0);
    }

  }, [pathname])


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
          try {
            const result = await axios.get(url);
            // console.log(result.data)
            setLocation((prevLocation) => ({
              ...prevLocation,
              locality: result.data.locality,
              city: result.data.city,
              countryCode: result.data.countryCode,
              country: result.data.countryName,
              state: result.data.principalSubdivision,
            }));
          } catch (err) {
            toast.error(err);
          }
        },
        (error) => {
          toast.error(error)
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.")
    }
  }, [auth]);

  const TemplateSwitch = async (token, number, json1) => {
    const response = await fetch(`${baseUrl1}/eazotel/changeTemplate`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "Token": token,
          "template": number
        }
      ),
    });

    const json = await response.json();
    console.log(json)
    if (json.Status) {
      setLoad(false)
      setShowpop(false)
      setModalShow(true)
      setHaveDashboardPassword(true)
      //redirections
      window.open(json1.websiteLink, '_blank');
      window.open(json1.engineLink, '_blank');
      window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
    }
    else {
      setLoad(false)
      setShowpop(false)
      setModalShow(true)
      setHaveDashboardPassword(true)
      //redirections
      window.open(json1.websiteLink, '_blank');
      window.open(json1.engineLink, '_blank');
      window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');
    }
  }

  const CreateWebsite = async (formDataWithLocations) => {
    setLoad(true)
    console.log(formDataWithLocations)
    if (!auth) {
      const response = await fetch(`${baseUrl1}/eazotel/ceateuser`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "register": "true",
            emailId: formDataWithLocations.email,
            userName: formDataWithLocations.HotelName,
            accesskey: formDataWithLocations.Password
          }),
      });

      const json = await response.json();
      if (json.Status === true) {
        setAuth(true)
        localStorage.setItem("Token", json.Token);
      }
      else {
        toast.warning("Email Id Already Registered")
        return
      }

    }
    toast.success("Creating Website for You")

    try {
      const response1 = await fetch(`${baseUrl1}/eazotel/createwebsite`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            Token: localStorage.getItem("Token"),
            template: "1",
            hotelName: formDataWithLocations.HotelName,
            hotelPhone: formDataWithLocations.Hotelnumber,
            hotelAddress: "addr",
            hotelState: formDataWithLocations.State,
            hotelCity: formDataWithLocations.City,
            hotelCountry: formDataWithLocations.Country,
            hotelPinCode: formDataWithLocations.pincode,
            hotelEmail: formDataWithLocations.email,
            oldWebsite: "",
            "planName": "P1",
            "category": "Hotel",
            "currency": "INR",
            "starRating": "4",
            "hasPool": "false",
            "breakfastOption": [],
            "serveBreakfast": "false",
            "breakfastIncluded": "false",
            "parkingType": "best",
            "parkingAvailability": "false",
            "parkingCost": "200",
            "parkingLocation": "underground",
            "pricingStructure": "",
            "reservationRequirement": "false",
            "logo": "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-media-logo-png-image_1744656.jpg",
            "totalroomCategory": "0",
            "roomCategories": [],
            "bannerVideo": "",
            "hotelDescription": "Best Hotel",
            "customDomain": "",
            "colorCombination": {
              "backgroundColor": "#153B5B",
              "buttonColor": "#0A3A75",
              "fontColor": "#0A3A75",
              "boardColor": "#0A3A75"
            },
            "Facilities": {
              "FrontDesk": "true",
              "Wifi": "false",
              "Board": "false",
              "Rooftop_Cafe": "false",
              "Health_Club": "false",
              "Express_checks": "false",
              "Wave_Bar": "false",
              "Conference_Hall": "false",
              "Alchemy": "false",
              "Suncafe": "false",
              "Doctor": "false",
              "Spa": "false",
              "Babysitting": "false",
              "Electricity": "false",
              "Concierge": "false",
              "Conditinoer": "false",
              "Security": "false",
              "TravelTour": "false",
              "Currency_Exchange": "false",
              "Laundry": "false",
              "Casino": "false",
              "Parking": "false",
              "Elevator": "false",
              "Jacuzzi": "false",
              "Room_Service": "false",
              "Accept_Cards": "false",
              "Child_Care": "false",
              "Conference_Rooms": "false",
              "Fitness_Center": "false",
              "Health_&_Beauty": "false",
              "Restaurant": "false",
              "Swimming_Pool": "false",
              "Housekeep": "false",
              "cofeemaker": "false",
              "minibar": "false",
              "Evpoint": "false",
              "SaunaStream": "false"
            },
            "checkInFrom": "2024-02-12",
            "checkInUntil": "01:33",
            "petCharges": "100",
            "allowPets": "true",
            "checkOutFrom": "2024-02-12",
            "allowChildren": "true",
            "checkOutUntil": "01:33",
            "languages": ["English"],
            "pagesRequired": {},
            "establishedSince": "1995",
            "document": {},
            "otaRequired": {}

          }
        ),
      });

      const json1 = await response1.json();
      if (json1.Status === true) {
        setClientWebsite(json1.websiteLink)
        setClientengine(json1.engineLink)
        const templates = ["1", "2", "5", "6"]
        const randomIndex = Math.floor(Math.random() * templates.length);
        // alert(templates[randomIndex])
        TemplateSwitch(localStorage.getItem("Token"), templates[randomIndex], json1)
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

  const onSubmit = async (data) => {

    const formDataWithLocation = {
      ...data,
      Address: location.locality || "",
      City: location.city || "",
      State: location.state || "",
      Country: location.country || "",
      pincode: "112233"
    };
    await setFormdatawithLocation(formDataWithLocation);
    if (!auth) {
      CreateWebsite(formDataWithLocation)
    }
    else {
      CreateWebsite(formDataWithLocation)
    }
  }



  return (
    <>
      {/* Main Code */}

      <div className="test flex-col flex items-center justify-center">
        <ToastContainer />
        {showpop ? <Registration hoteldata={FormdatawithLocation} /> : ""}
        <div className="max-w-[1320px] px-[.7rem] w-full" style={{ "overflowX": "hidden" }} >
          <div className="row test-data"
            id={load ? "top-div-opacity" : "top-div-test"}>
            <div className="test-content">
              <form className="test-form" onSubmit={handleSubmit(onSubmit)}>
                {/* <h1 className=" text-2xl md:text-5xl text-bold test-heading">
                  Hotel Details
                </h1> */}
                <div className="mx-auto max-w-lg" style={{ marginTop: '3rem' }}>
                  <div className="mb-4 forminput">
                    <label htmlFor="name" className="form-label inputname">
                      Name of the Hotel
                    </label>
                    <input
                      type="text"
                      name="HotelName"
                      placeholder="Name of the hotel"
                      class=" inputarea hotel"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      {...register("HotelName", {
                        required: {
                          value: true,
                          message: "Hotel Name is required",
                        },
                      })}
                    />
                  </div>
                  {!auth ? <div className="mb-4 forminput">
                    <label htmlFor="name" className="form-label inputname">
                      Create Password
                    </label>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Enter password"
                      class=" inputarea hotel"
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      {...register("Password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                      })}
                    />
                  </div> : ""}
                  <div className="row mb-4">
                    <div className="col-md-6 forminput">
                      <label htmlFor="name" class="form-label inputname">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="Enter phone number"
                        name="Hotelnumber"
                        class=" inputarea"
                        onChange={(e) => setData({ ...data, phoneNo: e.target.value })}
                        {...register("Hotelnumber", {
                          required: {
                            value: true,
                            message: "Hotel Number is required",
                          },
                        })}
                      />
                    </div>
                    <div className="col-md-6 forminput">
                      <label htmlFor="name" class="form-label inputname">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        class=" inputarea room"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        {...register("email", {
                          required: {
                            value: true,
                            message: "email is required",
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 addressrow ">
                    <div className="col-md-6 forminput">
                      <label htmlFor="name" class="form-label inputname">
                        Address
                      </label>
                      <input
                        type="text"
                        name="Address"
                        value={location?.locality || ""}
                        placeholder="Address"
                        class=" inputarea address"
                        onChange={(e) => setLocation({ ...location, locality: e.target.value })}

                      />
                    </div>

                    <div className="col-md-6 forminput">
                      <label htmlFor="city" class="form-label inputname">
                        City
                      </label>
                      <input
                        type="text"
                        name="City"
                        class="inputarea city"
                        value={location?.city || ""}
                        placeholder="City"
                        onChange={(e) => setLocation({ ...location, city: e.target.value })}

                      />
                    </div>
                  </div>
                  <div className="row extra">
                    <div className="col-md-6 forminput">
                      <label for="state" class="form-label inputname">

                        State

                      </label>
                      <input
                        type="text"
                        name="State"
                        value={location?.state || ""}
                        placeholder="State"
                        class="inputarea state"
                        onChange={(e) => setLocation({ ...location, state: e.target.value })}

                      />
                    </div>
                    <div className="col-md-6 forminput">
                      <label htmlFor="country" className="form-label inputname">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="Country"
                        value={location?.country || ""}
                        placeholder="Country"
                        className="inputarea country"
                        onChange={(e) =>
                          setLocation({ ...location, country: e.target.value })
                        }

                      />
                    </div>
                  </div>




                  <div className="ackrow">

                    <div className="ack">
                      <p className="acknowledgement" >* By submitting this form, you agree to our Terms of Use
                        and to receive Eazotal emails & updates and acknowledge
                        you’ve read our Privacy Policy.
                      </p>
                    </div>
                    <div className="buttonhere">
                      <div className="submitbutton">
                        <Button className="submitted" type="submit">
                          {load ? "Submitting ..." : "Submit"}
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>
            <div className="formImage">
              <img loading="lazy"
                decoding="async"

                src={TestImage}
                alt="leftimg"
                className="test-image"

              />
            </div>
          </div>
        </div>
      </div>

      {/* Congrats Modal Code */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setIsExploding(false);
        }}
        expload={isExploding}
        weblink={clientWebsite}
      />
      {/* Email Registered Popup */}
      <EmailRegisteredPopup
        show={showEmailRegisteredPopup}
        onHide={() => setShowEmailRegisteredPopup(false)}
      />

      {/* Spinner Code */}

      {load ? <Spinner /> : <div>

        {/* 

      <Hospitality />
      <Partner />
      <AboutDashboard />
      <AboutBookingEngine /> */}
        <BrowsMore /> </div>}
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  const { clientWebsite } = useContext(AuthContext);
  const { clientengine } = useContext(AuthContext);
  const { setModalShow } = useContext(AuthContext);
  const handleModelClick = () => {
    setModalShow(false)
  }

  // console.log(props.weblink);
  return (
    <>
      <Modal style={{ height: "100%" }}
        {...props}
        backdrop={"static"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="model-content"
        closeButton={"true"}
      >
        <Modal.Body className="model-body">

          <div className="close mb-2"><GrClose size={20} onClick={handleModelClick} /></div>

          <div className="Modal-details-div">
            <div className="model-test">
              <div>{props.expload && <ConfettiExplosion />}</div>
            </div>
            <h4 style={{ color: "green" }}>Congratulations, Your Website is <span style={{ fontWeight: "bold" }}>Ready!!</span></h4>
            <div style={{ textAlign: "left" }}>
              <p className="webLink">
                <Link to={clientWebsite} target="_blank" rel="noreferrer">{clientWebsite}</Link>
              </p>

            </div>
            <div className="test">
              <div>{props.expload && <ConfettiExplosion />}</div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Test;
