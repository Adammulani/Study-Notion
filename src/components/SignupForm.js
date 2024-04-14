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
    
            <form onSubmit={submitHandler}>
    
              {/*first name and last name */}
              <div>
              <lable> 
                <p>First Name <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='firstname'
                  placeholder='Enter first name'
                  onChange={changeHandler}
                  value={formData.firstname}
                >
                  
                </input>
              </lable>
    
              <lable> 
                <p>Last Name <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='lastname'
                  placeholder='Enter last name'
                  onChange={changeHandler}
                  value={formData.lastname}
                >
                  
                </input>
              </lable>
              </div>
    
                {/*email */}
              <div>
              <lable> 
                <p>Email Address <sup>*</sup></p>
                <input
                required
                  type='text'
                  name='email'
                  placeholder='Enter email address'
                  onChange={changeHandler}
                  value={formData.email}
                >
                  
                </input>
              </lable>
              </div>
    
               {/*create password and confirm password */}
               <div>
               <lable> 
                <p>Password <sup>*</sup></p>
                <input
                required
                  type={showPassword?"text":"password"}
                  name='password'
                  placeholder='Enter password'
                  onChange={changeHandler}
                  value={formData.password}
                >
                </input>
                <span onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </span>
              </lable>
    
              <lable> 
                <p>Confirm Password <sup>*</sup></p>
                <input
                required
                  type={showPassword?"text":"password"}
                  name='confirmPassword'
                  placeholder='Confirm password'
                  onChange={changeHandler}
                  value={formData.confirmPassword}
                >
                  
                </input>
                <span onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </span>
              </lable>
    
               </div>
    
              <div>
    
              </div>
    
                 <button>
                  Create Account
                 </button>
            </form>
          </div>
        </div>
      )
  
}
