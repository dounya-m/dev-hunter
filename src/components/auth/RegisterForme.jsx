import React  from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Proxy from '../../config/Proxy'
import { useEffect } from 'react'
function RegisterForme() {

const [form, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    adress: '',
    city: '',
    codeP: '',
    password: ''
})
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
const handleSubmit = (e) => {
    e.preventDefault()
    register()
}
const register = async() => {
    try{
        const res = await axios.post(`${Proxy}/user`, formData)
        console.log(res);

    }catch(err){
        console.log(err)
    }
}
useEffect(() => {
    register()
}, [])



return (
    <form className='grid grid-cols-2 gap-6 capitalize' onSubmit={handleSubmit}>
        <div class="space-y-1">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="name">Name</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
            value={formData.name}
            onChange={handleChange}
            type="text" name="name" placeholder='name...'/>
        </div>
        <div class="space-y-1">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="Last name">Last name</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
            value={formData.lastname}
            onChange={handleChange}
            type="text" name="Last name" placeholder='Last name...'/>
        </div>
        <div class="space-y-1 col-span-2">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="email">Email</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
            value={formData.email}
            onChange={handleChange}
            type="email" name="email" placeholder='email...'/>
        </div>
        <div class="space-y-1 col-span-2">
            <label class="block text-left font-medium text-gray-700 text-sm" 
            for="adress">Adress</label>
            <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
            value={formData.adress}
            onChange={handleChange}
            type="text" name="adress" placeholder='adress...'/>
        </div>
        <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="city">city</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50' 
                value={formData.city}
                onChange={handleChange}
                type="text" name="city" placeholder='city...'/>
            </div>
            <div class="space-y-1">
                <label class="block text-left font-medium text-gray-700 text-sm" 
                for="postal code">postal code</label>
                <input className='w-full p-2 border-b-2 rounded-lg  bg-slate-50'
                value={formData.codeP}
                onChange={handleChange}
                type="number" name="postal code" placeholder='postal code...'/>
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-left text-gray-700 text-sm" 
                for="password" placeholder='password...'>Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                value={formData.password}
                onChange={handleChange}
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
                type='submit'>
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