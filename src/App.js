import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  //return Main();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/side" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
