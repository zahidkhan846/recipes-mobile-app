import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const List = ({ item, iconName }) => {
  return (
    <View style={{ ...styles.steps, ...styles.marginTop }}>
      <Ionicons name={iconName} />
      <Text style={styles.ml}>{item}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 5,
  },

  steps: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },

  ml: { marginLeft: 2 },
});
