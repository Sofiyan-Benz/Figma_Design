import React from "react";
import Frame from "./images/Frame.png";
import { ReactComponent as Vector } from "./images/Vector.svg";
import { ReactComponent as Alien } from "./images/Vector2.svg";
import { ReactComponent as Infinie } from "./images/Vector3.svg";

export default function Features() {
    return (
        <div className="w-full mt-24 text-white ">
            <div className=" bg-black md:max-w-602 sm:max-w-431 mx-auto font-Graphik p-3 mb-7 ">
                <h2 className="text-5xl font-normal text-center mb-7">
                    FEATURES
                </h2>

                <p className="  md:max-w-602 text-center font-normal text-xl sm:max-w-402">
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </p>
            </div>

            <div className="flex justify-center items-center font-Graphik sm:flex-col sm:space-y-10">
                <div className="">
                    <img src={Frame} className="sm:max-w-376 md:max-w-752" />
                </div>

                <div className="text-white space-y-6 ">
                    <div className="w-64 p-2 ">
                        <div className="flex">
                            <Vector />
                            <span className="text-lg font-medium mb-2.5 ml-2.5 	">
                                A single source <br /> of truth
                            </span>
                        </div>
                        <p className="text-base font-normal	">
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className="w-64 p-2 ">
                        <div className="flex">
                            <Alien />
                            <span className="text-lg font-medium mb-2.5 ml-2.5 	">
                                Intuitive
                                <br /> interface
                            </span>
                        </div>
                        <p className="text-base font-normal	">
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className="w-64 p-2 ">
                        <div className="flex">
                            <Infinie />
                            <span className="text-lg font-medium mb-2.5 ml-2.5 	">
                                Or with rules
                            </span>
                        </div>
                        <p className="text-base font-normal	">
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
