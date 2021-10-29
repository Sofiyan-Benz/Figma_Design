import React from "react";
import AppStore from "./images/Partners/logos_apple-app-store.png";
import Apiary from "./images/Partners/logos_apiary.png";
import Android from "./images/Partners/logos_android-icon.png";
import Basecamp from "./images/Partners/logos_basecamp.png";
import Airbnb from "./images/Partners/logos_airbnb.png";
import Ibm from "./images/Partners/logos_ibm.png";

export default function Partners() {
    return (
        <div className="bg-black w-full ">
            <div className=" bg-black max-w-591 mx-auto py-6 font-Graphik">
                <h2 className="text-white text-5xl font-normal text-center mt-40 ">
                    Partners
                </h2>
                <p
                    style={{ fontSize: "20px", lineHeight: "30px" }}
                    className="text-white font-normal text-center p-3 "
                >
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>

            <div className="md:flex justify-center md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-14">
                <div className="flex justify-center space-x-8 items-center">
                    <img src={AppStore} alt="appstore" />
                    <img src={Apiary} alt="" className="apiary" />
                    <img src={Android} alt="" className="android" />
                </div>

                <div className="flex justify-center space-x-8 items-center ">
                    <img src={Basecamp} alt="basecamp" className="" />
                    <img src={Airbnb} alt="airbnb" className="" />
                    <img src={Ibm} alt="ibm" className="sm:w-20 md:w-36" />
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <button
                    style={{
                        fontSize: "17px",
                        lineHeight: "25px",
                        letterSpacing: "0.2",
                    }}
                    className="text-white font-Graphik pt-3.5 pb-3.5 pr-10 pl-10 font-medium shadow border-white border"
                >
                    All Partners
                </button>
            </div>
        </div>
    );
}
