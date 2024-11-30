import React from 'react'

const Achievements = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[488px] w-[428px] h-[390px] bg-[#FFFFFF]">
      <div>
        {/**first center div */}
        <div className="lg:w-[1152px] lg:h-[264px] lg:mb-24 w-[380px] h-[355px] lg:ml-20 lg:flex lg:flex-col lg:justify-center text-center items-center lg:items-center">
          <h1 className="sm:w-[380px] sm:h-[42px] font-bold text-4xl leading-[57.6px] mt-20 text-center custom-heading">
            Our Achievements
          </h1>
          <div className="lg:w-[1152px] lg:h-[54px]  mt-3 lg:mt-3 w-[400px] h-[70px]">
            <p className="lg:text-center text-xs lg:text-sm lg:items-center items-center text-center lg:flex lg:flex-col flex flex-row">
              Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra <br/> ornare&#44; eros dolor interdum nulla &#44;ut commodo diam libero vitae erat.
            </p>
          </div>

          {/**full div size for courses */}
          <div className="lg:w-[1256px] lg:h-[96px] w-[380px] h-[176px] grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-4">
  <div className="lg:w-[296px] lg:h-[80px] w-[182px] h-[60px] lg:mt-10 mt-10 lg:flex lg:flex-col text-center lg:text-center">
    <h1 className="font-bold text-3xl">+200</h1>
    <p className="text-xs">Courses</p>
  </div>
  <div className="lg:w-[296px] lg:h-[80px] w-[182px] h-[60px] mt-10 lg:mt-10 flex flex-col text-center">
    <h1 className="font-bold text-3xl">50K</h1>
    <p className="text-xs">Mentor</p>
  </div>
  <div className="lg:w-[296px] lg:h-[80px] w-[182px] h-[60px] mt-10 lg:mt-10 flex flex-col text-center">
    <h1 className="font-bold text-3xl">370k</h1>
    <p className="text-xs">Students</p>
  </div>
  <div className="lg:w-[296px] lg:h-[80px] w-[182px] h-[60px] mt-10 lg:mt-10 flex flex-col text-center">
    <h1 className="font-bold text-3xl">100+</h1>
    <p className="text-xs">Recognition</p>
  </div>
</div>

        </div>
      
    </div>
    </div>
  )
}

export default Achievements
