import React, {useState, useEffect} from 'react'; 
import {BsArrowRight} from "react-icons/bs";
import ItemCard from '../common/ItemCard';
import {GrNext} from 'react-icons/gr'; 
import {GrPrevious} from 'react-icons/gr'; 




const ItemsSection = ({categoryName, data}) => { 

  return (
    <div className='p-5 cursor-pointer'>
        {/* Section Header */}
        <div className='flex flex-row items-center justify-between decoration-slate-950 font-sans text-2xl bg-gray-400 rounded-xl mb-5 p-3'>
            <span>
                 {categoryName}
            </span>
           <BsArrowRight size={30} />
        </div>
        {/* Section List */} 
        
        <ItemCard />
       
    </div>
  )
}
export default ItemsSection