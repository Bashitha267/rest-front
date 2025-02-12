import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
export const Chiefs = () => {
  const[data,setdata]=useState([]);
  const[loading,setLoading]=useState(false);


  useEffect(()=>{
    const fetchdata=async()=>{
      if(loading){
        return;
      }else{
        setLoading(true);
        try{
          const response=await axios.get('http://localhost:3000/getchefs');
          setdata(response.data);

        }catch(error){
          console.log(error);
        }
      }
      setLoading(false);


    };
    fetchdata();
  },[]
  )

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-5 md:m-4   md:p-4 bg-slate-200 flex flex-col">
      {
          data.map((chefs,index)=>(
            <div key={chefs._id||index} className="bg-zinc-50 p-5 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <div className=" h-2/4 rounded-full ">
                <img
                  src={chefs.image}
                  className="h-full rounded-3xl w-96 p-2 ml-4 pl-4"
                ></img>
              </div>
              <div className="text-slate-600 text-center text-3xl font-semibold font-mono m-3">
                {chefs.name}
              </div>
              <div className="text-center text-xl font-extralight font-serif text-zinc-400">
                {chefs.role}
              </div>
              <div className='p-3 pl-5 m-3 font-thin text-slate-600 '>
                {chefs.description}
              </div>
            </div>
          ))
          



      }
</div>

    <Footer/>
    </div>
  );
};
