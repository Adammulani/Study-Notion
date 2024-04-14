import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import signupImg from "../assets/signup.png"
import { Template } from '../components/Template';

export const Signup = ({setIsLoggedIn}) => {

  return (
    <Template
    title="Signup now"
    desc1="Build skills for today, tomorrow and beyound"
    desc2="Education to futerue proof your career"
    formtype="signup"
    image={signupImg}
     setIsLoggedIn={setIsLoggedIn}
    ></Template>
  )
}
