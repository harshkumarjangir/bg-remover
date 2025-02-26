import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
    </div>
  )
}

export default Home