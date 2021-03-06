import React from "react";
import BoardsScreen from "./images/BoardsScreen.png";
import MacbookPro from "./images/MacbookPro.png";
import CustomSmallBlueButton from "./Components/CustomSmallBlueButton.js";
import StyleParagraph from "./Components/StyleParagraph.js";
import StyleTitle from "./Components/StyleTitle.js";

export default function Contents() {
    return (
        <div className="bg-black w-full mt-40 text-white">
            <div className=" bg-black  mx-auto font-Graphik p-3 mb-7 md:max-w-591  sm:max-w-308">
                <h2 style={StyleTitle} className="font-normal text-center">
                    Contents
                </h2>
                <p style={StyleParagraph} className="text-white text-center ">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>

            <div className="md:flex justify-center sm:flex-col sm:flex items-center">
                <div className="md:w-476 md:mr-4 sm:mb-4 sm:w-348 h-624 bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <div>
                        <h3 className="font-medium text-xl text-black mb-8">
                            Work
                        </h3>

                        <p style={{ color: "#5C5C5C" }} className="max-w-268">
                            Ever wondered if you're too reliant on a client for
                            work? Slate helps you identify.
                        </p>
                    </div>

                    <CustomSmallBlueButton name="Sign Up" />
                    <div>
                        <img src={MacbookPro} className="md:w-405 sm:w-297 " />
                    </div>
                </div>

                <div className="md:w-476 md:ml-4 sm:mt-4 sm:w-348 h-624 bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <div>
                        <h3 className="font-medium text-xl text-black mb-8">
                            Design with real data
                        </h3>
                        <p style={{ color: "#5C5C5C" }} className="max-w-268">
                            Ever wondered if you're too reliant on a client for
                            work? Slate helps you identify.
                        </p>
                    </div>
                    <CustomSmallBlueButton name="Try For Free" />
                    <div>
                        <img src={BoardsScreen} className="md:w-379 sm:w-280" />
                    </div>
                </div>
            </div>
        </div>
    );
}
