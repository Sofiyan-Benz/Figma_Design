import { ReactComponent as ReactLogo } from "./images/Rectangle.svg";
import { ReactComponent as MobileMenuLogo } from "./images/burger.svg";
import { useState } from 'react';
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black">
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="flex items-center justify-between">
            <div className="flex">
              <ReactLogo />
            </div>

            <div className=" hidden md:flex items-center space-x-3 ">
              <a
                href="#"
                className=" hover:bg-gray-700 text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </a>

              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Product
              </a>

              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                About
              </a>

              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="flex space-x-3">
            <div>
              <button className="text-white shadow border-white border py-2 px-5 hover:bg-gray-700">
                Login
              </button>{" "}
            </div>

           {/* Mobile Button  */}
          <div className="md:hidden flex items-center text-white " >
            <button
            className="mobile-menu-button" 
            onClick={() => setIsOpen(!isOpen) }
            type="button"
            >
          <MobileMenuLogo className="w-6 h-6" />
          </button>
          </div>
          </div>

          
          </div>
        </div>
        {/* Mobile Menu  */}
{(isOpen) ? <div className="text-white flex flex-col items-center">
          <a href="" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
          <a href="" className="block py-2 px-4 text-sm hover:bg-gray-700">Product</a>
          <a href="" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
          <a href="" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>


        </div> : '' }
        

      </nav>
    )
}
