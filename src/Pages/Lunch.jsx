import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { MenuNav } from "../Components/MenuNav";
import { NavBar } from "../Components/NavBar";

export const Lunch = () => {

    const [data,setData]=useState([]);
    const [loading,setloading]=useState(false);

useEffect(()=>{
    const fetchdata=async()=>{
        if(loading){
            return;
        }else{
            setloading(true);
            try{
                const response= await axios.get("http://localhost:3000/getlunch")
                setData(response.data)

            }catch(error){
                console.log(error)

            }
        }
        setloading(false);
    }
    fetchdata();
}

,[])

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-3">
        <h1 className="text-5xl font-mono text-center mb-4 text-red-600 font-semibold">
          {" "}
          Menu
        </h1>
        <div className="mt-5 mb-5">
          <MenuNav />
          <div className="flex flex-col justify-center items-center">
            <div className="md:grid md:grid-cols-3 md:w-3/4 md:place-items-center md:gap-1 md:mt-5">
              {
                data.map((item,index)=>(
                    <div key={data._id||index} className="flex flex-col w-full transform transition-transform duration-300 hover:scale-105 mb-6">
                    <div>
                      <img
                        src={
                          item.img
                        }
                        className="h-72 w-96 p-2 ml-4 pl-4"
                      ></img>
                    </div>
                    <div className="text-2xl text-center font-extralight ">
                      {item.name}
                    </div>
                    <div className="text-slate-400 text-center">{item.description}</div>
                    <div className="text-red-600 text-2xl text-center mt-1 font-bold">
                      {item.price}
                    </div>
                  </div>
                ))
               }
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
