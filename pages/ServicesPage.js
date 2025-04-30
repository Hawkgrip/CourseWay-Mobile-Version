import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CourseWay</Text>
      </View>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.description}>
        We offer a variety of educational resources, including textbooks, video tutorials, quizzes, and study groups.
      </Text>
      <Text style={styles.description}>
        CourseWay is an educational platform designed to provide students with interactive and engaging learning resources. We offer textbooks, video tutorials, quizzes, and study groups to ensure students have everything they need for effective learning.
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
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
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
