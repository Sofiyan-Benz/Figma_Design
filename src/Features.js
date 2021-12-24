import React from "react";
import Frame from "./images/Frame.png";
import { ReactComponent as Vector } from "./images/Vector.svg";
import { ReactComponent as Alien } from "./images/Vector2.svg";
import { ReactComponent as Infinie } from "./images/Vector3.svg";

export default function Features() {
    return (
        <div className="w-full mt-24 text-white ">
            <div className=" bg-black  mx-auto font-Graphik p-3 mb-20 ">
                <h2 className="text-5xl font-normal text-center mb-7">
                    FEATURES
                </h2>

                <p className="text-center font-normal text-xl">
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </p>
            </div>

            <div className="flex justify-center items-center font-Graphik sm:flex-col sm:space-y-10">
                <div className="">
                    <img src={Frame} className="" />
                </div>

                <div className="text-white space-y-6 ">
                    <div className=" p-2 ">
                        <div className="flex items-center">
                            <Vector />
                            <span className="text-lg font-medium mb-2.5 ">
                                A single source <br /> of truth
                            </span>
                        </div>
                        <p className="text-base font-normal	">
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className=" p-2 ">
                        <div className="flex items-center  ">
                            <Alien />
                            <span className="text-lg font-medium mb-2.5 	">
                                Intuitive
                                <br /> interface
                            </span>
                        </div>
                        <p className="text-base font-normal	">
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className=" p-2 ">
                        <div className="flex items-center">
                            <Infinie />
                            <span className="text-lg font-medium mb-2.5 ">
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
