import { Link } from 'react-router-dom';
import ClayFigures from '../images/clay-figures.jpg';

function Contact() {
  return (
      <div className="static">

      <img src={ClayFigures} alt="pottery" className="z-0 fixed top-0 grayscale" />
        <div className="arrow-wrapper">
            <div className="left-right-nav-arrow left-4">
              <Link to='/works'>Works</Link>
            </div>
            <div className="left-right-nav-arrow right-4">
              <Link to="/">Home</Link>
            </div>
            <div className="pagetitle">
              <h1>Contact...</h1>
            </div>
        </div>


      
      <div className="text-wrapper text-center">
        <h1>Get In Touch</h1>
        <ul className="text-2xl pt-40 font-light tracking-wider">
          <li>2090 Name Street</li>
          <li>Noname Road</li>
          <li>Cityname</li>
          <li>State</li>
        </ul>

        <ul className="mt-40 tracking-wider">
          <li>00 977 9818 971394 </li>
          <li>getintouch@myemail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
