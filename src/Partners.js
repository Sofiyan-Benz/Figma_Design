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
            <div className=" bg-black max-w-lg mx-auto py-6 font-Graphik">
                <h2 className="text-white text-5xl font-normal text-center mt-40 ">
                    Partners
                </h2>
                <p className="text-white font-normal text-center py-6 ">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>

            <div className="md:flex justify-center md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-14">
                <div className="flex justify-center space-x-8">
                    <img src={AppStore} alt="" />
                    <img src={Apiary} alt="" className="" />
                    <img src={Android} alt="" className="" />
                </div>

                <div className="flex justify-center space-x-8 ">
                    <img src={Basecamp} alt="" className="" />
                    <img src={Airbnb} alt="" className="" />
                    <img src={Ibm} alt="" className="" />
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <button className="text-white font-Graphik py-2 px-5 font-normal w-44 shadow border-white border">
                    All Partners
                </button>
            </div>
        </div>
    );
}
