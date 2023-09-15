import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import ConfettiExplosion from "react-confetti-explosion";
import EmailRegisteredPopup from "../components/EmailRegistered";
import TestImage from "../assets/Testform.png"
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import Spinner from "../components/Spinner"
import Partner from "./Partner";
import "../style/Test.css"
import Hospitality from "./Hospitality";
import AboutBookingEngine from "./AboutBookingEngine";
import AboutDashboard from "./AboutDashboard";
import BrowsMore from "./BrowsMore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/Model.css"
import { GrClose } from "react-icons/gr"
import Registration from "./Registration";

const Test = () => {
  const {baseUrl, auth } = useContext(AuthContext)
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
  }, []);


  const CreateWebsite = async () => {
    try {
      setLoad(true)
      const response1 = await fetch(`${baseUrl}/api/registerCreate`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Token: localStorage.getItem('Token'),
          template: "1",
          hotelName: FormdatawithLocation.HotelName,
          hotelPhone: FormdatawithLocation.Hotelnumber,
          hotelState: FormdatawithLocation.State,
          hotelCity: FormdatawithLocation.City,
          hotelCountry: FormdatawithLocation.Country,
          hotelPinCode: FormdatawithLocation.pincode,
          hotelEmail: FormdatawithLocation.email,
          hotelDomain: FormdatawithLocation.HotelName

        }),
      });

      const json1 = await response1.json();
      if (json1.Status === true) {
        setLoad(false)
        setClientWebsite(json1.Website)
        setClientengine(json1.BookingEngine)
        setModalShow(true)
        setTimeout(() => {
          const websiteTab = window.open(clientWebsite, '_blank');
          const dashboardTab = window.open(clientengine, '_blank');
          const bookingTab = window.open(`https://dashboard.eazotel.com/?id=${localStorage.getItem("Token")}`, '_blank');

        }, 4000); // Adjust the delay if needed
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
    };
    await setFormdatawithLocation(formDataWithLocation);
    if (!auth) {
      setShowpop(true)
    }
    else {
      CreateWebsite()
    }
  }


  return (
    <>
      {/* Main Code */}

      <div className="test">
        <ToastContainer />
        {showpop ? <Registration hoteldata={FormdatawithLocation} /> : ""}
        <div className="container" style={{ "overflowX": "hidden" }} >
          <div className="row test-data"
            id={load ? "top-div-opacity" : "top-div-test"}>
            <div className="test-content">
              <form className="test-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className=" text-2xl md:text-5xl text-bold test-heading">
                  Hotel Details
                </h1>
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
                  <div className="row mb-4">
                    <div className="col-md-6 forminput">
                      <label htmlFor="name" class="form-label inputname">
                        Pincode
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter pincode"
                        name="pincode"
                        class=" inputarea"
                        onChange={(e) => setData({ ...data, pincode: e.target.value })}
                        {...register("pincode", {
                          required: {
                            value: true,
                            message: "pincode is required",
                          },
                        })}
                      />
                    </div>
                    {/* <div className="col-md-6 forminput">
                      <label htmlFor="name" class="form-label inputname">
                        Hotel Domain
                      </label>
                      <input
                        type="text"
                        name="domain"
                        placeholder="Enter hotel domain"
                        class=" inputarea room"
                        onChange={(e) => setData({ ...data, domain: e.target.value })}
                        {...register("domain", {
                          required: {
                            value: true,
                            message: "domain is required",
                          },
                        })}
                      />
                    </div> */}
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
              <img
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



      <Hospitality />
      <Partner />
      <AboutDashboard />
      <AboutBookingEngine />
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
                <a href={clientWebsite} target="_blank" rel="noreferrer">{clientWebsite}</a>
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
