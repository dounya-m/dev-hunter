import React from 'react'

function TransitionController() {
  return (
    <div className='grid grid-cols-2 gap-8 w-[80%] mx-auto '>
        <button className='bg-purple-700 text-white text-lg w-[30%] py-4 rounded-xl mx-auto hover:bg-purple-600'>Retrait</button>
        <button className='bg-purple-700 text-white text-lg w-[30%] py-4 rounded-xl mx-auto hover:bg-purple-600'>Dépot</button>
        {/* <button className='bg-purple-700 text-white text-lg w-[30%] py-4 rounded-xl mx-auto hover:bg-purple-600 col-span-2'>Dépot</button> */}
        <button className='bg-purple-700 text-white text-lg w-[30%] py-4 rounded-xl mx-auto hover:bg-purple-600'>check the account</button>
        <button className='bg-purple-700 text-white text-lg w-[30%] py-4 rounded-xl mx-auto hover:bg-purple-600'>facture</button>

    </div>
  )
}

export default TransitionController