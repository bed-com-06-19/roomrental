import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeModernIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "Hostels", link: "/Hostel" },
    { name: "Contact", link: "/Contact" },
    { name: "About", link: "/About" },
  ];
  let [isOpen, setisOpen] = useState(false);
  let [searchBy, setSearchBy] = useState("");

  const handleDropdownChange = (event) => {
    setSearchBy(event.target.value);
  };

  const toggleSearchDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-50 bg-black">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HomeModernIcon className="w-7 h-7 text-brown-600" />{" "}
          <span className="text-xl font-bold text-[#00df9a]">RoomRental</span>
        </div>

        <div
          className={`w-7 h-7 cursor-pointer md:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => setisOpen(true)}
        >
          <Bars3BottomRightIcon className="text-white" />
        </div>

        <div
          className={`w-7 h-7 cursor-pointer md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setisOpen(false)}
        >
          <XMarkIcon className="text-white" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 md:ml-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="font semi-bold my-4 md:my-0 md:ml-8">
              <Link to={link.link} className="text-white">
                {link.name}
              </Link>{" "}
            </li>
          ))}
          <li>
            <Link to="/LogIn">
              <button className="btn bg-gray-500 text-[#00df9a] py-1 px-3 md:ml-8 rounded">
                LogIn
              </button>
            </Link>
          </li>

          <div className="flex items-center ml-4">
            <FaFacebookSquare
              size={20}
              className="text-gray-300 mr-2 cursor-pointer"
            />
            <FaDribbbleSquare
              size={20}
              className="text-gray-300 mr-2 cursor-pointer"
            />
            <FaGithubSquare
              size={20}
              className="text-gray-300 mr-2 cursor-pointer"
            />
            <FaInstagram
              size={20}
              className="text-gray-300 mr-2 cursor-pointer"
            />
            <FaTwitterSquare
              size={20}
              className="text-gray-300 mr-2 cursor-pointer"
            />
          </div>
        </ul>

        <div className="md:relative md:flex md:items-center md:ml-4">
          <input
            type="text"
            placeholder="Search hostels..."
            className="py-1 px-2 rounded border border-gray-300 focus:outline-none text-sm"
          />
          <div
            className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleSearchDropdown}
          >
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {isOpen && (
          <div className="md:absolute md:top-full md:left-0 md:w-full md:bg-white md:shadow-md md:rounded-b-md md:border md:border-gray-300 md:mt-1">
            <select
              className="py-1 px-2 rounded border border-gray-300 focus:outline-none text-sm w-full"
              value={searchBy}
              onChange={handleDropdownChange}
            >
              <option value="">Search by...</option>
              <option value="location">Location</option>
              <option value="price">Price</option>
              <option value="distance">Distance</option>
              <option value="gender">Gender</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
