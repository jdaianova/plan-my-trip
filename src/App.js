import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <nav className="Top-navbar">
        <div className='Top-navbar-container'>
          <Link className='Link' to="">Home</Link>
          <Link className='Link' exact to="/about">About us</Link>
          <Link className='Link' exact to="/contacts">contacts</Link>
        </div>
      </nav>

      <Routes>
        <Route path='' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contacts' exact element={<Contacts />} />
      </Routes>

    </Router>
  )
}

export default App;
