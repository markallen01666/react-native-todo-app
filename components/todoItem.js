// todoItem - single item display and functionality
// M Allen - 2019

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const todoItem = props => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#e6f2ff",
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "dotted"
  },
  itemText: {
    color: "#333",
    textAlign: "center"
  }
});

export default todoItem;
