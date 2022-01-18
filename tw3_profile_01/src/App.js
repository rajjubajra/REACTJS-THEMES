import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Layout>
          
      <div>Profile Website test</div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    
    </Layout>
    </BrowserRouter>
  );
}

export default App;
