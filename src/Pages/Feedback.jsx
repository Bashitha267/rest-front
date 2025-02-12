import { default as React } from "react";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import Slide from "../Pages/Feedbackslide";
export const Feedback = () => {
  return (
    <div>
      <NavBar />
      
    <div>
      <Slide/>
    </div>
    <Footer/>
    </div>
  );
};
