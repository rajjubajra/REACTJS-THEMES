import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import data from '../data/nav.json';


function Header() {

  console.log(data);

  useEffect(()=>{

    gsap.from('.header',{duration: 1, y: '-100%'}); 

    gsap.from('.link', {duration: 1, opacity: 0, delay: 1, stagger: 0.5});

  },[])

  return (
    <div className="header bg-white/30 py-4 flex font-light justify-center tracking-wide uppercase text-gray-700">
      <Link className="link mx-2" to="/">Home</Link>
      <Link className="link mx-2" to="/about">About</Link>
      <Link className="link mx-2" to="/works">Works</Link>
      <Link className="link mx-2" to="/contact">Get in touch</Link>
    </div>
  )
}

export default Header