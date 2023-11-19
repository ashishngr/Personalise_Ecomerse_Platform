import React from 'react'
import Navbar from '../components/Navbar'; 
import HomepageCarousel from '../components/HomepageCarousel';
import HomeItemList from '../components/HomeItemList';
import Footer from '../components/Footer';

const MensData = [
  {
    itemName: "Watch", 
    image: "Watch - Image",
    price: "1000", 
    category: "Accessory", 
    description: "G-shock watch || round dial || black in color || quartz watch "
  },
  {
    itemName: "Pant", 
    image: "Pant - Image",
    price: "500", 
    category: "MensClothing", 
    description: "xyx - company || abc || color - abc || abc"
  }, 
  {
    itemName: "Shirt", 
    image: "shirt - Image",
    price: "500", 
    category: "MensClothing", 
    description: "xyx - company || abc || color - abc || abc"
  }, 
  {
    itemName: "Trowser", 
    image: "trowser - Image",
    price: "500", 
    category: "MensClothing", 
    description: "xyx - company || abc || color - abc || abc"
  }, 
  {
    itemName: "Kurta", 
    image: "Kurta - Image",
    price: "100", 
    category: "MensClothing", 
    description: "xyx - company || abc || color - abc || abc"
  }
]
const Homepage = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className='h-48 px-6 my-2'>
        <HomepageCarousel />
      </div>
     <div>
      <HomeItemList />
     </div>
     <div>
      <Footer />
     </div>
    </div>
  )
}

export default Homepage