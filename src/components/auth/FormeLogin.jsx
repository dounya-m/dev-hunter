import { useState } from 'react'
import {React} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Proxy } from '../../config/Proxy'


function FormeLogin() {
    const [form, setFormData] = useState({
        email: '', 
        password: ''
    })
    function handleChange(event) {
        setFormData({
        ...form,
        [event.target.name]: event.target.value
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
        const response = await axios.post(`${Proxy}/user/login`, form);
        console.log(response.data);
        localStorage.setItem('token', response.data._id);
            // setIsAuthenticated(true);
            window.location.href = '/gap'
        } catch (error) {
        console.error(error);
        }
    } 
    
return (
        <form class="space-y-4 md:space-y-6 my-auto w-[25rem]" 
        onSubmit={handleSubmit}
        >
            <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="email">Email</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
                value={form.email} onChange={handleChange} 
                type="email" name="email" placeholder='email...'/>
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-left text-gray-700 text-sm" 
                for="password" placeholder='password...'>Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                value={form.password} onChange={handleChange}
                type="password" name="password"  />
            </div>
            <div className='flex flex-col gap-3'>
                <button className='w-full p-2 text-white bg-violet-500 rounded-lg hover:bg-violet-600'
                type='submit'
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