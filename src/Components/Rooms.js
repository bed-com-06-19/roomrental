import React from 'react'
import room1 from "../Assets/room1.jpeg"
import room3 from "../Assets/room3.jpeg"
import room4 from "../Assets/room4.jpeg"

const Rooms = () => {
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
         {/*CARD */}
        <div className='rounded-xl relative'>
            {/*overly*/}
            <div className='absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2'>Double Rooms</p>
                <p className='px-2'>No.: 46</p>
                <p className='px-2'>Remaining: 20/92</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>

            </div>
            <img className='w-full max-h-[600px] object-cover'src={room1} alt='#'/>
        </div>

        <div className='rounded-xl relative'>
            {/*overly*/}
            <div className='absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2'>Double Rooms</p>
                <p className='px-2'>No.: 46</p>
                <p className='px-2'>Remaining: 20/92</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>

            </div>
            <img className='w-full max-h-[600px] object-cover'src={room3} alt='#'/>
        </div>

        <div className='rounded-xl relative'>
            {/*overly*/}
            <div className='absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2'>Double Rooms</p>
                <p className='px-2'>No.: 46</p>
                <p className='px-2'>Remaining: 20/92</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>

            </div>
            <img className='w-full max-h-[600px] object-cover'src={room4} alt='#'/>
        </div>
    </div>
    )
}

export default Rooms