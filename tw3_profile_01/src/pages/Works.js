import { Link } from 'react-router-dom';

function Works() {
  return (
      <div className="static">
      <div className="absolute top-1/2 left-4">
        <Link to='/about'>About</Link>
      </div>
      <div className="absolute top-1/2 right-4">
        <Link to="/contact">Get in touch</Link>
      </div>


      
      Work
    </div>
  )
}

export default Works
