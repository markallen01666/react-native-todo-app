// Simple React Native Mobile ToDo app - my first proper RN app
// Mark Allen - 2019

import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import TodoAdd from "./components/todoAdd";
import TodoItem from "./components/todoItem";
import ClearButton from "./components/clearButton";

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
      return currentItems.filter(item => item.id !== itemId);
    });
  };
  const clearItemsHandler = () => {
    setTodoItems(currentItems => []);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>To Do List</Text>
      <Text style={styles.instructions}>(long press on item to delete)</Text>
      <TodoAdd onAddItem={addItemHandler} />
      <View style={styles.itemlist}>
        <FlatList
          data={todoItems}
          renderItem={itemData => (
            <TodoItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
            />
          )}
        />
      </View>
      <ClearButton onClearItems={clearItemsHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  itemlist: {
    marginVertical: 20
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#0066cc"
  },
  instructions: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#777"
  }
});
