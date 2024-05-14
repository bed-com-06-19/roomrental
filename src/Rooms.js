import React from 'react'

const Rooms = () => {
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'> 
            {/*card*/}
            <div className='rounded-xl relative'>
                {/*Overlay*/}
                <div className = 'abslute w-full h-full bg-black rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Double Rooms</p>
                    <p className='px-2'>No.: 46</p>
                    <p className='px-2'>Remaining: 20/92</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>
                </div>
                 <img 
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                    src='C:\GitHub-Projects\WEB\pictures\room1.jpeg' alt='/'
                 />
            </div>
        </div>
    )
}

export default Rooms