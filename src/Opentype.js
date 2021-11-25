import React from "react";
import LineChart from "./images/LineChart.png";

export default function Opentype() {
    const StyleTitle = {
        lineHeight: "62px",
        fontSize: "52px",
        fontStyle: "normal",
        letterSpacing: "0.2px",
        marginBottom: "37px",
        width: "479px",
    };
    return (
        <div className="bg-black w-full flex justify-center">
            <div
                style={{ width: "1219px" }}
                className="bg-secondary lg:rounded-large sm:rounded-none lg:flex justify-between  "
            >
                <div className="lg:pl-24 lg:pr-12 m-auto ">
                    <h3
                        style={StyleTitle}
                        className="sm:text-center  text-white font-normal font-Graphik sm:mt-24"
                    >
                        OpenType features and Variable fonts
                    </h3>
                    <button
                        style={{ lineHeight: "25px", fontSize: "17px" }}
                        className="bg-primary shadow pt-3.5 pb-3.5 pr-16 pl-16 rounded-sm text-white  font-medium  sm:mb-24 "
                    >
                        Try For Free
                    </button>
                </div>

                <div className=" ">
                    <img
                        src={LineChart}
                        alt=""
                        className="sm:p-7  lg:rounded-large "
                    />
                </div>
            </div>
        </div>
    );
}
