import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
  };

  const handlePress = () => {
    addHandler(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChange}
        placeholder="Input Todo"
      />
      <Button title="Add Todo" color="green" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    marginHorizontal: '10%',
    width: '80%',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#000',
  },
});
