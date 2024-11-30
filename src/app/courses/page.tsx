import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <div className='w-[428px] lg:w-[1280px] lg:max-w-screen-xl lg:mx-auto lg:flex lg:flex-col items-center lg:items-center  '>
      
      {/* Top Section */}
      <div className="lg:w-full lg:max-w-screen-sm lg:h-[118px] lg:flex lg:flex-col lg:items-center text-center mt-11 lg:mt-11">
        <h1 className="lg:text-3xl lg:font-bold font-bold text-3xl text-center">Courses</h1>
        <p className="lg:mt-1 mt-4 text-center  font-roboto text-sm lg:text-center lg:leading-7">
          Your Ultimate Guide to learning
        </p>
      </div>

      {/* Categories Section */}
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center '>
        <div className='lg:flex lg:flex-row flex flex-row justify-center items-center lg:justify-center lg:items-center lg:space-x-7 space-x-7 lg:text-sm text-sm lg:mt-0 mt-12'>
          <p className='underline'>Popular</p>
          <p>Recommended</p>
          <p>Best Price</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className='lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-10'>
        
        {/* Box 1 */}
        <div className='flex flex-col w-[416px] h-[534px] p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img1.png"
              alt="course1-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            {/* Text + Rating */}
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Design</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>

            {/* Course Title */}
            <h3 className='font-bold text-lg mt-2'>UX/UI Design 201</h3>

            {/* Description */}
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing <br/>
            elit. Suspendisse varius enim in eros.
            </p>

            {/* Button and Price */}
            <div className='flex  items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] text-xs rounded'>
                Enroll Now
              </button>
              <p className='font-bold text-sm ml-8'>$400</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className='flex flex-col w-[416px] h-[534px] p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img2.png"
              alt="course2-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Programming</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>
            <h3 className='font-bold text-lg mt-2'>Introduction to Python</h3>
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet &#44;consectetur adipiscing <br/>
            elit. Suspendisse varius enim in eros.
            </p>
            <div className='flex  items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] text-xs  rounded'>
                Enroll Now
              </button>
              <p className='font-bold text-sm ml-8'>$400</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className='flex flex-col w-[416px] h-[534px]  p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img3.png"
              alt="course3-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Business</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>
            <h3 className='font-bold text-lg mt-2'>Data Analysis for Beginners</h3>
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing <br/>
            elit. Suspendisse varius enim in eros.
            </p>
            <div className='flex items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] text-xs  rounded'>
                Enroll Now
              </button>
              <p className='font-bold text-sm ml-8'>$400</p>
            </div>
          </div>
        </div>


{/* Box 4 */}
<div className='flex flex-col w-[416px] h-[534px]  p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img4.png"
              alt="course4-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            {/* Text + Rating */}
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Art</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>

            {/* Course Title */}
            <h3 className='font-bold text-lg mt-2'>Art Specialization</h3>

            {/* Description */}
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing <br/>
            elit. Suspendisse varius enim in eros.
            </p>

            {/* Button and Price */}
            <div className='flex  items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black text-xs bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] rounded '>
                Enroll Now
              </button>
              <p className='font-bold ml-8 text-sm'>$400</p>
            </div>
          </div>
        </div>

        {/* Box 5 */}
        <div className='flex flex-col w-[416px] h-[534px] p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img5.png"
              alt="course5-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Law</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>
            <h3 className='font-bold text-lg mt-2'>Rule of Law</h3>
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing <br/>
            elit. Suspendisse varius enim in eros.
            </p>
            <div className='flex  items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black text-xs  rounded bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF]'>
                Enroll Now
              </button>
              <p className='font-bold ml-8 text-sm'>$400</p>
            </div>
          </div>
        </div>

        {/* Box 6 */}
        <div className='flex flex-col w-[416px] h-[534px]  p-4'>
          <div className='mb-2'>
            <Image 
              src="/images/img6.png"
              alt="course6-pic"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>

          <div className='w-full h-[210px] flex flex-col bg-[#F7F7F7] p-4'>
            <div className='flex justify-between items-center'>
              <h6 className='font-bold text-sm'>Tech</h6>
              <Image 
                src="/images/Star.png"
                alt="star-icon"
                width={30}
                height={30}
              />
            </div>
            <h3 className='font-bold text-lg mt-2'>Introduction to webflow</h3>
            <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing <br/>
             elit. Suspendisse varius enim in eros.
            </p>
            <div className='flex  items-center mt-4'>
              <button className='w-[120px] h-[40px] border border-black text-xs bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF]  rounded '>
                Enroll Now
              </button>
              <p className='font-bold text-sm  ml-8 '>$400</p>
            </div>
          </div>
        </div>

      




      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-12">
        <button className="w-[152px] h-[40px] border border-black rounded bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] ">View All Courses</button>
      </div>

    </div>
  )
}

export default Courses