import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-slate-900 text-white'>
        <div className='md:grid md:grid-cols-4 md:gap-4 md:p-3 flex flex-col p-3'> 
        <div className='flex gap-3 p-6'>
            <div className='flex justify-center'><img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252725/Untitled_design_5_vrrgrn.jpg"} className="w-10 h-10 rounded-full"></img>
            </div>
          <div>
            <div className='flex flex-col'>
              <div className='flex justify-left text-lg font-bold font-sans mb-4'>Address</div>
              <div className='flex justify-left '>Negombo</div>
              <div className='flex justify-left'>Sri Lanka</div>
            </div>
            </div>
            </div>

            <div className='flex gap-3 p-6'>
            <div className='flex justify-center'>
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252155/Untitled_design_1_ownzq0.jpg"} className="w-10 h-10 rounded-full "></img>

            </div>
          <div>
            <div className='flex flex-col'>
              <div className='flex justify-left text-lg font-bold font-sans mb-4'>Contact</div>
              <div className='flex justify-left ml-1'>0111-689785</div>
            </div>
            </div>
            </div>

            <div className='flex gap-3 p-6'>
            <div className='flex justify-center'>
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252478/Untitled_design_2_jgr7wr.jpg"} className="w-10 h-10 rounded-full "></img>

            </div>
          <div>
            <div className='flex flex-col'>
              <div className='flex justify-left text-lg font-bold font-sans mb-4'>Opening Hours</div>
              <div className='flex justify-left ml-1'>Mon-Sun: 10AM - 10PM</div>
            </div>
            </div>
            </div>

            <div className='flex gap-3 p-6'>
           
          <div>
            <div className='flex flex-col'>
              <div className='flex justify-left text-lg font-bold font-sans mb-4'>Follow Us</div>
              <div className='flex justify-left ml-1 flex-row gap-4'>
                <div><a href='www.facebook.com' target='_blank'><img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738380123/Untitled_design_18_ddhxny.png' className='h-10 w-10 rounded-full'></img></a></div>
                <div><a href='www.instagram.com' target='_blank'><img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738380123/Untitled_design_17_vsih64.png' className='h-10 w-10 rounded-full'></img></a></div>
                <div><a href='www.tiktok.com' target='_blank'><img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1738380123/Untitled_design_16_ahaicv.png' className='h-10 w-10 rounded-full'></img></a></div>

              </div>
              
            </div>
            </div>
            </div>

        </div>
        <div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 mr-10 ml-10"></hr>
        </div>
        <div className='flex justify-center p-3 pb-6'><p>© Copyright Elysian Bites <span>  All Rights Reserved</span></p></div>
    </div>
  )
}

