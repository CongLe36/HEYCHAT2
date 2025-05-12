import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet, Text } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch previous messages from the server
    fetch('http://localhost:5000/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data));

    // Listen for real-time messages
    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { sender: 'User', content: input, timestamp: new Date() };
      socket.emit('sendMessage', newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={styles.message}>
            <Text style={styles.sender}>{item.sender}:</Text> {item.content}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  message: {
    marginBottom: 10,
    fontSize: 16,
  },
  sender: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});
