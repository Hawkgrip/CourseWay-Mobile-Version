// ServicesPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.description}>
        We offer a variety of educational resources, including textbooks, video tutorials, quizzes, and study groups.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default ServicesPage;
