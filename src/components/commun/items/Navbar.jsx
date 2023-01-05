import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
        <div className='relative'>
            <NavLink  to='/' className='relative font-bold text-2xl text-violet-900'>banka*</NavLink>
            <p className=' bg-purple-200 absolute w-[1.5rem] h-[1.5rem] rounded-full ml-[80%] -mt-[40%] -z-10'></p>
        </div>
        <div>
            <ul className='flex gap-[4rem]'>
              <NavLink to='/' className='text-gray-600 hover:text-violet-800 font-semibold'>Home</NavLink>              
              <NavLink to='/' className='text-gray-600 hover:text-violet-800 font-semibold'>About</NavLink>
              <NavLink to='/' className='text-gray-600 hover:text-violet-800 font-semibold'>Contact</NavLink>

            </ul>
        </div>
        <div className='flex gap-[2rem]'>
        <button>Login</button>
        <button className='text-white bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-700'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar