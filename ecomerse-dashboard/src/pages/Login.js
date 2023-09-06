import React, {useEffect, useState} from 'react'; 
import API from "../common/apis"; 
import {useNavigate} from 'react-router-dom';

// const API = require("../common/apis")


const StorageUtils = require("../utils/storage_utils");

const Login = () => {


  const [data, setData] = useState({
    email: "", 
    password: ""
  });
  
  const navigate = useNavigate();
  let token = localStorage.getItem("access_token"); 

  const handleChange = (e) => {
    const {name, value} = e.target; 
    setData((preve)=>{
        return {
            ...preve,
            [name]: value
        }
    })
  };

  
  useEffect(()=>{
      if(token){
        navigate("/admin/dashboard")
      }
  },[]); 

  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      const {email, password} = data; 
      console.log(data)
      if(email && password){
        API.loginUser({
          email: email, 
          password: password
        }).then((response)=>{
          let accessToken = response.data.access_token
          if(response.status === 200){
            StorageUtils.setAPIToken(accessToken);
            navigate("/admin/dashboard", {replace: true})
          }
        })
      }
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <div className='flex flex-col bg-sky-100 min-h-full justify-center h-screen'>
    <div className='flex justify-center font-mono text-2xl pt-18'>
        <h2 className='text-xl font-bold mb-4 '>Sign In to your account!</h2>
    </div>
    {/* Form card */}
    <div className= 'flex flex-col justify-center'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm  bg-white px-10 shadow-2xl rounded-lg pb-10'>
            <form 
             onSubmit={(e)=>handleSubmit(e)}
            className='space-y-2 mt-4 flex flex-col '
            >
            
            <div>
              
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
            </div>
            <div className='mt-8'>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign In
            </button>
            </div>
            </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
                Do not have an account?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Signup
                </a>
            </p>
        </div>
    </div>
   
</div>
  )
}

export default Login