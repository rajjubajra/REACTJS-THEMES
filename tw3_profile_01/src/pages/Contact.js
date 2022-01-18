import { Link } from 'react-router-dom';

function Contact() {
  return (
      <div className="static">
      <div className="absolute top-1/2 left-4">
        <Link to='/works'>Works</Link>
      </div>
      <div className="absolute top-1/2 right-4">
        <Link to="/">Home</Link>
      </div>


      
      Get in touch
    </div>
  )
}

export default Contact
