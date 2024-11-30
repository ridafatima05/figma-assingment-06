import Hero from '@/components/hero'
import HeroSection from '@/components/herosec'
import React from 'react'
import CourseCategory from './services/page'
import Achievements from './achievements/page'
import Courses from './courses/page'
import About from './about/page'
import Testimonials from './testimonials/page'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HeroSection/>
      <CourseCategory/>
      <Achievements/>
      <Courses/>
      <About/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default Home
