import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[550px] w-[428px] h-[700px] flex flex-col lg:flex-row">
    {/* Left side div */}
    <div className="w-1/2 lg:w-1/2 flex flex-col justify-center items-start ml-10 px-6 lg:px-16 py-12 lg:py-24">
      <h1 className="w-[380px] h-[96px] text-3xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
        Learn new skills <br /> online with ease
      </h1>
      <p className="w-[380px] h-[54px] lg:w-[500px] text-sm lg:text-lg mb-6">
        Discover a wide range of courses covering a variety of <br /> subjects&#44; taught by expert instructors.
      </p>
      <div className='flex flex-row space-x-3 lg:w-[358px] lg:h-[64px] w-[300px] h-[45px]'>
      <button className='w-[178px] h-[48px] rounded-md bg-black hover:bg-white hover:text-black hover:border border-black text-[#FFFFFF] gap-8'>Start Learning Now</button>
      <button className='w-[164px] h-[48px] rounded-md border border-black bg-[#FFFFFF]  hover:bg-[#000000] hover:text-[#FFFFFF]'>Explore Courses</button>
    </div>
    </div>

    {/* Right side div */}
     
      <Image
      src={"/images/Image.png"}
      alt='hero-image'
      width={500}
      height={500}
      objectFit = "cover"
      className=' flex flex-row lg:justify-end lg:ml-36 w-[428px] h-[390px] lg:w-[500px] lg:h-[550px] '/>
      
   
  </div>
  )
}

export default Hero
