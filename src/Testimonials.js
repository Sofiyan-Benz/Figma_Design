import React from "react";
import ClaireBell from "./images/Testimonials/claireBell.png";
import Francisco from "./images/Testimonials/Francisco.png";
import Ralph from "./images/Testimonials/Ralph.png";
import Jorge from "./images/Testimonials/Jorge.png";

export default function Testimonials() {
  return (
    <div className="bg-black w-full ">
      <div className=" bg-black max-w-lg mx-auto py-6 font-Graphik">
        <h2 className="text-white text-5xl font-normal text-center mt-40 ">
          Testimonials
        </h2>
      </div>

      <div className="flex justify-center flex-wrap ">
        <div className="border border-primary w-96 h-80 rounded-lg p-10">
          <div className="flex">
            <img src={ClaireBell} alt="Claire Bell" />
            <span className="text-white px-3 ">
              {" "}
              Claire Bell <br /> Designer
            </span>
          </div>
          <p className="text-white font-normal text-left pt-7">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </div>

        <div className="border border-primary w-96 h-72 rounded-lg p-10">
          <div className="flex">
            <img src={Francisco} alt="Francisco Lane" />
            <span className="text-white px-3 ">
              {" "}
              Francisco Lane <br /> Designer
            </span>
          </div>
          <p className="text-white font-normal text-left pt-7">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        <div className="border border-primary w-96 h-72 rounded-lg p-10">
          <div className="flex">
            <img src={Ralph} alt="Ralph Fisher" />
            <span className="text-white px-3 ">
              {" "}
              Ralph Fisher <br /> Designer
            </span>
          </div>
          <p className="text-white font-normal text-left pt-7">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        <div className="border border-primary w-96 h-72 rounded-lg p-10">
          <div className="flex">
            <img src={Jorge} alt="Jorge Murphy" />
            <span className="text-white px-3 ">
              {" "}
              Jorge Murphy <br /> Designer
            </span>
          </div>
          <p className="text-white font-normal text-left pt-7">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>
      </div>
    </div>
  );
}
