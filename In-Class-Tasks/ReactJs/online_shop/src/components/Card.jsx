import React from 'react'
import Button from './Button'

const Card = ({ product }) => {

  return (
    <div className='h-60 border p-2 rounded-lg shadow-sm'>

      <div className='h-[50%] w-full'>
        <img 
          src={product.image}
          alt={product.title}
          className='w-full h-full object-contain'
        />
      </div>

      <h2 className='mt-2 font-semibold text-center line-clamp-2'>
        {product.title}
      </h2>

      <div className='flex justify-center'>
        <Button
          name="Buy Now"
          navigate={`/allProducts/productdetails/${product.id}`}
        />
      </div>

    </div>
  )
}

export default Card