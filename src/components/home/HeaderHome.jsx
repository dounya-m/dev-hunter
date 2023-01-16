import React from 'react'
import {Link} from 'react-router-dom'
import girl_home from '../../assets/images/girl_home.png'
import {BsFillGrid1X2Fill}  from "react-icons/bs";
import {TiWiFi} from "react-icons/ti"
import {BsArrowLeftShort} from "react-icons/bs"


function HeaderHome() {
  return (
    <div className=''>
        <p className='cercle absolute -z-30 justify-between '></p>
        <p className='cercle2 absolute -z-30 justify-between '></p>
        <section className='flex items-center gap-[6rem] shadow-md rounded-xl'>
            <img className='w-[50%]' src={girl_home} alt="" />
            <div className='text-left'>
                <h2 className='font-bold text-5xl capitalize'>lookingg for a better financial world.</h2>
                <p>Welcome to  Banka, where we strive to provide our customers with the best banking experience possible.</p>
                <button className='flex items-end text-white bg-violet-500 px-3 font-semibold py-2 rounded-lg mt-2'>let's go <BsArrowLeftShort className=' rotate-180 text-lg' /></button>
            </div>
        </section>
        <section className='mt-[2rem]'>
            <div>
            <h2 className='text-4xl font-bold capitalize '>Discover your card</h2>
            <p></p>
            </div>
            <div className='card2 mt-[1rem] relative rotate'>
                <p className='cercle_vide2'></p>
                <p className='cercle_vide'></p>
                <p className='cercle_deco absolute -z-40'></p>
                <div className='flex justify-between'>
                <div className='relative'>
                <Link  to='/' className='relative font-bold text-2xl text-white'>banka*</Link>
                </div>
                <BsFillGrid1X2Fill className='text-gray-200 text-2xl' />
                </div>
                <div>
                    <p className='text-gray-400 font-semibold text-sm'>Credit card number</p>
                    <p className=' text-4xl font-semibold'>5337 **** **** 3294</p>
                </div>
                <div className='flex items-end gap-10'>
                    <div className=''>
                        <p className='text-gray-400 font-semibold text-sm'>Name</p>
                        <p className=''>JOHN DOE</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold text-sm'>Exp.Date</p>
                        <p className=''>10/26</p>
                    </div>
                    <div>
                        <TiWiFi className=' rotate-90 ml-[14rem] text-gray-200' />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeaderHome