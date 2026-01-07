import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center px-2 py-4'>
      
      <div className="nav-left px-4">
        <h1 className="text-2xl font-bold">DVSY</h1>
      </div>

      <div className="hidden nav-right uppercase md:flex gap-6 items-center px-4 ">
        <h3 className='border-transparent rounded px-2 py-2 bg-[#1E1E1E] font-light'><a href="#">Designers</a></h3>
        <h3 className='border-transparent rounded px-2 py-2 bg-[#1E1E1E] font-light'><a href="#">Collabs</a></h3>
        <h3 className='border-transparent rounded px-2 py-2 bg-[#1E1E1E] font-light'><a href="#">Events</a></h3>
        <h3 className='border-transparent rounded px-2 py-2 bg-[#1E1E1E] font-light'><a href="#">Blog</a></h3>
        <h3 className='border-transparent rounded px-2 py-2 bg-[#1E1E1E] font-light'><a href="#">Cart</a></h3>

        <button className='uppercase px-2 py-2 border-transparent rounded  text-black bg-red-700 '>
          Get in touch
        </button>
      </div>

    </div>
  )
}

export default Navbar
