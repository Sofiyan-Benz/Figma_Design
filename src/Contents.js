import React from "react";
import BoardsScreen from "./images/BoardsScreen.png";
import MacbookPro from "./images/MacbookPro.png";
import CustomSmallBlueButton from "./Components/CustomSmallBlueButton.js";
import StyleParagraph from "./Components/StyleParagraph.js";
import StyleTitle from "./Components/StyleTitle.js";

import { fontSize } from "tailwindcss/defaultTheme";

export default function Contents() {
    return (
        <div className="bg-black w-full mt-28 text-white">
            <div className=" bg-black  mx-auto font-Graphik p-3 mb-7 md:max-w-591  sm:max-w-308">
                <h2 style={StyleTitle} className="font-normal text-center">
                    Contents
                </h2>
                <p style={StyleParagraph} className="text-white text-center ">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>

            <div className="md:flex justify-center sm:flex-col sm: flex items-center  ">
                <div className="md:max-w-476 md:mr-4 sm:mb-4  sm:max-w-348   h-551px bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <h3 className="font-medium text-xl text-black">Work</h3>

                    <p className="max-w-268">
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify.
                    </p>
                    <CustomSmallBlueButton name="Sign Up" />
                    <img
                        src={MacbookPro}
                        className="md:max-w-476 sm:max-w-297 "
                    />
                </div>

                <div className="md:max-w-476 md:ml-4 sm:mt-4  sm:max-w-348 h-551px bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <h3 className="font-medium text-xl text-black">
                        Design with real data
                    </h3>
                    <p className="max-w-268">
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify.
                    </p>

                    <CustomSmallBlueButton name="Try For Free" />
                    <img
                        src={BoardsScreen}
                        className="md:max-w-379 sm:max-w-280"
                    />
                </div>
            </div>
        </div>
    );
}
