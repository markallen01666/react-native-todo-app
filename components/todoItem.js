// todoItem - single item display and functionality
// M Allen - 2019

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const todoItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>
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
    backgroundColor: "#eee",
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "dotted"
  }
});

export default todoItem;
