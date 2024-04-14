import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import React from 'react'
import { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
export const SignupForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        password:'',
        confirmPassword:''
      })
    
      const [showPassword,setShowPassword]=useState(false);
      const navigate=useNavigate();
    
      function changeHandler(event){
    
        setFormData((prev)=>({
          ...prev,
          [event.target.name]:event.target.value
    
        }))
      }

      function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password and confirm password does not match");
        }
        setIsLoggedIn(true);
        toast.success("Account created")

        const accountData={...formData}

        console.log("Printing account data",accountData)
        navigate("/dashboard")
      }
      return (
        <div>
          <div>
            <button>
              Student
            </button>
            <button>
              Instructor
            </button>
    
            <form onSubmit={submitHandler} className='w-full'>
    
              {/*first name and last name */}
              <div className='flex justify-between'>
              <lable> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='firstname'
                  placeholder='Enter first name'
                  onChange={changeHandler}
                  value={formData.firstname}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
                >
                  
                </input>
              </lable>
    
              <lable> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='lastname'
                  placeholder='Enter last name'
                  onChange={changeHandler}
                  value={formData.lastname}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
                >
                  
                </input>
              </lable>
              </div>
    
                {/*email */}
              <div>
              <lable> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='email'
                  placeholder='Enter email address'
                  onChange={changeHandler}
                  value={formData.email}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
                >
                  
                </input>
              </lable>
              </div>
    
               {/*create password and confirm password */}
               <div>
               <lable className='relative'> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup>*</sup></p>
                <input
                required
                  type={showPassword?"text":"password"}
                  name='password'
                  placeholder='Enter password'
                  onChange={changeHandler}
                  value={formData.password}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
                >
                </input>
                <span 
                className='absolute right-3 top-[38px] cursor-pointer' 
                onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>
              </lable>
    
              <lable className='relative'> 
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Confirm Password <sup>*</sup></p>
                <input
                required
                  type={showPassword?"text":"password"}
                  name='confirmPassword'
                  placeholder='Confirm password'
                  onChange={changeHandler}
                  value={formData.confirmPassword}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full'
                >
                  
                </input>
                <span
                className='absolute right-3 top-[68px] cursor-pointer' 
                 onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>
              </lable>
    
               </div>
    
              <div>
    
              </div>
    
                 <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                  Create Account
                 </button>
            </form>
          </div>
        </div>
      )
  
}
