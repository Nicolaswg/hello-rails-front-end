import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Greetings from './components/Greetings';
import './App.css';

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/greeting" element={<Greetings />} />
    </Routes>
  </div>
);

export default App;
