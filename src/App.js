import React from "react";
import Nav from "./Nav";
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
        <div className="sm:flex justify-center space-x-3 max-w-lg mx-auto">
          <button className="bg-primary font-Graphik text-white border font-normal shadow py-2 px-5 rounded-md font-normal   " >Try For Free</button>
          <button className="text-white font-Graphik shadow border-white border py-2 px-5 rounded-md font-normal ">Learn More</button>
        </div> 
        <div className="flex justify-center mt-10">
        <img src={screens} />
        </div>
      </header>
      <main></main>
    </React.Fragment>
  );
}

export default App;
