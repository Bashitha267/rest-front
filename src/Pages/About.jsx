import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footer'
import { NavBar } from '../Components/NavBar'

export const About = () => {
  return (
    <div><NavBar/>
    <div className='flex flex-col md:grid md:grid-cols-2'>
      <div className=' mb-4'><img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738253354/restaurant-interior_jpjdr2.jpg' ></img></div>
     <div className='md:flex md:flex-col'>
      <div className='p-4 text-justify font-mono text-gray-700 md:text-3xl md:p-10  md:flex md:justify-center'>
      Welcome to Elsiyan Bite, where passion meets flavor. We serve fresh, handcrafted dishes in a warm, inviting ambiance. Join us for an unforgettable dining experience filled with delicious moments and culinary delights.🍽️✨
      </div>
      <div className=''>
        <img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738255293/pexels-weekendplayer-735869_od4q6x.jpg' className='p-4'></img>
        </div>
      </div>
      <div className=' md:flex md:flex-row-reverse md:col-span-2 flex-col-reverse'>
      <div className='mb-3'><img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738254597/pexels-chanwalrus-958545_qomzaq.jpg'></img></div>
      <div className='flex-col bg-red-700 text-white p-8 mr-2 ml-2 mb-2 '>
        <h2 className='flex  gap-3 justify-center text-3xl font-semibold mb-3'>Why Choose Us</h2>
        <div className='flex-col gap-3'>
          <div className='m-3'><span className='text-lg font-semibold '>Delicious, High-Quality Food –</span> We use the freshest ingredients and time-honored recipes to create mouthwatering dishes that satisfy every craving.</div>
          <div className='m-3'><span className='text-lg font-semibold'>Warm & Friendly Service – </span>Our team is dedicated to making you feel welcome, ensuring a delightful dining experience with exceptional hospitality.</div>
          <div className='m-3'><span className='text-lg font-semibold'>Cozy Ambiance & Great Vibes –</span>Whether it’s a casual meal or a special occasion, our inviting atmosphere sets the perfect mood for unforgettable moments.</div>
          </div>
          <div className='flex justify-center'><button type='button' className='bg-white text-red-700   p-3 m-3 rounded-full text-lg hover:underline hover:underline-offset-4'><Link to='/contact'>Learn More</Link></button></div>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
