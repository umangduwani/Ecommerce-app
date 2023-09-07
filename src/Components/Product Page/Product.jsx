import React from 'react'
import Navbar from '../Navbar/Navbar'

const Product = () => {
  return (
    <div className='w-full bg-blue-300'>
      <Navbar/>
      <h1 className='text-center mb-10 text-5xl'>Products</h1>
      <p className='text-center text-2xl'>These are the available range of products with their prices.</p>
      <div class="flex flex-row items-center justify-center p-10 mt-10 gap-10">
  <div class="text-white cursor-pointer bg-gray-200 hover:bg-gray-700 rounded">
    <img src="./images/shoes1.jpg" alt="Nike" />
    <div className='flex p-5 gap-5'>
    <p className='text-black'>Nike Running Shoes</p>
    <p className='text-black'>Price : 1900</p> 
    <p className='line-through text-black'>3000</p>
    <a href="/nike" className='text-black'>Check it out</a>
    </div>
  </div>
  <div class="text-white cursor-pointer bg-gray-200 hover:bg-gray-700 rounded">
    <img src="./images/shoes2.jpg" alt="Puma" />
    <div className='flex p-5 gap-5'>
    <p className='text-black'>Puma Sneakers</p>
    <p className='text-black'>Price : 1500</p> 
    <p className='line-through text-black'>3500</p>
    <a href="/puma" className='text-black'>Check it out</a>
    </div>
    </div>
  <div class="text-white cursor-pointer bg-gray-200 hover:bg-gray-700 rounded">
    <img src="./images/shoes3.jpg" alt="US Polo" />
    <div className='flex p-5 gap-5'>
    <p className='text-black'>US Polo Shoes</p>
    <p className='text-black'>Price : 2200</p> 
    <p className='line-through text-black'>3900</p>
    <a href="/uspolo" className='text-black'>Check it out</a>
    </div>
    </div>
  <div class="text-white cursor-pointer bg-gray-200 hover:bg-gray-700 rounded">
    <img src="./images/shoes4.jpg" alt="Adidas" />
    <div className='flex p-5 gap-5'>
    <p className='text-black'>Adidas Shoes</p>
    <p className='text-black'>Price : 2500</p> 
    <p className='line-through text-black'>4000</p>
    <a href="/adidas" className='text-black'>Check it out</a>
    </div>
    </div>
</div>
<br /><br /><br /><br /><br />
    </div>
  )
}

export default Product
