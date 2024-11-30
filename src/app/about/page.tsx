import Image from 'next/image'
import React from 'react'
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const About = () => {
  return (
<div className="w-[428px] h-[1705px] flex flex-col justify-center items-center lg:h-auto lg:w-[1280px] bg-[#F7F7F7] lg:flex lg:justify-center lg:items-center lg:py-10">
      <div className="text-center max-w-screen-lg w-full px-6">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-sm mt-4">
          Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit.
        </p>

    
        <div className="w-full mt-10">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            <div className="flex flex-col items-center">
              <Image src="/images/boy1.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">James Nduku</h3>
              <p>Marketing Coordinator</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/girl1.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">Joseph Munyambu</h3>
              <p>Nursing Assistant</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/girl2.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">Joseph Ngumbau</h3>
              <p>Medical Assistant</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-8">
            <div className="flex flex-col items-center">
              <Image src="/images/boy2.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">Erick Kipkemboi</h3>
              <p>Web Designer</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/boy3.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">Stephen Kerubo</h3>
              <p>President of Sales</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/girl3.png" alt="Image" width={80} height={80} />
              <h3 className="font-bold mt-3">John Leboo</h3>
              <p>Dog Trainer</p>
              <div className="flex space-x-4 text-xl mt-4">
                <FaTwitter />
                <FaLinkedin />
                <FaDribbble />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
