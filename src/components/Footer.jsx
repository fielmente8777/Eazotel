import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/EAZOTEL LOGO-09.png"
import Insta from "../assets/image 2.png"
import linkedIn from "../assets/image 5.png"
const Footer = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-20 py-2 pt-3.5 mt-16 w-full text-[#0A3A75] bg-[#E8F1FD] max-md:px-5 max-md:pb-5  max-md:mt-10 max-md:max-w-full max-md:py-2">
      <img
        loading="lazy"
        alt='Eazotel'
        src={logo}
        className="max-w-full aspect-[2.86] w-[218px]"
      />
      <div className="flex gap-5 justify-between self-stretch mx-10 mt-7 max-md:flex-wrap max-md:mx-2 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-4 justify-between  max-md:flex-wrap max-md:max-w-full" >
          <div className="grow self-start text-xl font-semibold leading-7">
            Address:
          </div>
          <div className="flex gap-5 py-[4px] text-base leading-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">
              We Work Forum, DLF Cyber City, DLF Phase 3, Gurugram, Haryana
              122002, 🇮🇳  India
            </div>
            <div className="w-px bg-[#0A3A75] h-[72px] max-md:w-[100%] max-md:h-px" />
            <div className="flex-auto">
              Eazotel Technologies, 71-75 Shelton St, London WC2H 9JQ,🇬🇧 United
              Kingdom
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="flex gap-4 justify-between whitespace-nowrap max-md:flex-col max-md:max-w-full">
            <div className="grow self-start text-xl font-semibold leading-7">
              Contact Details:
            </div>
            <div className="flex flex-col flex-1 justify-start  py-[4px] max-md:px text-base leading-6">
              <div className="flex gap-2 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2301da23e35b1258fb3c0fa797af56b48fc19487f3f731dc9d0e546c835e8f8c?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                  className="w-6 aspect-square"
                />
                <a style={{textDecoration:"none",color:"#0A3A75"}} href='tel:+9501868775' className="grow">+91 9501868775</a>
              </div>
              <div className="flex gap-2 justify-between mt-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ef70ddf2e60afd55dc17d5edce9c9d1db69f540a605b07ba4d25271b7928ee?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                  className="w-6 aspect-square"
                />
                <a style={{textDecoration:"none",color:"#0A3A75"}} href='mailto:sachin@eazotel.com' className="grow">Sachin@eazotel.com</a>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-4 mt-3 max-md:flex-col max-md:max-w-full">
            <div className="self-start text-xl font-semibold leading-7">
              Follow Us:
            </div>
            <div className="flex flex-1 justify-center max-md:justify-start gap-3 py-[4px] max-md:px text-base leading-6">
              <Link to="https://www.instagram.com/eazotel/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <img
                  loading="lazy"
                  src={Insta}
                  className="w-10 aspect-square"
                />
              </Link>
              <Link to="https://www.linkedin.com/company/eazotel/mycompany/verification/" target="_blank">
                <img
                  loading="lazy"
                  src={linkedIn}
                  className="w-10 aspect-square"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-base font-semibold leading-6 whitespace-nowrap max-md:mt-10">
        © 2020 Eazotel
      </div>
      <div className="text-sm leading-5">
        Privacy Policy | Terms & Conditions | Cookies
      </div>
    </div>
  )
}
export default Footer