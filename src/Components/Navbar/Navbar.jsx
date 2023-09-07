import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex items-center justify-around mb-10 p-6'>
                <li>Logo</li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/home">Home</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/about">About</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/contact">Contact</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/cart">Cart</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/products">Products</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/login">Login</a></li>
                <li className='hover:text-white text-xl transition-colors duration-200 cursor-pointer'><a href="/singup">Sign Up</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
