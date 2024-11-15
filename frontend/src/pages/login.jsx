import React from 'react'
import LoginForm from './loginForm'
import Navbar from '../components/navbar'
const Login = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")]'>
        <Navbar></Navbar>
        <LoginForm></LoginForm>

    </div>
  )
}
export default Login