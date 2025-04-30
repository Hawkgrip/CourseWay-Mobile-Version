import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UpdatedNotePage = ({ route }) => {
  const { note } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Updated Note</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Note Content:</Text>
        <Text style={styles.cardDescription}>{note}</Text>
      </View>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default UpdatedNotePage;