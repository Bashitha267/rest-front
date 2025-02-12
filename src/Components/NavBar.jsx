import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isopen, setisOpen] = useState(false);
  return (
    <div className="flex flex-row  justify-between p-2 md:p-0">
      <div
        
      className={`${
        isopen ? "hidden" : "flex"
      }  md:text-2xl md:p-8 md:font-extrabold text-red-800 underline underline-offset-8 md:basis-2/12 text-xl p-3 font-bold `}
      >
        <Link to="/">Elysian Bites</Link>
      </div>
      <div
        className={`${
          isopen ? "block" : "hidden"
        } md:flex  md:flex-row md:space-x-8 `}
        id="navbar-default"
      >
        <div className="md:basis-11/12  p-2 ">
          <ul className="md:flex md:flex-row gap-4 text-center flex-col flex p-1">
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/menu")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/breakfast">Menu</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/Booking")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/Booking">Reservations</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/events")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/events">Events</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/gallery")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/chiefs")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/chiefs">Chiefs</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/feedback")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/feedback">Feedbacks</Link>
            </li>
            <li
              className={`md:p-4 md:m-1 text-gray-500 relative hover:text-slate-900  ${
                isActive("/about")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`md:p-4 md:m-1  text-gray-500 relative hover:text-slate-900  ${
                isActive("/contact")
                  ? " text-slate-900 border-b-2 border-red-800"
                  : "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-red-800 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              }`}
            >
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end basis-3/12">
        <div className=" flex flex-row-reverse  justify-end ">
          <button
            onClick={() => {
              setisOpen(!isopen);
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex  p-3 w-10 h-10  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isopen}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-7  h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className=" md:p-6 p-1 flex ">
            <button 
            className={`${
              isopen ? "hidden" : "flex"
            } md:bg-red-700 bg-red-700 text-white  md:text-xl border border-red-50 rounded-full md:p-3 hover:bg-red-900 ml-2 p-2 text-sm mr-3`}
            id="navbar-default"
            
            >
              <Link to="/booking">Reservations</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
