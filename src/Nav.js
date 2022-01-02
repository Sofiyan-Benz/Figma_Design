import { ReactComponent as ReactLogo } from "./images/Rectangle.svg";
import { ReactComponent as MobileMenuLogo } from "./images/burger.svg";
import { useState } from "react";
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black pt-5 md:flex justify-center">
            <div className="sm:w-full md:w-1097 flex justify-around items-center">
                <div className="">
                    <ReactLogo />
                </div>

                <div
                    className=" hidden md:flex justify-between"
                    style={{ width: "393px" }}
                >
                    <a
                        href="#"
                        className=" hover:bg-gray-700 text-white text-sm font-medium"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-white hover:bg-gray-700 hover:text-white  text-sm font-medium"
                    >
                        Product
                    </a>

                    <a
                        href="#"
                        className="text-white hover:bg-gray-700 hover:text-white text-sm font-medium"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-white hover:bg-gray-700 hover:text-white  text-sm font-medium"
                    >
                        Contact
                    </a>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <button
                            style={{
                                paddingBottom: "13.5px",
                                paddingTop: "13.5px",
                                paddingRight: "46px",
                                paddingLeft: "46px",
                                fontSize: "17px",
                                lineHeight: "25px",
                            }}
                            className="font-medium text-white shadow-xl border-white border hover:bg-gray-700"
                        >
                            Login
                        </button>{" "}
                    </div>

                    {/* Mobile Button  */}
                    <div className="md:hidden flex items-center text-white ">
                        <button
                            className="mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                        >
                            <MobileMenuLogo className="w-11" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu  */}
            {isOpen ? (
                <div className="text-white flex flex-col items-end">
                    <a
                        href=""
                        className="block py-2 px-4 text-sm hover:bg-gray-700"
                    >
                        Home
                    </a>
                    <a
                        href=""
                        className="block py-2 px-4 text-sm hover:bg-gray-700"
                    >
                        Product
                    </a>
                    <a
                        href=""
                        className="block py-2 px-4 text-sm hover:bg-gray-700"
                    >
                        About
                    </a>
                    <a
                        href=""
                        className="block py-2 px-4 text-sm hover:bg-gray-700"
                    >
                        Contact
                    </a>
                </div>
            ) : (
                ""
            )}
        </nav>
    );
}
