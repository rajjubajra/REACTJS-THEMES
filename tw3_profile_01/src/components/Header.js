import React from 'react'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="flex font-light justify-center  mt-4 tracking-wide uppercase">
      <Link className="mx-2" to="/">Home</Link>
      <Link className="mx-2" to="/about">About</Link>
      <Link className="mx-2" to="/works">Works</Link>
      <Link className="mx-2" to="/contact">Get in touch</Link>
    </div>
  )
}

export default Header
