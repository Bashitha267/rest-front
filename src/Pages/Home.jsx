import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import homepizza from "../assets/homepizza.png.png";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
export const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className=" bg-slate-200 md:h-3/4  lg:p-3 pb-6">
    
          <div className=" flex flex-col-reverse w-full text-gray-700 lg:grid lg:grid-cols-2 lg:p-4 pb-20 md:pb-2">
            <div className="p-3 w-full md:w-full md:p-6">
              <div className="md:text-8xl  text-6xl  md:text-left text-center mb-4 md:p-3 font-serif font-light w-full">
                Welcome to Elysian Bites{" "}
              </div> 
              <div className="md:text-4xl md:p-4 md:mt-4 md:mb-3 md:font-thin md:text-left text-2xl font-thin text-center">
                {" "}
                Where every meal is a taste of paradise, and every bite takes
                you on a delightful culinary journey.
              </div>
              <div className="md:flex md:gap-7 md:mt-9 md:p-6 flex gap-8 p-5 ml-10">
                <div>
                  <button className="bg-red-700 hover:bg-red-900 text-white rounded-full pl-6 pr-6 pt-3 pb-3">
                    <Link to="/booking">Book a Table</Link>
                  </button>
                </div>
                <div>
                  <button className="bg-red-700 hover:bg-red-900 text-white rounded-full pl-6 pr-6 pt-3 pb-3">
                    <Link to="/breakfast">Menu</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:p-4">
              <img
                src={homepizza}
                className="animate-spin-slow md:scale-0.5 md:object-center md:h-2/3 md:ml-10 p-16 md:p-3  rounded-full"
              ></img>
            </div>
          </div>
        
      </div>
      
      <Element name="events" className="Element">
      <Footer/>
      </Element>
   
    </div>
  );
};
