import React from "react";
import LineChart from "./images/LineChart.png";

export default function Opentype() {
    const StyleTitle = {
        lineHeight: "62px",
        fontSize: "52px",
        fontStyle: "normal",
        letterSpacing: "0.2px",
    };
    return (
        <div className="bg-black w-full flex justify-center">
            <div className="bg-secondary sm:rounded-none  sm:w-549 md:w-709 lg:w-1219 lg:flex justify-between lg:rounded-large">
                <div className="flex items-center flex-col pt-28 pb-28 lg:pt-16 lg:pb-16 lg:m-auto ">
                    <h3
                        style={StyleTitle}
                        className="text-center text-white font-normal font-Graphik mb-9 lg:w-479 lg:text-left"
                    >
                        OpenType features and Variable fonts
                    </h3>
                    <button
                        style={{ lineHeight: "25px", fontSize: "17px" }}
                        className="bg-primary shadow pt-3.5 pb-3.5 pr-16 pl-16 rounded-sm text-white font-medium"
                    >
                        Try For Free
                    </button>
                </div>

                <div>
                    <img
                        src={LineChart}
                        alt="figmaland site"
                        className="lg:rounded-large md:w-full "
                    />
                </div>
            </div>
        </div>
    );
}
