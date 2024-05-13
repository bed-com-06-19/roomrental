import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const Home = () =>{
  return (
    <>
    <Navbar/>
     <div className='flex flex-row w-full h-screen items-center justify-center bg-gray-600'>
      Home page
      
      </div>
      <Footer/>
    </>
    
  )
}

export default Home