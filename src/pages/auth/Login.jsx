import React from 'react'
import FormeLogin from '../../components/auth/FormeLogin'
import login from '../../assets/images/login.png'
import Logo from '../../components/commun/items/logo/Logo'
function Login() {
  return (
    <div className='flex justify-between h-[100vh]'>
        <section className='auth_image w-[45%] object-contain'>
        <img className='w-[100%] h-[100vh]' src={login} alt="" />
        </section>
        <section className='mx-auto my-auto flex flex-col gap-10'>
            <Logo />
            <FormeLogin />
        </section>
    </div>
  )
}

export default Login