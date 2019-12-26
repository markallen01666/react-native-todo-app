// todoAdd - Add new todo items 
// M Allen 2019

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const todoAdd = props => {
  const [enteredItem, setEnteredItem] = useState("");

  const todoFieldHandler = enteredText => {
    setEnteredItem(enteredText);
  };

  const todoAddHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        width="80%"
        placeholder="Enter item"
        style={styles.input}
        onChangeText={todoFieldHandler}
        value={enteredItem}
      />
        <View>
          <Button title="ADD" onPress={todoAddHandler} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 40
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default todoAdd;
