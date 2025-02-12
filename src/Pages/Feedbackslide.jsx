import axios from 'axios';
import { useEffect, useState } from "react";
import Carousel12 from "../Components/Carousel12.jsx.jsx";


export default function Slide() {
    const[feedbacks,setFeedbacks]=useState([]);
const[loading,setLoading]=useState(true);
useEffect(() => {
    const fetchdata = async () => {
      setLoading(true); 
      try {
        const response = await axios.get("http://localhost:3000/getfeedbacks");
        setFeedbacks(response.data); 
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
      <main className="App">
        <div className="max-w-full ">
        <div className=" bg-slate-50 mt-11 ">
        <div className="flex flex-col">
          <div className='md:mt-4 font-light font-sans md:text-center text-slate-500 md:text-xl text-center p-1 text-2xl'>Feedbacks</div>
        <div className="text-center md:text-4xl  font-extralight font-mono p-3 md:p-0 text-3xl">
            Voices of Delight
            <span className="text-red-700">
              {" "}
              What Our Customers Are Saying!
            </span>{" "}
          </div>

          <Carousel12>
            {feedbacks.map((feedback, index) => (
              <div key={index}>
          
          <div className="md:flex-col md:border-l-4 md:border-red-500 md:m-10 md:p-5 md:ml-96 ml-3 p-5">
            <div className="text-left md:w-1/2 md:h-1/4 md:text-xl md:font-mono  md:mb-3 p-3 text-3xl font-extralight">
              <span className="font-extrabold md:text-4xl text-red-800 font-serif">
                "
              </span>
              {feedback.description}
              <span className="font-extrabold md:text-4xl text-red-800 font-serif">
                "
              </span>
            </div>
            <div className="font-extralight font-mono md:text-2xl p-4 text-2xl text-right md:text-left">{feedback.name}</div>
          </div>
        </div>
      
            
            ))}
          </Carousel12>
          </div>
          </div>




        </div>
      </main>
    </div>
  );
}
