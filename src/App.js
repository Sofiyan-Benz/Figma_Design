import React from "react";
import Nav from "./Nav";
import Features from "./Features";
import Contents from "./Contents";
import Gallery from "./Gallery";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Opentype from "./Opentype";
import screens from "./images/screens.png";
import "./App.css";
import Footer from "./Footer";
import CustomBlueButton from "./Components/CustomBlueButton.js";
import CustomBlackButton from "./Components/CustomBlackButton";

function App() {
    return (
        <React.Fragment>
            {/* Nav bar */}
            <Nav />
            <header className="bg-black text-white font-Graphik">
                <div className="flex justify-center flex-col items-center mt-24">
                    <h1 className="md:font-medium md:text-7xl md:max-w-709 text-center sm:w-294 sm:font-normal sm:text-5xl p-3 mb-7">
                        Work at the speed of thought
                    </h1>
                    <p className="md:w-602 text-center font-normal text-xl mb-24 sm:w-402 p-3">
                        Most calendars are designed for teams. Slate is designed
                        for freelancers who want a simple way to plan their
                        schedule.
                    </p>
                </div>
                <div className="flex justify-center sm:flex-col sm:space-y-3 items-center md:flex-row md:space-x-3">
                    <CustomBlueButton name="Try For Free" />

                    <CustomBlackButton name="Learn More" />
                </div>
                {/* Gradient */}
                <div className="flex justify-center mt-9 relative">
                    <div className="w-full bg-no-repeat ">
                        <img src={screens} alt="Screen Dashboard" />
                    </div>
                    <div
                        style={{ height: "20vw" }}
                        className=" w-full absolute left-0 right-0  bottom-0 bg-hero-pattern"
                    ></div>
                </div>
            </header>
            <main className="bg-black">
                <Features />
            </main>
            <div>
                <Contents />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <Partners />
            </div>
            <div className="bg-black">
                <Testimonials />
            </div>
            <div>
                <Opentype />
            </div>
            <div className="bg-black">
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default App;
