
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
    <footer className="fixed bottom-0 left-0 w-full bg-black text-gray-300 py-4 px-4 sm:py-6 sm:px-4">
    <div className='max-w-[1240] mx-auto grid lg:grid-cols-3 gap-8'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>RoomRental</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sededjfj fkkkvjflk jkffjhgdjkshe
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaDribbbleSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-420'> Solutions</h6>
            <ul>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'> Support</h6>
            <ul>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-420'> Company</h6>
            <ul>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-420'> Legal</h6>
            <ul>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
              <li className="py-2 text-5m">Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
