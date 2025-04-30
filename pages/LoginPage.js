import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if user is already logged in by checking if email and password exist in AsyncStorage
    const checkLogin = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');

        if (storedEmail && storedPassword) {
          // Auto-login if the user already has credentials saved
          Alert.alert('Welcome Back!', 'You are already logged in.');
          navigation.replace('HomePage');
        }
      } catch (error) {
        console.error('Error checking login status', error);
      }
    };

    checkLogin();
  }, [navigation]);

  const handleLogin = async () => {
    // Retrieve the stored credentials from AsyncStorage
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (storedEmail && storedPassword) {
        // Validate the entered email and password
        if (email === storedEmail && password === storedPassword) {
          Alert.alert('Login Successful', 'Welcome to CourseWay!');
          navigation.replace('HomePage'); // Navigate to HomePage on successful login
        } else {
          Alert.alert('Login Failed', 'Incorrect email or password');
        }
      } else {
        Alert.alert('Login Failed', 'No user found. Please sign up first.');
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 30, marginBottom: 20, color: '#007BFF' }}>Login to CourseWay</Text>

      <Text style={{ marginBottom: 5, color: '#007BFF' }}>Email</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingLeft: 10 }}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={{ marginBottom: 5, color: '#007BFF' }}>Password</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingLeft: 10 }}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} color="#007BFF" />

      {/* Link to SignUp Page */}
      <View style={{ marginTop: 20 }}>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('SignUpPage')}
          color="#28A745"
        />
      </View>
    </View>
  );
};

export default LoginPage;