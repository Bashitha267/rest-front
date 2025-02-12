import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/backBook.png.png";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
export const Booking = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [count, setCount] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();
  const handlesubmitform = (e) => {
    e.preventDefault();
    const booking = {
      name,
      city,
      email,
      phone,
      date,
      count,
      message,
    };
    console.log(booking);
    axios
      .post("http://localhost:3000/addbooking", booking)
      .then((res) => {
        console.log(res);
        navigate("/bookingsuccess");
      })
      .catch((err) => {
        console.log(err);
        alert("Booking Failed.Please try again");
      });
  };
  return (
    <div>
      <NavBar />
      <div
        style={{ backgroundImage: `url(${back})` }}
        className="md:bg-cover md:h-screen bg-cover h-screen"
      >
        <div className="md:flex md:items-center md:justify-center md:h-screen md:p-3 md:ml-4   ">
          <form
            className="md:w-1/2 md:h-2/4 md:p-3 p-3 pt-4 "
            onSubmit={handlesubmitform}
          >
            <div className="md:grid md:gap-6 md:mb-6 md:grid-cols-3 flex flex-col gap-5 p-3 md:p-0">
              <div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="City"
                ></input>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div className="md:grid md:gap-6 md:mb-6 md:grid-cols-3 flex flex-col gap-5 p-3 md:p-0">
              <div>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contact Number"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  type="date"
                  className="pr-16 bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Date"
                  required
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="No of People"
                  required
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                ></input>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-3 col-span-3">
                <div className="">
                  <input
                    type="text"
                    placeholder="Message"
                    className=" w-96 h-24 pr-8 p-7 rounded-lg"
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <button
              className="md:bg-red-500 bg-red-700 p-4 rounded-3xl text-gray-300 hover:bg-red-700 ml-24 md:ml-0"
              type="submit"
            >
              Make a Reservation
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
