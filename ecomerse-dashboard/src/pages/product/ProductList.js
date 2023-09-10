import React from 'react'
import {useNavigate} from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate(); 

    const handleClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/product/add")
    }
  return (
        <div className='flex flex-col bg-slate-50'>
         <button className='bg-sky-500/100 w-28 h-8 text-sm text-gray-700 uppercase shadow-md sm:rounded-lg mt-36 ' 
         onClick={(e)=>handleClick(e)}>
            Add Product
        </button> 
         <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8'>
            <table className='w-full text-sm text-left text-gray-500 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th scope="col" class="px-6 py-3 w-44">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Sales
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Left Items
                        </th>
                        <th scope="col" class="px-6 py-3 w-44">
                            Available
                        </th>
                        <th scope="col" class="px-6 py-3 w-24">
                            Action
                        </th>
                    </tr>
                </thead>

            </table>
        
         </div>   
    </div>
  )
}

export default ProductList