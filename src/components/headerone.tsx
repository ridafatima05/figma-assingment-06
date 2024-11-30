import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderOne = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[54px]  w-[428px] h-[72px] bg-[#F7F7F7] mb-2 flex flex-row border-b border-black lg:border-b lg:border-black">
      <div className="lg:w-[1120px] lg:h-[24px] w-[400px] h-[42px] lg:flex lg:flex-row  lg:justify-between lg:space-x-36 lg:items-center lg:mt-4 lg:ml-20">
    <div className="  flex flex-col  text-xs   lg:flex lg:flex-row lg:text-sm lg:items-center lg:space-x-2 lg:ml-2 lg:w-[386px] lg:h-[30px] w-[300px] h-[15px] ml-2 mb-7 ">
      <div className='mt-6 lg:flex lg:flex-row lg:space-x-2'><p className="">Phone Number: 956 742 455 678</p>
      <p className='   lg:border-l  lg:border-[#676767] lg:w-30px lg:h-[20px] '></p>
      <p className=''>Email:info@ddsgnr.com</p>
    </div>
</div>
       <div className="flex flex-row  justify-end lg:space-x-4 space-x-2 ml-16 text-xl lg:ml-11">
      <BiLogoFacebook />
      <FaInstagram />
      <FaTwitter/>
     <FaLinkedin/>
</div>
</div>
</div>
  )
}

export default HeaderOne
