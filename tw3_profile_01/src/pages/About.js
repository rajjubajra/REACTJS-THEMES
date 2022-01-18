import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="static">
      <div className="absolute top-1/2 left-4">
        <Link to='/'>Home</Link>
      </div>
      <div className="absolute top-1/2 right-4">
        <Link to="/works">Works</Link>
      </div>


      
      About Page
    </div>
  )
}

export default About
