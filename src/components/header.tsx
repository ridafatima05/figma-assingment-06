import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row lg:w-[1280px] lg:h-[72px] w-[428px] h-[72pz] bg-[#F7F7F7] lg:flex lg:items-center justify-between lg:justify-between  sm:px-7 lg:px-16">
    <div className='w-[380px] h-[48px] lg:w-[1152px] lg:h-[44px] items-center justify-between flex'>
    {/* Left side div */}
    <div className="lg:flex lg:items-center lg:space-x-2 lg:ml-10 items-center flex ml-2 ">
      <Image
        src="/images/Frame.png"
        width={32.58}
        height={30.38}
        alt="logo2"
        className="transform translate-x-[-1px]"
      />
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Ddsgnr</h1>
    </div>

    {/* Right side div */}
    <div className="flex items-center space-x-4 px-3 bg-[#FFFFFF] sm:space-x-8 md:space-x-10 justify-between">
      {/* Navigation Menu */}
      <ul className="hidden sm:flex space-x-10 text-base sm:text-lg ">
        <li className=' border-b border-black hover:text-[#10F2C5]'>
          <Link href="/">Home</Link>
        </li>
        <li className='hover:text-[#10F2C5]'>
          <Link href="/courses">Courses</Link>
        </li>
        <li className='hover:text-[#10F2C5]'>
          <Link href="/services">Services</Link>
        </li>
        <li className='hover:text-[#10F2C5]'>
          <Link href="/achievements">Achievement</Link>
        </li>
        <li className='hover:text-[#10F2C5]'>
          <Link href="/about">About Us</Link>
        </li>
        <li className='hover:text-[#10F2C5]'>
          <Link href="/testimonial">Testimonial</Link>
          </li>
          
      </ul>

      {/* Login and Sign Up Buttons */}
      <div className="lg:block hidden items-center space-x-4 justify-end ">
        <button className="border border-black bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] rounded-md px-4 py-2 w-[80px] h-[40px]">Login</button>
        <button className="px-4 py-2  border  border-black rounded-md bg-black text-white hover:bg-[#FFFFFF] hover:text-[#000000] w-[95px] h-[40px]">Sign Up</button>
      </div>
    </div>

    {/* responsive */}
    <div className="sm:hidden flex items-center">
      <button className="text-black">☰</button> 
    </div>
  </div>
  </div>
  )
}

export default Header
