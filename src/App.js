import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpellDetailPage from './pages/SpellDetailPage';
import './styles/App.scss';



    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/spell/:index" element={<SpellDetailPage />} />
           
          </Routes>
        </Router>
      );
    }
  


export default App;
