import React from 'react'
import Button from "../components/Button";
const Home = () => {
  return (
    <div className='heroSection flex flex-col justify-center items-center h-screen'>
        <h1 className='text-5xl font-bold text-center'>Welcome to Mimi's Store</h1>
        <p className='text-2xl'>Open only for Bubu</p>
        <Button name="Shop All" navigate="allProducts"/>
    </div>
  )
}

export default Home