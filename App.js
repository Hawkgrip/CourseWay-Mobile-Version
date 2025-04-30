import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NewNotePage from './pages/NewNotePage';
import ViewNotePage from './pages/ViewNotePage';
import CollaborativeEditingPage from './pages/CollaboratingEditingPage';
import UpdatedNotePage from './pages/UpdatedNotePage';  

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
        <Stack.Screen name="NewNotePage" component={NewNotePage} />
        <Stack.Screen name="ViewNotePage" component={ViewNotePage} />
        <Stack.Screen name="CollaborativeEditingPage" component={CollaborativeEditingPage} />
        <Stack.Screen name="UpdatedNotePage" component={UpdatedNotePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}