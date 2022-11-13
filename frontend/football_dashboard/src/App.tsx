import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Base from './components/base';
import About from './components/about';
import Teams from './components/teams';
import FourOFour from './components/404';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
