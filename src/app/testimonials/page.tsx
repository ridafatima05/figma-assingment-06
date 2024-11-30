import Image from 'next/image'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-[428px]  h-[1323px] lg:w-[1280px] lg:h-[830px] bg-[#F7F7F7] lg:flex lg:justify-center justify-center items-center lg:items-center">
      <div className="">
        <div className="lg:w-[560px] lg:h-[109px] lg:justify-center lg:items-center justify-center lg:ml-0 ml-12 items-center">
          <h1 className="lg:h-[58px] font-bold text-3xl">Customer testimonials</h1>
          <p className="lg:h-[24px] text-sm lg:mt-0 mt-4">
            Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit.
          </p>
        </div>

        <div className="lg:w-[1152px] lg:h-[417px] lg:justify-center lg:items-center justify-center items-center lg:mt-0 mt-4">
          <div className="lg:w-[1152px] lg:h-[321px]  lg:flex lg:flex-row flex flex-col justify-center items-center lg:space-y-0 space-y-4 lg:space-x-8">
            {/**1st box */}
            <div className="w-[362px] h-[321px]  border border-black">
              <div className="ml-7">
                <div className="mt-8">
                  <Image
                    src={"/Images/Stars.png"}
                    alt="Stars pic"
                    width={116}
                    height={18}
                  />
                </div>
              </div>
              <div className="w-[352px] h-[140px] ml-8">
                <p className="mt-7">
                  &apos;&apos;Lorem ipsum dolor sit amet&#44;
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus&#44; mi <br />
                  quis viverra ornare.&apos;&apos;
                </p>
              </div>

              <div className="w-[254px] h-[56px] flex flex-row ml-8 mb-24">
                <Image
                  src={"/Images/girl2.png"}
                  alt="person-img"
                  width={56}
                  height={56}
                  className="rounded-full"
                />

                <div className="flex flex-col mt-2 ml-3">
                  <h3 className="w-[111px] h[24px] font-bold">James Nduku</h3>
                  <p className="w-[178px] h-[24px] text-xs">
                    Software Developer
                  </p>
                </div>
              </div>
            </div>
            {/**2nd box */}
            <div className="w-[362px] h-[321px]  border border-black">
              <div className="ml-7">
                <div className="mt-8">
                  <Image
                    src={"/Images/Stars.png"}
                    alt="Stars pic"
                    width={116}
                    height={18}
                  />
                </div>
              </div>
              <div className="w-[352px] h-[140px] ml-8">
                <p className="mt-7">
                  &apos;&apos;Lorem ipsum dolor sit amet&#44;
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus&#44; mi <br />
                  quis viverra ornare.&apos;&apos;
                </p>
              </div>

              <div className="w-[254px] h-[56px] flex flex-row ml-8 mb-24">
                <Image
                  src={"/Images/boy1.png"}
                  alt="person-img"
                  width={56}
                  height={56}
                  className="rounded-full"
                />

                <div className="flex flex-col mt-2 ml-3">
                  <h3 className="w-[130px] h[24px] font-bold">
                    Erick Kipkemboi
                  </h3>
                  <p className="w-[178px] text-xs h-[24px]">Scrum Master</p>
                </div>
              </div>
            </div>

            {/**3rd box */}
            <div className="w-[362px] h-[321px] border border-black">
              <div className="ml-7">
                <div className="mt-8">
                  <Image
                    src={"/images/Stars.png"}
                    alt="Stars pic"
                    width={116}
                    height={18}
                  />
                </div>
              </div>
              <div className="w-[352px] h-[140px] ml-8">
                <p className="mt-7">
                  &apos;&apos;Lorem ipsum dolor sit amet&#44;
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus&#44; mi <br />
                  quis viverra ornare.&apos;&apos;
                </p>
              </div>

              <div className="w-[254px] h-[56px] flex flex-row ml-8 mb-24">
                <Image
                  src={"/Images/girl3.png"}
                  alt="person-img"
                  width={56}
                  height={56}
                  className="rounded-full"
                />

                <div className="flex flex-col mt-2  ml-3">
                  <h4 className="w-[150px] h[24px] font-bold">
                    Stephen Kerubo
                  </h4>
                  <p className="w-[178px] h-[24px] text-xs">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
          {/**bottom div */}

          <div className="lg:ml-0 ml-3 w-[380px]  lg:w-[1152px] lg:h-[48px] flex mt-12  justify-between lg:justify-between">
            <div className='lg:ml-0 ml-8 lg:mt-0 mt-4'>
              <Image
                src={"/images/Slider.png"}
                alt="more reviews"
                width={72}
                height={8}
              />
            </div>

            <div className=" w-[380px] lg:w-[111px] lg:h-[48px] flex flex-row space-x-2 justify-end">
              <button className="flex items-center justify-center hover:text-white py-2 px-2 rounded-full border border-black hover:bg-black transition-all transform hover:scale-105 w-[40px] h-[40px]">
                <div className="w-[20px] h-[20px]">
                  <FaArrowLeft />
                </div>
              </button>

              <button className="flex items-center rounded-full justify-end py-2 px-2 hover:text-white border border-black hover:bg-black w-[40px] h-[40px] transition-all transform hover:scale-105">
                <div className="w-[20px] h-[20px]">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
