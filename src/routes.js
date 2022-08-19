import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
//No React-Router-Dom v6, o Switch foi trocado pelo 'Routes', então é só alterar o import

import Repositories from './Repositories';
import Home from './Home';

export default function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/repositories" element={Repositories} />
      </Routes>
    </Router>
  );
}
