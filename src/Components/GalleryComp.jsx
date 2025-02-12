import axios from 'axios';
import { useEffect, useState } from "react";
import GallerySlide from '../Components/GallerySlide.jsx';

export  default function GalleryComp12() {
    const[photos,setPhotos]=useState([]);
const[loading,setLoading]=useState(true);
useEffect(() => {
    const fetchdata = async () => {
      setLoading(true); 
      try {
        const response = await axios.get("http://localhost:3000/getphotos");
        setPhotos(response.data); 
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setLoading(false); 
      }
    };
  
    fetchdata(); 
  }, []); 
  
  return (
    <div>
      <main className="App bg-slate-100 h-screen p-9">
        <div className='text-center text-4xl font-extralight font-mono text-red-700 mt-1 mb-9 
        '>Our Gallery</div>
        <div className="max-w-full  p-3 md:flex hidden">
          <GallerySlide>
            {photos.map((photo, index) => (
                <div key={index}>
                    <img src={photo.img} alt="image" className='w-full h-full object-contain' />
                </div>

            ))}
          
          
      
            
            
          </GallerySlide>
        </div>
        <div className="md:hidden max-w-full p-3 h-screen">
        {photos.map((photo, index) => (
                <div key={index}>
                    <img src={photo.img} alt="image" className='w-full  object-contain' />
                </div>

            ))}
        </div>
      </main>
    </div>
  );
}
