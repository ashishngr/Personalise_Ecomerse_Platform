import React from 'react'; 
import {BsArrowRight} from "react-icons/bs";
import ItemCard from '../common/ItemCard';

const ItemsSection = ({categoryName, data}) => {
  return (
    <div className=''>
        {/* Section Header */}
        <div className='flex flex-row items-center justify-between decoration-slate-950 font-sans text-2xl bg-gray-400 rounded-xl m-4 p-5'>
            <span>
                 {categoryName}
            </span>
           <BsArrowRight size={30}/>
        </div>
        {/* Section List */}
        <ItemCard />
       
    </div>
  )
}
export default ItemsSection