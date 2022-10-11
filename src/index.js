import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Inicio from './pages/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='/inicio' element={<Inicio />} />
    </Routes>
  </BrowserRouter>
);

