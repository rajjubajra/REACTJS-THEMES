import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full h-auto">    
    <BrowserRouter>
    <div className="z-50 absolute top-0 w-full">
        <Header />
    </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    <div>
        <Footer />
    </div>
    </BrowserRouter>
  </div>

  );
}

export default App;
