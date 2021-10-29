import React from "react";
import LocationMap from "./images/footer/bx_bx-map.png";
import NumberPhone from "./images/footer/phone.png";
import Twitter from "./images/footer/twitter.png";
import Facebook from "./images/footer/facebook.png";
import Linkedin from "./images/footer/linkedin.png";

export default function Footer() {
    const styleSpan = {
        lineHeight: "24px",
        fontSize: "16px",
        fontStyle: "normal",
        letterSpacing: "0.2px",
        fontWeight: 500,
    };
    return (
        <div className="bg-black text-white mt-24 pb-28 font-Graphik md:space-x-20 sm:space-y-20  md:flex justify-around sm:pl-28">
            <div className="md:max-w-513 md:flex md:space-x-20 ">
                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">Fingertipe</h5>
                    <span style={styleSpan}>Home</span>
                    <span style={styleSpan}>Examples</span>
                    <span style={styleSpan}>Pricing</span>
                    <span style={styleSpan}> Updates</span>
                </div>

                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">Resources</h5>
                    <span style={styleSpan}>Home</span>
                    <span style={styleSpan}>Examples</span>
                    <span style={styleSpan}>Pricing</span>
                    <span style={styleSpan}>Updates</span>
                </div>

                <div className="flex flex-col space-y-7">
                    <h5 className="font-medium text-xl">About</h5>
                    <span style={styleSpan}>Home</span>
                    <span style={styleSpan}>Examples</span>
                    <span style={styleSpan}>Pricing</span>
                    <span style={styleSpan}>Updates</span>
                </div>
            </div>

            <div className="flex flex-col md:max-w-319 space-x-2.5 space-y-5">
                <div className="flex items-center space-x-2">
                    <img src={LocationMap} alt="Location Map" className="" />
                    <span style={styleSpan}>
                        7480 Mockingbird Hill undefined{" "}
                    </span>
                </div>

                <div className="flex items-center space-x-2.5 ">
                    <img
                        src={NumberPhone}
                        alt="Number Phone "
                        className="w-7"
                    />
                    <span style={styleSpan}>(239) 555-0108 </span>
                </div>

                <div className="flex items-center space-x-7">
                    <img src={Twitter} alt="icon Twitter" />
                    <img src={Facebook} alt="icon Facebook" />
                    <img src={Linkedin} alt="icon Linkedin" />
                </div>
            </div>
        </div>
    );
}
