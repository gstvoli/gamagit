import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
//No React-Router-Dom v6, o Switch foi trocado pelo 'Routes', então é só alterar o import

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routs() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
}
