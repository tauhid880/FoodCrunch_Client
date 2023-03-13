import React from 'react';
import {  FaKey, FaMailBulk } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from './SocialLogin';
import { jwtToken } from '../JWTToken/JWTToken';
import useTitle from '../Hook/useTitle';
import { useEffect } from 'react';

const Login = () => {
    const {
        userSignIn,
        setLoading
    } = useContext(AuthContext)
    useTitle('Login')
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
   
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const {email,password} = formData
    
    // get input value
    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        setFormData({...formData,[name]:value})
    }
  
    const navigation =()=>{
        navigate(from,{replace:true});
    }

    // user login
    const userSignInHandle=(event)=>{
        event.preventDefault()
        const form = event.target
        if(email && password){
            userSignIn(email,password)
            .then(result=>{
                jwtToken(email,navigation)
                toast.success("Login successfull",{autoClose:1000})
                form.reset()
            })
            .catch(error=>{
              setLoading(false)
              toast.error(error.message,{autoClose:1000})
            }
          )
        }
    }

    return (
      <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWF0aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col-reverse items-center justify-start lg:flex-row ">
            <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
              <div className="bg-[#E32D6F] rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login
                </h3>
                <form onSubmit={userSignInHandle}>
                  <div className="mb-1 sm:mb-2">
                    <div className='relative  mb-3'>
                        <FaMailBulk  className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                        <input
                        onBlur={handleInputData}
                        placeholder="email"
                        required
                        type="email"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="email"
                        name="email"
                        />
                    </div>
                    <div className='relative mb-3'>
                        <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                        <input
                        onBlur={handleInputData}
                        placeholder="password"
                        required
                        type="password"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="password"
                        name="password"
                        />
                    </div>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full py-3 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black hover:bg-gray-700 "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div>
                <h3 className='text-center font-semibold text-xl py-2'>Or</h3>
                   <SocialLogin></SocialLogin>
                  <p className="text-xs text-[#2b2b2b] sm:text-sm mt-5">
                    Create an account? <Link to="/register" className='font-semibold'> Register Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;