// clearButton - Clear all todo items
// M Allen - 2019

import React from "react";
import { View, StyleSheet, Button } from "react-native";

const ClearButton = props => {
  return (
    <View style={styles.clearButton}>
      <Button color="#ff0000" title="CLEAR" onPress={props.onClearItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 5,
    marginBottom: 20
  }
});

export default ClearButton;
