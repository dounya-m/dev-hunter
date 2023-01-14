import React from 'react'
import {BsFillGrid1X2Fill}  from "react-icons/bs";
import {TiWiFi} from "react-icons/ti"
import {BsArrowLeftShort} from "react-icons/bs"

function GapHeader() {
  return (
    <div className='card mt-[1rem] relative rotate'>
    <p className='cercle_deco absolute -z-40'></p>
    <BsFillGrid1X2Fill className='text-gray-500 text-2xl' />
    <div>
        <p className='text-gray-400 font-semibold text-sm'>Credit card number</p>
        <p className=' text-4xl font-semibold'>5337 **** **** 3294</p>
    </div>
    <div className='flex items-end gap-10'>
        <div className=''>
            <p className='text-gray-400 font-semibold text-sm'>Name</p>
            <p className=''>MELLOUKI DOUNYA</p>
        </div>
        <div className=''>
            <p className='text-gray-400 font-semibold text-sm'>Exp.Date</p>
            <p className=''>10/26</p>
        </div>
        <div>
            <TiWiFi className=' rotate-90 text-gray-500' />
        </div>
    </div>
</div>
  )
}

export default GapHeader