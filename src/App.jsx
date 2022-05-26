import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
};
