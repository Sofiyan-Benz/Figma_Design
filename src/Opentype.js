import React from "react";
import LineChart from "./images/LineChart.png";
export default function Opentype() {
    return (
        <div className="bg-black w-full">
            <div className="bg-secondary md:flex justify-around  md:rounded-large sm:rounded-none ">
                <div className="md:pt-20 pl-24 md:w-29 sm:w-80 ">
                    <h3 className="text-white text-5xl font-normal pb-9 font-Graphik">
                        OpenType features and Variable fonts
                    </h3>
                    <button className="bg-primary shadow p-3 rounded-sm w-56 text-white  font-medium text-lg ">
                        Try For Free
                    </button>
                </div>
                <div>
                    <img src={LineChart} alt="" className="" />
                </div>
            </div>
        </div>
    );
}
