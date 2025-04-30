import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const CollaborativeEditingPage = ({ navigation }) => {
  const [noteContent, setNoteContent] = useState('');

  const handleChange = (text) => {
    setNoteContent(text); 
  };

  const handleSave = () => {
    console.log("Collaborative note saved:", noteContent);
    alert("Note saved!");

    navigation.navigate('UpdatedNotePage', {
      note: noteContent, 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Collaborative Editing</Text>
      <ScrollView>
        <Text style={styles.instruction}>Collaboratively edit the content below:</Text>
        <TextInput
          style={styles.textArea}
          value={noteContent}
          onChangeText={handleChange}
          multiline
          placeholder="Start typing your note here..."
        />
        <Button title="Save Note" onPress={handleSave} color="#007BFF" />
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
    fontSize: 25,
    marginBottom: 20,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 200,
    borderColor: '#007BFF',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default CollaborativeEditingPage;
