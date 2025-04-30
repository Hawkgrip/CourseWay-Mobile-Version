import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ViewNotePage = ({ route, navigation }) => {
  const { course, topic, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Created Note</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Course: {course}</Text>
        <Text style={styles.cardTitle}>Topic: {topic}</Text>
        <Text style={styles.cardDescription}>Description: {description}</Text>
      </View>

      {/* Button to navigate back to NewNotePage */}
      <Button 
        title="Add New Note" 
        onPress={() => navigation.navigate('NewNotePage')} 
        color="#007BFF" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 25,
    marginBottom: 20,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default ViewNotePage;
