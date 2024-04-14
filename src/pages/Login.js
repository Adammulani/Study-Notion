import React from 'react'
import { Template } from '../components/Template'
import loginImg from '../assets/login.png'

export const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow and beyound"
    desc2="Education to futerue proof your career"
    formtype="login"
    image={loginImg}
     setIsLoggedIn={setIsLoggedIn}
    ></Template>
  )
}
