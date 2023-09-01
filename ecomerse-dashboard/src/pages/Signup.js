import React,{useState, useEffect} from 'react'; 
import axios from "axios";
import {useLocation, Navigate} from 'react-router-dom';
import {BiShow, BiHide} from 'react-icons/bi'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "", 
        last_name: "", 
        email: "", 
        password: ""
    })

    const handleShowPassword =()  =>{
        setShowPassword(preve => !preve)
    }

    const handleShowConfirmPassword = () =>{
        setShowConfirmPassword(preve => !preve)
    }

   const handleChange = (e) => {
    const {name, value} = e.target; 
    setFormData((preve)=>{
        return {
            ...preve, 
            [name]: value
        }
    })
   }



   const handleSubmit = async(e) => {
   
   }



   

  return (
    <div className='flex flex-col bg-sky-100 min-h-full justify-center h-screen'>
        <div className='flex justify-center font-mono text-2xl pt-18'>
            <h2 className='text-xl font-bold mb-4 '>Register your account!</h2>
        </div>
        {/* Form card */}
        <div className= 'flex flex-col justify-center'>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm  bg-white px-10 shadow-2xl rounded-lg pb-10'>
                <form 
                 onSubmit={(e)=>handleSubmit(e)}
                className='space-y-2 mt-4 flex flex-col '
                >
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                    </label>
                    <div className="">
                        <input
                        id="first_name"
                        name="First Name"
                        type="text"
                        autoComplete="firstName"
                       
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last Name
                    </label>
                    <div className="">
                        <input
                        id="lastName"
                        name="Last_name"
                        type="text"
                        autoComplete="lastName"
                        required
                        
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        email
                    </label>
                    <div className="">
                        <input
                        id="email"
                        name="Last Name"
                        type="text"
                        autoComplete="email"
                        required
                       
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="flex px-2 py-1 bg-white rounded mb-2">
                        <input
                        id="password"
                        name="password"
                        type="text"
                        autoComplete="password"
                        required
                       
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                        />
                        <span className='flex text-4xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ? <BiShow/> : <BiHide />}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                    </label>
                    <div className="flex px-2 py-1 bg-white rounded mb-2 ">
                        <input
                        id="passwprd"
                        name="Password"
                        type="text"
                        autoComplete="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                        />
                        <span
                        className="flex text-4xl cursor-pointer"
                        onClick={handleShowConfirmPassword}
                        >
                        {showConfirmPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>
                </div>
                <div className='mt-8'>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </button>
                </div>
                </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        login
                    </a>
                </p>
            </div>
        </div>
       
    </div>
   
  )
}

export default Signup