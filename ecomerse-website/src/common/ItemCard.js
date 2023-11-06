import React from 'react'

const ItemCard = () => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow '>
        <a href='#'>
            <img className='p-8 rounded-t-lg' src='https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg' alt='product mage'/>
        </a>
        <div className='px-5 pb-5'>
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
        </div>
    </div>
  )
}

export default ItemCard