import React from 'react'
import { NavBar } from '../Components/NavBar'

export const BookingSuc = () => {
  return (
    <div>
      <NavBar/>
      <div className='bg-gray-100 h-screen flex flex-col justify-center'>
        <div className='bg-red-700 text-white p-5 md:p-10 rounded-lg shadow-lg mx-auto w-1/2'>
        <h1 className="md:text-5xl md:mb-2 text-center text-4xl mb-2">Booking Successful</h1>
        <p className="text-center text-lg">Your booking has been successfully completed.</p>
        <p className="text-center text-lg">Thank you for choosing us.</p>
        </div>
       
      </div>
    </div>
  )
}
