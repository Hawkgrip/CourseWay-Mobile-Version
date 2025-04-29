import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';  // Ensure AboutPage is correctly imported
import ServicesPage from './pages/ServicesPage'; // Ensure ServicesPage is correctly imported

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage">
        
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="ServicesPage" component={ServicesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
