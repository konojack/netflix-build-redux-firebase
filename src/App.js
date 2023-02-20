import React, { useEffect } from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('AUTH!', user);
      } else {
        console.log('WYLOGOWANO');
      }
    });

    return unsubscribe;
  }, []);
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
