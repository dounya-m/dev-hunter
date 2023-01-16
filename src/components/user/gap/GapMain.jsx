import React from 'react'
import TransitionController from './iteme/TransitionController'

function GapMain() {
  return (
    <div className=''>
        <div className='my-10'>
        <h1 className='text-4xl font-bold capitalize  mx-auto text-gray-900'>You can manage your account</h1>
            <p className='w-[30%] mx-auto text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <TransitionController />
        </div>
    </div>
  )
}

export default GapMain