import "../style/Form.css";
import FormImg from "../assets/Ellipse.png";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const host = "https://backend.eazotel.com/api/dashboard/demo/book";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [feature, setFeature] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      Business_Name: name,
      Email: email,
      City: city,
      Number: phone,
      Feature: feature,
    };
    toast.success("Form submitted successfully!");
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
    setFeature("");

    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/demo") {
      window.scroll(0, 0);
    }
  }, [pathname]);

  return (
    <div className="container form">
      <ToastContainer />
      <div className="row  form-content">
        <form className="col-md-7 body" onSubmit={handleSubmit}>
          <h1 className="visually-hidden">Schedule a free demo</h1>
          <h2 className="subheading">Schedule a free demo</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text"
            placeholder="Name of the business"
            required
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text"
            placeholder="Phone"
            required
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text"
            placeholder="City"
            required
          />
          <input
            type="text"
            name="feature"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            className="text"
            placeholder="Service required"
            required
          />
          <button type="submit" className="demobutton mt-4 border ">
            Submit
          </button>
        </form>
        <div className="col-md-4 form-img">
          <img loading="lazy" decoding="async" src={FormImg} alt="formImg" />
        </div>
      </div>
    </div>
  );
};

export default Form;
