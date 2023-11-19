import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row bg-gray-200 p-8 justify-between border-t-2 '>
        <div className=''>
           <h3 className='pb-4 hover:text-neutral-900'>Vision</h3>
           <text>Creativity, Expression, & Exploration</text>
        </div>
        <div className='flex flex-col space-y-4'>
            <h3 className='pb-4'>Pages</h3>
            <a href='#'>About Us</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Term and condition</a>
            <a href='#'>Privacy policy</a>
            <a href='#'>Refund/Cancellation/Shipping Policy</a>
            <a href='#'>FAQ</a>
        </div>
        <div className='flex flex-col space-y-4'>
            <h3 className='pb-4'>My Account</h3>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
            <a href='#'>Track Order</a>
        </div>
        <div className='flex flex-col space-y-4'>
            <h3 className='pb-4'>Follow us</h3> 
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
            <a href='#'>Facebook</a>
        </div>

    </div>
  )
}

export default Footer