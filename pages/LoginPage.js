import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For now, using hardcoded credentials for login.
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Login Successful', 'Welcome to CourseWay!');
      // Navigate to HomePage or any other page after successful login
      navigation.replace('HomePage');
    } else {
      Alert.alert('Login Failed', 'Incorrect email or password');
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
