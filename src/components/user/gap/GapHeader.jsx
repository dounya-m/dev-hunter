import React from 'react'
import {BsFillGrid1X2Fill}  from "react-icons/bs";
import {TiWiFi} from "react-icons/ti"
import { Link } from 'react-router-dom'
import {BsArrowLeftShort} from "react-icons/bs"

function GapHeader() {
  return (
    <div className='card mt-[1rem] relative'>
    {/* <p className='cercle_deco absolute  fl'></p> */}
    <div className=' z-10 flex flex-col gap-8'>
        <div className='relative flex justify-between'>
        <div className=''>
            <Link  to='/' className='relative font-bold text-2xl text-white-'>banka*</Link>
            <p className=' bg-purple-300 absolute w-[1.5rem] h-[1.5rem] rounded-full left-[14%] top-[12%] -z-10'></p>
        </div>
        <BsFillGrid1X2Fill className='text-white text-3xl' />
        </div>
    <div>
        <p className='text-gray-200  text-sm'>Credit card number</p>
        <p className=' text-4xl font-semibold'>5337 **** **** 3294</p>
    </div>
    <div className='flex items-end gap-10'>
        <div className=''>
            <p className='text-gray-200  text-sm'>Name</p>
            <p className=''>MELLOUKI DOUNYA</p>
        </div>
        <div className=''>
            <p className='text-gray-200  text-sm'>Exp.Date</p>
            <p className=''>10/26</p>
        </div>
        <div>
        </div>
        <TiWiFi className=' rotate-90 text-white text-2xl justify-items-end ml-[23%]' />
    </div>


    </div>
    <p className='bg_card_color'></p>
    <p className='bg_card_color2'></p>
</div>
  )
}

export default GapHeader