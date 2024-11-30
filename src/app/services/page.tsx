import Image from 'next/image'
import React from 'react'

const CourseCategory = () => {
  return (
    <div className="w-full lg:w-[1280px] lg:h-auto h-auto lg:flex lg:flex-col flex flex-col px-4 lg:justify-between">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-20">
        {/* Top Section */}
        <div className="w-full lg:w-[768px] h-auto lg:h-[109px] flex flex-col items-center">
          <h1 className="text-3xl font-bold mt-6 text-center w-full lg:w-[768px]">
            Explore Courses By Category
          </h1>
          <p className="mt-2 text-sm text-center w-full lg:w-[768px]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
        </div>

        {/* Grid Section for Course Boxes */}
        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* 1st Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mt-5 w-[50px] h-[50px] bg-[#FFFFFF] mr-4">
              <Image src="/images/pen-tool-2.png" alt="Design Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Design & Development</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/volume-high.png" alt="Marketing Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Marketing</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/group.png" alt="Development Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Development</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 4th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/microphone.png" alt="Communication Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Communication</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 5th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/link.png" alt="Digital Marketing Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Digital Marketing</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 6th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/arrow-2.png" alt="Self Development Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Self Development</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 7th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/briefcase.png" alt="Business Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Business</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 8th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/finance.png" alt="Finance Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Finance</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* 9th Box */}
          <div className="flex flex-row w-full h-[120px] bg-[#F7F7F7] p-4 rounded-md">
            <div className="flex items-center justify-center mr-4 mt-5 w-[50px] h-[50px] bg-[#FFFFFF]">
              <Image src="/images/book.png" alt="Consulting Icon" width={22} height={22} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-sm">Consulting</h1>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <button className="w-[155px] sm:w-[155px] sm:h-[48px] bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] border border-[#000000] p-[12px] px-[24px] gap-[8px] rounded-tl-[5px] border-t-[1px] text-sm justify-center items-center mt-11 mx-auto">
        View All Courses
      </button>
    </div>
  )
}

export default CourseCategory
