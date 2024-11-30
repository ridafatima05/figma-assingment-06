import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[428px] h-[1411px] lg:w-[1280px] lg:h-[684px]  bg-[#FFFFFF] lg:flex lg:justify-center flex justify-center items-center lg:items-center">
      <div className="w-[380px] h-[1315] lg:w-[1120px] lg:h-[524px] bg-[#FFFFFF] justify-center items-center ">
        {/**top div */}
        {/**left side div */}
        <div className="lg:flex  space-y-2">
        <div className="w-[287px] h-[91px] lg:w-[1120px] lg:h-[82px] mt-11 lg:mt-11  lg:ml-0 ml-20 ">
          <h3 className="w-[287px] h-[27px] lg:w-[500px] lg:h-[27px] lg:font-bold font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="w-[287px] h-[48]  text-sm lg:w-[500px] lg:h-[24px] lg:text-sm">
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit.
          </p>
        </div>
        {/**rightside div */}
        <div className="w-[300px] h-[146px] lg:w-[400px] lg:h-[82px] lg:flex lg:flex-col lg:items-center flex flex-col">
          <div className="w-[380px] h-[112px] lg:w-[400px] lg:h-[48px] lg:mt-11 lg:flex ">
            <form className=" lg:w-full lg:h-[48px] lg:flex lg:space-x-4 lg:space-y-0  space-y-2">
              <input
                className="w-[380px] h-[48px] lg:w-[265px] lg:h-full border border-black rounded-md px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                type="email"
                placeholder="Enter your email"
              />
              <div>
              <button
                type="submit"
                className="w-[380px] h-[48px] lg:w-[135px] lg:h-[48px] border border-black bg-[#FFFFFF]  hover:bg-[#000000] hover:text-[#FFFFFF]  text-sm font-semibold rounded-md"
              >
                Subscribe
              </button>
              </div>
            </form>
          </div>
          <div className="w-[400px] h-[18px] mt-1 lg:mt-2 text-xs flex justify-center">
  <p>
    By subscribing you agree to with our{" "}
    <span className="underline text-black cursor-pointer">
      Privacy Policy
    </span>
  </p>
</div>

        </div>
</div>
        {/**bottom div */}

        
<div className=" w-[172px] h-[811px] flex flex-col mt-3 lg:ml-0 ml-28 lg:w-[1120px] lg:h-[225px] lg:flex lg:flex-row lg:space-x-40 lg:mt-11 ">
           <div ><Image src={"/images/Ddsgnr.png"} alt="logo" width={130} height={40} />
          </div>

           <div className="lg:flex lg:flex-col lg:space-y-3 flex flex-col space-y-3 items-center ">
            <h3 className="font-bold">Courses</h3>
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
           </div>


           <div className="lg:flex lg:flex-col lg:space-y-3 flex flex-col space-y-3 items-center  ">
            <h3 className="font-bold">Resources</h3>
            <p>Career</p>
            <p>Resume</p>
            <p>Learning</p>
            <p>Interview Preparation</p>
            <p>Jobs</p>
           </div>


           <div className=" lg:flex lg:flex-col lg:space-y-3 flex flex-col space-y-3 items-center ">
            <h3 className="font-bold">About Us</h3>
            <p>Contact</p>
            <p>Help/Support</p>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>Partners</p>
           </div>
          
</div>


<div className=" w-[380px] h-[1px] border-t  border-black mt-11 lg:border-t lg:border-black lg:w-[1120px] lg:h-[1px] lg:mt-11 lg:flex"></div>
<div className="lg:w-[1120px] lg:h-[57px] lg:mt-4 w-[380px] h-[144px] mt-4">
  <div className="lg:w-[1120px] lg:h-[24px] lg:gap-0 gap-4 lg:flex lg:flex-row flex flex-col justify-center items-center lg:justify-between lg:items-center">
    {/** Left Section */}
    <div className="w-[345px] h-[66px]  flex gap-3 lg:gap-0 flex-col text-center text-sm lg:w-[564px] lg:h-[21px] lg:flex lg:flex-row lg:text-sm lg:space-x-4">
      <div><p>2023 Ddsgnr. All rights reserved.</p></div>
      <div className='flex flex-row space-x-3'>
      <p className="underline cursor-pointer">Privacy Policy</p>
      <p className="underline cursor-pointer">Terms of Service</p>
      <p className="underline cursor-pointer">Cookies Settings</p>
    </div>
    </div>

    {/** Right Section */}
    <div className="lg:flex space-x-3  lg:space-x-4 gap-5 lg:gap-0 lg:text-xl lg:mt-0 lg:space-y-0 flex">
      <BiLogoFacebook />
      <FaInstagram />
      <FaTwitter/>
     <FaLinkedin/>
    </div>
  </div>
</div>

     </div>     
    </div>
  )
}

export default Footer
