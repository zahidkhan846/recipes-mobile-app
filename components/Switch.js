import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const Toggler = ({ title, value, onValueChange }) => {
  return (
    <View style={styles.toggleContainer}>
      <Text>{title}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default Toggler;

const styles = StyleSheet.create({
  toggleContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
});
