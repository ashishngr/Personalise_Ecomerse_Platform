import React,{useState, useEffect} from 'react'; 
import axios from "axios";
import {useLocation, Navigate} from 'react-router-dom';
import {BiShow, BiHide} from 'react-icons/bi'
import validateEmail from "../utils/validate_email";
import validatePassword from "../utils/validate_password"; 
import {useNavigate} from 'react-router-dom';

const CONSTANTS = require("../common/constant");


const Signup = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        first_name: "", 
        last_name: "", 
        email: "", 
        password: ""
    }); 

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
        })
    };

    console.log("--", CONSTANTS.API_BASE_URL)

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        try {
            const {first_name, last_name , email, password} = data;
            if(first_name && last_name && email && password){
                console.log("email", email)
                console.log("password", password)

                if(!validateEmail(email) && !validatePassword(password)){
                    alert("Please enter a valid email or password");
                }else{
                        const response = await axios.post(`http://localhost:8080/api/v1/signup`, data);
                        if(response.status === 200){
                            setData({
                                first_name: "", 
                                last_name: "", 
                                email: "", 
                                password: ""
                            })
                            navigate("/login"); 
                        }
                }
            }
        } catch (error) {
            console.log(error);
        }
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
                        name="first_name"
                        type="text"
                        required
                        value={data.first_name}
                        onChange={handleChange}

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        name="last_name"
                        type="text"
                        required
                        value={data.last_name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        email
                    </label>
                    <div className="">
                        <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        value={data.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </div>
                <div>  
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="flex px-2 py-1 bg-white rounded mb-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        value={data.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Password must conatin at least one uppercase, lowecase, one numbaer and one special character.</p>
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