import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (email && password) {
      // Save the data to AsyncStorage
      try {
        await AsyncStorage.setItem('userEmail', email); // Store email
        await AsyncStorage.setItem('userPassword', password); // Store password

        Alert.alert('Sign Up Successful', 'You have successfully signed up!');
        navigation.replace('LoginPage'); // Navigate back to LoginPage
      } catch (error) {
        console.error('Error saving data to AsyncStorage', error);
        Alert.alert('Error', 'Something went wrong during sign up');
      }
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