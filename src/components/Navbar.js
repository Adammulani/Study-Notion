import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import {toast} from 'react-hot-toast';

export const Navbar = (props) => {

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/"><img src={Logo} alt='Logo' width={160} height={32} loading='lazy'></img></Link>

        <nav >
            <ul className='text-white flex gap-6'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>

        {/* create buttons login, signup, logout, dashboard */}
        <div className='flex ml-3 mr-3 gap-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700px' >Login</button>
                </Link>
            }
              { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700px'>Sign UP</button>
                </Link>
            }
              {  isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700px' >Dashboard</button>
                </Link>
            }
              { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700px' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out successfully");
                    }}>Logout</button>
                </Link>
            }
        </div>
    </div>
  )
}
