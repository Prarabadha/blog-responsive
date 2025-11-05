import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0A0F2C] text-white px-4 py-8 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-semibold">Go ibibo</h3>
            <p className="mt-4">
              Your one step for all needs. Shop with used of exprience best
              shopping website
            </p>
          </div>
          <div className="flex flex-col md:items-center ">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaGithub />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
            </div>
            <div>
              <form className="flex items-center justify-center mt-8">
                <input
                  type="email"
                  className="w-full p-2 rounded-l-lg border border-gray-600"
                  placeholder="Enter email"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-lg text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
