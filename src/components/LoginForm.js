import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast'


export const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
      const navigate=useNavigate()
    function changeHandler(event){

        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))

    }

    const [showPassword,setShowPassword]=useState(false);

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login successful")
         navigate("/dashboard")

    }
  return (
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full '>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup></p>
            <input
             type='email'
             required
             value={formData.email}
              onChange={changeHandler}
              placeholder='Enter email id'
              name='email'
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
            ></input>
        </label>

        <label className='w-full relative'>
            <p>Password <sup>*</sup></p>
            <input
             type={showPassword?"text":"password"}
             required
             value={formData.password}
              onChange={changeHandler}
              placeholder='Enter password'
              name='password'
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
            ></input>

            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={()=>setShowPassword((prev)=> !prev)}>
                {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:
                <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                Forgot password</p></Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign in
        </button>
    </form>
  )
}
