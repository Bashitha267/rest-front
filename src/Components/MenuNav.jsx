import React from "react";
import { useLocation } from "react-router-dom";
export const MenuNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/4"></div>
      <div className="basis 2/4 ">
        <ul className="flex flex-row md:gap-2 gap-1">
          <li
            className={`p-3 ml-3  text-md font-mono md:text-2xl text-slate-700 ${
              isActive("/breakfast")
                ? " text-slate-900 border-b-2 border-red-800"
                : "border-b-2 border-neutral-400"
            }`}
          >
            <a href="/breakfast">Breakfast</a>
          </li>

          <li
            className={`p-3 ml-3 font-mono  text-md md:text-2xl text-slate-700 ${
              isActive("/lunch")
                ? " text-slate-900 border-b-2 border-red-800"
                : "border-b-2 border-neutral-400"}`}
          >
            <a href="/lunch">Lunch</a>
          </li>

          <li
            className={`p-3 ml-3 font-mono  text-md md:text-2xl text-slate-700 ${
              isActive("/dinner")
                ? " text-slate-900 border-b-2 border-red-800"
                : "border-b-2 border-neutral-400"}`}
          >
            <a href="/dinner">Dinner</a>
          </li>

          <li
            className={`p-3 ml-3 font-mono  text-md md:text-2xl text-slate-700 ${
              isActive("/beverages")
                ? " text-slate-900 border-b-2 border-red-800"
                : "border-b-2 border-neutral-400"}`}
          >
            <a href="/beverages">Beverages</a>
          </li>
        </ul>
      </div>
      <div className="basis-1/4"></div>
    </div>
  );
};
