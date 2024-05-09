import React, { useState } from 'react'
import { HomeModernIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Hostels', link: '/' },
    { name: 'Contact', link: '/' },
    { name: 'About', link: '/' },
  ];
  let [isOpen, setisOpen] = useState(false);

  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-brown'>
        {/* Logo and RoomRental */}
        <div className='flex items-center gap-2'>
          <HomeModernIcon className='w-7 h-7 text-brown-600'/>
          <span className='font-bold'>RoomRental</span>
        </div>

        {/* Menu icon (Bars3BottomRightIcon) */}
        <div className={`w-7 h-7 cursor-pointer md:hidden ${isOpen ? 'hidden' : 'block'}`} onClick={() => setisOpen(true)}>
          <Bars3BottomRightIcon />
        </div>

        {/* Close icon (XMarkIcon) */}
        <div className={`w-7 h-7 cursor-pointer md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setisOpen(false)}>
          <XMarkIcon />
        </div>

        {/* Links */}
        <ul className={`md:flex md:items-center md:pb-0 md:ml-auto ${isOpen ? 'block' : 'hidden'}`}>
          {Links.map((link, index) => (
            <li key={index} className='font semi-bold my-4 md:my-0 md:ml-8'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <li>
            <button className='btn bg-blue-500 text-white py-1 px-3 md:ml-8 rounded'>Landlord LogIn</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar