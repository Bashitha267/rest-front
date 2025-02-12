import React from "react";
import birthday from "../assets/birthday.jpg";
import office from '../assets/office.jpg';
import wedd from "../assets/wedding.jpg.jpg";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
export const Events = () => {
  return (
    <div>
      <NavBar/>
      <div className="md:grid md:grid-cols-3 flex flex-col ">
        <div
          style={{ backgroundImage: `url(${wedd})` }}
          className="bg-cover h-screen m-3 "
        >
          <div className="md:flex md:flex-col  text-white  p-4  mt-96 flex flex-col ">
            <div className=" py-4  text-5xl font-mono font-extralight underline underline-offset-8 text-center ">Wedding Ceremonies</div>

            <div className="w-3/4 text-xl font-sans p-4 font-light text-center ml-8">
            "Make your dream wedding a reality with our beautiful venue, personalized decor, exquisite catering, and attentive service. Let us create unforgettable moments for your special day."
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${birthday})` }}
          className="bg-cover h-screen m-3 "
        >
          <div className="md:flex md:flex-col  text-white  p-4  mt-96 flex flex-col  ">
            <div className=" py-4  text-5xl font-mono font-extralight underline underline-offset-8 text-center ">Birthday Celebrations</div>

            <div className="w-3/4 text-xl font-sans p-4 font-light text-center ml-8">
            "Celebrate your birthday in style with our stunning venue, customized decor, delicious catering, and exceptional service. Whether it's a fun-filled kids' party or an elegant milestone celebration, we’ll create unforgettable memories for your special day!"
                       </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${office})` }}
          className="bg-cover h-screen m-3 "
        >
          <div className="md:flex md:flex-col  text-white  p-4  mt-96 flex flex-col ">
            <div className=" py-4  text-5xl font-mono font-extralight underline underline-offset-8 text-center ">Custom Parties</div>
            <div className="w-3/4 text-xl font-sans p-4 font-light text-center ml-8">
            "Host a seamless and memorable event with our elegant venue, customized decor, delicious catering, and dedicated service. Whether it's a corporate function, team celebration, or a lively get-together with friends and family, we create the perfect atmosphere for meaningful connections and unforgettable moments!"

            </div>
          </div>
        </div>
        
        
      </div>
      <Footer/>
    </div>
  );
};
