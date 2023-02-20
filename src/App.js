import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Layout from './Layout';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="test" element={<p>DZIALA</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
