import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[228px] w-[428px] h-[239px] bg-[#F7F7F7]  px-8 flex flex-col lg:flex-row items-center justify-between">
    {/* Left side div */}
    <div className="flex flex-col justify-center lg:w-1/2">
      <h1 className="font-bold text-xl ml-3 lg:ml-10 mt-10 lg:w-[320px] lg:h-[68px] w-[327px] h-[57px]">
        Trusted by 2000+ companies <br /> worldwide.
      </h1>
    </div>

    {/* Right side div for images */}
    <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mt-4 lg:mt-0 ">
      <Image
        src="/images/Logos.png"
        alt="Image 1"
        width={1400}
        height={56}
        className=" object-cover items-center lg:mb-0 mb-20"
      />
    </div>
  </div>
  )
}

export default HeroSection
