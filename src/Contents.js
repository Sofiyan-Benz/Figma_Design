import React from "react";
import BoardsScreen from "./images/BoardsScreen.png";
import MacbookPro from "./images/MacbookPro.png";
import CustomBlueButton from "./Components/CustomBlueButton.js";

export default function Contents() {
    return (
        <div className="bg-black w-full ">
            <div className=" bg-black max-w-lg mx-auto pt-40 font-Graphik">
                <h2 className="text-white text-5xl font-normal text-center ">
                    Contents
                </h2>
                <p className="text-white font-normal text-center py-6 pb-14 ">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>

            <div className=" md:flex justify-center md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-8  ">
                <div className=" lg:w-476 sm:w-348  h-551px bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <h3 className="font-medium text-xl text-black">Work</h3>
                    <p className="w-268">
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify.
                    </p>
                    <CustomBlueButton name="Sign Up" />
                    <img
                        src={MacbookPro}
                        className="md:max-w-476 md:pr-9 md:ml-9 sm:max-w-297 sm:pr-6 sm:pl-6 "
                    />
                </div>

                <div className=" lg:w-476 sm:w-348  h-551px bg-white rounded flex flex-col items-center justify-between text-center text-black pt-10 pb-10">
                    <h3 className="font-medium text-xl text-black">
                        Design with real data
                    </h3>
                    <p className="w-268">
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify.
                    </p>
                    <CustomBlueButton name="Sign Up" />
                    <img
                        src={BoardsScreen}
                        className="md:max-w-379 sm:max-w-280"
                    />
                </div>
            </div>
        </div>
    );
}
