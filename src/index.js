import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';  // Capitalized
import Fail from './component/Fail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Dashboard" element={<Dashboard />} /> {/* Capitalized */}
      <Route path="/fail" element={<Fail />} />
    </Routes>
  </BrowserRouter>
);
