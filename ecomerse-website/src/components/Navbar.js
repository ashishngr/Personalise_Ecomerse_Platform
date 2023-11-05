import React from 'react'

const Navbar = () => {
  return (
    
<nav className="bg-gray-400 border-gray-200 ">
        <div className='max-w-screen flex flex-wrap items-center justify-between p-1 '>
            <a href='http://localhost:3000/easy-shoping/home' className='flex items-center' alt="Eassy Shoping Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Eassy Shoping</span>
            </a>
            <div className='items-center justify-between ' id='ecomerse-navbar'>
                <ul className='flex flex-row items-center justify-between '>
                    <li className=''>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded " aria-current="page">Home</a>
                    </li>
                    <li className=''>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700  rounded " aria-current="page">About</a>
                    </li>
                    <li className=''>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded " aria-current="page">Services</a>
                    </li>
                    <li className=''>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700  rounded " aria-current="page">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <button className='bg-gray-600 h-full w-full rounded-full'>
                <img class="w-8 h-8 rounded-full" src="https://www.flaticon.com/free-icons/user" alt="user photo" />
                </button>
            </div>
        </div>
</nav>

  )
}

export default Navbar