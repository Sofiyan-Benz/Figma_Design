import React from "react";

export default function CustomBlackButton(props) {
    return (
        <div>
            <button
                style={{
                    fontSize: "17px",
                    lineHeight: "25px",
                    fontStyle: "normal",
                }}
                className="bg-black font-Graphik text-white font-medium pt-5 pb-5 pr-10 pl-10 line-height-17 text-17 shadow-xl border border-solid border-white "
            >
                {props.name}
            </button>
        </div>
    );
}
