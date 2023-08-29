import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col bg-sky-100 min-h-full justify-center h-screen'>
        <div className='flex justify-center font-mono text-2xl pt-18'>
            <h2 className='text-xl font-bold mb-4 '>Register your account!</h2>
        </div>
        {/* Form card */}
        <div className= 'flex flex-col justify-center'>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm  bg-white px-10 shadow-2xl rounded-lg pb-10'>
                <form className='space-y-2 mt-4 flex flex-col '>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                    </label>
                    <div className="">
                        <input
                        id="firstName"
                        name="First Name"
                        type="text"
                        autoComplete="firstName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Last Name
                    </label>
                    <div className="">
                        <input
                        id="lastName"
                        name="Last Name"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="">
                        <input
                        id="password"
                        name="password"
                        type="text"
                        autoComplete="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                    </label>
                    <div className="mt-2">
                        <input
                        id="passwprd"
                        name="Password"
                        type="text"
                        autoComplete="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
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