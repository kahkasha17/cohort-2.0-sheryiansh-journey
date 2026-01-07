import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar'>
        <div className="navlogo"><h1>Horizon Courts</h1></div>
        <div className="navlinks">
            <h4><a href="#">About Us</a></h4>
            <h4><a href="#">Services</a></h4>
            <h4><a href="#">Coaches</a></h4>
            <h4><a href="#">Events</a></h4>
            <h4><a href="#">Contacts</a></h4>
        </div>
        <div className="navCTA"><button>Book now <i class="ri-arrow-right-up-line"></i></button></div>
    </div>
  )
}

export default Navbar