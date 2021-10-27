import React from "react";
import { ReactComponent as MacbookPro } from "./images/MacbookPro.svg";
import BoardsScreen from "./images/BoardsScreen.png";

export default function Contents() {
  return (
    <div className="bg-black w-full ">
      <div className=" bg-black max-w-lg mx-auto py-6 font-Graphik">
        <h2 className="text-white text-5xl font-normal text-center ">
          Contents
        </h2>
        <p className="text-white font-normal text-center py-6 ">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className=" md:flex justify-center md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-8  ">
        <div className=" w-29 h-551px bg-white rounded-lg flex flex-col items-center text-center text-black space-y-7 ">
          <h3 className="font-medium mt-4 text-black">Work</h3>
          <p className="text-gray-600 font-normal text-base">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <button className="bg-primary shadow p-3 rounded-sm w-28 font-medium text-lg text-white ">
            Sign Up
          </button>
          <MacbookPro className="w-25" />
        </div>

        <div className="w-29 h-551px bg-white rounded-lg flex flex-col items-center text-center text-black space-y-7 ">
          <h3 className="font-medium mt-4 text-black ">
            Design with real data
          </h3>
          <p className="text-gray-600 font-normal text-base">
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <button className="bg-primary shadow p-3 rounded-sm w-36 text-white  font-medium text-lg ">
            Try For Free
          </button>
          <img src={BoardsScreen} className="w-25" />
        </div>
      </div>
    </div>
  );
}
