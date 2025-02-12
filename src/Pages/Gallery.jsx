import React from 'react'
import { Footer } from '../Components/Footer'
import GalleryComp12 from '../Components/GalleryComp'
import { NavBar } from '../Components/NavBar'
export const Gallery = () => {
  return (
    <div><NavBar/>
    <div className='flex flex-col min-h-screen'>
    <div className='flex-grow overflow-auto'>
    <GalleryComp12/>
    </div>
    <Footer/>
    </div>
   

    </div>
  )
}
