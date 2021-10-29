import React from "react";
import Rectone from "./images/gallery/Rectangle1.png";
import Rectow from "./images/gallery/Rectangle2.png";
import Recthree from "./images/gallery/Rectangle3.png";
import Rectfour from "./images/gallery/Rectangle4.png";
import Rectfive from "./images/gallery/Rectangle5.png";
import Rectsix from "./images/gallery/Rectangle6.png";
import Rectseven from "./images/gallery/Rectangle7.png";

export default function Gallery() {
    return (
        <div className="bg-black w-full ">
            <div className=" bg-black max-w-lg mx-auto py-6 font-Graphik md:w-591 sm:w-383 mt-40 ">
                <h2 className="text-white text-5xl font-normal text-center ">
                    Gallery
                </h2>
                <p className="text-white font-normal text-center p-3">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                </p>
            </div>
            <div className="md:space-y-8 sm:space-y-8">
                <div className="md:flex justify-center flex-wrap  md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-8  ">
                    <img src={Rectone} />
                    <img src={Rectow} className="rounded-md" />
                    <img src={Recthree} className="rounded-md" />
                    <img src={Rectfour} className="rounded-md" />
                </div>

                <div className=" hidden md:flex justify-center flex-wrap  md:space-x-8 sm:flex-col sm: flex items-center sm:space-y-8 ">
                    <img src={Rectfive} className="rounded-md" />
                    <img src={Rectsix} className="rounded-md" />
                    <img src={Rectseven} className="rounded-md" />
                </div>
            </div>
            <div className="flex justify-center mt-14">
                <button className="text-white font-Graphik pt-3.5 pb-3.5 pr-11 pl-11 font-medium shadow border-white border">
                    See more
                </button>
            </div>
        </div>
    );
}
