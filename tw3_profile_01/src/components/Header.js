import React from 'react'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="flex font-light justify-center mr-2">
      <Link className="m-1" to="/">Home</Link>
      <Link className="m-1" to="/about">About</Link>
      <Link className="m-1" to="/works">Works</Link>
      <Link className="m-1" to="/contact">Get in touch</Link>
    </div>
  )
}

export default Header
