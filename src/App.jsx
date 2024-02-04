import './App.css';
import * as React from 'react'
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Awards from './pages/Awards.jsx';
import Gallery from './pages/Gallery.jsx';
import Prices from './pages/Prices.jsx';
import Contact from './pages/Contact.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='appContainer'>
      < NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
