import React from 'react'

const Puma = () => {
  return (
    <div className='flex justify-center mt-20 gap-5 items-center'>
      <button className='p-10 bg-blue-500 text-center text-white rounded-xl'>
        <a href="/success">Order Puma Shoes Now!</a>
      </button>
      <button className='p-10 bg-blue-500 text-center text-white rounded-xl'>
        <a href="/products">Cancel Order</a>
      </button>
    </div>
  )
}

export default Puma