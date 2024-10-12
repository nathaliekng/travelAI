import React from 'react'
import {Button} from '../ui/button.jsx'
import {Link} from 'react-router-dom'


function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 
      className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Discover your next adventure with AI:</span> Personalized Itinerary</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner, creating custom itineraries tailored to your interests and budget</p>
      
      <Link to ={'/create-trip'}><Button>Get Started</Button></Link>
      
    </div>
  )
}

export default Hero