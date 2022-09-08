import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
     <Link to='/' className='btn'> HomePage </Link>
     <Link to='products' className='btn'> Products </Link>
      <Link to='about-us' className='btn'> About Us </Link>      
      <Link to='contact' className='btn'> Contact </Link>
      <Link to='assddsdf' className='btn'> Error Page </Link>
    </>
  )
}

export default NavBar