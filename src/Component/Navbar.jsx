import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed m-4 top-0 left-0 right-0 shadow-lg z-50 bg-white">
        <div className="px-4 flex justify-between items-center h-16">
          <h3 className="text-2xl font-bold">Travel</h3>
          <div className="hidden md:flex  items-center font-bold text-sm space-x-4">
            <Link
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
              to="/"
            >
              Home
            </Link>
            <Link
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
              to="/contact"
            >
              Contact
            </Link>

            <button className="py-2 px-6 border bg-gray-300 ">Sign In</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="md:hidden flex flex-col items-center font-bold text-sm space-y-6 bg-white py-4">
              <Link
                className="px-6 py-2 hover:bg-gray-600 hover:text-white"
                to="/"
              >
                Home
              </Link>
              <Link
                className="px-6 py-2 hover:bg-gray-600 hover:text-white"
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="px-6 py-2 hover:bg-gray-600 hover:text-white"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="px-6 py-2 hover:bg-gray-600 hover:text-white"
                to="/about"
              >
                About
              </Link>
              <button className="py-2 px-6 border bg-gray-300">Sign In</button>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
