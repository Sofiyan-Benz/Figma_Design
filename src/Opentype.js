import React from "react";
import LineChart from "./images/LineChart.png";
import StyleTitle from "./Components/StyleTitle.js";
import { fontSize } from "tailwindcss/defaultTheme";

export default function Opentype() {
    return (
        <div className="bg-black w-full">
            <div className="bg-secondary  md:rounded-large sm:rounded-none md:flex justify-between md:mr-44 md:ml-44 sm:max-w-549 sm:flex-col sm:flex items-center">
                <div className="md:max-w-544 sm:max-w-407 sm:flex col sm:flex items-center md:flex flex-col md:flex justify-center ">
                    <h3
                        style={StyleTitle}
                        className="sm:max-w-336 sm:text-center md:max-w-479 md:ml-20 text-white font-normal font-Graphik sm:mt-24  "
                    >
                        OpenType features and Variable fonts
                    </h3>
                    <button
                        style={{ lineHeight: "25px", fontSize: "17px" }}
                        className="bg-primary shadow pt-3.5 pb-3.5 pr-16 pl-16 rounded-sm text-white  font-medium md:ml-20 sm:mb-24"
                    >
                        Try For Free
                    </button>
                </div>
                <div className="">
                    <img
                        src={LineChart}
                        alt=""
                        className="sm:max-w-541 sm:p-7 md:max-w-585 "
                    />
                </div>
            </div>
        </div>
    );
}
