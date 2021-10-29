import React from "react";
import LocationMap from "./images/footer/bx_bx-map.png";
import NumberPhone from "./images/footer/phone.png";
import Twitter from "./images/footer/twitter.png";
import Facebook from "./images/footer/facebook.png";
import Linkedin from "./images/footer/linkedin.png";

export default function Footer() {
    return (
        <div className="bg-black text-white mt-24 pb-28 md:flex justify-around  ">
            <div className="md:max-w-513 md:flex justify-around space-x-20 ">
                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">Fingertipe</h5>
                    <span>Home</span>
                    <span>Examples</span>
                    <span>Pricing</span>
                    <span>Updates</span>
                </div>
                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">Resources</h5>
                    <span>Home</span>
                    <span>Examples</span>
                    <span>Pricing</span>
                    <span>Updates</span>
                </div>
                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">About</h5>
                    <span>Home</span>
                    <span>Examples</span>
                    <span>Pricing</span>
                    <span>Updates</span>
                </div>
            </div>

            <div className="flex flex-col md:max-w-319">
                <div className="flex items-center">
                    <img src={LocationMap} alt="Location Map" />
                    <span>7480 Mockingbird Hill undefined </span>
                </div>
                <div className="flex items-center ">
                    <img src={NumberPhone} alt="Number Phone " />
                    <span>(239) 555-0108 </span>
                </div>
                <div className="flex items-center">
                    <img src={Twitter} alt="icon Twitter" />
                    <img src={Facebook} alt="icon Facebook" />
                    <img src={Linkedin} alt="icon Linkedin" />
                </div>
            </div>
        </div>
    );
}
