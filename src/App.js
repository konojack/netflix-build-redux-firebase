import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="test" element={<p>DZIALA</p>} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
