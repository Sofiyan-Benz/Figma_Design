import React from "react";
import { fontWeight } from "tailwindcss/defaultTheme";

export default function CustomSmallBlueButton(props) {
    return (
        <div>
            <button
                style={{
                    fontSize: "17px",
                    lineHeight: "25px",
                    fontStyle: "normal",
                    paddingTop: "13.5px",
                    paddingBottom: "13.5px",
                    paddingRight: "43.5px",
                    paddingLeft: "43.5px",
                }}
                className="bg-primary font-Graphik text-white font-medium line-height-17 shadow-xl "
            >
                {props.name}
            </button>
        </div>
    );
}
