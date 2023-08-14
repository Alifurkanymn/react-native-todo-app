import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleToDo = () => {
    setToDoArray([...toDoArray, inputText]); // Önceki durumu değiştirmek yerine yeni bir diziyi güncelliyoruz
    setInputText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY TODO APP</Text>
      <TextInput
        placeholder='TODO'
        style={styles.inputs}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Pressable
        onPress={handleToDo}
        style={styles.primaryButton}
      >
        <Text style={styles.primaryButtonText}>Add Todo</Text>
      </Pressable>
      <Text style={toDoArray ? styles.block : styles.none}>Todos</Text>
        {toDoArray.map((item, index) => (
          <View key={index}>
            <TouchableHighlight
            style={styles.todoItem}>
              <Text style={styles.todoItemText}>{item}</Text>
            </TouchableHighlight>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem:{
    width: 200,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  todoItemText:{
    color: 'white',
    textAlign: 'center',
  },
  none:{
    display:'none',
  },
  block:{
    display:'flex',
    fontSize: 25,
    color: 'blue',
    width: 200,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    textAlign:'center',
    marginTop: 35,
  },
  inputs:{
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 16,
    paddingHorizontal: 20,
    width: 200,
    height: 50,
  },
  title:{
    color: 'red',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#bcf4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 20,
    width: 200,
    height: 50,
    marginTop: 20,
  },
  primaryButtonText:{
    color:'white',
  }
});
