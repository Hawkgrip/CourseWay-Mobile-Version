import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CourseWay</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Resources"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.headerButtons}>
          <Button
            title="A Levels"
            onPress={() => alert("A Levels Resources")}
            color="#007BFF"
          />
          <Button
            title="O Levels"
            onPress={() => alert("O Levels Resources")}
            color="#007BFF"
          />
          <Button
            title="About"
            onPress={() => navigation.navigate('AboutPage')}
            color="#007BFF"
          />
          <Button
            title="Services"
            onPress={() => navigation.navigate('ServicesPage')}
            color="#007BFF"
          />
        </View>
      </View>

      {/* Welcome Text Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to CourseWay</Text>
        <Text style={styles.welcomeSubtitle}>A portal to the study world, where you can find all the resources you need to succeed!</Text>
      </View>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Add New Note</Text>
          <Button title="Add Note" onPress={() => navigation.navigate('NewNotePage')} color="#007BFF" />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collaborative Editing</Text>
          <Button title="Start Collaborating" onPress={() => navigation.navigate('CollaborativeEditingPage')} color="#007BFF" />
        </View>
      </ScrollView>
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
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    width: '100%',
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  searchBar: {
    height: 40,
    width: '100%',
    borderColor: '#007BFF',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  headerButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  welcomeSection: {
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
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
    fontSize: 12,
    color: '#555',
    marginBottom: 15,
  },
});

export default HomePage;
