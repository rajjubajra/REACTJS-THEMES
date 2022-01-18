import React from 'react'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="grid gap-2 grid-flow-col w-1/2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Get in touch</Link>
    </div>
  )
}

export default Header
