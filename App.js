// App.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Splash');  // Track current page

  useEffect(() => {
    // Timeout to switch from SplashPage to HomePage after 3 seconds
    setTimeout(() => {
      setCurrentPage('Home');
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 'Splash' ? (
        <SplashPage />
      ) : (
        <HomePage />
      )}
    </View>
  );
}