import React from "react";
import Nav from "./Nav";
import Features from './Features';
// import { ReactComponent as Boards } from "./images/Dashboard.svg";
import screens from './images/screens.png';

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <header className="bg-black ">
        <div className=" bg-black max-w-lg mx-auto py-6 font-Graphik">
          <h1 className="text-white text-6xl font-medium text-center ">
            Work at the speed <br /> of thought
          </h1>
          <p className="text-white font-normal text-center py-6 ">
            {" "}
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="flex justify-center sm:flex-col sm:space-y-3 items-center  md:flex-row md:space-x-3 ">
          <button className="bg-primary font-Graphik text-white border font-normal shadow py-2 px-5 font-normal w-44" >Try For Free</button>
          <button className="text-white font-Graphik shadow border-white border py-2 px-5 font-normal w-44 ">Learn More</button>
        </div> 
        <div className=" flex justify-center mt-9    ">
        <img src={screens} />
              <div className="h-551px w-full absolute top-67 left-0 right-0 bottom-0 bg-hero-pattern "></div>

        </div>
        <Features />
      </header>
      <main>
       
      </main>
    </React.Fragment>
  );
}

export default App;
