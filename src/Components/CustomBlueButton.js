import React from "react";
import { fontWeight } from "tailwindcss/defaultTheme";

export default function CustomBlueButton(props) {
    return (
        <div>
            <button
                style={{
                    fontSize: "17px",
                    lineHeight: "25px",
                    fontStyle: "normal",
                }}
                className="bg-primary font-Graphik text-white font-medium pt-5 pb-5 pr-10 pl-10 line-height-17 shadow-xl "
            >
                {props.name}
            </button>
        </div>
    );
}
