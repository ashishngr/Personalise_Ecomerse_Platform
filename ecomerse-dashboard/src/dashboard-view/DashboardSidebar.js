import React from 'react'
import {LuLayoutDashboard} from "react-icons/lu";
import {RiProductHuntFill} from 'react-icons/ri'; 
import {ImProfile} from 'react-icons/im'; 
import {FaSignInAlt} from 'react-icons/fa'; 
import {FaSignOutAlt} from 'react-icons/fa'; 

const DashboardSidebar = () => {
  return (
    <div className='fixed x-0 y-0 z-40 flex flex-col bg-gray-50 w-1/6 drop-shadow-sm min-h-screen '>
       {/* User Prifile and user name */}
      
       <div className='flex flex-col items-center'>
            <div className='mt-10'>
                <img className='inline-block h-28 w-28 rounded-full ring-white border-2 border-indigo-600' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='user-profile'/>
            </div>
            <div className='mt-2 font-mono text-base'>
                Ashish Nagar
            </div>
       </div>
        {/* Dashboard Options */}
        <div className='flex flex-col mt-24 font-mono text-xl overflow-y-auto '>  
            <ul className='space-y-2 font-medium'>
                <li className=''>
                    <a href='/' className='flex flex-row items-center pl-6 py-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                        <LuLayoutDashboard className=''/>
                       <pan className="ml-3 ">Dashboard</pan>
                    </a>
                    
                </li>
                <li>
                    <a href='/' className='flex flex-row items-center pl-6 py-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                        <RiProductHuntFill className=''/>
                        <pan className="ml-3 ">Product</pan>
                    </a>
                </li>
                <li>
                    <a href='/' className='flex flex-row items-center pl-6 py-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                        <ImProfile className=''/>
                        <pan className="ml-3 ">Profile</pan>
                    </a>
                </li>
                <li>
                </li>
                <li>
                    <a href='/' className='flex flex-row items-center pl-6 py-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                        <FaSignInAlt className=''/>
                        <pan className="ml-3 ">SignIn </pan>
                    </a>
                </li>
                <li>
                    <a href='/' className='flex flex-row items-center pl-6 py-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                        <FaSignOutAlt className=''/>
                        <pan className="ml-3 ">SignOut</pan>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DashboardSidebar