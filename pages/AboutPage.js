import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CourseWay</Text>
        <br></br>
      </View>
      <Text style={styles.title}>About CourseWay</Text>
      <Text style={styles.description}>
        CourseWay is a platform designed to provide educational resources to students. We aim to make learning more accessible and efficient.
      </Text>
      <Text style={styles.description}>
        CourseWay is an intuitive educational platform designed to provide students with easy access to a variety of study resources, including books, notes, and customizable courses. It offers secure sign-up and login features for personalized access, while allowing students to organize their learning materials, track progress, and collaborate in study groups. With an easy-to-use mobile-first interface, CourseWay enhances learning through interactive features like quizzes and progress tracking. Targeted at high school and university students, as well as lifelong learners, the app helps users learn efficiently, collaborate with peers, and stay motivated. By personalizing the learning experience, CourseWay aims to make education more accessible, organized, and engaging for all students.
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

export default AboutPage;