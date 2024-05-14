import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-1 px-1 sm:py-2 sm:px-1">
      <div className='max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-2'>
        <div>
          <h1 className='w-full text-xl font-bold text-[#00df9a]'>RoomRental</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sededjfj fkkkvjflk jkffjhgdjkshe
          </p>
          <div className='flex justify-between md:w-[65%] my-2'>
            <FaFacebookSquare size={24} />
            <FaDribbbleSquare size={24} />
            <FaGithubSquare size={24} />
            <FaInstagram size={24} />
            <FaTwitterSquare size={24} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-2'>
          <div>
            <h6 className='font-medium text-gray-420'> Solutions</h6>
            <ul>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'> Support</h6>
            <ul>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-420'> Company</h6>
            <ul>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-420'> Legal</h6>
            <ul>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
              <li className="py-1 text-xs">Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
