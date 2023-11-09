import React, {useRef, useState, useEffect} from 'react'; 
import ItemCard from '../common/ItemCard';
import {BsArrowRight} from "react-icons/bs";
import {GrNext} from 'react-icons/gr'; 
import {GrPrevious} from 'react-icons/gr'; 

const data = [
    {
      id: "1",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      price: "100", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg"
    }, 
    {
      id: "2",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      price: "100"
    }, 
    {
      id: "3",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "4",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "5",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "6",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "7",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "8",
      gender: "Men", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "9",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    },
    {
      id: "10",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "11",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "12",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "13",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "15",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "16",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }, 
    {
      id: "17",
      gender: "Women", 
      category: "Clothing", 
      itemName: "Shirt", 
      description: "Black shirt made up of cotton fabric", 
      image: "https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg",
      price: "100"
    }
]




const ItemsSection = ({categoryName}) => { 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef();

  const productData = data?.filter(el => el.gender === "Men"); 
  const mensData = productData.slice(0,4);
  console.log("mens data", mensData); 
  // const mensData = productData.slice(0,4); 


  const loadingArrayFeature = new Array(10).fill(null)


  // const nextProduct = () => {
  //   console.log("---", slideProductRef.current)
  //   slideProductRef.current.scrollLeft += 200;
  // };
  // const preveProduct = () => {
  //   console.log("---", slideProductRef.current)

  //   slideProductRef.current.scrollLeft -= 200;
  // }; 
  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= mensData.length) {
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  const handlePreviousClick = () => {
    setSelectedIndex((prevIndex) => {
      const previousIndex = prevIndex - 1;
      if (previousIndex < 0) {
        return mensData.length - 1;
      } else {
        return previousIndex;
      }
    });
  };

 


  return (
    <div className='p-5 cursor-pointer'>
       <div className='flex w-full items-center'>
            <span className='font-bold text-2xl text-slate-800 mb-4'>
                 {categoryName}
            </span>
            <div className='ml-auto flex gap-4'>
              <button onClick={handlePreviousClick} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious /></button>
              <button onClick={handleNextClick} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext /></button>
            </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={carouselRef}>
        {mensData[0] ? mensData.map((el, index) => {
          return (
             <ItemCard 
             className={`carousel-item ${
              selectedIndex === index ? "active" : ""
            }`} 
                categoryNage={"Mens"} 
                key={el._id}
                id={el._id}
                itemName={el.itemName}
                category={el.category} 
                price={el.price}
                description={el.description}
                image={el.image}
             />
          ) 
          }) : 
          loadingArrayFeature.map((el, index) => 
              <ItemCard loading={"Loading...."} key={index}/>
            )
          }
        </div>
    </div>
  )
}
export default ItemsSection 