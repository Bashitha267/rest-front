import React from "react";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const Contact = () => {
  return (
    <div className="">
      <NavBar />
      <div className="bg-slate-50">
      <div className="md:mr-60 md:p-3 md:ml-40">
      <div className="mb-5"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Negombo%20Sri%20Lanka+(Elysian%20Bites%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps handsets</a></iframe></div>
      </div>

      <div className=" md:grid md:grid-cols-2 md:gap-6 md:ml-40 md:mr-60 md:p-3 ">
        <div className=" flex flex-row p-6 bg-white shadow-lg hover:bg-white mb-3">
          <div className="bg-red-700 rounded-full">
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252725/Untitled_design_5_vrrgrn.jpg"} className="w-16 h-16 rounded-full"></img>
            </div>
          <div className="flex flex-col ml-3 ">
            <div className="text-slate-800 md:text-2xl text-2xl font-mono font-semibold">Address</div>
            <div className=" font-thin">Negombo,Sri Lanka</div>
          </div>
        </div>
        <div>
        <div className=" flex flex-row p-6 shadow-lg bg-white mb-3">
          <div className="bg-red-700 rounded-full">
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252155/Untitled_design_1_ownzq0.jpg"} className="w-16 h-16 rounded-full "></img>
            </div>
          <div className="flex flex-col ml-3">
            <div className="text-slate-800 md:text-2xl text-2xl font-mono font-semibold">Call Us</div>
            <div className="font-thin ">0111-689785</div>
          </div>
        </div>
        </div>
        <div>
        <div className=" flex flex-row p-6  shadow-lg bg-white mb-3">
          <div className="bg-red-700 rounded-full">
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252620/Untitled_design_4_qybpd4.jpg"} className="w-16 h-16 rounded-full"></img>
            </div>
          <div className="flex flex-col ml-3">
            <div className="text-slate-800 md:text-2xl text-2xl font-mono font-semibold">Email Us</div>
            <div className="font-thin ">ElsiyanBitesInfo@gmail.com</div>
          </div>
        </div>
        </div>
        <div>
        <div className=" flex flex-row p-6  shadow-lg bg-white mb-3">
          <div className="bg-red-700 rounded-full">
            <img src={"https://res.cloudinary.com/dnfbik3if/image/upload/v1738252478/Untitled_design_2_jgr7wr.jpg"} className="w-16 h-16 rounded-full "></img>
            </div>
          <div className="flex flex-col ml-3">
            <div className="text-slate-800 md:text-2xl text-2xl font-mono font-semibold">Opening Hours</div>
            <div className="font-thin ">Mon-Sun: 10AM - 10PM; </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <form className=" md:bg-white md:p-8  md:flex md:flex-col md:w-9/12 shadow-lg md:ml-40 md:mt-20 md:mr-40 flex flex-col p-3 m-3 mt-4">
        <div className="md:grid md:grid-cols-2 md:gap-4 md:mb-6 grid grid-cols-2 m-3 gap-4">
        <div><input type="text" placeholder="Your Name" className=" focus:border-stone-900 p-3 w-full"></input></div>
        <div><input type="text" placeholder="Your Email" className=" p-3 w-full"></input></div>
        </div>
        <div className="flex flex-col m-3 ">
        <div><input type="text" placeholder="Subject" className="p-3 w-full"></input></div>
        <div><input type="text" className="p-3 mt-5 w-full h-48" placeholder="Message "></input></div>
        </div>
        <div className="mt-3 flex justify-center">
          <button type="submit" className="p-4 bg-red-700 text-white text-center rounded-full">Send a Message</button>
        </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
