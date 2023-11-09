import React, { useEffect } from "react";
import {BsArrowRight} from "react-icons/bs";

const ItemCard = ({categoryName, itemName, category, price, description, loading, image}) => {
  useEffect(()=>{
     
  })
 
  return ( 
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow '>
    {
      
      image ? <> 
         
              <a href='#'>
                  <img className='p-8 rounded-t-lg' src='https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg' alt='product mage'/>
              </a>
              <div className='px-5 pb-5'>
              <a href="#">
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900">{description}</h5>
              </a>
              <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900">${price}</span>
                  <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
              </div>
              </div>
      </> : 
      <div className='min-h-[150px] flex justify-center items-center'>
                <p>{loading}</p>
      </div>
      
    }
    </div>
      
  )
}

export default ItemCard