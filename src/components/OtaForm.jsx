import axios from 'axios';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "../style/Form.css";


const HotelForm = () => {

    const host = "https://nexon.eazotel.com/eazotel/abhijeettesting"
    // const [roomImage, setRoomImage] = useState([]);
    const [uploadedRoomImage, setUploadedRoomImage] = useState([]);
    const [logoUploaded, setLogoUpload] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        token: '',
        starRating: null,
        hasPool: false,
        breakfastOptions: [],
        hotelName: '',
        phone: '',
        address: '',
        serveBreakfast: false,
        breakfastIncluded: false,
        parkingType: '',
        parkingAvailability: false,
        parkingCost: '',
        parkingLocation: '',
        parkingStructure: '',
        reservationRequirement: false,
        city: '',
        country: '',
        postcode: '',
        email: '',
        oldWebsite: '',
        category: '',
        currency: '',
        totalroomCategory: '',

        guestCapacity: '',
        roomType: '',
        roomname: '',
        isWeekendFormat: '',
        changedPrice: {},
        roomDescription: '',
        child: '',
        adult: '',

        numberOfRooms: '',
        pricePerNight: '',
        roomAmenities: [],
        outdooroptions: [],
        foodanddrink: [],
        roomSize: '',
        roomSizeUnit: '',
        smokingAllowed: false,
        bathroomPrivacy: false,
        bathroomOptions: [],
        bannerVideo: '',
        hotelDescription: '',
        customDomain: '',
        amenities: {},
        checkInFrom: '',
        checkInUntil: '',
        petCharges: '',
        allowPets: false,
        checkOutFrom: '',
        allowChildren: false,
        checkOutUntil: '',
        languages: [],
        establishedSince: '',
        document: {},
        otaRequired: {},
        pagesRequired: {},


        // street: '',
        // images: uploadedImage,
        // cancellation: '',
        // non_refundable: '',
        // weekly_plan: '',
        // channelManagerUsage: false,
        // chargeCards: false,
        // invoiceName: '',
        // sameAddress: false,
        // gstRegistered: false,
        // panNumber: '',
    });


    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini (fmr. 'Swaziland')",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (formerly Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    // const amenityOptions = [
    //     "Restaurant", "Room service", "Bar", "24-hour front desk", "Sauna", "Fitness centre",
    //     "Garden", "Terrace", "Non-smoking rooms", "Airport shuttle", "Family rooms", "Spa and wellness centre",
    //     "Hot tub/Jacuzzi", "Free WiFi", "Air conditioning", "Water park", "Electric vehicle charging station",
    //     "Swimming pool", "Beach"
    // ];

    const languageOptions = [
        "Assamese",
        "Bengali",
        "Bodo",
        "Dogri",
        "English",
        "Gujarati",
        "Hindi",
        "Kannada",
        "Kashmiri",
        "Konkani",
        "Maithili",
        "Malayalam",
        "Manipuri",
        "Marathi",
        "Nepali",
        "Odia",
        "Punjabi",
        "Sanskrit",
        "Santali",
        "Sindhi",
        "Tamil",
        "Telugu",
        "Urdu"
    ];
    const bathroomItemsOptions = [
        'Toilet paper',
        'Shower',
        'Toilet',
        'Hairdryer',
        'Bath',
        'Free toiletries',
        'Bidet',
        'Slippers',
        'Bathrobe',
        'Spa bath'
    ];

    const roomAmenities = [
        'Clothes rack',
        'Flat-screen TV',
        'Air conditioning',
        'Linen',
        'Desk',
        'Wake-up service',
        'Towels',
        'Wardrobe or closet',
        'Heating',
        'Fan',
        'Safety deposit box',
        'Towels/sheets (extra fee)',
        'Entire unit located on ground floor'
    ];

    const outdoorsAndViewsOptions = [
        'Balcony',
        'Terrace',
        'View'
    ];

    const foodAndDrinkOptions = [
        'Electric kettle',
        'Tea/Coffee maker',
        'Dining area',
        'Dining table',
        'Microwave'
    ];

    const breakfastOptions = [
        "Continental", "English", "American", "Buffet", "Vegetarian", "Vegan", "Gluten-free", "Other"
    ];

    const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InNkdjc3ODI4M0BnbWFpbC5jb20ifQ.AofdAO-PbLvZtP0MfBr_bMCWqW4V6SNPMhEyqi37vkI";

    function handleLogoChange(e) {
        e.preventDefault()
        const imageInput = document.getElementById('file');
        const file = imageInput.files[0];
        if (!file) {
            alert('Please select an image file.');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = function () {
            const base64String = reader.result.split(',')[1];
            UploadingLogoS3(base64String);
        };
        reader.readAsDataURL(file);
    }
    function UploadingLogoS3(base64String) {
        // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
        fetch('https://api.eazotel.com/api/uploadImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Token: Token, Image: base64String }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from backend:', data);
                setLogoUpload(data.Image)
                // Handle the backend response as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    function handleFileChange(e) {
        const files = e.target.files;
        const newImageLinks = [];
        // const file = imageInput.files[0];
        if (!files) {
            alert('Please select an image file.');
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSizeInMB = file.size / (1024 * 1024);
            if (fileSizeInMB >= 5) {
                setErrorMessage(`File ${file.name} exceeds the maximum size limit of 20MB.`);
                e.target.value = null;
                break;
            }

            else {
                const reader = new FileReader();
                reader.onloadend = function () {
                    const base64String = reader.result.split(',')[1];
                    UploadingImageS3(base64String);
                    console.log("BASE 64 STRING ", base64String, i)
                };
                reader.readAsDataURL(file);
            }

        }
        setErrorMessage("")


    }
    function UploadingImageS3(base64String) {
        // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
        fetch('https://api.eazotel.com/api/uploadImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Token: Token, Image: base64String }),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Response from backend:', data);
                // setRoomImage(data.Image)
                setUploadedRoomImage(pre => pre.concat(data.Image))
                // Handle the backend response as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue = value;

        if (type === 'checkbox') {
            if (name === 'amenities' || name === 'languages' || name === 'breakfastOptions' || name === 'bathroomOptions' || name === 'roomAmenities' || name === 'outdooroptions' || name === 'foodanddrink') {
                newValue = formData[name].includes(value)
                    ? formData[name].filter((item) => item !== value)
                    : [...formData[name], value];
            } else {
                newValue = checked;
            }

        }
        else if (type === 'radio') {
            newValue = value === 'true'; // Convert the value to boolean
        }
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const preparedData = {
        "Token": Token,
        "template": "1",
        "starRating": formData.starRating,
        "hasPool": formData.hasPool,
        "breakfastOption": formData.breakfastOptions,
        "hotelName": formData.hotelName,
        "hotelPhone": formData.phone,
        "hotelAddress": formData.address,
        "serveBreakfast": formData.serveBreakfast,
        "breakfastIncluded": formData.breakfastIncluded,
        "parkingType": formData.parkingType,
        "parkingAvailability": formData.parkingAvailability,
        "parkingCost": formData.parkingCost,
        "parkingLocation": formData.parkingLocation,
        "pricingStructure": formData.parkingStructure,
        "reservationRequirement": formData.reservationRequirement,
        "hotelState": formData.city,
        "hotelCity": formData.city,
        "hotelCountry": formData.country,
        "hotelPinCode": formData.postcode,
        "planName": "P1",
        "hotelEmail": formData.email,
        "oldWebsite": formData.oldWebsite,
        "category": formData.category,
        "currency": formData.currency,
        "logo": logoUploaded,
        "totalroomCategory": formData.totalroomCategory,
        "roomCategories": [
            {
                "roomType": formData.roomType,
                "roomName": formData.roomname,
                "isWeekendFormat": formData.isWeekendFormat,


                // here is the error message
                "changedPrice": {
                    "weekend": 6000,
                    "weekday": 6000
                },
                "roomDescription": formData.hotelDescription,
                "child": "1",
                "adult": "2",
                // here is the error message


                "noOfRooms": formData.numberOfRooms,
                "price": formData.pricePerNight,
                "roomImage": uploadedRoomImage,
                "roomFacilities": formData.roomAmenities,
                "roomSubheading": "Balcony with Sea View",
                "outdooroptions": formData.outdooroptions,
                "foodanddrink": formData.foodanddrink,
                "roomSize": formData.roomSize,
                "roomSizeUnit": formData.roomSizeUnit,
                "smokingAllowed": formData.smokingAllowed,
                "bathroomPrivacy": formData.bathroomPrivacy,
                "bathroomOptions": formData.bathroomOptions
            },
        ],
        "bannerVideo": formData.bannerVideo,
        "hotelDescription": formData.hotelDescription,
        "customDomain": formData.customDomain,
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
        "checkInFrom": formData.checkInFrom,
        "checkInUntil": formData.checkInUntil,
        "petCharges": formData.petCharges,
        "allowPets": formData.allowPets,
        "checkOutFrom": formData.checkOutFrom,
        "allowChildren": formData.allowChildren,
        "checkOutUntil": formData.checkOutUntil,
        "languages": formData.languages,
        "pagesRequired": formData.pagesRequired,
        "establishedSince": formData.establishedSince,
        "document": formData.document,
        "otaRequired": formData.otaRequired
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('propertyFormData', JSON.stringify(formData));
        // console.log(formData)
        try {
            console.log(preparedData)
            console.log("I'm in the try block");
            const response = await axios.post(host, preparedData);
            console.log(response.data);
        } catch (error) {
            console.log("Error: " + error);
        }

    };


    console.log(formData)
    return (
        <div className='container flex justify-content-center flex-column mt-3 mb-24' id="abhijeet_form">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="container col-12 mt-2" >
                        <h4>Where is the property you're listing?</h4>
                        <div className='form mt-3'>

                            <div className="form-group ">
                                <label htmlFor="country">Country/region</label>
                                <select
                                    className="form-select mt-2"

                                    id="country"
                                    name="country"
                                    value={formData?.country}
                                    onChange={handleChange}
                                >
                                    <option value="">Select any country</option>

                                    {countries && countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"

                                    className="form-control  mt-2"
                                    id="city"
                                    name="city"
                                    placeholder="Enter city"
                                    value={formData?.city}
                                    onChange={handleChange}

                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="postcode">Post Code</label>
                                <input
                                    type="number"
                                    min={0}

                                    className="form-control  mt-2"
                                    id="postcode"
                                    name="postcode"
                                    placeholder="Enter postcode"
                                    value={formData?.postcode}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="street">Street name and house number</label>
                                <input
                                    type="text"

                                    className="form-control  mt-2"
                                    id="street"
                                    name="street"
                                    placeholder="Enter street and house number"
                                    value={formData?.street}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="Phone">Phone Number</label>
                                <input
                                    type="tel"

                                    className="form-control  mt-2"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="Enter Number"
                                    value={formData?.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"

                                    className="form-control  mt-2"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData?.email}
                                    onChange={handleChange}
                                    onBlur={(e) => {
                                        const email = e.target.value.trim();
                                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                        if (email !== '' || !emailRegex.test(email)) {
                                            alert('Invalid email format');
                                        }
                                    }}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="oldWebsite">Old Website Link</label>
                                <input
                                    type="text"

                                    className="form-control mt-2"
                                    id="oldWebsite"
                                    name="oldWebsite"
                                    placeholder="Enter your hotel name"
                                    value={formData.oldWebsite}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <h5>What's the name of your hotel?</h5>
                                <label htmlFor="hotelName">Property name</label>
                                <input
                                    type="text"

                                    className="form-control mt-2"
                                    id="hotelName"
                                    name="hotelName"
                                    placeholder="Enter your hotel name"
                                    value={formData?.hotelName}
                                    onChange={handleChange}
                                />
                                <p>This name will be seen by guests when they search for a place to stay.</p>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Website Logo</h4>

                                <p><strong>Upload logo of your of the website.</strong> </p>
                                <div className="container mt-2">
                                    <div className="drop-zone" id="dropZone">
                                        <div className="drop-zone-placeholder">
                                            <p>Drag & Drop Logo here</p>
                                            <p>or</p>
                                            <p>Click to browse</p>
                                        </div>
                                        <input type="file" id="file" name="images" accept="image/*" onChange={handleLogoChange} />
                                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                    </div>
                                </div>

                                <div>
                                    <img src={logoUploaded} alt='logo' style={{ maxWidth: '200px', maxHeight: '200px', margin: '5px' }} />
                                </div>
                            </div>

                            <div className='form-group mt-3'>
                                <h5>What is the star rating of your hotel?</h5>
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <div key={rating} className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"

                                            name="starRating"
                                            id={`${rating}Star`}
                                            value={rating.toString()}
                                            checked={formData.starRating === rating.toString()}
                                            onChange={(e) => setFormData({ ...formData, starRating: e.target.value })}
                                        />
                                        <label className="form-check-label" htmlFor={`${rating}Star`}>
                                            {[...Array(rating)].map((_, index) => (
                                                <FaStar key={index} color='yellow' />
                                            ))}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="container w-100 mt-2">

                    </div>
                    <div className="container col-12 mt-2">

                    </div>

                    {/* <div className="container w-100 mt-2">
                            <h4>What can guests use at your hotel?</h4>
                            <div className='form mt-3'>
                                {amenityOptions.map((amenity, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`amenity-${index}`}
                                            name="amenities"
                                            value={amenity}
                                            checked={formData.amenities[amenity]} // Check if the amenity is included in the selected amenities list
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`amenity-${index}`}>{amenity}</label>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    <div className="container w-100 mt-2">
                        <h4>Breakfast details</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-3">
                                <h5>Do you serve guests breakfast?</h5>
                                <div>
                                    <input type="radio" id="serve-yes" name="serveBreakfast" value="yes" checked={formData?.serveBreakfast === "yes"} onChange={(e) => setFormData({ ...formData, serveBreakfast: e.target.value })} />
                                    <label htmlFor="serve-yes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="serve-no" name="serveBreakfast" value="no" checked={formData?.serveBreakfast === "no"} onChange={(e) => setFormData({ ...formData, serveBreakfast: e.target.value })} />
                                    <label htmlFor="serve-no">No</label>
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <h5>Is breakfast included in the price guests pay?</h5>
                                <div>
                                    <input type="radio" id="included-yes" name="breakfastIncluded" value="yes" checked={formData?.breakfastIncluded === "yes"} onChange={(e) => setFormData({ ...formData, breakfastIncluded: e.target.value })} />
                                    <label htmlFor="included-yes">Yes, it's included</label>
                                </div>
                                <div>
                                    <input type="radio" id="included-no" name="breakfastIncluded" value="no" checked={formData?.breakfastIncluded === "no"} onChange={(e) => setFormData({ ...formData, breakfastIncluded: e.target.value })} />
                                    <label htmlFor="included-no">No, it costs extra</label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>What type of breakfast do you offer?</h5>
                                <p>Select all that apply</p>
                                {breakfastOptions.map((breakfastOption, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`breakfast-${index}`}
                                            name="breakfastOptions"
                                            value={breakfastOption}
                                            checked={formData.breakfastOptions[breakfastOption]} // Check if the amenity is included in the selected amenities list
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`breakfast-${index}`}>{breakfastOption}</label>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className="container w-100 mt-2">
                        <h4>Tell us about the parking situation at your hotel</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-3">
                                <h5>Is parking available to guests?</h5>
                                <div>
                                    <input type="radio" id="parking-yes-free" name="parkingAvailability" value="yes" checked={formData?.parkingAvailability === "yes"} onChange={(e) => setFormData({ ...formData, parkingAvailability: e.target.value })} />
                                    <label htmlFor="parking-yes-free">Yes, free</label>
                                </div>
                                <div>
                                    <input type="radio" id="parking-yes-paid" name="parkingAvailability" value="yes_paid" checked={formData?.parkingAvailability === "yes_paid"} onChange={(e) => setFormData({ ...formData, parkingAvailability: e.target.value })} />
                                    <label htmlFor="parking-yes-paid">Yes, paid</label>
                                </div>
                                <div>
                                    <input type="radio" id="parking-no" name="parkingAvailability" value="no" checked={formData?.parkingAvailability === "no"} onChange={(e) => setFormData({ ...formData, parkingAvailability: e.target.value })} />
                                    <label htmlFor="parking-no">No</label>
                                </div>
                            </div>
                            <div className='flex  gap-2'>
                                <div className="form-group mt-3 w-100">
                                    <label htmlFor="parkingCost">Parking Cost (INR)</label>
                                    <input
                                        type="number"
                                        className="form-control mt-2"
                                        id="parkingCost"
                                        name="parkingCost"
                                        value={formData?.parkingCost}
                                        onChange={(e) => setFormData({ ...formData, parkingCost: e.target.value })}
                                        placeholder="Enter parking cost"
                                    />
                                </div>
                                <div className="form-group mt-3 w-25">
                                    <label htmlFor="parkingStructure">Parking Structure</label>
                                    <select
                                        className="form-select mt-2"
                                        id="parkingStructure"
                                        name="parkingStructure"

                                        value={formData?.parkingStructure}
                                        onChange={(e) => setFormData({ ...formData, parkingStructure: e.target.value })}
                                    >
                                        <option value="">Select pricing structure</option>
                                        <option value="per day">Per Day</option>
                                        <option value="per hour">Per Hour</option>
                                        <option value="per stay">Per Stay</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <h5>Do they need to reserve a parking spot?</h5>
                                    <div>
                                        <input type="radio" id="reservation-needed" name="reservationRequirement" value="yes" checked={formData?.reservationRequirement === "yes"} onChange={(e) => setFormData({ ...formData, reservationRequirement: e.target.value })} />
                                        <label htmlFor="reservation-needed">Reservation needed</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="no-reservation-needed" name="reservationRequirement" value="no" checked={formData?.reservationRequirement === "no"} onChange={(e) => setFormData({ ...formData, reservationRequirement: e.target.value })} />
                                        <label htmlFor="no-reservation-needed">No reservation needed</label>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <h5>Where is the parking located?</h5>
                                    <div>
                                        <input type="radio" id="parking-on-site" name="parkingLocation" value="on site" checked={formData?.parkingLocation === "on site"} onChange={(e) => setFormData({ ...formData, parkingLocation: e.target.value })} />
                                        <label htmlFor="parking-on-site">On site</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="parking-off-site" name="parkingLocation" value="off site" checked={formData?.parkingLocation === "off site"} onChange={(e) => setFormData({ ...formData, parkingLocation: e.target.value })} />
                                        <label htmlFor="parking-off-site">Off site</label>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <h5>What type of parking is it?</h5>
                                    <div>
                                        <input type="radio" id="private-parking" name="parkingType" value="private" checked={formData?.parkingType === "private"} onChange={(e) => setFormData({ ...formData, parkingType: e.target.value })} />
                                        <label htmlFor="private-parking">Private</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="public-parking" name="parkingType" value="public" checked={formData?.parkingType === "public"} onChange={(e) => setFormData({ ...formData, parkingType: e.target.value })} />
                                        <label htmlFor="public-parking">Public</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="container w-100 mt-2">
                        <h4>What languages do you or your staff speak?</h4>
                        <div className='form mt-3'>
                            {/* Render checkboxes for each language option */}
                            <label htmlFor="language-selection">Select language(s)</label>
                            {languageOptions.map((language, index) => (
                                <div className="form-check" key={index}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`language-${index}`}
                                        name="languages"
                                        value={language}
                                        checked={formData.languages[language]}
                                        onChange={handleChange}
                                    />

                                    <label className="form-check-label" htmlFor={`language-${index}`}>{language}</label>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="container w-100 mt-2">
                        <h4>House Rules</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-3">
                                <h5>What are your check-in and check-out times?</h5>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="check-in-from">Check-in</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="check-in-from"
                                            name="checkInFrom"
                                            value={formData.checkInFrom}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="check-in-until">until</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="check-in-until"
                                            name="checkInUntil"
                                            value={formData.checkInUntil}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="check-out-from">Check-out</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="check-out-from"
                                            name="checkOutFrom"
                                            value={formData.checkOutFrom}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="check-out-until">until</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="check-out-until"
                                            name="checkOutUntil"
                                            value={formData.checkOutUntil}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>Do you allow children?</h5>
                                <div>
                                    <input type="radio" id="children-yes" name="allowChildren" value="yes" checked={formData?.allowChildren === "yes"} onChange={(e) => setFormData({ ...formData, allowChildren: e.target.value })} />
                                    <label htmlFor="children-yes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="children-no" name="allowChildren" value="no" checked={formData?.allowChildren === "no"} onChange={(e) => setFormData({ ...formData, allowChildren: e.target.value })} />
                                    <label htmlFor="children-no">No</label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>Do you allow pets?</h5>
                                <div>
                                    <input type="radio" id="pets-yes" name="allowPets" value="yes" checked={formData?.allowPets === "yes"} onChange={(e) => setFormData({ ...formData, allowPets: e.target.value })} />
                                    <label htmlFor="pets-yes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="pets-request" name="allowPets" value="Upon request" checked={formData?.allowPets === "Upon request"} onChange={(e) => setFormData({ ...formData, allowPets: e.target.value })} />
                                    <label htmlFor="pets-request">Upon request</label>
                                </div>
                                <div>
                                    <input type="radio" id="pets-no" name="allowPets" value="no" checked={formData?.allowPets === "no"} onChange={(e) => setFormData({ ...formData, allowPets: e.target.value })} />
                                    <label htmlFor="pets-no">No</label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>Are there additional charges for pets?</h5>
                                <div>
                                    <input type="radio" id="pets-free" name="petCharges" value="free" checked={formData?.petCharges === "free"} onChange={(e) => setFormData({ ...formData, petCharges: e.target.value })} />
                                    <label htmlFor="pets-free">Pets can stay for free</label>
                                </div>
                                <div>
                                    <input type="radio" id="pets-charges" name="petCharges" value="charges" checked={formData?.petCharges === "charges"} onChange={(e) => setFormData({ ...formData, petCharges: e.target.value })} />
                                    <label htmlFor="pets-charges">Charges may apply</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container w-100 mt-2">
                        <h4>Room details</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-4">
                                <h5>Room Type</h5>
                                <input
                                    type="text"
                                    className="form-control mt-2 w-25"
                                    id="roomType"
                                    name="roomType"
                                    value={formData.roomType}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <h5>How many rooms of this type do you have?</h5>
                                <input
                                    type="number"
                                    className="form-control mt-2 w-25"
                                    id="numberOfRooms"
                                    name="numberOfRooms"
                                    value={formData.numberOfRooms}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <h5>How many guests can stay in this room?</h5>
                                <input
                                    type="number"
                                    className="form-control mt-2 w-25"
                                    id="guestCapacity"
                                    name="guestCapacity" // Updated name attribute to "guestCapacity"
                                    value={formData.guestCapacity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mt-3'>
                                <h5>How big is this room?</h5>
                                <div className="form-group mt-3">
                                    <label htmlFor="roomSize">Room size - optional</label>
                                    <div className='d-flex gap-3'>
                                        <input
                                            type="number"
                                            className="form-control mt-2 w-100"
                                            id="roomSize"
                                            name="roomSize"
                                            value={formData.roomSize}
                                            onChange={handleChange}
                                        />
                                        <select
                                            className="form-select mt-2 w-25"
                                            id="roomSizeUnit" // Updated ID for room size unit
                                            name="roomSizeUnit" // Updated name attribute for room size unit
                                            value={formData.roomSizeUnit}
                                            onChange={handleChange}
                                        >
                                            <option value="square meters">square meters</option>
                                            <option value="square feet">square feet</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <h5>Room Description</h5>
                                <input
                                    type="text"
                                    className="form-control mt-2 w-25"
                                    id="roomDescription"
                                    name="roomDescription" // Updated name attribute to "guestCapacity"
                                    value={formData.roomDescription}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <h5>Is smoking allowed in this room?</h5>
                                <div>
                                    <input type="radio" id="smokingAllowedYes" name="smokingAllowed" value="yes" />
                                    <label htmlFor="smokingAllowedYes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="smokingAllowedNo" name="smokingAllowed" value="no" />
                                    <label htmlFor="smokingAllowedNo">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Bathroom details</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-3">
                                <h5>Is the bathroom private?</h5>
                                <div>
                                    <input type="radio" id="privateBathroom" name="bathroomPrivacy" value="private" />
                                    <label htmlFor="privateBathroom">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="sharedBathroom" name="bathroomPrivacy" value="shared" />
                                    <label htmlFor="sharedBathroom">No, it's shared</label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>Which bathroom items are available in this room?</h5>
                                {bathroomItemsOptions.map((bathroom, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`bathroom-${index}`}
                                            name='bathroomOptions'
                                            value={bathroom}
                                            checked={formData.bathroomOptions[bathroom]}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`bathroom-${index}`}>{bathroom}</label>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>


                    <div className="container w-100 mt-2">
                        <h4>What can guests use in this room?</h4>
                        <div className='form mt-3'>
                            <div className="form-group mt-3">
                                <h5>General amenities</h5>
                                {roomAmenities.map((roomamenity, index) => (
                                    <div className="form-check" key={index}>
                                        <input

                                            type="checkbox"
                                            className="form-check-input"
                                            id={`bathroom-${index}`}
                                            name='roomAmenities'
                                            value={roomamenity}
                                            checked={formData.roomAmenities[roomamenity]}
                                            onChange={handleChange}

                                        />
                                        <label className="form-check-label" htmlFor={`bathroom-${index}`}>{roomamenity}</label>
                                    </div>
                                ))}
                                {/* Add more checkboxes for other bathroom items */}
                            </div>
                            <div className="form-group mt-3">
                                <h5>Outdoors and views</h5>
                                {outdoorsAndViewsOptions && outdoorsAndViewsOptions.map((outdooroption, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`outdoors-view-${index}`}
                                            name="outdooroptions"
                                            value={outdooroption}
                                            checked={formData.outdooroptions[outdooroption]}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`outdoors-view-${index}`}>{outdooroption}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="form-group mt-3">
                                <h5>Food and drink</h5>
                                {foodAndDrinkOptions.map((fod, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`food-drink-${index}`}
                                            name="foodanddrink"
                                            value={fod}
                                            checked={formData.foodanddrink[fod]}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`food-drink-${index}`}>{fod}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2 ">
                        <h4>What’s the name of this room?</h4>
                        <div className='form mt-3'>
                            <p>This is the name that guests will see on your property page. Choose a name that most accurately describes this room.</p>
                            <div className="form-group mt-3">
                                <label htmlFor="roomname">Room Name</label>
                                <div className='d-flex gap-3'>
                                    <select
                                        className="form-select mt-2"
                                        id="roomname" // Updated ID for room size unit
                                        name="roomname" // Updated name attribute for room size unit
                                        value={formData.roomname}
                                        onChange={handleChange}
                                    >
                                        <option value="Single Room">Single Room</option>
                                        <option value="Budget Single Room">Budget Single Room</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Set the price per night for this room</h4>
                        <div className='form mt-3'>
                            <h5>How much do you want to charge per night?</h5>
                            <div className="form-group mt-3">
                                <label htmlFor="pricePerNight">Price per night (INR)</label>
                                <input
                                    type="number"
                                    className="form-control mt-2"
                                    id="pricePerNight"
                                    name="pricePerNight" // Updated name attribute to "pricePerNight"
                                    placeholder="Enter price per night"
                                    value={formData.pricePerNight}
                                    onChange={handleChange}
                                />
                                <p>Including taxes, commission and charges</p>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Rate Plans</h4>
                        <div className='form'>
                            <div>
                                <p>To attract a wider range of guests, we suggest setting up multiple rate plans. The recommended prices and policies for each plan are based on data from properties like yours, but they can be edited now or after you complete registration.</p>
                            </div>
                            <div className="mt-3">
                                <div className='d-flex justify-content-between'>
                                    <h4>Standard Rate Plan</h4>
                                    {/* <button type="button" className="btn btn-primary" onClick={() => console.log('Edit Standard Rate Plan')}>Edit</button> */}
                                </div>
                                <h5>Cancellation Policy:</h5>
                                {/* Guests can cancel their bookings for free before 18:00 on the day of arrival. The guests will be charged the cost of the first night if they cancel after this.
                           Guests who cancel within 24 hours will have their cancellation fee waived. */}
                                <label htmlFor="pricePerNight">Cancellation Policy:</label>
                                <textarea
                                    type="text"
                                    className="form-control mt-2"
                                    id="cancellation"
                                    name="cancellation" // Updated name attribute to "pricePerNight"
                                    placeholder="Cancellation"
                                    value={formData.cancellation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-3">
                                <h5>Non-refundable Rate Plan:</h5>
                                {/* <p>Guests will pay 10% less than the standard rate for a non-refundable rate. Guests cannot cancel their bookings for free at any time.</p> */}
                                <textarea
                                    type="text"
                                    className="form-control mt-2"
                                    id="non_refundable"
                                    name="non_refundable" // Updated name attribute to "pricePerNight"
                                    placeholder="Non refundable rate plan"
                                    value={formData.non_refundable}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-3">

                                {/* <p>Guests will pay 15% less than the standard rate when they book for at least 7 nights. Guests can cancel their bookings for free before 18:00 on the day of arrival. The guests will be charged the cost of the first night if they cancel after this (based on the standard rate cancellation policy).</p> */}
                                <h5>Weekly Rate Plan</h5>
                                <textarea
                                    type="text"
                                    className="form-control mt-2"
                                    id="weekly_plan"
                                    name="weekly_plan" // Updated name attribute to "pricePerNight"
                                    placeholder="Weekly Rate Plan"
                                    value={formData.weekly_plan}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container w-100 mt-2">
                        <h4>What does your hotel look like?</h4>
                        <div className='form mt-3'>
                            <p><strong>Upload at least 5 photos of your property.</strong> The more you upload, the more likely you are to get bookings. You can add more later.</p>
                            <div className="container mt-2">
                                <div className="drop-zone" id="dropZone">
                                    <div className="drop-zone-placeholder">
                                        <p>Drag & Drop files here</p>
                                        <p>or</p>
                                        <p>Click to browse</p>
                                    </div>
                                    <input type="file" id="file" name="images" accept="image/*" multiple onChange={handleFileChange} />
                                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                </div>
                            </div>

                            <div>
                                {uploadedRoomImage.map((image, index) => (
                                    <img key={index} src={image} alt={`Image ${index}`} style={{ maxWidth: '200px', maxHeight: '200px', margin: '5px' }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Availability</h4>
                        <div className="form mt-3">
                            <p>
                                Your property will be automatically available for bookings for the next 18 months – excluding days you import that are marked as unavailable. You can update your calendar after registration.
                            </p>
                            <h5>Do you use a channel manager?</h5>
                            <div className="form-group mt-3">
                                <div>
                                    <input
                                        type="radio"

                                        id="channelManagerYes"
                                        name="channelManagerUsage"
                                        value="yes"
                                        checked={formData?.channelManagerUsage === "yes"} onChange={(e) => setFormData({ ...formData, channelManagerUsage: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="channelManagerYes" className="form-check-label">
                                        Yes, I use a channel manager
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"

                                        id="channelManagerNo"
                                        name="channelManagerUsage"
                                        value="yes"
                                        checked={formData?.channelManagerUsage === "no"} onChange={(e) => setFormData({ ...formData, channelManagerUsage: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="channelManagerNo" className="form-check-label">
                                        No, I don’t use a channel manager
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Guest payment options</h4>
                        <div className="form mt-3">
                            <h5>Are you able to charge credit cards at your property?</h5>
                            <div className="form-group mt-3">
                                <div>
                                    <input
                                        type="radio"
                                        id="chargeCardsYes"
                                        name="chargeCards"
                                        value="yes"
                                        checked={formData?.chargeCards === "yes"} onChange={(e) => setFormData({ ...formData, chargeCards: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="chargeCardsYes" className="form-check-label">
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="chargeCardsNo"
                                        name="chargeCards"
                                        value="no"
                                        checked={formData?.chargeCards === "no"} onChange={(e) => setFormData({ ...formData, chargeCards: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="chargeCardsNo" className="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Invoicing</h4>
                        <div className="form mt-3">
                            <p>At the beginning of each month we will send you an invoice for all complete bookings in the previous month.</p>
                            <div className="form-group mt-3">
                                <h5>What name should be on the invoice?</h5>

                                <div>
                                    <input
                                        type="radio"
                                        id="invoiceLegalName"
                                        name="invoiceName"
                                        value="legal"
                                        checked={formData?.invoiceName === "legal"} onChange={(e) => setFormData({ ...formData, invoiceName: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="invoiceLegalName" className="form-check-label">
                                        Legal company name (please specify)
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="invoiceUserName"
                                        name="invoiceName"
                                        value="username"
                                        checked={formData?.invoiceName === "username"} onChange={(e) => setFormData({ ...formData, invoiceName: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="invoiceUserName" className="form-check-label">
                                        Your User Name
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <h5>Does this recipient have the same address as your property?</h5>
                                <div>
                                    <input
                                        type="radio"
                                        id="sameAddressYes"
                                        name="sameAddress"
                                        value="yes"
                                        checked={formData?.sameAddress === "yes"} onChange={(e) => setFormData({ ...formData, sameAddress: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="sameAddressYes" className="form-check-label">
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="sameAddressNo"
                                        name="sameAddress"
                                        value="no"
                                        checked={formData?.sameAddress === "no"} onChange={(e) => setFormData({ ...formData, sameAddress: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="sameAddressNo" className="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-100 mt-2">
                        <h4>Goods and Services Tax</h4>
                        <div className="form mt-3">
                            <p>Due to regulations established by the Indian government, we need the following details. By submitting this information, you are confirming that your PAN and state registration are accurate.</p>
                            <div className="form-group mt-3">
                                <h5>Are you registered for GST purposes?</h5>
                                <div>
                                    <input
                                        type="radio"
                                        id="registeredYes"
                                        name="gstRegistered"
                                        value="yes"
                                        checked={formData?.gstRegistered === "yes"} onChange={(e) => setFormData({ ...formData, gstRegistered: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="registeredYes" className="form-check-label">
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="registeredNo"
                                        name="gstRegistered"
                                        value="no"
                                        checked={formData?.gstRegistered === "no"} onChange={(e) => setFormData({ ...formData, gstRegistered: e.target.value })}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="registeredNo" className="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="panNumber">Enter your PAN Card number:</label>
                                <input
                                    type="text"
                                    id="panNumber"
                                    name="panNumber"
                                    className="form-control"
                                    placeholder="Enter PAN Card number"
                                    value={formData.panNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="address">Enter your Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter Address"
                                    value={formData.address}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>
                    </div>

                    <div className="container absolute w-100 gap-3 mt-3 mb-3">
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default HotelForm;