import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Bhairahawagardenresortdesktop from "../assets/Bhairahawagardenresortdesktop.png";
import Peaceatpeakdesktop from "../assets/Peaceatpeakdesktop.png";
import Sparvhospitalitydesktop from "../assets/Sparvhospitalitydesktop.png";
import anand from "../assets/andan.png";
import Awadh from "../assets/awd.png";
import ebc from "../assets/ebc.png";
import gdu from "../assets/gdu.png";
import Jamun from "../assets/jamun.png";
import les from "../assets/les.png";
import spice from "../assets/spice.png";

// import lesdesk from "../assets/lesdesk.png";
import "../style/OurWork.css";
import OurWorkCard from "./OurWorkCard";

const OurWork = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/our-work") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);



  const datas = [
    // {
    //   "img": al,
    //   "img2": "",
    //   "link": "https://test3.eazotel.com",
    //   "client": "Al Hathaifa",
    //   "description": `AL HATHAIFA is a trusted brand in Oman with a decade-plus of competitive business solutions providers in the Technology, Staffing, and Talent Management Sectors. Established in 2009, AL HATHAIFA has built strong and trusted partnerships and feels proud to say that "Our clients are more than just customers, they are our business partners."AL HATHAIFA comprises the best, skilled, determined, innovative, and focused mindsets offering customized, effective, and result-oriented business solutions designed to fit your business needs.`
    // },
    {
      "img": gdu,
      "img2": "",
      "link": "https://test1.eazotel.com/",
      "client": "Grand Hotel D’Europe",
      "description": `Grand Hotel D’Europe is a heritage guesthouse, founded in 1891 by Mr. E. Magry, who belonged to one of the Creole communities of the city. The French culture’s elegant approach towards life and art and the social value placed on living in balance with nature and the community is infused in Grand Hotel D’Europe, which is immersed in the tranquil natural surroundings.Grand Hotel D’Europe had the privilege and honour of hosting Mirra Alfassa, a French Spiritual Guru and the late movie actor and former Chief Minister of Tamil Nadu, Mr. M G Ramachandiran.`
    },
    {
      "img": anand,
      "img2": "",
      "link": "https://test7.eazotel.com/",
      "client": "Anandha Inn",
      "description": `Embark on a journey through the lively streets of Pondicherry with Anandha Inn as your perfect sanctuary. Situated in the heart of this coastal haven, our hotel provides cozy accommodations and a welcoming atmosphere. Immerse yourself in the allure of the French Quarter, bustling markets, and historic landmarks just moments away. Unwind on the shores of Rock Beach and savor delectable cuisine. Let Anandha Inn be your gateway to the enchanting allure of Pondicherry.`
    },
    {
      "img": ebc,
      "img2": "",
      "link": "https://www.ebcmussoorie.com/",
      "client": "EBC Mussoorie",
      "description": `Welcome to Everest Base Camp, a luxurious camping resort located in the untouched landscape of Mussoorie. Our property is a nostalgic family treasure that we've transformed into a unique vacation experience for you. We take pride in our honest approach to hospitality and our efforts to blend in with the natural surroundings. Our plush tents offer a perfect balance of luxury and nature to help you unwind after a day full of curated experiences like treks and picnics. At Everest Base Camp, we believe in giving back to the land that nurtures us, and we welcome you to join us on this journey. Discover a new level of relaxation and rejuvenation amidst Mussoorie's flora and fauna.`
    },
    {
      "img": Bhairahawagardenresortdesktop,
      "img2": "",
      "link": "https://bhairahawagardenresort.com/",
      "client": "Bhairahawa Garden Resorts",
      "description": "Home to the Gurkha soldiers and eight of the world's ten tallest mountains, including the mighty Everest, Nepal stands on the world's roof. Bhairahawa Garden Resort is a peaceful escape for travellers in the heart of Lumbini. Our 4-star retreat combines modern comforts with the cultural heritage of Buddha's birthplace. Enjoy a calm garden, delightful dining, and cosy rooms with city views. Whether exploring historic sites or relaxing with our amenities, you'll experience the true spirit of Nepal with Bhairahawa Resort."
    },
    {
      "img": les,
      "img2": "",
      "link": "https://www.lesboganveillea.com/",
      "client": "Les Boganveillea",
      "description": `At Les Boganveillea, we invite you to immerse yourself in the rich heritage and serene ambiance of our heritage property. Nestled in the heart of Auroville, our hotel invites guests to experience a peaceful haven amidst the bustling cityscape. Our roots trace back to a century-old heritage property, once a cherished family home, lovingly transformed into a guest house in 2016. Located at the heart of Auroville town, Les Boganveillea exudes charm and elegance. Offering a blend of modern luxury and timeless heritage, our hotel is the perfect choice for both business and leisure travelers.`
    },
    {
      "img": Awadh,
      "img2": "",
      "link": "https://www.hotelawadhvilasayodhya.com/",
      "client": "Hotel Awadh Vilas",
      "description": "Hotel Awadh Vilas Ayodhya hotel is situated in the Ayodhya district of Uttar Pradesh and it’s counted as the best hotel in the city. It contains committed staff who are ready to serve the customer better service through their skill and talent. It also provides luxurious facilities and makes your experience more comfortable. Home-like feeling can be availed through this hotel. The architecture of the hotel is designed in a way that elevates your mood and makes you happy. As all know this city was the land of Lord Rama and the epic Ramayana is written here. So, visit Dreamland Resort and Hotel where you find the convenience, affordability, comfort, and interactive social place according to pocket size. Recently Ram Mandir was completed and the Indian Prime Minister visited that Temple."
    },
    {
      "img": Peaceatpeakdesktop,
      "img2": "",
      "link": "https://peaceatpeak.com/",
      "client": "Peace at Peak",
      "description": "In luxury’s lap at Peace at Peak, Kanatal, witness the relaxing and laid-back life that is so characteristic of this sunny beach state. Located in Mandrem Rd, near the White Church on the North coast of Goa and overlooking the Arabian Sea, this resort in Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and approximately 100 minutes from the city centre, SPARV beach resort in Goa expands over multiple acres of lush greenery, divided into the main hotel building with Standard, Deluxe and Premium category rooms. This accommodation in Mandrem coupled with a convenient location, and easy access to the city’s must-see destinations, makes for a perfect romantic or family holiday."
    },
    {
      "img": Sparvhospitalitydesktop,
      "img2": "",
      "link": "https://sparvhospitality.com/",
      "client": "SPARV Aulakhs Resort",
      "description": "In luxury’s lap at SPARV Aulakh Resort, Goa, witness the relaxing and laid-back life that is so characteristic of this sunny beach state. Located in Mandrem Rd, near the White Church on the North coast of Goa and overlooking the Arabian Sea, this resort in Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and approximately 100 minutes from the city centre, SPARV beach resort in Goa expands over multiple acres of lush greenery, divided into the main hotel building with Standard, Deluxe and Premium category rooms. This accommodation in Mandrem coupled with a convenient location, and easy access to the city’s must-see destinations, makes for a perfect romantic or family holiday."
    },
    {
      "img": Jamun,
      "img2": "",
      "link": "https://thejamuntree.com/",
      "client": "The Jamun Tree",
      "description": `The Jamun Tree takes pride in bringing to you the best-in-class facilities, that rival even 3-star hotels, to suit your needs. Stay in tune with your daily workout routine at our fitness centre. Our valet parking service ensures you a hassle-free stay. Enjoy Muzaffarpur at its best and we will take care of the rest.The Jamun Tree takes pride in bringing to you the best-in-class facilities, that rival even 3-star hotels, to suit your needs. Stay in tune with your daily workout routine at our fitness centre. Our valet parking service ensures you a hassle-free stay.`
    },
    {
      "img": spice,
      "img2": "",
      "link": "https://test6.eazotel.com/",
      "client": "",
      "client": "Spice Haven",
      "description": ` Spice Haven is a culinary oasis nestled in the heart of downtown, where exquisite flavors and aromas from the Indian subcontinent tantalize your senses. Our restaurant is renowned for its authentic Indian cuisine, meticulously prepared using traditional recipes passed down through generations. Our welcoming ambiance and embark on a culinary journey like no other. From rich and creamy curries to fiery tandoori delights, our menu offers a diverse selection of dishes to cater to every palate. Indulge in the robust flavors of our signature dishes, crafted with the finest ingredients and seasoned to perfection.`
    }
  ]
  return (
    <div>
      <div className="margin-top"></div>
      <section className="container pt-5 pb-3">
        <div className="text-center mt-4 mb-3">
          <h1 className=" textblue fontfamily-fm-b title-heading">
            Our Featured <span className="textorange">Work</span>
          </h1>
        </div>
        <div className="banner-text fontfamily-fm-b text-center">
          <h4 className=" textblue title-text  fontfamily-fm-b textorange">
            Enabling our clients to get Easy with their businesses. Our goal is
            to nurture your vision and provide innovative, custom solutions for
            all your needs.
          </h4>
        </div>
      </section>

      <section className="container custom-padding px-0">
        {datas.map((data, index) => (
          <OurWorkCard key={index} data={data} index={index} />
        ))}
      </section>
      <section className="text-center  mb-4">
        <div className="bottom">
          <h2 className="bottom-text fontfamily-fm-b">
            Transformative experiences by design. Let’s work together.
          </h2>
        </div>
        <div className="">
          <Link
            to="/demo"
            className="link-btn link-text m-auto fontfamily-fm-b"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
