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
    <form onSubmit={submitHandler}>
        <label>
            <p>Email <sup>*</sup></p>
            <input
             type='email'
             required
             value={formData.email}
              onChange={changeHandler}
              placeholder='Enter email id'
              name='email'
            ></input>
        </label>

        <label>
            <p>Password <sup>*</sup></p>
            <input
             type={showPassword?"text":"password"}
             required
             value={formData.password}
              onChange={changeHandler}
              placeholder='Enter password'
              name='password'
            ></input>

            <span onClick={()=>setShowPassword((prev)=> !prev)}>
                {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
            </span>

            <Link to="#"><p>Forgot password</p></Link>
        </label>

        <button>
            Sign in
        </button>
    </form>
  )
}
