// HomePage.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from '../components/AssetExample';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 5 }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>CourseWay</Text>
        <View style={styles.headerButtons}>
          {/* About Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('AboutPage')}
          >
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>

          {/* Services Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('ServicesPage')}
          >
            <Text style={styles.buttonText}>Services</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body Section */}
      <View style={styles.body}>
        {/* Image Placeholder */}
        <Image
          source={require('../assets/snack-icon.png')}  // Change this once you add the image to the assets folder
          style={styles.image}
        />
        <Text style={styles.welcomeText}>
          Welcome to CourseWay! Your one-stop solution for educational resources.
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>All rights Reserved by Akash</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#00aeff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  // Body Styles
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },

  // Footer Styles
  footer: {
    padding: 10,
    backgroundColor: '#00aeff',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HomePage;
