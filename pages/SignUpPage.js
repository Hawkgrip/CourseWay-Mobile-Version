// SignUpPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (email && password) {
      Alert.alert('Sign Up Successful', 'You have successfully signed up!');
      // Navigate to LoginPage after successful sign-up
      navigation.replace('LoginPage');
    } else {
      Alert.alert('Sign Up Failed', 'Please fill in all fields');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 5, color: '#007BFF' }}>Email</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={{ marginBottom: 5, color: '#007BFF' }}>Password</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button title="Sign Up" onPress={handleSignUp} color="#007BFF" />
    </View>
  );
};

export default SignUpPage;
