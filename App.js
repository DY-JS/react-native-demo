import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn HTML', id: 1 },
    { text: 'Learn CSS', id: 2 },
    { text: 'Learn JS', id: 3 },
    { text: 'Become a billionaire', id: 4 },
  ]);

  const addHandler = (text) => {
    setTodos((list) => [...list, { text: text, id: Math.random().toFixed(6) }]);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListItem element={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'android' ? 60 : 10,
    flex: 1,
    //width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // text: {
  //   width: '100%',
  //   textAlign: 'center',
  //   color: 'blue',
  // },
  // box: {
  //   paddingTop: Platform.OS === 'android' ? 50 : 10,
  //   backgroundColor: 'yellow',
  //   width: 250,
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   borderStyle: 'dotted',
  // position: 'absolute',
  // top: 35,
  // left: -150,
  //},
});
