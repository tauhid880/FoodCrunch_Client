import React from 'react';
import { FaCamera, FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from './SocialLogin';
import useTitle from '../Hook/useTitle';

const Register = () => {
    const {
        createUser,
        updateUserProfile,
        logOut,
        setLoading
    } = useContext(AuthContext)
    useTitle('Register')
    const navigate = useNavigate()
  
    const [formData,setFormData] = useState({
        userName:"",
        email:"",
        photoURL:"",
        password:""
    })
    const {userName,email,photoURL,password} = formData
    
    // get input value
    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        if(name === "password" && value.length<6){
            toast.error("Password should be at least 6 character",{autoClose:1500})
            return setFormData({...formData,[name]:""})
        }
        else{
            setFormData({...formData,[name]:value})
        }
    }

    // create user
    const createUserHandle=(event)=>{
        event.preventDefault()
        if(userName && email && password && photoURL){
            createUser(email,password)
            .then(result=>{
                updateProfileHandle()
                toast.success("Register successfull,please log in",{autoClose:1500})
                logOut()
                navigate('/login')
            })
            .catch(error=>{
              setLoading(false)
              toast.error(error.message,{autoClose:1500})
            })
        }
    }

    // update user profile
    const updateProfileHandle=()=>{
        const profile={
            displayName:userName,
            photoURL
        }
        updateUserProfile(profile)
        .then(result=>{})
        .catch(error=>toast.error(error.message,{autoClose:1500}))
    }


    return (
        <div className="relative">
      <img
        src="https://images.deliveryhero.io/image/foodpanda/home-vendor-bd.jpg?width=1400&height=896"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-70">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
              <div className="bg-[#E32D6F] rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Register
                </h3>
                <form onSubmit={createUserHandle}>
                  <div className="mb-1 sm:mb-2">
                    <div className='relative  mb-3'>
                        <FaUser className='absolute left-4 top-[30%] text-black '></FaUser>
                        <input
                        onBlur={handleInputData}
                        placeholder="Username"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="userName"
                        name="userName"
                        />
                    </div>
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
                        <FaCamera  className='absolute left-4 top-[30%] text-black '></FaCamera>
                        <input
                        onBlur={handleInputData}
                        placeholder="photoURL"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="photoURL"
                        name="photoURL"
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
                      className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div>
                <h3 className='text-center font-semibold text-xl py-2'>Or</h3>
                   <SocialLogin></SocialLogin>
                  <p className="text-xs text-[#2b2b2b] sm:text-sm mt-5">
                  Already have an account ? <Link to="/login" className='font-semibold'> Login</Link>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Register;