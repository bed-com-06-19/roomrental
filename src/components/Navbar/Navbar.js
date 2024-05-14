import React, { useState } from 'react';
import { HomeModernIcon, Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Hostels', link: '/' },
    { name: 'Contact', link: '/' },
    { name: 'About', link: '/' },
  ];
  let [isOpen, setisOpen] = useState(false);
  let [searchBy, setSearchBy] = useState('');

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSearchBy(event.target.value);
  };

  // Function to toggle search dropdown visibility
  const toggleSearchDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 z-50 bg-black'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center'>
        {/* Logo and RoomRental */}
        <div className='flex items-center gap-2'>
          <HomeModernIcon className='w-7 h-7 text-brown-600'/>
          <span className='text-xl font-bold text-[#00df9a]'>RoomRental</span>
        </div>

        {/* Menu icon (Bars3BottomRightIcon) */}
        <div className={`w-7 h-7 cursor-pointer md:hidden ${isOpen ? 'hidden' : 'block'}`} onClick={() => setisOpen(true)}>
          <Bars3BottomRightIcon className="text-white" />
        </div>

        {/* Close icon (XMarkIcon) */}
        <div className={`w-7 h-7 cursor-pointer md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setisOpen(false)}>
          <XMarkIcon className="text-white" />
        </div>

        {/* Links */}
        <ul className={`md:flex md:items-center md:pb-0 md:ml-auto ${isOpen ? 'block' : 'hidden'}`}>
          {Links.map((link, index) => (
            <li key={index} className='font semi-bold my-4 md:my-0 md:ml-8'>
              <a href={link.link} className="text-white">{link.name}</a>
            </li>
          ))}
          <li>
            <button className='btn bg-gray-500 text-[#00df9a] py-1 px-3 md:ml-8 rounded'>Landlord LogIn</button>
          </li>
        </ul>

        {/* Search input */}
        <div className="md:relative md:flex md:items-center md:ml-4">
          <input
            type="text"
            placeholder="Search hostels..."
            className="py-1 px-2 rounded border border-gray-300 focus:outline-none text-sm"
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleSearchDropdown}>
            <ChevronDownIcon className="w-4 h-4 text-gray-500"/>
          </div>
        </div>

        {/* Dropdown list */}
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
