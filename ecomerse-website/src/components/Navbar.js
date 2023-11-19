'use client';
import React from 'react'; 
import { Avatar, Dropdown } from 'flowbite-react';



const Navbar = () => {
  return (
    
<nav className="flex flex-row border-b-4 justify-between p-5">
     <div className='flex-none '>
        {/* <img 
        src='https://cdn4.vectorstock.com/i/1000x1000/37/28/bag-e-commerce-logo-vector-30103728.jpg'
        alt='logo image'
        className=''/> */}
        <span className='font-mono text-3xl subpixel-antialiased italic font-semibold text-center text-slate-200'>Eassy Shopping</span>
     </div>
     <div className='flex flex-row space-x-16 font-mono text-2xl leading-8'>
        <div className='cursor-pointer hover:text-4xl'>
            <Dropdown dismissOnClick={true} renderTrigger={() => <span>Men</span>} >
                <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Men's Top Wear</Dropdown.Item>
                <Dropdown.Item>Men's Bottom Wear</Dropdown.Item>
                <Dropdown.Item>Ecthnic Wear</Dropdown.Item>
                <Dropdown.Item>Men's Footwear</Dropdown.Item>
                <Dropdown.Item>Watches</Dropdown.Item>
                <Dropdown.Item>Bags and Luggage Bag</Dropdown.Item>
                <Dropdown.Item>Accessories and other</Dropdown.Item>
            </Dropdown>
        </div>
        <div className='cursor-pointer  hover:text-4xl'>
            <Dropdown dismissOnClick={true} renderTrigger={() => <span>Women</span>}>
                <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Women's Top Wear</Dropdown.Item>
                <Dropdown.Item>Women's Bottom Wear</Dropdown.Item>
                <Dropdown.Item>Weatern</Dropdown.Item>
                <Dropdown.Item>Ethnic</Dropdown.Item>
                <Dropdown.Item>Bags And Hand Bags</Dropdown.Item>
                <Dropdown.Item>Accessories and other</Dropdown.Item>
            </Dropdown>
        </div>
        <div className='cursor-pointer  hover:text-4xl'>
            <Dropdown dismissOnClick={true} renderTrigger={() => <span>Kids</span>}>
            <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Kid's Top Wear</Dropdown.Item>
                <Dropdown.Item>Kids's Bottom Wear</Dropdown.Item>
                <Dropdown.Item>Ecthnic Wear</Dropdown.Item>
                <Dropdown.Item>Kids Footwear</Dropdown.Item>
                <Dropdown.Item>Accessories and other</Dropdown.Item>   
            </Dropdown>
        </div>
        <div className='cursor-pointer  hover:text-4xl'>
            <Dropdown dismissOnClick={true} renderTrigger={() => <span>Other</span>} className='cursor-pointer'>
                <Dropdown.Item>Home & Furniture</Dropdown.Item>
                <Dropdown.Item>Appliences</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Mobiles</Dropdown.Item>
            </Dropdown>
        </div>
     </div>
     <div className=''>
        <Dropdown 
            arrowIcon={false}
            inline
            label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }  
        >
            <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>WishList</Dropdown.Item>
            <Dropdown.Item>Cart</Dropdown.Item>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign in</Dropdown.Item>

        </Dropdown>
     </div>
</nav>

  )
}

export default Navbar