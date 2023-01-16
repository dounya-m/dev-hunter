import React  from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Proxy} from '../../config/Proxy'

function RegisterForme() {
    const [form, setFormData] = useState({
        name:'',
        lastname: '',
        email: '',
        adress: '',
        city: '',
        codeP: '',
        password: ''
    });

    function handleChange(event) {
        setFormData({
        ...form,
        [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
        const response = await axios.post(`${Proxy}/user`, form);
        console.log(response.data);
        const Data = {
            user : response.data._id,
            amount : 1000
        }
        const response2 = await axios.post(`${Proxy}/compte`, Data);
        console.log(response2.data);
        window.location.href = '/login'
        } catch (error) {
        console.error(error);
        }
    }    



return (
    <form className='grid grid-cols-2 gap-6 capitalize'
    onSubmit={handleSubmit}
    >
        <div class="space-y-1">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="name">Name</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
            value={form.name} onChange={handleChange}
            type="text" name="name" placeholder='name...'/>
        </div>
        <div class="space-y-1">
            <label class="block text-left font-medium text-gray-700 text-sm"
            for="Last name">Last name</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
            value={form.lastname} onChange={handleChange}
            type="text" name="lastname" placeholder='Last name...'/>
        </div>
        <div class="space-y-1 col-span-2">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="email">Email</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
            value={form.email} onChange={handleChange} 
            type="email" name="email" placeholder='email...'/>
        </div>
        <div class="space-y-1 col-span-2">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="adress">Adress</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
            value={form.adress} onChange={handleChange} 
            type="text" name="adress" placeholder='adress...'/>
        </div>
        <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="city">city</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
                value={form.city} onChange={handleChange}
                type="text" name="city" placeholder='city...'/>
            </div>
            <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="postal code">postal code</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
                value={form.codeP} onChange={handleChange}
                type="number" name="codeP" placeholder='postal code...'/>
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-left text-gray-700 text-sm" 
                for="password" placeholder='password...'>Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                value={form.password} onChange={handleChange}
                type="password" name="password"  />
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-left text-gray-700 text-sm" 
                for="email" placeholder='password...'>confirm Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                type="password" name="confirm pasword"  />
            </div>
            <div className='flex flex-col gap-3 col-span-2'>
                <button className='w-full p-2 text-white bg-violet-500 rounded-lg hover:bg-violet-600'
                type='submit'
                
                >
                Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    I alredy have accoune < Link to="/login" class="font-medium  hover:underline text-blue-800">Sign In here</Link>
                </p>
            </div>
    </form>
  )
}

export default RegisterForme