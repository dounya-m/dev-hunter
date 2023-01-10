import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='relative'>
    <Link  to='/' className='relative font-bold text-2xl text-violet-900'>banka*</Link>
    <p className=' bg-purple-200 absolute w-[1.5rem] h-[1.5rem] rounded-full left-[56%] top-[12%] -z-10'></p>
    </div>
  )
}

export default Logo