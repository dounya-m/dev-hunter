import React from 'react'
import {FaCreditCard} from 'react-icons/fa' 
import {FaRegAddressCard} from 'react-icons/fa' 
import {FaHome} from 'react-icons/fa' 
function MainHome() {
  return (
    <div>
        <section className='mt-10'>
            <div>
                <h2 className='text-3xl font-bold my-8'>Our Services</h2>
                <div className='cards_grid grid grid-cols-3 items-center gap-[8rem]'>
                    <div className='flex flex-col justify-center items-center px-8 gap-2 py-8 shadow-lg hover:shadow-violet-50'>
                      <FaCreditCard className='text-4xl text-violet-600' />
                      <div>
                        <h3 className='text-xl font-semibold my-8'>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iure quam, dolor expedita quod quisquam nihil vero, libero nemo quaerat quo fugiat! Porro asperiores, distinctio similique dolores fugiat enim qui.</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center items-center px-8 gap-2 py-8 shadow-lg hover:shadow-amber-50'>
                      <FaRegAddressCard className='text-4xl text-amber-500' />
                      <div>
                        <h3 className='text-xl font-semibold my-8'>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iure quam, dolor expedita quod quisquam nihil vero, libero nemo quaerat quo fugiat! Porro asperiores, distinctio similique dolores fugiat enim qui.</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center items-center px-8 gap-2 py-8 shadow-lg hover:shadow-green-50'>
                      <FaHome className='text-4xl text-emerald-500' />
                      <div>
                        <h3 className='text-xl font-semibold my-8'>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iure quam, dolor expedita quod quisquam nihil vero, libero nemo quaerat quo fugiat! Porro asperiores, distinctio similique dolores fugiat enim qui.</p>
                      </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainHome