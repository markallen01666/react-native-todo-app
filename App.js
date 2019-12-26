// Simple React Native Mobile ToDo app - my first proper RN app
// Mark Allen - 2019

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from "react-native";

import TodoAdd from './components/todoAdd';
import TodoItem from './components/todoItem';
import ClearButton from './components/clearButton';


export default function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addItemHandler = itemTitle => {
    setTodoItems(currentItems => [
      ...currentItems,
      { id: new Date().getTime().toString(), value: itemTitle }
    ]);
  };
  const removeItemHandler = itemId => {
    setTodoItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  }
  const clearItemsHandler = () => {
    setTodoItems(currentItems => []);
  }

  return (
    <View style={styles.container}>
      <Text>To Do List</Text>
      <TodoAdd onAddItem={addItemHandler} />
      <ClearButton onClearItems={clearItemsHandler} />
      <FlatList
        data={todoItems}
        renderItem={itemData => <TodoItem id={itemData.item.id} title={itemData.item.value} onDelete={removeItemHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
