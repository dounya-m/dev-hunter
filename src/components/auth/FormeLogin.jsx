import {React} from 'react'
import { Link } from 'react-router-dom'


function FormeLogin() {
    
return (
        <form class="space-y-4 md:space-y-6 my-auto w-[25rem]" >
            <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="email">Email</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
                type="email" name="email" placeholder='email...'/>
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-left text-gray-700 text-sm" 
                for="email" placeholder='password...'>Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                type="password" name="password"  />
            </div>
            <div className='flex flex-col gap-3'>
                <button className='w-full p-2 text-white bg-violet-500 rounded-lg hover:bg-violet-600'
                >
                Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    I don't have accoune < Link to="/register" class="font-medium  hover:underline text-blue-800">Sign Up here</Link>
                </p>
            </div>
        </form>
        
  )
}

export default FormeLogin